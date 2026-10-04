package org.tolbertinnovationhub.learning

import android.graphics.Bitmap
import androidx.activity.ComponentActivity
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.*
import androidx.compose.ui.test.junit4.StateRestorationTester
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.graphics.asAndroidBitmap
import kotlinx.coroutines.runBlocking
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Rule
import org.junit.Test
import org.tolbertinnovationhub.learning.data.ContentRepository
import org.tolbertinnovationhub.learning.data.Lesson
import org.tolbertinnovationhub.learning.data.Question
import org.tolbertinnovationhub.learning.data.StudyStore
import org.tolbertinnovationhub.learning.ui.QuizScreen
import org.tolbertinnovationhub.learning.ui.TihTheme
import java.io.File

class QuizUiTest {
    @get:Rule val compose = createAndroidComposeRule<ComponentActivity>()
    private val lesson = Lesson("test", "Practice: Computer basics", "", 1, "quiz", false, "", false, "",
        listOf(Question("Which is an input device?", listOf("Keyboard", "Monitor"), 0, "A keyboard supplies input."),
            Question("Which device runs on a battery?", listOf("Laptop", "Desktop"), 0, "A laptop is portable.")))

    @Test fun incompleteReviewEditSubmissionAndRetry() {
        val recorded = mutableListOf<Int>()
        compose.setContent { TihTheme("Dark") { QuizScreen(lesson, { recorded.add(it) }, Modifier.fillMaxSize()) } }
        compose.onNodeWithText("Next lesson").assertDoesNotExist()
        compose.onNodeWithText("Next question").performClick()
        compose.onNodeWithText("Review answers").performClick()
        compose.onNodeWithText("Submit answers").assertIsNotEnabled()
        compose.onNodeWithText("Finish unanswered questions").performClick()
        compose.onNodeWithText("Keyboard").performScrollTo().performClick()
        compose.onNodeWithText("Next question").performClick()
        compose.onNodeWithText("Desktop").performScrollTo().performClick()
        compose.onNodeWithText("Review answers").performClick()
        compose.onNodeWithText("Submit answers").performClick()
        compose.runOnIdle { assertEquals(listOf(50), recorded) }
        compose.onNodeWithText("50%").assertExists()
        compose.onNodeWithText("Missed (1)").performScrollTo().performClick()
        compose.onNodeWithText("A laptop is portable.").performScrollTo().assertIsDisplayed()
        compose.onNodeWithText("A keyboard supplies input.").assertDoesNotExist()
        compose.onNodeWithText("Practise again").performScrollTo().performClick()
        compose.onNodeWithText("Keyboard").assertIsNotSelected()
        compose.onNodeWithText("Keyboard").performClick()
        compose.onNodeWithText("Next question").performClick()
        compose.onNodeWithText("Desktop").performClick()
        compose.onNodeWithText("Review answers").performClick()
        compose.onNodeWithText("Desktop").performScrollTo().performClick()
        compose.onNodeWithText("Laptop").performScrollTo().performClick()
        compose.onNodeWithText("Review answers").performClick()
        compose.onNodeWithText("Submit answers").performClick()
        compose.runOnIdle { assertEquals(listOf(50, 100), recorded) }
        compose.onNodeWithText("100%").assertExists()
    }

    @Test fun rotationKeepsAnswersAndDoesNotSubmitTwice() {
        var submissions = 0
        val restoration = StateRestorationTester(compose)
        restoration.setContent { TihTheme("Light") { QuizScreen(lesson, { submissions++ }, Modifier.fillMaxSize()) } }
        compose.onNodeWithText("Keyboard").performScrollTo().performClick()
        compose.onNodeWithText("Next question").performClick()
        restoration.emulateSavedInstanceStateRestore()
        compose.onNodeWithText("Question 2 of 2").assertExists()
        compose.onNodeWithText("Previous").performClick()
        compose.onNodeWithText("Keyboard").assertIsSelected()
        compose.onNodeWithText("Next question").performClick()
        compose.onNodeWithText("Laptop").performScrollTo().performClick()
        compose.onNodeWithText("Review answers").performClick()
        compose.onNodeWithText("Submit answers").performClick()
        restoration.emulateSavedInstanceStateRestore()
        compose.onNodeWithText("100%").assertExists()
        compose.runOnIdle { assertEquals(1, submissions) }
    }

