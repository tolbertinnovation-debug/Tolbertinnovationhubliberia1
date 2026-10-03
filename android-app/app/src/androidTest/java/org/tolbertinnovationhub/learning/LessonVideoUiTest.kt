package org.tolbertinnovationhub.learning

import android.os.SystemClock
import android.graphics.Bitmap
import android.graphics.Rect
import androidx.test.platform.app.InstrumentationRegistry
import java.io.File
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.rememberScrollState
import androidx.compose.material3.Text
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import android.view.View
import android.view.ViewGroup
import android.webkit.WebView
import androidx.activity.ComponentActivity
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import org.junit.Assert.*
import org.junit.Rule
import org.junit.Test
import org.tolbertinnovationhub.learning.ui.LessonVideo
import org.tolbertinnovationhub.learning.ui.LessonVideoPlayer
import org.tolbertinnovationhub.learning.ui.TihTheme

class LessonVideoUiTest {
    @get:Rule val compose = createAndroidComposeRule<ComponentActivity>()

    // No live YouTube/network dependency: verify native lifecycle when learners
    // switch between the first two existing Computer Literacy lesson videos.
    @Test fun switchingLessonsReplacesTheWebViewAndHideRemovesIt() {
        val video = mutableStateOf("kBGcfVwf9aI")
        compose.setContent { TihTheme("Light") { LessonVideoPlayer(video.value) {} } }
        compose.waitForIdle()
        var original: WebView? = null
        compose.runOnUiThread {
            original = webView(compose.activity.window.decorView)
            assertNotNull(original)
            assertTrue(original!!.settings.mediaPlaybackRequiresUserGesture)
            assertFalse(original!!.settings.allowFileAccess)
            video.value = "1wHT-dq7SG0"
        }
        compose.waitForIdle()
        compose.runOnUiThread {
            val next = webView(compose.activity.window.decorView)
            assertNotNull(next)
            assertNotSame(original, next)
        }
        compose.onNodeWithText("Hide").performClick()
        compose.waitForIdle()
        compose.runOnUiThread { assertNull(webView(compose.activity.window.decorView)) }
    }

    @Test fun computerLiteracyPlayerHasAVisibleFrameInsideScrollingLesson() {
        compose.setContent {
            TihTheme("Light") {
                Column(Modifier.fillMaxSize()) {
                    Text("Computer Literacy: What Is a Computer?")
                    Column(Modifier.weight(1f).fillMaxWidth().verticalScroll(rememberScrollState())) {
                        LessonVideoPlayer("kBGcfVwf9aI", Modifier.fillMaxWidth().padding(20.dp)) {}
                        Text("Written lesson", Modifier.height(900.dp))
                    }
                }
            }
        }
        compose.waitForIdle()
        compose.runOnUiThread {
            val web = webView(compose.activity.window.decorView)!!
            web.stopLoading()
            val page = LessonVideo.playerPage("kBGcfVwf9aI", compose.activity.packageName)
                .replace("new YT.Player", "window.testPlayer = new YT.Player")
            web.loadDataWithBaseURL(LessonVideo.origin(compose.activity.packageName) + "/", page, "text/html", "UTF-8", null)
        }
        val folder = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        // Capture diagnostic geometry even when the remote player is unavailable.
        SystemClock.sleep(25000)
        compose.waitForIdle()
        val result = java.util.concurrent.atomic.AtomicReference<String>("")
        val latch = CountDownLatch(1)
        val native = StringBuilder()
        compose.runOnUiThread {
            val web = webView(compose.activity.window.decorView)!!
            native.append("native: ").append(web.width).append(" x ").append(web.height)
                .append("; layout params: ").append(web.layoutParams.width).append(" x ").append(web.layoutParams.height)
                .append("; hardware: ").append(web.isHardwareAccelerated).append("; url: ").append(web.url)
                .append("; WebView: ").append(WebView.getCurrentWebViewPackage()?.versionName)
            web.evaluateJavascript("""JSON.stringify({title:document.title,innerHeight:innerHeight,innerWidth:innerWidth,
                body:document.body.getBoundingClientRect().toJSON(),
                iframe:(function(){var f=document.querySelector('iframe');return f?{src:f.src,rect:f.getBoundingClientRect().toJSON()}:null})(),
                text:document.body.innerText})""") { result.set(it); latch.countDown() }
        }
        assertTrue(latch.await(10, TimeUnit.SECONDS))
        val report = native.toString() + "\n" + result.get()
        File(folder, "computer-literacy-video-diagnostic.txt").writeText(report)
        println("TIH_VIDEO_DIAGNOSTIC " + report)
        val shot = InstrumentationRegistry.getInstrumentation().uiAutomation.takeScreenshot()
        File(folder, "computer-literacy-video-diagnostic.png").outputStream().use { shot.compress(Bitmap.CompressFormat.PNG, 100, it) }
        shot.recycle()
        val bounds = Rect()
        compose.runOnUiThread { webView(compose.activity.window.decorView)!!.getGlobalVisibleRect(bounds) }
        val automation = InstrumentationRegistry.getInstrumentation().uiAutomation
        val downTime = SystemClock.uptimeMillis()
        for (action in listOf(android.view.MotionEvent.ACTION_DOWN, android.view.MotionEvent.ACTION_UP)) {
            val event = android.view.MotionEvent.obtain(downTime, SystemClock.uptimeMillis(), action,
                bounds.exactCenterX(), bounds.exactCenterY(), 0)
            automation.injectInputEvent(event, true); event.recycle()
        }
        SystemClock.sleep(8000)
        compose.waitForIdle()
        val playback = evaluate("""JSON.stringify({title:document.title,
            state:window.testPlayer&&typeof testPlayer.getPlayerState==='function'?testPlayer.getPlayerState():null,
            time:window.testPlayer&&typeof testPlayer.getCurrentTime==='function'?testPlayer.getCurrentTime():null})""")
        File(folder, "computer-literacy-video-playback.txt").writeText(playback)
        val playing = automation.takeScreenshot()
        File(folder, "computer-literacy-video-playback.png").outputStream().use { playing.compress(Bitmap.CompressFormat.PNG, 100, it) }
        playing.recycle()
    }

