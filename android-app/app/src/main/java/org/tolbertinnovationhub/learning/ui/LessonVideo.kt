package org.tolbertinnovationhub.learning.ui

import android.graphics.Bitmap
import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.foundation.layout.Arrangement
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
import androidx.compose.runtime.key
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import org.tolbertinnovationhub.learning.BuildConfig

/** Plays a lesson's video inside the app, built the way the course player builds it
 * on the website: YouTube's IFrame Player API creates the player, rather than the
 * app dropping a bare iframe on the page.
 *
 * The local player document identifies the installed app through its HTTPS base
 * URL and matching player origin. The IFrame API alone does not set that identity.
 *
 * This is deliberately a SEPARATE WebView from the lesson reader. The reader renders
 * authored HTML offline with scripts, storage, network and file access all switched
 * off, and it must stay that way. The player needs JavaScript, so it gets a view of
 * its own, is handed nothing but the player page, and never receives lesson content.
 *
 * The player reports back through the document title rather than a JavaScript bridge,
 * so no native object is exposed to the page. Nothing is downloaded or re-hosted:
 * playback is YouTube's, and the creator keeps their attribution and view count.
 */
object LessonVideo {
    private val ID = Regex("^[A-Za-z0-9_-]{11}$")
    fun isPlayable(videoId: String) = ID.matches(videoId)

    /** YouTube requires the installed app ID as the WebView referrer host. */
    fun origin(applicationId: String): String {
        require(applicationId.matches(Regex("[a-zA-Z][a-zA-Z0-9_]*(\\.[a-zA-Z][a-zA-Z0-9_]*)+")))
        return "https://${applicationId.lowercase(java.util.Locale.ROOT)}"
    }

    const val READY = "tih:ready"
    const val ERROR = "tih:error:"

    fun watchUrl(videoId: String): String {
        require(isPlayable(videoId)) { "Unsupported video id" }
        return "https://www.youtube.com/watch?v=$videoId"
    }

    /** The player page. The same options the course player uses on the website,
     * except autoplay: on mobile data a lesson must never stream before it is asked. */
    fun playerPage(videoId: String, applicationId: String = BuildConfig.APPLICATION_ID): String {
        require(isPlayable(videoId)) { "Unsupported video id" }
        val playerOrigin = origin(applicationId)
        return """<!doctype html><html><head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="referrer" content="strict-origin-when-cross-origin">
<style>html,body{margin:0;padding:0;height:100vh;background:#000;overflow:hidden}
#player,iframe{position:absolute;top:0;left:0;width:100%;height:100vh;border:0}</style>
</head><body>
<div id="player"></div>
<script>
var startupTimer;
function say(t) { clearTimeout(startupTimer); document.title = t; }
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    host: 'https://www.youtube-nocookie.com',
    videoId: '$videoId',
    playerVars: { origin: '$playerOrigin', playsinline: 1, rel: 0, iv_load_policy: 3, cc_load_policy: 0, fs: 1 },
    events: {
      onReady: function () { say('$READY'); },
      onError: function (e) { say('$ERROR' + e.data); }
    }
  });
}
startupTimer = setTimeout(function () { say('${ERROR}timeout'); }, 20000);
var s = document.createElement('script');
s.src = 'https://www.youtube.com/iframe_api';
s.onerror = function () { say('${ERROR}offline'); };
document.head.appendChild(s);
</script></body></html>"""
    }

    /** Pages the player itself needs. A real watch page means the learner tapped
     * through, and that belongs in their YouTube app. Uses java.net.URI, not
     * android.net.Uri, so the rule is plain Kotlin and testable on the JVM. */
    fun staysInPlayer(url: String): Boolean {
        val host = runCatching { java.net.URI(url).host.orEmpty().lowercase() }.getOrDefault("")
        val youtube = host == "youtube-nocookie.com" || host.endsWith(".youtube-nocookie.com") ||
            host == "youtube.com" || host.endsWith(".youtube.com")
        return runCatching { java.net.URI(url).scheme == "https" }.getOrDefault(false) && youtube && !url.contains("/watch")
    }

    /** What to tell a learner about a player error, in their terms. */
    fun explain(code: String): String = when (code) {
        "offline", "timeout" -> "The player could not be reached. Check your connection."
        "2" -> "This lesson's video link is not valid. Please tell TIH support."
        "5" -> "This video cannot play in the app. Open it in the YouTube app."
        "100" -> "This video is no longer available on YouTube."
        "101" -> "The owner of this video does not allow it to play outside YouTube."
        "150" -> "YouTube could not play this video here. Open YouTube to check sign-in or playback restrictions."
        "152", "153" -> "YouTube could not verify this app's video player. Try again or open YouTube."
        else -> "The video could not be played here."
    }
}

