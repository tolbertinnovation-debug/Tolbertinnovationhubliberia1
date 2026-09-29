package org.tolbertinnovationhub.learning

import androidx.compose.ui.test.*
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.graphics.asAndroidBitmap
import android.graphics.Bitmap
import java.io.File
import org.junit.Rule
import org.junit.Test

class CatalogSmokeTest {
    @get:Rule val compose = createAndroidComposeRule<MainActivity>()
    @Test fun browseSearchAndLockedCourseStayNative() {
        compose.waitUntil(30000) { compose.onAllNodesWithText("Find your course").fetchSemanticsNodes().isNotEmpty() }
        snapshot("01-home")
        compose.onNodeWithText("Find your course").performClick()
        compose.onNodeWithText("Search courses, skills, or subjects").performTextInput("computer literacy")
        compose.onNodeWithText("1 courses").assertExists()
        snapshot("02-catalog")
        compose.onNodeWithText("Complete Computer Literacy Professional Certificate").performClick()
        compose.onNodeWithText("Course overview").assertExists()
        snapshot("03-course")
        compose.onNodeWithText("Sign in to start learning").performScrollTo().assertExists()
        compose.onNodeWithContentDescription("Back").performClick()
        compose.onNodeWithText("You").performClick()
        compose.onNodeWithText("Sign in securely").assertExists()
        snapshot("04-account")
    }
    private fun snapshot(name: String) {
        val directory = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        File(directory, "$name.png").outputStream().use { compose.onRoot().captureToImage().asAndroidBitmap().compress(Bitmap.CompressFormat.PNG, 100, it) }
    }
}
