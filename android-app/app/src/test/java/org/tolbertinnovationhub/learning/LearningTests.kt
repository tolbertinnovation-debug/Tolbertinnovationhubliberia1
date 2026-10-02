package org.tolbertinnovationhub.learning

import org.junit.Assert.*
import org.junit.Test
import org.tolbertinnovationhub.learning.data.*
import org.tolbertinnovationhub.learning.ui.LessonDocument
import org.tolbertinnovationhub.learning.ui.LessonVideo

class LearningTests {
    @Test fun lessonVideoAcceptsOnlyAWellFormedYouTubeId() {
        assertTrue(LessonVideo.isPlayable("kBGcfVwf9aI"))
        for (bad in listOf("", "short", "kBGcfVwf9aI ", "kBGcfVwf9a", "kBGcfVwf9aIX",
                           "\"><script>", "../../etc", "kBGcfVwf9a?", "kBGcfVwf9a&")) {
            assertFalse(bad, LessonVideo.isPlayable(bad))
        }
        try {
            LessonVideo.embedUrl("\"><iframe src=evil>")
            fail("an unsupported id must not produce a URL")
        } catch (expected: IllegalArgumentException) {
        }
    }

    @Test fun lessonVideoPlaysThePrivacyEnhancedEmbedWithoutAutoplay() {
        val url = LessonVideo.embedUrl("kBGcfVwf9aI")
        assertEquals("https://www.youtube-nocookie.com/embed/kBGcfVwf9aI?playsinline=1&rel=0&modestbranding=1", url)
        assertFalse(url.contains("autoplay"))
        assertEquals("https://www.youtube.com/watch?v=kBGcfVwf9aI", LessonVideo.watchUrl("kBGcfVwf9aI"))
    }

    @Test fun onlyThePlayersOwnPagesStayInsideTheApp() {
        // The embed and what it loads stay put.
        assertTrue(LessonVideo.staysInPlayer("https://www.youtube-nocookie.com/embed/kBGcfVwf9aI"))
        assertTrue(LessonVideo.staysInPlayer("https://www.youtube.com/embed/kBGcfVwf9aI"))
        // A watch page means the learner tapped through: hand it to their YouTube app.
        assertFalse(LessonVideo.staysInPlayer("https://www.youtube.com/watch?v=kBGcfVwf9aI"))
        // Anything else is not the player and must never load in this view.
        for (outside in listOf("https://example.com/", "https://evil.test/youtube.com/embed/x",
                               "https://notyoutube.com/embed/x", "https://youtube.com.evil.test/embed/x",
                               "about:blank", "javascript:alert(1)", "")) {
            assertFalse(outside, LessonVideo.staysInPlayer(outside))
        }
    }

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
        assertNotNull(org.jsoup.Jsoup.parse(result).selectFirst(".overview-text table"))
        assertTrue(result.contains("A diagram")); assertTrue(result.contains("default-src 'none'"))
    }
}