    @Test fun playerFrameFillsNativeSurfaceAndReceivesTaps() {
        compose.setContent {
            TihTheme("Light") {
                Column(Modifier.fillMaxSize().verticalScroll(rememberScrollState())) {
                    LessonVideoPlayer("kBGcfVwf9aI", Modifier.fillMaxWidth().padding(20.dp)) {}
                    Text("Written lesson", Modifier.height(900.dp))
                }
            }
        }
        compose.waitForIdle()
        // Substitute only the remote API for a deterministic frame with a button.
        // Production HTML/CSS, WebView settings, native sizing, and scroll layout
        // are unchanged. No network response can make this regression pass/fail.
        val api = """
            window.YT = {Player:function(id, options) {
                var frame = document.createElement('iframe'); frame.id = id;
                frame.srcdoc = '<html><body style="margin:0;background:#1469ba;display:flex;align-items:center;justify-content:center;height:100vh">' +
                  '<button style="width:100%;height:100%" onclick="document.body.dataset.played=1">Play video</button></body></html>';
                frame.onload = function(){options.events.onReady();};
                document.getElementById(id).replaceWith(frame);
            }};
            onYouTubeIframeAPIReady();
        """.trimIndent()
        val html = LessonVideo.playerPage("kBGcfVwf9aI", compose.activity.packageName)
            .replace("https://www.youtube.com/iframe_api", "data:text/javascript;base64," + android.util.Base64.encodeToString(api.toByteArray(Charsets.UTF_8), android.util.Base64.NO_WRAP))
        compose.runOnUiThread {
            val web = webView(compose.activity.window.decorView)!!
            web.stopLoading()
            web.loadDataWithBaseURL(LessonVideo.origin(compose.activity.packageName) + "/", html, "text/html", "UTF-8", null)
        }
        var geometry = org.json.JSONObject()
        val deadline = SystemClock.uptimeMillis() + 15000
        do {
            val json = evaluate("""JSON.stringify((function(){var f=document.querySelector('iframe');
                var r=f?f.getBoundingClientRect():{width:0,height:0};return {width:r.width,height:r.height,
                viewport:innerHeight,ready:document.title==='tih:ready'};})())""")
            geometry = org.json.JSONObject(org.json.JSONTokener(json).nextValue() as String)
            if (geometry.optBoolean("ready")) break
            SystemClock.sleep(100)
        } while (SystemClock.uptimeMillis() < deadline)
        assertTrue("Player fixture did not load: $geometry", geometry.optBoolean("ready"))
        assertTrue("Player has no visible iframe: $geometry", geometry.getDouble("height") >= 150)
        assertTrue("Player does not fill its viewport: $geometry",
            kotlin.math.abs(geometry.getDouble("height") - geometry.getDouble("viewport")) <= 2)
        val bounds = Rect()
        compose.runOnUiThread { webView(compose.activity.window.decorView)!!.getGlobalVisibleRect(bounds) }
        val automation = InstrumentationRegistry.getInstrumentation().uiAutomation
        val downTime = SystemClock.uptimeMillis()
        for (action in listOf(android.view.MotionEvent.ACTION_DOWN, android.view.MotionEvent.ACTION_UP)) {
            val event = android.view.MotionEvent.obtain(downTime, SystemClock.uptimeMillis(), action,
                bounds.exactCenterX(), bounds.exactCenterY(), 0)
            automation.injectInputEvent(event, true); event.recycle()
        }
        var tapped = false
        val tapDeadline = SystemClock.uptimeMillis() + 5000
        do {
            tapped = evaluate("document.querySelector('iframe').contentDocument.body.dataset.played === '1'") == "true"
            if (tapped) break
            SystemClock.sleep(100)
        } while (SystemClock.uptimeMillis() < tapDeadline)
        assertTrue("Player button did not receive the real screen tap", tapped)
    }

    private fun evaluate(script: String): String {
        val result = java.util.concurrent.atomic.AtomicReference<String>("")
        val done = CountDownLatch(1)
        compose.runOnUiThread {
            webView(compose.activity.window.decorView)!!.evaluateJavascript(script) { result.set(it); done.countDown() }
        }
        assertTrue("Player JavaScript did not respond", done.await(10, TimeUnit.SECONDS))
        return result.get()
    }

    private fun webView(view: View): WebView? {
        if (view is WebView) return view
        if (view is ViewGroup) for (i in 0 until view.childCount) {
            webView(view.getChildAt(i))?.let { return it }
        }
        return null
    }
}
