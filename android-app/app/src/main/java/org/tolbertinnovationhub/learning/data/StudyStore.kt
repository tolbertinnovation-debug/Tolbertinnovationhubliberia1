package org.tolbertinnovationhub.learning.data

import android.content.Context
import java.security.MessageDigest

/** Local-only state: namespaced by the verified student ID, never by a typed email. */
class StudyStore(private val context: Context) {
    private fun prefs(student: String) = context.getSharedPreferences(
        "study_" + MessageDigest.getInstance("SHA-256").digest(student.toByteArray()).joinToString("") { "%02x".format(it) }, Context.MODE_PRIVATE)
    fun completed(student: String, course: String): Set<String> = prefs(student).getStringSet("done:$course", emptySet()).orEmpty().toSet()
    fun mark(student: String, course: String, lesson: String) {
        prefs(student).edit().putStringSet("done:$course", completed(student, course) + lesson).apply()
    }
    fun bookmarks(student: String): Set<String> = prefs(student).getStringSet("bookmarks", emptySet()).orEmpty().toSet()
    fun toggleBookmark(student: String, course: String, lesson: String) {
        val key = "$course/$lesson"; val old = bookmarks(student)
        prefs(student).edit().putStringSet("bookmarks", if (key in old) old - key else old + key).apply()
    }
    fun note(student: String, lesson: String) = prefs(student).getString("note:$lesson", "").orEmpty()
    fun saveNote(student: String, lesson: String, value: String) { prefs(student).edit().putString("note:$lesson", value.take(20000)).apply() }
    fun score(student: String, lesson: String) = prefs(student).getInt("score:$lesson", -1)
    fun saveScore(student: String, lesson: String, score: Int) {
        prefs(student).edit().putInt("score:$lesson", maxOf(score(student, lesson), score)).apply()
    }
    fun remember(student: String, course: String, lesson: String) {
        prefs(student).edit().putString("lastCourse", course).putString("lastLesson", lesson).apply()
    }
    fun last(student: String) = prefs(student).getString("lastCourse", null) to prefs(student).getString("lastLesson", null)
    fun quizDraft(student: String, course: String, lesson: Lesson): QuizDraft? =
        QuizDraftCodec.decode(lesson, prefs(student).getString("draft:$course:${lesson.id}", null))
    fun saveQuizDraft(student: String, course: String, lesson: Lesson, draft: QuizDraft?) {
        val key = "draft:$course:${lesson.id}"
        val editor = prefs(student).edit()
        if (draft == null) editor.remove(key) else editor.putString(key, QuizDraftCodec.encode(lesson, draft))
        editor.apply()
    }
    fun clear(student: String) { prefs(student).edit().clear().apply() }
}
