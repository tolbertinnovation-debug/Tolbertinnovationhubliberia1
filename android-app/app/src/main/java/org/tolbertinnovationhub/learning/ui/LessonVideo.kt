package org.tolbertinnovationhub.learning.ui

import android.graphics.Bitmap
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.OpenInNew
import androidx.compose.material.icons.outlined.Refresh
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView

/** Plays a lesson's video inside the app, in YouTube's own embedded player.
 *
 * This is deliberately a SEPARATE WebView from the lesson reader. The reader
 * renders authored HTML offline with scripts, storage, network and file access
 * all switched off, and it must stay that way. YouTube's player is a remote page
 * that needs JavaScript, so it gets a view of its own, is sent nothing but the
 * embed, and never receives lesson content or a JavaScript bridge.
 *
 * The embed is framed by a small page served from the Learning Hub's own origin.
 * YouTube answers a top-level embed that carries no referrer with "Video player
 * configuration error (153)", so loading the embed URL straight into the WebView
 * does not work; it needs a real page to be framed by, exactly as on the website.
 *
 * Nothing is downloaded or re-hosted. Playback is YouTube's, so the creator keeps
 * their attribution and their view count.
 */
object LessonVideo {
    private val ID = Regex("^[A-Za-z0-9_-]{11}$")
    fun isPlayable(videoId: String) = ID.matches(videoId)

    /** The page the embed is framed by. YouTube answers a top-level embed that
     * carries no referrer with "Video player configuration error (153)", so the
     * iframe has to sit inside a page served from a real origin. This is the
     * Learning Hub's own, the same one the course player embeds from. */
    const val ORIGIN = "https://tolbertinnovationhub.org"

    /** The privacy-enhanced host: no tracking cookie until the learner presses play. */
    fun embedUrl(videoId: String): String {
        require(isPlayable(videoId)) { "Unsupported video id" }
        // The same player options the course player uses on the website, except
        // autoplay: on mobile data a lesson must never start streaming by itself.
        return "https://www.youtube-nocookie.com/embed/$videoId" +
            "?playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&fs=1" +
            "&origin=$ORIGIN"
    }

    /** The wrapper page. Its only content is the player. */
    fun embedPage(videoId: String): String {
        val src = embedUrl(videoId).replace("&", "&amp;")
        return """<!doctype html><html><head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>html,body{margin:0;padding:0;height:100%;background:#000;overflow:hidden}
            iframe{border:0;display:block;width:100%;height:100%}</style>
            </head><body><iframe src="$src" title="Lesson video"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen></iframe></body></html>"""
    }

    fun watchUrl(videoId: String): String {
        require(isPlayable(videoId)) { "Unsupported video id" }
        return "https://www.youtube.com/watch?v=$videoId"
    }

    /** Hosts the player itself needs to reach while it loads and plays.
     * Uses java.net.URI, not android.net.Uri, so the rule is plain Kotlin and
     * can be tested on the JVM without an emulator. */
    fun staysInPlayer(url: String): Boolean {
        val host = runCatching { java.net.URI(url).host.orEmpty().lowercase() }.getOrDefault("")
        val youtube = host == "youtube-nocookie.com" || host.endsWith(".youtube-nocookie.com") ||
            host == "youtube.com" || host.endsWith(".youtube.com")
        // A real watch page means the learner tapped through; that belongs in their YouTube app.
        return youtube && !url.contains("/watch")
    }
}

private enum class PlayerState { Loading, Ready, Failed }

@Composable fun LessonVideoPlayer(
    videoId: String,
    modifier: Modifier = Modifier,
    onOpenExternally: (String) -> Unit
) {
    // Sits above the written lesson, the way the course player does on the website.
    // Collapsing it removes the view from composition, which also stops playback.
    var expanded by rememberSaveable(videoId) { mutableStateOf(true) }
    Column(modifier) {
        Row(Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
            Text("Lesson video", style = MaterialTheme.typography.labelLarge,
                color = MaterialTheme.colorScheme.onSurfaceVariant, modifier = Modifier.weight(1f))
            TextButton(onClick = { expanded = !expanded }) {
                Text(if (expanded) "Hide" else "Show")
            }
        }
        if (expanded) LessonVideoSurface(videoId, Modifier.fillMaxWidth(), onOpenExternally)
    }
}

