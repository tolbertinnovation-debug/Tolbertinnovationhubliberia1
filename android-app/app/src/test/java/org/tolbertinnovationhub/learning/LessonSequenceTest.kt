package org.tolbertinnovationhub.learning

import org.junit.Assert.*
import org.junit.Test
import org.tolbertinnovationhub.learning.data.LessonSequence

class LessonSequenceTest {
    private val order = listOf("reading", "quiz", "project", "next-module")
    @Test fun completesInOrderAndAllowsReview() {
        assertTrue(LessonSequence.unlocked(order, emptySet(), "reading"))
        assertFalse(LessonSequence.unlocked(order, emptySet(), "quiz"))
        assertTrue(LessonSequence.unlocked(order, setOf("reading"), "quiz"))
        assertFalse(LessonSequence.unlocked(order, setOf("reading"), "project"))
        assertTrue(LessonSequence.unlocked(order, setOf("reading", "quiz"), "reading"))
        assertTrue(LessonSequence.unlocked(order, setOf("reading", "quiz", "project"), "next-module"))
    }
    @Test fun oldOutOfOrderProgressCannotSkipGaps() {
        assertFalse(LessonSequence.unlocked(order, setOf("quiz", "project"), "next-module"))
        assertFalse(LessonSequence.unlocked(order, order.toSet(), "unknown"))
    }
}