    @Test fun computerLiteracyPracticeWorksInBothThemes() {
        val course = runBlocking {
            val repository = ContentRepository(compose.activity)
            repository.course(repository.catalog().first { it.id == "computer-literacy" })
        }
        val practice = course.lessons.first { it.kind == "quiz" && it.title.contains("Types of Computers", true) }
        var mode by mutableStateOf("Light")
        var continued = false
        compose.runOnUiThread { compose.activity.actionBar?.hide(); compose.activity.enableEdgeToEdge() }
        compose.setContent { TihTheme(mode) {
            Scaffold { padding -> QuizScreen(practice, {}, Modifier.fillMaxSize().padding(padding), onContinue = { continued = true }) }
        } }
        compose.onNodeWithText("Question 1 of ${practice.questions.size}").assertIsDisplayed()
        capture("08-quiz-light.png")
        compose.runOnIdle { mode = "Dark" }
        capture("09-quiz-dark.png")
        practice.questions.forEachIndexed { index, question ->
            compose.onNodeWithText(question.options[question.answer]).performScrollTo().performClick()
            compose.onNodeWithText(if (index < practice.questions.lastIndex) "Next question" else "Review answers").performClick()
        }
        capture("10-quiz-review.png")
        compose.onNodeWithText("Submit answers").performClick()
        compose.onNodeWithText("100%").assertExists()
        capture("11-quiz-result.png")
        compose.onNodeWithText("Next lesson").performClick()
        compose.runOnIdle { assertEquals(true, continued) }
    }

    @Test fun draftsSurviveLeavingQuizStayPrivateAndClearAfterSubmission() {
        val store = StudyStore(compose.activity)
        val students = listOf("draft-ui-student-a", "draft-ui-student-b")
        students.forEach(store::clear)
        var visible by mutableStateOf(true)
        var student by mutableStateOf(students[0])
        compose.setContent { TihTheme("Light") {
            if (visible) key(student) {
                QuizScreen(lesson, {}, Modifier.fillMaxSize(),
                    initialDraft = StudyStore(compose.activity).quizDraft(student, "computer-literacy", lesson),
                    onDraftChange = { store.saveQuizDraft(student, "computer-literacy", lesson, it) })
            }
        } }
        try {
            compose.onNodeWithText("Keyboard").performScrollTo().performClick()
            compose.onNodeWithText("Next question").performClick()
            compose.runOnIdle { visible = false }
            compose.waitForIdle()
            compose.runOnIdle { visible = true }
            compose.onNodeWithText("Question 2 of 2").assertExists()
            compose.onNodeWithText("Previous").performClick()
            compose.onNodeWithText("Keyboard").assertIsSelected()
            compose.runOnIdle { student = students[1] }
            compose.onNodeWithText("Keyboard").assertIsNotSelected()
            compose.runOnIdle { student = students[0] }
            compose.onNodeWithText("Keyboard").assertIsSelected()
            compose.onNodeWithText("Next question").performClick()
            compose.onNodeWithText("Laptop").performScrollTo().performClick()
            compose.onNodeWithText("Review answers").performClick()
            compose.onNodeWithText("Submit answers").performClick()
            compose.runOnIdle { assertNull(store.quizDraft(students[0], "computer-literacy", lesson)) }
            compose.onNodeWithText("Practise again").performScrollTo().performClick()
            compose.onNodeWithText("Keyboard").performClick()
            compose.runOnIdle { store.clear(students[0]); visible = false }
            compose.waitForIdle()
            compose.runOnIdle { visible = true }
            compose.onNodeWithText("Keyboard").assertIsNotSelected()
        } finally { students.forEach(store::clear) }
    }

    private fun capture(name: String) {
        compose.waitForIdle()
        val directory = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        // PixelCopy waits for Compose to draw; UI-automation screenshots can capture the pre-draw window.
        val bitmap = compose.onRoot().captureToImage().asAndroidBitmap()
        File(directory, name).outputStream().use { bitmap.apply { setHasAlpha(false) }.compress(Bitmap.CompressFormat.PNG, 100, it) }
        bitmap.recycle()
    }
}
