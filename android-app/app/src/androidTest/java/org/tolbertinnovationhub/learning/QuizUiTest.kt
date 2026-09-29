package org.tolbertinnovationhub.learning

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.*
import androidx.compose.ui.test.junit4.createComposeRule
import org.junit.Assert.assertEquals
import org.junit.Rule
import org.junit.Test
import org.tolbertinnovationhub.learning.data.Lesson
import org.tolbertinnovationhub.learning.data.Question
import org.tolbertinnovationhub.learning.ui.QuizScreen
import org.tolbertinnovationhub.learning.ui.TihTheme

class QuizUiTest {
    @get:Rule val compose = createComposeRule()
    @Test fun nativeQuizRequiresAnswersAndAllowsRetry() {
        var recorded = -1
        val lesson = Lesson("test", "Practice", "", 1, "quiz", false, "", false, "",
            listOf(Question("Which is an input device?", listOf("Keyboard", "Monitor"), 0, "A keyboard supplies input.")))
        compose.setContent { TihTheme("Light") { QuizScreen(lesson, { recorded = it }, Modifier.fillMaxSize()) } }
        compose.onNodeWithText("Check my answers").performScrollTo().assertIsNotEnabled()
        compose.onNodeWithText("Keyboard").performScrollTo().performClick()
        compose.onNodeWithText("Check my answers").performScrollTo().performClick()
        compose.runOnIdle { assertEquals(100, recorded) }
        compose.onNodeWithText("Well done — 100%").performScrollTo().assertExists()
        compose.onNodeWithText("Practise again").performScrollTo().performClick()
        compose.onNodeWithText("Check my answers").assertIsNotEnabled()
    }
}
