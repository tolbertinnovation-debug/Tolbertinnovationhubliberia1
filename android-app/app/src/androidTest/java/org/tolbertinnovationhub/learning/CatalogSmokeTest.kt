package org.tolbertinnovationhub.learning

import androidx.compose.ui.test.*
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.graphics.asAndroidBitmap
import android.graphics.Bitmap
import java.io.File
import androidx.core.view.WindowCompat
import androidx.lifecycle.ViewModelProvider
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test

class CatalogSmokeTest {
    @get:Rule val compose = createAndroidComposeRule<MainActivity>()
    @Test fun appearanceSwitchUpdatesHomeCatalogAndSystemBars() {
        compose.waitUntil(30000) { compose.onAllNodesWithText("Find your course").fetchSemanticsNodes().isNotEmpty() }
        val model = ViewModelProvider(compose.activity)[LearningViewModel::class.java]
        val originalTheme = model.theme
        try {
            compose.onNodeWithText("You").performClick()
            compose.onAllNodes(hasScrollAction())[0].performScrollToNode(hasText("Dark", substring = false))
            compose.onNodeWithText("Dark").performClick()
            compose.onNodeWithText("Dark").assertIsSelected()
            compose.runOnIdle {
                val bars = WindowCompat.getInsetsController(compose.activity.window, compose.activity.window.decorView)
                assertFalse(bars.isAppearanceLightStatusBars)
                assertFalse(bars.isAppearanceLightNavigationBars)
            }
            compose.onNodeWithText("Today").performClick()
            snapshot("15-home-brand-dark")
            compose.onNodeWithText("Find your course").performClick()
            compose.onNodeWithText("Search courses, skills, or subjects").performTextInput("computer literacy")
            snapshot("16-catalog-brand-dark")
            compose.onNodeWithText("You").performClick()
            compose.onAllNodes(hasScrollAction())[0].performScrollToNode(hasText("Light", substring = false))
            compose.onNodeWithText("Light").performClick()
            compose.onNodeWithText("Light").assertIsSelected()
            compose.runOnIdle {
                val bars = WindowCompat.getInsetsController(compose.activity.window, compose.activity.window.decorView)
                assertTrue(bars.isAppearanceLightStatusBars)
                assertTrue(bars.isAppearanceLightNavigationBars)
            }
            compose.onNodeWithText("Today").performClick()
            snapshot("17-home-brand-light")
        } finally { compose.runOnIdle { model.changeTheme(originalTheme) } }
    }

    @Test fun browseSearchAndLockedCourseStayNative() {
        compose.waitUntil(30000) { compose.onAllNodesWithText("Find your course").fetchSemanticsNodes().isNotEmpty() }
        snapshot("01-home")
        compose.onNodeWithText("Find your course").performClick()
        compose.onNodeWithText("Search courses, skills, or subjects").performTextInput("computer literacy")
        compose.onNodeWithText("1 course").assertExists()
        snapshot("02-catalog")
        compose.onNodeWithText("Complete Computer Literacy Professional Certificate").performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        compose.onNodeWithText("Course overview", useUnmergedTree = true).assertIsDisplayed()
        snapshot("03-course")
        compose.onNodeWithText("Sign in to start learning").performScrollTo().assertExists()
        compose.onNodeWithContentDescription("Back").performClick()
        compose.onNodeWithText("You").performClick()
        compose.onNodeWithText("Sign in securely").assertExists()
        snapshot("04-account")
    }
    /** The written course information imported from the Learning Hub course page. */
    @Test fun courseScreenShowsWrittenCourseInformation() {
        compose.waitUntil(30000) { compose.onAllNodesWithText("Find your course").fetchSemanticsNodes().isNotEmpty() }
        compose.onNodeWithText("Find your course").performClick()
        compose.onNodeWithText("Search courses, skills, or subjects").performTextInput("computer literacy")
        compose.onNodeWithText("Complete Computer Literacy Professional Certificate").performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]

        screen.performScrollToNode(hasText("About this course"))
        compose.onNodeWithText("About this course").assertIsDisplayed()

        screen.performScrollToNode(hasText("What you need to start"))
        compose.onNodeWithText("No prior computer experience needed, this course starts from zero").assertExists()

        screen.performScrollToNode(hasText("Your instructor"))
        compose.onNodeWithText("Samuel Tolbert").assertExists()

        // A question opens to reveal its answer, and closes again. Assert on the
        // answer text, not the expander's content description: every question row
        // carries the same description, so matching that finds one node per FAQ.
        screen.performScrollToNode(hasText("Common questions"))
        screen.performScrollToNode(hasText("Is this course really free?"))
        val answer = "Yes, completely free. TIH believes foundational computer literacy should be " +
            "accessible to every Liberian regardless of income. No credit card required."
        compose.onNodeWithText(answer).assertDoesNotExist()
        compose.onNodeWithText("Is this course really free?").performClick()
        compose.onNodeWithText(answer).assertExists()
        snapshot("05-course-information")
        compose.onNodeWithText("Is this course really free?").performClick()
        compose.onNodeWithText(answer).assertDoesNotExist()
    }

    private fun snapshot(name: String) {
        val directory = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        File(directory, "$name.png").outputStream().use {
            compose.onRoot().captureToImage().asAndroidBitmap().apply { setHasAlpha(false) }.compress(Bitmap.CompressFormat.PNG, 100, it)
        }
    }
}
