package org.tolbertinnovationhub.learning.data

import org.json.JSONArray
import org.json.JSONObject
import java.security.MessageDigest

/** An unfinished attempt only: it never grants completion or restores a submitted score. */
data class QuizDraft(val answers: List<Int>, val current: Int)

object QuizDraftCodec {
    private fun fingerprint(lesson: Lesson): String {
        val content = JSONArray(lesson.questions.map { q ->
            JSONArray().put(q.question).put(JSONArray(q.options)).put(q.answer).put(q.explanation)
        }).toString()
        return MessageDigest.getInstance("SHA-256").digest(content.toByteArray(Charsets.UTF_8))
            .joinToString("") { "%02x".format(it) }
    }
    fun valid(lesson: Lesson, draft: QuizDraft): Boolean =
        lesson.questions.isNotEmpty() && draft.current in lesson.questions.indices &&
            draft.answers.size == lesson.questions.size && draft.answers.indices.all {
                draft.answers[it] == -1 || draft.answers[it] in lesson.questions[it].options.indices
            }
    fun encode(lesson: Lesson, draft: QuizDraft): String {
        require(valid(lesson, draft)) { "Invalid quiz draft" }
        return JSONObject().put("version", 1).put("content", fingerprint(lesson))
            .put("answers", JSONArray(draft.answers)).put("current", draft.current).toString()
    }
    fun decode(lesson: Lesson, raw: String?): QuizDraft? = runCatching {
        if (raw == null) return@runCatching null
        val json = JSONObject(raw)
        if (json.getInt("version") != 1 || json.getString("content") != fingerprint(lesson)) return@runCatching null
        val values = json.getJSONArray("answers")
        // Reject corrupt types rather than accepting JSONObject's number coercion.
        val answers = (0 until values.length()).map { values.get(it) as Int }
        QuizDraft(answers, json.get("current") as Int).takeIf { valid(lesson, it) }
    }.getOrNull()
}
