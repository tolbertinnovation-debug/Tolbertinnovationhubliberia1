package org.tolbertinnovationhub.learning

import androidx.compose.ui.test.*
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.graphics.asAndroidBitmap
import android.graphics.Bitmap
import java.io.File
import androidx.activity.ComponentActivity
import androidx.activity.enableEdgeToEdge
import org.junit.Before
import org.junit.After
import org.tolbertinnovationhub.learning.data.AccountApi
import org.tolbertinnovationhub.learning.data.HubSession
import org.tolbertinnovationhub.learning.data.HubAccessException
import org.tolbertinnovationhub.learning.data.SessionVault
import org.tolbertinnovationhub.learning.ui.LearningApp
import org.tolbertinnovationhub.learning.ui.TihTheme
import org.junit.Rule
import org.junit.Test

class CatalogSmokeTest {
    @get:Rule val compose = createAndroidComposeRule<ComponentActivity>()
    private lateinit var model: LearningViewModel
    @Before fun setUp() {
        SessionVault(compose.activity).clear()
        model = LearningViewModel(compose.activity.application, object : AccountApi {
            override suspend fun signIn(email: String, password: String): HubSession {
                if (email != "learner@example.invalid" || password != "test-only-password") throw HubAccessException("Check your email and password.")
                return HubSession("test-only", "test-only", "android-ui-learner", "Test Learner", emptySet(), System.currentTimeMillis())
            }
            override suspend fun refresh(old: HubSession, onRotatedTokens: (HubSession) -> Unit) = old
        })
        compose.runOnUiThread { compose.activity.actionBar?.hide(); compose.activity.enableEdgeToEdge() }
        compose.setContent { TihTheme { LearningApp(model) } }
        compose.waitUntil(30000) { compose.onAllNodesWithText("Sign in securely").fetchSemanticsNodes().isNotEmpty() }
    }
    @After fun cleanUp() { compose.runOnIdle { model.signOut() } }
    private fun signIn() {
        compose.onNodeWithText("Email address").performTextReplacement("learner@example.invalid")
        compose.onNodeWithText("Password").performTextReplacement("test-only-password")
        compose.onNodeWithText("Sign in securely").performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Find your next skill").fetchSemanticsNodes().isNotEmpty() }
    }
    @Test fun signInGateFailureSuccessAndSignOut() {
        compose.onNodeWithText("Create account").assertIsDisplayed().assertIsEnabled()
        compose.onNodeWithText("Courses").assertDoesNotExist()
        snapshot("01-welcome")
        compose.onNodeWithText("Email address").performTextInput("wrong@example.invalid")
        compose.onNodeWithText("Password").performTextInput("wrong-password")
        compose.onNodeWithText("Sign in securely").performClick()
        compose.onNodeWithText("Check your email and password.").assertExists()
        compose.onNodeWithText("Courses").assertDoesNotExist()
        signIn()
        compose.onNodeWithText("Courses").assertIsSelected()
        snapshot("02-courses-first")
        compose.onNodeWithText("You").performClick()
        compose.onNodeWithText("Sign out").performScrollTo().performClick()
        compose.onNodeWithText("Sign in securely").assertExists()
        compose.onNodeWithText("Courses").assertDoesNotExist()
        compose.onNode(hasText("Password") and hasSetTextAction()).assert(SemanticsMatcher.expectValue(
            androidx.compose.ui.semantics.SemanticsProperties.EditableText, androidx.compose.ui.text.AnnotatedString("")))
    }
    @Test fun catalogScrollsBothWaysAndRestoresPositionAfterCourse() {
        signIn()
        val list = compose.onNodeWithTag("course-list")
        val title = model.catalog[8].title
        list.performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        compose.onNodeWithContentDescription("Back").performClick()
        compose.onNodeWithText(title).assertIsDisplayed()
        snapshot("15-courses-scrolled")
        list.performTouchInput { swipeUp() }
        list.performTouchInput { swipeDown() }
        compose.onNodeWithContentDescription("Back to top").performClick()
        compose.onNodeWithText("Find your next skill").assertIsDisplayed()
        compose.onNodeWithText("Search courses, skills, or subjects").performTextInput("nothingmatchesxyz")
        compose.onNodeWithText("No matches yet").assertExists()
        compose.onNodeWithText("Clear filters").performScrollTo().performClick()
        compose.onNodeWithText("${model.catalog.size} courses").assertExists()
    }

    @Test fun browseSearchAndLockedCourseStayNative() {
        signIn()
        compose.onNodeWithText("Search courses, skills, or subjects").performTextInput("computer literacy")
        compose.onNodeWithText("1 course").assertExists()
        snapshot("02-catalog")
        compose.onNodeWithText("Complete Computer Literacy Professional Certificate").performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        compose.onNodeWithText("Course overview", useUnmergedTree = true).assertIsDisplayed()
        snapshot("03-course")
        compose.onNodeWithText("Course access required").performScrollTo().assertExists()
        compose.onNodeWithContentDescription("Back").performClick()
        compose.onNodeWithText("You").performClick()
        compose.onNodeWithText("Sign out").assertExists()
        compose.onNodeWithText("Dark").assertDoesNotExist()
        snapshot("04-account")
    }
    /** The written course information imported from the Learning Hub course page. */
    @Test fun courseScreenShowsWrittenCourseInformation() {
        signIn()
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
