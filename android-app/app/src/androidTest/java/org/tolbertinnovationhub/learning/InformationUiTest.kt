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
        compose.waitUntil(30000) { compose.onAllNodesWithText("Find your course").fetchSemanticsNodes().isNotEmpty() }
        compose.onNodeWithText("You").performClick()
        compose.onNodeWithText("How your account data is used").performScrollTo().performClick()
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
        compose.onNodeWithTag("account-list").performScrollToNode(hasText("About TIH"))
        compose.onNodeWithText("About TIH").performScrollTo().performClick()
        compose.onNodeWithText("Our mission").assertExists()
        compose.onNodeWithText("Sinkor, Monrovia, Liberia, West Africa").assertExists()
        snapshot("08-about")
    }
    private fun snapshot(name: String) {
        val dir = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        File(dir, "$name.png").outputStream().use {
            compose.onRoot().captureToImage().asAndroidBitmap().apply { setHasAlpha(false) }.compress(Bitmap.CompressFormat.PNG, 100, it)
        }
    }
}
