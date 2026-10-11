package org.tolbertinnovationhub.learning

import android.graphics.Bitmap
import androidx.compose.ui.graphics.asAndroidBitmap
import androidx.compose.ui.test.*
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import java.io.File
import org.junit.Rule
import org.junit.Test

class InformationUiTest {
    @get:Rule val compose = createAndroidComposeRule<MainActivity>()
    @Test fun privacyDeletionAndOrganizationAreAvailableWithoutAnAccount() {
        compose.waitUntil(30000) { compose.onAllNodesWithText("Sign in securely").fetchSemanticsNodes().isNotEmpty() }
        // LazyColumn does not compose this footer until it is scrolled into view.
        compose.onNodeWithTag("welcome-list").performScrollToNode(hasText("How your account data is used"))
        compose.onNodeWithText("How your account data is used").performClick()
        compose.onNodeWithText("TIH Learning privacy notice").assertExists()
        snapshot("06-privacy")
        compose.onNodeWithTag("information-list").performScrollToNode(hasText("Delete TIH account"))
        compose.onNodeWithText("Delete TIH account").performClick()
        compose.onNodeWithText("Review request in email").performScrollTo().assertIsNotEnabled()
        compose.onNodeWithText("Registered email address").performScrollTo().performTextInput("learner@example.com")
        compose.onNode(isToggleable()).performScrollTo().performClick()
        compose.onNodeWithText("Review request in email").performScrollTo().assertIsEnabled()
        compose.onNodeWithText("Copy request").assertIsEnabled()
        snapshot("07-delete-request")
        // No message is sent and no external app is launched by this test.
        compose.onNodeWithContentDescription("Back").performClick()
        compose.onNodeWithTag("welcome-list").performScrollToNode(hasText("About TIH"))
        compose.onNodeWithText("About TIH").performScrollTo().performClick()
        compose.onNodeWithText("Our mission").assertExists()
        compose.onNodeWithText("Sinkor, Monrovia, Liberia, West Africa").assertExists()
        snapshot("08-about")
    }
    @Test fun loginFormShowsRequiredFieldsAndTogglesPassword() {
        compose.waitUntil(30000) { compose.onAllNodesWithText("Sign in securely").fetchSemanticsNodes().isNotEmpty() }
        snapshot("00-login-welcome")
        compose.onNodeWithText("Sign in securely").performScrollTo().performClick()
        compose.onNodeWithText("Enter a valid email address.").assertExists()
        compose.onNodeWithText("Enter your password.").assertExists()
        compose.onNodeWithTag("login-email").performScrollTo().performTextInput("learner@example.com")
        compose.onNodeWithTag("login-password").performScrollTo().performTextInput("example-password")
        compose.onNodeWithContentDescription("Show password").performClick()
        compose.onNodeWithContentDescription("Hide password").assertExists()
        compose.onNodeWithTag("login-password").assertTextContains("example-password")
        compose.onNodeWithContentDescription("Hide password").performClick()
        compose.onNodeWithContentDescription("Show password").assertExists()
        compose.onNodeWithTag("welcome-list").performScrollToNode(hasText("Create account"))
        compose.onNodeWithText("Create account").assertIsEnabled()
    }
    private fun snapshot(name: String) {
        val dir = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        File(dir, "$name.png").outputStream().use {
            compose.onRoot().captureToImage().asAndroidBitmap().apply { setHasAlpha(false) }.compress(Bitmap.CompressFormat.PNG, 100, it)
        }
    }
}
