package org.tolbertinnovationhub.learning

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

    private fun webView(view: View): WebView? {
        if (view is WebView) return view
        if (view is ViewGroup) for (i in 0 until view.childCount) {
            webView(view.getChildAt(i))?.let { return it }
        }
        return null
    }
}
