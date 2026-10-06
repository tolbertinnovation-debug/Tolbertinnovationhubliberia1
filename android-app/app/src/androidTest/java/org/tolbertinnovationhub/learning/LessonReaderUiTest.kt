package org.tolbertinnovationhub.learning

import android.graphics.Bitmap
import android.graphics.Color
import android.graphics.Rect
import android.os.SystemClock
import android.view.View
import android.view.ViewGroup
import android.webkit.WebView
import androidx.activity.ComponentActivity
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.test.platform.app.InstrumentationRegistry
import kotlinx.coroutines.runBlocking
import org.junit.Assert.*
import org.junit.Rule
import org.junit.Test
import org.tolbertinnovationhub.learning.data.ContentRepository
import org.tolbertinnovationhub.learning.ui.RichLesson
import org.tolbertinnovationhub.learning.ui.TihTheme
import java.io.File
import java.util.concurrent.atomic.AtomicBoolean

class LessonReaderUiTest {
    @get:Rule val compose = createAndroidComposeRule<ComponentActivity>()

    @Test fun existingTeachingDocumentRendersWithNetworkAndScriptsDisabled() =
        checkDocument("computer-literacy", "05-lesson-reader")

    @Test fun projectManagementNotesRenderOffline() =
        checkDocument("project-mgmt", "21-project-management-reader")

    @Test fun accountingBookkeepingNotesRenderOffline() =
        checkDocument("accounting-bookkeeping", "27-accounting-bookkeeping-reader")

    @Test fun fullStackNotesRenderOffline() =
        checkDocument("webdev", "35-webdev-reader")

    @OptIn(ExperimentalMaterial3Api::class)
    @Test fun graphicDesignNotesRenderOffline() =
        checkDocument("design", "41-design-reader")

    @OptIn(ExperimentalMaterial3Api::class)
    @Test fun entrepreneurshipNotesRenderOffline() =
        checkDocument("entrepreneurship", "47-entrepreneurship-reader")

    @Test fun kotlinProgramNotesRenderOffline() =
        checkDocument("android", "53-android-reader")

    @Test fun officeProgramNotesRenderOffline() =
        checkDocument("office", "59-office-reader")

    @Test fun leadershipProgramNotesRenderOffline() =
        checkDocument("leadership", "65-leadership-reader")

    @Test fun grantProgramNotesRenderOffline() =
        checkDocument("grant-writing", "71-grant-reader")

    @Test fun englishProgramNotesRenderOffline() =
        checkDocument("english-success", "77-english-reader")

    @Test fun ieltsChartNotesRenderOffline() =
        checkDocument("ielts", "83-ielts-reader", "Line Graphs")

    @OptIn(ExperimentalMaterial3Api::class)
    private fun checkDocument(courseId: String, captureName: String, topic: String? = null) {
        val course = runBlocking {
            val repository = ContentRepository(compose.activity)
            repository.course(repository.catalog().first { it.id == courseId })
        }
        val lesson = course.lessons.first { it.html.isNotBlank() && it.kind != "quiz" && (topic == null || it.title.endsWith(topic)) }
        val readerHtml = if (topic == null) lesson.html else
            Regex("<figure[\\s\\S]*?</figure>").find(lesson.html)?.value
                ?: error("Expected a chart figure in $topic")
        compose.runOnUiThread { compose.activity.actionBar?.hide() }
        compose.setContent {
            TihTheme {
                Scaffold(topBar = { TopAppBar(title = { Text(lesson.title) }) }) { padding ->
                    RichLesson(readerHtml, course.css, 18, Modifier.fillMaxSize().padding(padding)) {}
                }
            }
        }
        var ready = false
        compose.waitUntil(30000) {
            compose.runOnUiThread {
                val web = webView(compose.activity.window.decorView)
                ready = web != null && web.progress == 100 && web.contentHeight > 0
            }
            ready
        }
        compose.runOnUiThread {
            val settings = webView(compose.activity.window.decorView)!!.settings
            assertFalse(settings.javaScriptEnabled)
            assertFalse(settings.allowFileAccess)
            assertFalse(settings.allowContentAccess)
            assertTrue(settings.blockNetworkLoads)
        }
        // Page progress and content height can be available before Chromium paints the DOM.
        val visualReady = AtomicBoolean(false)
        val bounds = Rect()
        compose.runOnUiThread {
            val web = webView(compose.activity.window.decorView)!!
            web.getGlobalVisibleRect(bounds)
            web.postVisualStateCallback(1, object : WebView.VisualStateCallback() {
                override fun onComplete(requestId: Long) {
                    web.postInvalidateOnAnimation()
                    visualReady.set(true)
                }
            })
        }
        compose.waitUntil(30000) { visualReady.get() }
        val directory = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        // Inspect the actual reading surface, excluding the native title. A blank WebView
        // must fail this test even when progress=100 and contentHeight is nonzero.
        val automation = InstrumentationRegistry.getInstrumentation().uiAutomation
        var screenshot: Bitmap? = null
        var ink = 0
        val deadline = SystemClock.uptimeMillis() + 15000
        do {
            screenshot?.recycle()
            screenshot = requireNotNull(automation.takeScreenshot())
            ink = readingInk(screenshot, bounds)
            if (ink >= 100) break
            SystemClock.sleep(200)
        } while (SystemClock.uptimeMillis() < deadline)
        File(directory, "$captureName.png").outputStream().use {
            requireNotNull(screenshot).apply { setHasAlpha(false) }.compress(Bitmap.CompressFormat.PNG, 100, it)
        }
        screenshot?.recycle()
        File(directory, "$captureName-check.txt").writeText("Reading area: $bounds; visible ink samples: $ink\n")
        assertTrue("The lesson reading area must contain visible text, not a blank loading surface: $bounds / $ink", ink >= 100)
    }

    private fun readingInk(bitmap: Bitmap, bounds: Rect): Int {
        var count = 0
        // Restrict the check to the upper reading area; exclude screen chrome and scrollbars.
        val bottom = minOf(bounds.bottom - 24, bounds.top + bounds.height() / 2, bitmap.height)
        for (y in (bounds.top + 24).coerceAtLeast(0) until bottom step 5) {
            for (x in (bounds.left + 24).coerceAtLeast(0) until minOf(bounds.right - 24, bitmap.width) step 5) {
                val pixel = bitmap.getPixel(x, y)
                if (Color.red(pixel) < 160 && Color.green(pixel) < 160 && Color.blue(pixel) < 180) count++
            }
        }
        return count
    }

    private fun webView(view: View): WebView? {
        if (view is WebView) return view
        if (view is ViewGroup) for (i in 0 until view.childCount) {
            webView(view.getChildAt(i))?.let { return it }
        }
        return null
    }
}
