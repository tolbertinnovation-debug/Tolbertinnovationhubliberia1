package org.tolbertinnovationhub.learning

import org.junit.Assert.*
import org.junit.Test
import org.json.JSONObject
import org.tolbertinnovationhub.learning.data.*

class QuizDraftTests {
    private val lesson = Lesson("draft-test", "Practice", "", 1, "quiz", false, "", false, "",
        listOf(Question("Input device?", listOf("Keyboard", "Screen"), 0, "Keyboard supplies input."),
            Question("Portable computer?", listOf("Laptop", "Desktop"), 0, "A laptop is portable.")))
    @Test fun restoresUnfinishedAnswersAndPosition() {
        val draft = QuizDraft(listOf(1, -1), 1)
        assertEquals(draft, QuizDraftCodec.decode(lesson, QuizDraftCodec.encode(lesson, draft)))
    }
    @Test fun rejectsStaleContentAndCorruptAnswers() {
        val raw = QuizDraftCodec.encode(lesson, QuizDraft(listOf(0, -1), 1))
        val first = lesson.questions.first()
        for (replacement in listOf(first.copy(question = "Changed?"), first.copy(options = first.options.reversed()),
            first.copy(answer = 1), first.copy(explanation = "Updated explanation"))) {
            assertNull(QuizDraftCodec.decode(lesson.copy(questions = listOf(replacement, lesson.questions.last())), raw))
        }
        for (invalid in listOf("not JSON", "{}", JSONObject(raw).put("current", 99).toString(),
            JSONObject(raw).put("answers", org.json.JSONArray(listOf(8, -1))).toString(),
            JSONObject(raw).put("answers", org.json.JSONArray(listOf("0", -1))).toString())) {
            assertNull(QuizDraftCodec.decode(lesson, invalid))
        }
        assertNull(QuizDraftCodec.decode(lesson, null))
        assertFalse(QuizDraftCodec.valid(lesson, QuizDraft(listOf(0), 0)))
    }
}