private sealed interface PlayerState {
    data object Loading : PlayerState
    data object Ready : PlayerState
    data class Failed(val code: String) : PlayerState
}

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
            TextButton(onClick = { expanded = !expanded }) { Text(if (expanded) "Hide" else "Show") }
        }
        if (expanded) key(videoId) {
            LessonVideoSurface(videoId, Modifier.fillMaxWidth(), onOpenExternally)
        }
    }
}

@Composable private fun LessonVideoSurface(
    videoId: String,
    modifier: Modifier = Modifier,
    onOpenExternally: (String) -> Unit
) {
    val context = LocalContext.current
    val playerOrigin = remember(context.packageName) { LessonVideo.origin(context.packageName) }
    val page = remember(videoId, playerOrigin) { LessonVideo.playerPage(videoId, context.packageName) }
    var state by remember(videoId) { mutableStateOf<PlayerState>(PlayerState.Loading) }
    var reloads by remember(videoId) { mutableStateOf(0) }
    val onExternal = rememberUpdatedState(onOpenExternally)

    val view = remember(videoId, playerOrigin) {
        WebView(context).apply {
            // Compose supplies WRAP_CONTENT by default. Chromium treats that as
            // content-sized height, so the 100%-height iframe can collapse to zero
            // while the native view still occupies a black 16:9 rectangle.
            layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT
            )
            settings.javaScriptEnabled = true           // the IFrame API needs it
            settings.domStorageEnabled = true           // and its own playback state
            settings.mediaPlaybackRequiresUserGesture = true  // never autoplay on mobile data
            settings.allowFileAccess = false
            settings.allowContentAccess = false
            settings.loadWithOverviewMode = true
            settings.useWideViewPort = true
            settings.setSupportZoom(false)
            setBackgroundColor(android.graphics.Color.BLACK)
            webChromeClient = object : WebChromeClient() {
                // The player answers through the document title, so no native object
                // is ever exposed to the page.
                override fun onReceivedTitle(view: WebView, title: String?) {
                    val t = title.orEmpty()
                    when {
                        t == LessonVideo.READY -> state = PlayerState.Ready
                        t.startsWith(LessonVideo.ERROR) ->
                            state = PlayerState.Failed(t.removePrefix(LessonVideo.ERROR))
                    }
                }
            }
            webViewClient = object : WebViewClient() {
                override fun onPageStarted(view: WebView, url: String, favicon: Bitmap?) {
                    state = PlayerState.Loading
                }
                override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                    if (!request.isForMainFrame) return false
                    val target = request.url.toString()
                    if (LessonVideo.staysInPlayer(target)) return false
                    if (request.hasGesture() && request.url.scheme == "https") onExternal.value(target)
                    return true
                }
                override fun onReceivedError(view: WebView, request: WebResourceRequest, error: WebResourceError?) {
                    if (request.isForMainFrame) state = PlayerState.Failed("offline")
                }
            }
        }
    }
    Column(modifier, verticalArrangement = Arrangement.spacedBy(10.dp)) {
        Card(shape = RoundedCornerShape(14.dp), colors = CardDefaults.cardColors(containerColor = Color.Black)) {
            Column(Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
                AndroidView(
                    factory = { view },
                    onReset = null,
                    onRelease = { released ->
                        // Detach before destroying, as required by WebView. Do not
                        // start an about:blank navigation during native teardown.
                        (released.parent as? ViewGroup)?.removeView(released)
                        released.webChromeClient = null
                        released.webViewClient = WebViewClient()
                        released.stopLoading()
                        released.destroy()
                    },
                    modifier = Modifier.fillMaxWidth().aspectRatio(16f / 9f),
                    update = {
                        val want = page to reloads
                        if (it.tag != want) {
                            it.tag = want
                            it.loadDataWithBaseURL(playerOrigin + "/", page, "text/html", "UTF-8", null)
                        }
                    }
                )
                when (val s = state) {
                    PlayerState.Loading -> Column(
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        CircularProgressIndicator(color = Color.White)
                        Text("Loading the player…", color = Color.White, style = MaterialTheme.typography.bodySmall)
                    }
                    is PlayerState.Failed -> Column(
                        Modifier.padding(20.dp),
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        Text(LessonVideo.explain(s.code), color = Color.White,
                            style = MaterialTheme.typography.titleSmall, textAlign = TextAlign.Center)
                        Text("Error ${s.code}", color = Color.White, style = MaterialTheme.typography.bodySmall)
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

