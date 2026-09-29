package org.tolbertinnovationhub.learning

import android.graphics.Bitmap
import android.view.View
import android.view.ViewGroup
import android.webkit.WebView
import androidx.activity.ComponentActivity
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.asAndroidBitmap
import androidx.compose.ui.test.captureToImage
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.onRoot
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.runBlocking
import org.junit.Assert.*
import org.junit.Rule
import org.junit.Test
import org.tolbertinnovationhub.learning.data.ContentRepository
import org.tolbertinnovationhub.learning.ui.RichLesson
import org.tolbertinnovationhub.learning.ui.TihTheme
import java.io.File

class LessonReaderUiTest {
    @get:Rule val compose = createAndroidComposeRule<ComponentActivity>()

    @Test fun existingTeachingDocumentRendersWithNetworkAndScriptsDisabled() {
        val course = runBlocking {
            val repository = ContentRepository(compose.activity)
            repository.course(repository.catalog().first { it.id == "computer-literacy" })
        }
        val lesson = course.lessons.first { it.html.isNotBlank() && it.kind != "quiz" }
        compose.setContent {
            TihTheme("Light") {
                Column(Modifier.fillMaxSize()) {
                    Text(lesson.title, Modifier.padding(20.dp))
                    RichLesson(lesson.html, course.css, 18, Modifier.weight(1f).fillMaxWidth()) {}
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
        val directory = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        File(directory, "05-lesson-reader.png").outputStream().use {
            compose.onRoot().captureToImage().asAndroidBitmap().compress(Bitmap.CompressFormat.PNG, 100, it)
        }
    }

    private fun webView(view: View): WebView? {
        if (view is WebView) return view
        if (view is ViewGroup) for (i in 0 until view.childCount) {
            webView(view.getChildAt(i))?.let { return it }
        }
        return null
    }
}
