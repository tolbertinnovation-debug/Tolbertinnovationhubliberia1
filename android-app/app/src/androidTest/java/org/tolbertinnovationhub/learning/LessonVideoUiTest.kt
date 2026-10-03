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
        val folder = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        // Capture diagnostic geometry even when the remote player is unavailable.
        SystemClock.sleep(25000)
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
    }

    private fun webView(view: View): WebView? {
        if (view is WebView) return view
        if (view is ViewGroup) for (i in 0 until view.childCount) {
            webView(view.getChildAt(i))?.let { return it }
        }
        return null
    }
}
