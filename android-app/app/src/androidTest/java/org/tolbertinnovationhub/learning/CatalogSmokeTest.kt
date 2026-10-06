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

    @Test fun entrepreneurshipOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("entrepreneurship")
        signIn()
        val title = "Complete Entrepreneurship & Startup Launch Program"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 351 entries · 178 video links"))
        compose.onNodeWithText("20 modules · 351 entries · 178 video links").assertIsDisplayed()
        snapshot("42-entrepreneurship-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val customerPractice = course.lessons.first { it.title.contains("Practice: Customer Interviews") }
        val breakEvenPractice = course.lessons.first { it.title.contains("Practice: Break-even Analysis") }
        org.junit.Assert.assertEquals(580, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, customerPractice, breakEvenPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("43-entrepreneurship-practice")
            else if (assessment == customerPractice) snapshot("44-entrepreneurship-customers")
            else if (assessment == breakEvenPractice) snapshot("45-entrepreneurship-break-even")
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
                org.junit.Assert.assertTrue(assessment.id in model.completed("entrepreneurship"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "entrepreneurship", assessment))
            }
        }
        snapshot("46-entrepreneurship-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun androidOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("android")
        signIn()
        val title = "Complete Android App Development Program (Kotlin)"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("19 modules · 304 entries · 158 video links"))
        compose.onNodeWithText("19 modules · 304 entries · 158 video links").assertIsDisplayed()
        snapshot("48-android-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val roomPractice = course.lessons.first { it.title.contains("Practice: Room Database") }
        val firebasePractice = course.lessons.first { it.title.contains("Practice: Firebase AI Features") }
        org.junit.Assert.assertEquals(533, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, roomPractice, firebasePractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("49-android-practice")
            else if (assessment == roomPractice) snapshot("50-android-room")
            else if (assessment == firebasePractice) snapshot("51-android-firebase")
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
                org.junit.Assert.assertTrue(assessment.id in model.completed("android"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "android", assessment))
            }
        }
        snapshot("52-android-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun officeOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("office")
        signIn()
        val title = "Complete Microsoft Office Mastery Professional Certificate"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 377 entries · 198 video links"))
        compose.onNodeWithText("20 modules · 377 entries · 198 video links").assertIsDisplayed()
        snapshot("54-office-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val lookupPractice = course.lessons.first { it.title.contains("Practice: VLOOKUP") }
        val copilotPractice = course.lessons.first { it.title.contains("Practice: AI in Excel") }
        org.junit.Assert.assertEquals(637, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, lookupPractice, copilotPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("55-office-practice")
            else if (assessment == lookupPractice) snapshot("56-office-lookup")
            else if (assessment == copilotPractice) snapshot("57-office-copilot")
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
                org.junit.Assert.assertTrue(assessment.id in model.completed("office"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "office", assessment))
            }
        }
        snapshot("58-office-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun leadershipOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("leadership")
        signIn()
        val title = "Complete Business Leadership Masterclass"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 320 entries · 165 video links"))
        compose.onNodeWithText("20 modules · 320 entries · 165 video links").assertIsDisplayed()
        snapshot("60-leadership-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val swotPractice = course.lessons.first { it.title.contains("Practice: SWOT Analysis") }
        val cashPractice = course.lessons.first { it.title.contains("Practice: Cash Flow Management") }
        org.junit.Assert.assertEquals(565, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, swotPractice, cashPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("61-leadership-practice")
            else if (assessment == swotPractice) snapshot("62-leadership-swot")
            else if (assessment == cashPractice) snapshot("63-leadership-cash")
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
                org.junit.Assert.assertTrue(assessment.id in model.completed("leadership"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "leadership", assessment))
            }
        }
        snapshot("64-leadership-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun grantOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("grant-writing")
        signIn()
        val title = "Complete Grant Writing & Fundraising Professional Certificate"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 320 entries · 166 video links"))
        compose.onNodeWithText("20 modules · 320 entries · 166 video links").assertIsDisplayed()
        snapshot("66-grant-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val logframePractice = course.lessons.first { it.title.contains("Practice: Logical Framework (Logframe)") }
        val budgetPractice = course.lessons.first { it.title.contains("Practice: Indirect Costs") }
        org.junit.Assert.assertEquals(564, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, logframePractice, budgetPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("67-grant-practice")
            else if (assessment == logframePractice) snapshot("68-grant-logframe")
            else if (assessment == budgetPractice) snapshot("69-grant-budget")
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
                org.junit.Assert.assertTrue(assessment.id in model.completed("grant-writing"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "grant-writing", assessment))
            }
        }
        snapshot("70-grant-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun englishOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("english-success")
        signIn()
        val title = "Complete English for Academic & Professional Success Certificate"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 332 entries · 170 video links"))
        compose.onNodeWithText("20 modules · 332 entries · 170 video links").assertIsDisplayed()
        snapshot("72-english-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val grammarPractice = course.lessons.first { it.title.contains("Practice: Subject-Verb Agreement") }
        val examPractice = course.lessons.first { it.title.contains("Practice: TOEFL Introduction") }
        org.junit.Assert.assertEquals(616, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, grammarPractice, examPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("73-english-practice")
            else if (assessment == grammarPractice) snapshot("74-english-grammar")
            else if (assessment == examPractice) snapshot("75-english-exam")
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
                org.junit.Assert.assertTrue(assessment.id in model.completed("english-success"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "english-success", assessment))
            }
        }
        snapshot("76-english-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }


    @Test fun ieltsOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("ielts")
        signIn()
        val title = "IELTS Masterclass: Beginner to Band 9"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("22 modules · 238 entries · 127 video links"))
        compose.onNodeWithText("22 modules · 238 entries · 127 video links").assertIsDisplayed()
        snapshot("78-ielts-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val grammarPractice = course.lessons.first { it.title.contains("Quiz: True/False/Not Given") }
        val examPractice = course.lessons.first { it.title.contains("Quiz: Line Graphs") }
        org.junit.Assert.assertEquals(376, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, grammarPractice, examPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("79-ielts-practice")
            else if (assessment == grammarPractice) snapshot("80-ielts-reading")
            else if (assessment == examPractice) snapshot("81-ielts-chart")
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
                org.junit.Assert.assertTrue(assessment.id in model.completed("ielts"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "ielts", assessment))
            }
        }
        snapshot("82-ielts-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun toeflOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("toefl")
        signIn()
        val title = "Complete TOEFL iBT Course: Grammar, Vocabulary & All Four Sections"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("10 modules · 184 entries · 84 video links"))
        compose.onNodeWithText("10 modules · 184 entries · 84 video links").assertIsDisplayed()
        snapshot("84-toefl-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val grammarPractice = course.lessons.first { it.title.contains("Practice: Active & Passive Voice") }
        val examPractice = course.lessons.first { it.title.contains("Practice: Main Ideas") }
        org.junit.Assert.assertEquals(263, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, grammarPractice, examPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("85-toefl-practice")
            else if (assessment == grammarPractice) snapshot("86-toefl-grammar")
            else if (assessment == examPractice) snapshot("87-toefl-reading")
            assessment.questions.forEachIndexed { index, question ->
                compose.onNodeWithText("Question ${index + 1} of ${assessment.questions.size}").assertExists()
                val answer = hasText(question.options[question.answer]) and SemanticsMatcher.expectValue(
                    androidx.compose.ui.semantics.SemanticsProperties.Role, androidx.compose.ui.semantics.Role.RadioButton)
                compose.onNodeWithTag("quiz-content").performScrollToNode(answer)
                compose.onNode(answer).performClick()
                compose.onNodeWithText(if (index < assessment.questions.lastIndex) "Next question" else "Review answers").performClick()
            }
            compose.onNodeWithText("Submit answers").performClick()
            compose.onNodeWithText("100%").assertExists()
            compose.runOnIdle {
                org.junit.Assert.assertEquals(100, model.study.score("android-ui-learner", assessment.id))
                org.junit.Assert.assertTrue(assessment.id in model.completed("toefl"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "toefl", assessment))
            }
        }
        snapshot("88-toefl-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun cybersecurityOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("cybersecurity")
        signIn()
        val title = "Complete Cybersecurity Fundamentals & Ethical Hacking Program"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 328 entries · 170 video links"))
        compose.onNodeWithText("20 modules · 328 entries · 170 video links").assertIsDisplayed()
        snapshot("90-cybersecurity-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.kind == "quiz" }
        val final = course.lessons.first { it.isFinal }
        val grammarPractice = course.lessons.first { it.title.contains("Practice: Permissions") }
        val examPractice = course.lessons.first { it.title.contains("Practice: SQL Injection (Concepts)") }
        org.junit.Assert.assertEquals(75, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, grammarPractice, examPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("91-cybersecurity-practice")
            else if (assessment == grammarPractice) snapshot("92-cybersecurity-grammar")
            else if (assessment == examPractice) snapshot("93-cybersecurity-reading")
            assessment.questions.forEachIndexed { index, question ->
                compose.onNodeWithText("Question ${index + 1} of ${assessment.questions.size}").assertExists()
                val answer = hasText(question.options[question.answer]) and SemanticsMatcher.expectValue(
                    androidx.compose.ui.semantics.SemanticsProperties.Role, androidx.compose.ui.semantics.Role.RadioButton)
                compose.onNodeWithTag("quiz-content").performScrollToNode(answer)
                compose.onNode(answer).performClick()
                compose.onNodeWithText(if (index < assessment.questions.lastIndex) "Next question" else "Review answers").performClick()
            }
            compose.onNodeWithText("Submit answers").performClick()
            compose.onNodeWithText("100%").assertExists()
            compose.runOnIdle {
                org.junit.Assert.assertEquals(100, model.study.score("android-ui-learner", assessment.id))
                org.junit.Assert.assertTrue(assessment.id in model.completed("cybersecurity"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "cybersecurity", assessment))
            }
        }
        snapshot("94-cybersecurity-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun marketingOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("marketing")
        signIn()
        val title = "Complete Digital Marketing Professional Certificate"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("20 modules · 355 entries · 189 video links"))
        compose.onNodeWithText("20 modules · 355 entries · 189 video links").assertIsDisplayed()
        snapshot("96-marketing-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.title.contains("Practice: Target Audience Identification") }
        val final = course.lessons.first { it.isFinal }
        val emailPractice = course.lessons.first { it.title.contains("Practice: A/B Testing") }
        val roiPractice = course.lessons.first { it.title.contains("Practice: ROI Measurement") }
        org.junit.Assert.assertEquals(72, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, emailPractice, roiPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("97-marketing-practice")
            else if (assessment == emailPractice) snapshot("98-marketing-email")
            else if (assessment == roiPractice) snapshot("99-marketing-roi")
            assessment.questions.forEachIndexed { index, question ->
                compose.onNodeWithText("Question ${index + 1} of ${assessment.questions.size}").assertExists()
                val answer = hasText(question.options[question.answer]) and SemanticsMatcher.expectValue(
                    androidx.compose.ui.semantics.SemanticsProperties.Role, androidx.compose.ui.semantics.Role.RadioButton)
                compose.onNodeWithTag("quiz-content").performScrollToNode(answer)
                compose.onNode(answer).performClick()
                compose.onNodeWithText(if (index < assessment.questions.lastIndex) "Next question" else "Review answers").performClick()
            }
            compose.onNodeWithText("Submit answers").performClick()
            compose.onNodeWithText("100%").assertExists()
            compose.runOnIdle {
                org.junit.Assert.assertEquals(100, model.study.score("android-ui-learner", assessment.id))
                org.junit.Assert.assertTrue(assessment.id in model.completed("marketing"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "marketing", assessment))
            }
        }
        snapshot("100-marketing-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

    @Test fun satOverviewPracticeAndFinalUseNativeStudyRecords() {
        approved = setOf("sat")
        signIn()
        val title = "Complete Digital SAT Prep: Reading & Writing + Math (400–1600)"
        compose.onNodeWithTag("course-list").performScrollToNode(hasText(title))
        compose.onNodeWithText(title).performClick()
        compose.waitUntil(30000) { compose.onAllNodesWithText("Course overview", useUnmergedTree = true).fetchSemanticsNodes().isNotEmpty() }
        val screen = compose.onAllNodes(hasScrollAction())[0]
        screen.performScrollToNode(hasText("14 modules · 216 entries · 102 video links"))
        compose.onNodeWithText("14 modules · 216 entries · 102 video links").assertIsDisplayed()
        snapshot("102-sat-overview")
        screen.performScrollToNode(hasText("Start learning"))
        compose.onNodeWithText("Start learning").assertIsEnabled()
        val course = model.course!!
        val practice = course.lessons.first { it.title.contains("Practice: Welcome to the Course") }
        val final = course.lessons.first { it.isFinal }
        val readingPractice = course.lessons.first { it.title.contains("Practice: Making Inferences") }
        val mathPractice = course.lessons.first { it.title.contains("Practice: Linear Equations") }
        org.junit.Assert.assertEquals(300, course.lessons.flatMap { it.questions }.map { it.question }.toSet().size)
        for (assessment in listOf(practice, readingPractice, mathPractice, final)) {
            compose.runOnIdle { model.openLesson(assessment) }
            compose.onNodeWithText("Question 1 of ${assessment.questions.size}").assertIsDisplayed()
            if (assessment.isFinal) compose.onNodeWithText("FINAL ASSESSMENT").assertExists()
            else if (assessment == practice) snapshot("103-sat-practice")
            else if (assessment == readingPractice) snapshot("104-sat-reading")
            else if (assessment == mathPractice) snapshot("105-sat-algebra")
            assessment.questions.forEachIndexed { index, question ->
                compose.onNodeWithText("Question ${index + 1} of ${assessment.questions.size}").assertExists()
                val answer = hasText(question.options[question.answer]) and SemanticsMatcher.expectValue(
                    androidx.compose.ui.semantics.SemanticsProperties.Role, androidx.compose.ui.semantics.Role.RadioButton)
                compose.onNodeWithTag("quiz-content").performScrollToNode(answer)
                compose.onNode(answer).performClick()
                compose.onNodeWithText(if (index < assessment.questions.lastIndex) "Next question" else "Review answers").performClick()
            }
            compose.onNodeWithText("Submit answers").performClick()
            compose.onNodeWithText("100%").assertExists()
            compose.runOnIdle {
                org.junit.Assert.assertEquals(100, model.study.score("android-ui-learner", assessment.id))
                org.junit.Assert.assertTrue(assessment.id in model.completed("sat"))
                org.junit.Assert.assertNull(model.study.quizDraft("android-ui-learner", "sat", assessment))
            }
        }
        snapshot("106-sat-result")
        compose.onNodeWithText("Course overview").performClick()
        compose.onNodeWithText(title).assertExists()
    }

}
