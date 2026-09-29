package org.tolbertinnovationhub.learning

import org.junit.Assert.*
import org.junit.Test
import org.tolbertinnovationhub.learning.data.*
import org.tolbertinnovationhub.learning.ui.LessonDocument

class LearningTests {
    @Test fun quizUsesRealAnswersAndRequiresEveryResponse() {
        val questions = listOf(Question("One?", listOf("A", "B"), 1, "Because B"), Question("Two?", listOf("A", "B"), 0, "Because A"))
        assertEquals(100, QuizScorer.score(questions, listOf(1, 0)))
        assertEquals(50, QuizScorer.score(questions, listOf(1, 1)))
        assertTrue(QuizScorer.passed(70)); assertFalse(QuizScorer.passed(69))
        assertThrows(IllegalArgumentException::class.java) { QuizScorer.score(questions, listOf(1, -1)) }
        assertThrows(IllegalArgumentException::class.java) { QuizScorer.score(emptyList(), emptyList()) }
    }
    @Test fun accessIsCourseScopedAndExpiresOffline() {
        val session = HubSession("access", "refresh", "TIH-STU-TEST", "Test", setOf("android"), 1000)
        assertTrue(session.canStudy("android", 1001))
        assertFalse(session.canStudy("computer-literacy", 1001))
        assertFalse(session.canStudy("android", 999))
        assertFalse(session.canStudy("android", 1000 + HubSession.OFFLINE_WINDOW_MS))
        assertTrue(session.copy(grants = setOf("wassce-all")).canStudy("wassce-mathematics", 1001))
        assertFalse(session.copy(grants = setOf("wassce-all")).canStudy("android", 1001))
        assertEquals(session, HubSession.parse(session.json()))
    }
    @Test fun documentRemovesActiveContentButKeepsTeachingStructure() {
        val result = LessonDocument.html("<script>alert(1)</script><iframe src='https://evil.test'></iframe><p onclick='run()'>Lesson</p><table><tr><td>Cell</td></tr></table><details><summary>Answer</summary>42</details><svg viewBox='0 0 2 2'><path d='M0 0'/></svg><a href='javascript:run()'>Bad</a><img src='https://evil.test/a' alt='A diagram'>", "@import url(https://evil.test/a);", 20)
        assertFalse(result.contains("<script")); assertFalse(result.contains("<iframe")); assertFalse(result.contains("onclick"))
        assertFalse(result.contains("javascript:")); assertFalse(result.contains("https://evil.test"))
        assertTrue(result.contains("<table>")); assertTrue(result.contains("<details>")); assertTrue(result.contains("<svg"))
        assertTrue(result.contains("A diagram")); assertTrue(result.contains("default-src 'none'"))
    }
}