@Composable private fun LessonVideoSurface(
    videoId: String,
    modifier: Modifier = Modifier,
    onOpenExternally: (String) -> Unit
) {
    val context = LocalContext.current
    val page = remember(videoId) { LessonVideo.embedPage(videoId) }
    var state by remember(videoId) { mutableStateOf(PlayerState.Loading) }
    var reloads by remember(videoId) { mutableStateOf(0) }

    val view = remember {
        WebView(context).apply {
            settings.javaScriptEnabled = true            // the YouTube player needs it
            settings.domStorageEnabled = true            // and its own playback state
            settings.mediaPlaybackRequiresUserGesture = true  // never autoplay on mobile data
            settings.allowFileAccess = false
            settings.allowContentAccess = false
            settings.loadWithOverviewMode = true
            settings.useWideViewPort = true
            settings.setSupportZoom(false)
            setBackgroundColor(android.graphics.Color.BLACK)
            // Without a chrome client the player's own fullscreen control does nothing.
            webChromeClient = WebChromeClient()
            webViewClient = object : WebViewClient() {
                override fun onPageStarted(view: WebView, url: String, favicon: Bitmap?) {
                    state = PlayerState.Loading
                }
                override fun onPageFinished(view: WebView, url: String) {
                    // This fires for the wrapper page, not for the player inside it.
                    // Clear the spinner so the learner sees the player's own surface,
                    // including any message YouTube itself puts there.
                    if (state != PlayerState.Failed) state = PlayerState.Ready
                }
                override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                    if (!request.isForMainFrame) return false
                    val target = request.url.toString()
                    if (LessonVideo.staysInPlayer(target)) return false
                    onOpenExternally(target)
                    return true
                }
                override fun onReceivedError(view: WebView, request: WebResourceRequest, error: WebResourceError?) {
                    // Only a failure of the player page itself is worth reporting; a single
                    // missing thumbnail or stat ping is not.
                    if (request.isForMainFrame) state = PlayerState.Failed
                }
            }
        }
    }
    DisposableEffect(view) {
        onDispose {
            // Stop the sound the moment the learner leaves the tab or the lesson.
            view.loadUrl("about:blank")
            view.stopLoading()
            view.destroy()
        }
    }

    Column(modifier, verticalArrangement = Arrangement.spacedBy(10.dp)) {
        Card(shape = RoundedCornerShape(14.dp), colors = CardDefaults.cardColors(containerColor = Color.Black)) {
            Box(Modifier.fillMaxWidth().aspectRatio(16f / 9f), contentAlignment = Alignment.Center) {
                AndroidView(
                    factory = { view },
                    modifier = Modifier.fillMaxWidth().aspectRatio(16f / 9f),
                    update = {
                        val want = page to reloads
                        if (it.tag != want) {
                            it.tag = want
                            it.loadDataWithBaseURL(LessonVideo.ORIGIN, page, "text/html", "UTF-8", null)
                        }
                    }
                )
                when (state) {
                    PlayerState.Loading -> Column(horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.spacedBy(10.dp)) {
                        CircularProgressIndicator(color = Color.White)
                        Text("Loading the player…", color = Color.White,
                            style = MaterialTheme.typography.bodySmall)
                    }
                    PlayerState.Failed -> Column(
                        Modifier.padding(20.dp),
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        Text("The video could not load.", color = Color.White,
                            style = MaterialTheme.typography.titleSmall, textAlign = TextAlign.Center)
                        Text("Check your connection, or watch it in the YouTube app.",
                            color = Color.White, style = MaterialTheme.typography.bodySmall,
                            textAlign = TextAlign.Center)
                        TextButton(onClick = { state = PlayerState.Loading; reloads++ }) {
                            Icon(Icons.Outlined.Refresh, null, Modifier.padding(end = 6.dp), tint = Color.White)
                            Text("Try again", color = Color.White)
                        }
                    }
                    PlayerState.Ready -> Unit
                }
            }
        }
        Row(Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
            Text("Needs a connection. The written lesson works offline.",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                modifier = Modifier.weight(1f))
            TextButton(onClick = { onOpenExternally(LessonVideo.watchUrl(videoId)) }) {
                Icon(Icons.Outlined.OpenInNew, null, Modifier.padding(end = 6.dp))
                Text("YouTube")
            }
        }
    }
}
