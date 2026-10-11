package org.tolbertinnovationhub.learning

import androidx.activity.ComponentActivity
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import org.junit.Assert.*
import org.junit.Rule
import org.junit.Test
import org.tolbertinnovationhub.learning.data.*
import org.tolbertinnovationhub.learning.ui.LearningApp
import org.tolbertinnovationhub.learning.ui.TihTheme

class SequentialTopicsUiTest {
    @get:Rule val compose = createAndroidComposeRule<ComponentActivity>()
    @Test fun cannotSkipReadingOrFailedQuizAndKeepsUnlockAfterRestart() {
        lateinit var model: LearningViewModel
        val api = object : AccountApi {
            override suspend fun signIn(email: String, password: String) =
                HubSession("test", "test", "sequence-student", "Sequence Learner", setOf("computer-literacy"), System.currentTimeMillis())
            override suspend fun refresh(old: HubSession, onRotatedTokens: (HubSession) -> Unit) = old
        }
        compose.runOnUiThread { model = LearningViewModel(compose.activity.application, api); model.study.clear("sequence-student") }
        compose.setContent { TihTheme { LearningApp(model) } }
        compose.waitUntil(30000) { !model.loading }
        compose.runOnIdle { model.signIn("sequence@example.com", "test") }
        compose.waitUntil(30000) { model.session?.studentId == "sequence-student" }
        compose.runOnIdle { model.openCourse(model.catalog.first { it.id == "computer-literacy" }) }
        compose.waitUntil(30000) { !model.loading && model.course != null }
        val course = model.course!!
        val quizIndex = course.lessons.indexOfFirst { it.kind == "quiz" }
        assertTrue(quizIndex > 0 && quizIndex < course.lessons.lastIndex)
        compose.runOnIdle {
            model.openLesson(course.lessons[quizIndex])
            assertNull(model.lesson)
            assertFalse(model.topicUnlocked(course.lessons.last().id))
            course.lessons.take(quizIndex).forEach { model.openLesson(it); model.completeLesson() }
            assertTrue(model.topicUnlocked(course.lessons[quizIndex].id))
            model.openLesson(course.lessons[quizIndex]); model.completeQuiz(69)
            assertFalse(model.topicUnlocked(course.lessons[quizIndex + 1].id))
            model.completeQuiz(70)
            assertTrue(model.topicUnlocked(course.lessons[quizIndex + 1].id))
            assertTrue(model.topicUnlocked(course.lessons.first().id))
            assertTrue(LessonSequence.unlocked(course.lessons.map { it.id }, StudyStore(compose.activity).completed("sequence-student", course.summary.id), course.lessons[quizIndex + 1].id))
        }
    }
}
