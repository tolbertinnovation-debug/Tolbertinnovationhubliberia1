package org.tolbertinnovationhub.learning.ui

import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.OpenInNew
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView

/** Plays a lesson's video inside the app, in YouTube's own embedded player.
 *
 * This is deliberately a SEPARATE WebView from the lesson reader. The reader
 * renders authored HTML offline with scripts, storage, network and file access
 * all switched off, and it must stay that way. YouTube's player is a remote
 * page that needs JavaScript, so it gets a view of its own, is handed nothing
 * but the embed, and never receives lesson content or a JavaScript bridge.
 *
 * Nothing is downloaded or re-hosted. Playback is YouTube's, so the creator
 * keeps their attribution and their view count. The video id is checked against
 * YouTube's own format before it reaches the page, so it cannot carry markup.
 */
object LessonVideo {
    private val ID = Regex("^[A-Za-z0-9_-]{11}$")
    fun isPlayable(videoId: String) = ID.matches(videoId)

    /** The privacy-enhanced host: no cookie is set until the learner presses play. */
    const val ORIGIN = "https://www.youtube-nocookie.com"

    fun embedHtml(videoId: String): String {
        require(isPlayable(videoId)) { "Unsupported video id" }
        return """<!doctype html><html><head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>html,body{margin:0;padding:0;height:100%;background:#000;overflow:hidden}
            iframe{border:0;display:block;width:100%;height:100%}</style>
            </head><body>
            <iframe src="$ORIGIN/embed/$videoId?playsinline=1&amp;rel=0&amp;modestbranding=1"
              title="Lesson video"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen></iframe>
            </body></html>""".trimIndent()
    }
}

@Composable fun LessonVideoPlayer(
    videoId: String,
    modifier: Modifier = Modifier,
    onOpenExternally: (String) -> Unit
) {
    val context = LocalContext.current
    val html = remember(videoId) { LessonVideo.embedHtml(videoId) }
    val view = remember {
        WebView(context).apply {
            settings.javaScriptEnabled = true          // the YouTube player needs it
            settings.domStorageEnabled = true          // and its own playback state
            settings.mediaPlaybackRequiresUserGesture = true   // never autoplay on mobile data
            settings.allowFileAccess = false
            settings.allowContentAccess = false
            settings.setSupportZoom(false)
            setBackgroundColor(android.graphics.Color.BLACK)
            // Needed for the player's fullscreen control to work at all.
            webChromeClient = WebChromeClient()
            webViewClient = object : WebViewClient() {
                override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                    // The player itself lives in a sub-frame. A main-frame navigation means
                    // the learner tapped through to YouTube, so hand it to their YouTube app
                    // rather than turning this view into a browser.
                    if (!request.isForMainFrame) return false
                    onOpenExternally(request.url.toString())
                    return true
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
            AndroidView(
                factory = { view },
                modifier = Modifier.fillMaxWidth().aspectRatio(16f / 9f),
                update = {
                    if (it.tag != html) {
                        it.tag = html
                        it.loadDataWithBaseURL(LessonVideo.ORIGIN, html, "text/html", "UTF-8", null)
                    }
                }
            )
        }
        Text(
            "Plays from YouTube, so this part needs a connection. The written lesson and its practice work offline.",
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            modifier = Modifier.padding(horizontal = 4.dp)
        )
        TextButton(onClick = { onOpenExternally("https://www.youtube.com/watch?v=$videoId") }) {
            Icon(Icons.Outlined.OpenInNew, null, Modifier.padding(end = 6.dp))
            Text("Open in the YouTube app instead")
        }
    }
}
