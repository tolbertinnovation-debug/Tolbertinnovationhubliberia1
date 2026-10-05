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
    private var approved = emptySet<String>()
    @Before fun setUp() {
        SessionVault(compose.activity).clear()
        model = LearningViewModel(compose.activity.application, object : AccountApi {
            override suspend fun signIn(email: String, password: String): HubSession {
                if (email != "learner@example.invalid" || password != "test-only-password") throw HubAccessException("Check your email and password.")
                return HubSession("test-only", "test-only", "android-ui-learner", "Test Learner", approved, System.currentTimeMillis())
            }
            override suspend fun refresh(old: HubSession, onRotatedTokens: (HubSession) -> Unit) = old
        })
        model.study.clear("android-ui-learner")
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

    @Test fun projectManagementOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("project-mgmt")
        signIn()
        val title = "Complete Project Management Professional Certificate"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 314 entries · 158 video links"))
        compose.onNodeWithText("20 modules · 314 entries · 158 video links").assertIsDisplayed()
        snapshot("18-project-management-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val budgeting = course.lessons.first { it.title.contains("Practice: Earned Value Management (EVM)") }
        val agile = course.lessons.first { it.title.contains("Practice: Scrum Roles") }
        org.junit.Assert.assertEquals(570, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, budgeting, agile, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("19-project-management-practice")
            else if (assessment == budgeting) snapshot("22-project-management-budget-quiz")
            else if (assessment == agile) snapshot("23-project-management-agile-quiz")
            assessment.questions.forEachIndexed { index, question ->
                compose.onNodeWithText("Question ${index + 1} of ${assessment.questions.size}").assertExists()
                compose.onNodeWithTag("quiz-content").performScrollToNode(hasText(question.options[question.answer]))
                compose.onNodeWithText(question.options[question.answer]).performClick()
                compose.onNodeWithText(if (index < assessment.questions.lastIndex) "Next question" else "Review answers").performClick()
            }
            compose.onNodeWithText("Submit answers").performClick()
            compose.onNodeWithText("100%").assertExists()
            compose.runOnIdle {
                org.junit.Assert.assertEquals(100, model.study.score("android-ui-learner", assessment.id))
                org.junit.Assert.assertTrue(assessment.id in model.completed("project-mgmt"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "project-mgmt", assessment))
            }
        }
        snapshot("20-project-management-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun accountingBookkeepingOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("accounting-bookkeeping")
        signIn()
        val title = "Complete Accounting & Bookkeeping Program"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 279 entries · 140 video links"))
        compose.onNodeWithText("20 modules · 279 entries · 140 video links").assertIsDisplayed()
        snapshot("24-accounting-bookkeeping-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val budgeting = course.lessons.first { it.title.contains("Practice: Double-Entry Bookkeeping") }
        val agile = course.lessons.first { it.title.contains("Practice: Bank Reconciliation") }
        org.junit.Assert.assertEquals(475, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, budgeting, agile, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("25-accounting-bookkeeping-practice")
            else if (assessment == budgeting) snapshot("28-accounting-bookkeeping-double-entry")
            else if (assessment == agile) snapshot("29-accounting-bookkeeping-bank-reconciliation")
            assessment.questions.forEachIndexed { index, question ->
                compose.onNodeWithText("Question ${index + 1} of ${assessment.questions.size}").assertExists()
                compose.onNodeWithTag("quiz-content").performScrollToNode(hasText(question.options[question.answer]))
                compose.onNodeWithText(question.options[question.answer]).performClick()
                compose.onNodeWithText(if (index < assessment.questions.lastIndex) "Next question" else "Review answers").performClick()
            }
            compose.onNodeWithText("Submit answers").performClick()
            compose.onNodeWithText("100%").assertExists()
            compose.runOnIdle {
                org.junit.Assert.assertEquals(100, model.study.score("android-ui-learner", assessment.id))
                org.junit.Assert.assertTrue(assessment.id in model.completed("accounting-bookkeeping"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "accounting-bookkeeping", assessment))
            }
        }
        snapshot("26-accounting-bookkeeping-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun fullStackOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("webdev")
        signIn()
        val title = "Complete Full-Stack Web Development Program"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 374 entries · 194 video links"))
        compose.onNodeWithText("20 modules · 374 entries · 194 video links").assertIsDisplayed()
        snapshot("30-webdev-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val fetchPractice = course.lessons.first { it.title.contains("Practice: Fetch API") }
        val hooksPractice = course.lessons.first { it.title.contains("Practice: Hooks") }
        org.junit.Assert.assertEquals(633, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, fetchPractice, hooksPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("31-webdev-practice")
            else if (assessment == fetchPractice) snapshot("32-webdev-fetch")
            else if (assessment == hooksPractice) snapshot("33-webdev-hooks")
            assessment.questions.forEachIndexed { index, question ->
                compose.onNodeWithText("Question ${index + 1} of ${assessment.questions.size}").assertExists()
                compose.onNodeWithTag("quiz-content").performScrollToNode(hasText(question.options[question.answer]))
                compose.onNodeWithText(question.options[question.answer]).performClick()
                compose.onNodeWithText(if (index < assessment.questions.lastIndex) "Next question" else "Review answers").performClick()
            }
            compose.onNodeWithText("Submit answers").performClick()
            compose.onNodeWithText("100%").assertExists()
            compose.runOnIdle {
                org.junit.Assert.assertEquals(100, model.study.score("android-ui-learner", assessment.id))
                org.junit.Assert.assertTrue(assessment.id in model.completed("webdev"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "webdev", assessment))
            }
        }
        snapshot("34-webdev-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    private fun snapshot(name: String) {
        val directory = File(compose.activity.getExternalFilesDir(null), "screenshots").apply { mkdirs() }
        File(directory, "$name.png").outputStream().use {
            compose.onRoot().captureToImage().asAndroidBitmap().apply { setHasAlpha(false) }.compress(Bitmap.CompressFormat.PNG, 100, it)
        }
    }
    @Test fun graphicDesignOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("design")
        signIn()
        val title = "Complete Graphic Design Program: Canva & Adobe Photoshop"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("18 modules · 312 entries · 163 video links"))
        compose.onNodeWithText("18 modules · 312 entries · 163 video links").assertIsDisplayed()
        snapshot("36-design-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val masksPractice = course.lessons.first { it.title.contains("Practice: Masks") }
        val printPractice = course.lessons.first { it.title.contains("Practice: Print Resolution") }
        org.junit.Assert.assertEquals(542, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, masksPractice, printPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("37-design-practice")
            else if (assessment == masksPractice) snapshot("38-design-masks")
            else if (assessment == printPractice) snapshot("39-design-print")
            assessment.questions.forEachIndexed { index, question ->
                compose.onNodeWithText("Question ${index + 1} of ${assessment.questions.size}").assertExists()
                compose.onNodeWithTag("quiz-content").performScrollToNode(hasText(question.options[question.answer]))
                compose.onNodeWithText(question.options[question.answer]).performClick()
                compose.onNodeWithText(if (index < assessment.questions.lastIndex) "Next question" else "Review answers").performClick()
            }
            compose.onNodeWithText("Submit answers").performClick()
            compose.onNodeWithText("100%").assertExists()
            compose.runOnIdle {
                org.junit.Assert.assertEquals(100, model.study.score("android-ui-learner", assessment.id))
                org.junit.Assert.assertTrue(assessment.id in model.completed("design"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "design", assessment))
            }
        }
        snapshot("40-design-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }


}
