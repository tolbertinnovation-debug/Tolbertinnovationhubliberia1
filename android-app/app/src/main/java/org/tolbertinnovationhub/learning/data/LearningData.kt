package org.tolbertinnovationhub.learning.data

import android.content.Context
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject

data class CourseSummary(
    val id: String, val title: String, val description: String, val category: String,
    val level: String, val image: String, val lessonCount: Int, val moduleCount: Int,
    val videoCount: Int, val quizCount: Int, val outcomes: List<String>
)
data class Question(val question: String, val options: List<String>, val answer: Int, val explanation: String)
data class Lesson(
    val id: String, val title: String, val duration: String, val module: Int,
    val kind: String, val isFinal: Boolean, val videoId: String, val sharedVideo: Boolean,
    val html: String, val questions: List<Question>
)
data class LearningModule(val title: String, val lessons: List<Lesson>)
/** Existing written course information from the Learning Hub, carried across as-is. */
data class Faq(val question: String, val answer: String)
data class Instructor(val name: String, val title: String, val bio: String)
data class Course(
    val summary: CourseSummary, val modules: List<LearningModule>, val css: String,
    val about: List<String> = emptyList(), val requirements: List<String> = emptyList(),
    val faqs: List<Faq> = emptyList(), val instructor: Instructor? = null
) {
    val lessons get() = modules.flatMap { it.lessons }
}

fun JSONArray.objects(): List<JSONObject> = (0 until length()).map { getJSONObject(it) }
fun JSONArray.strings(): List<String> = (0 until length()).map { getString(it) }

object ContentParser {
    fun summary(o: JSONObject) = CourseSummary(
        o.getString("id"), o.getString("title"), o.optString("description"), o.optString("category"),
        o.optString("level"), o.optString("image"), o.optInt("lessonCount"), o.optInt("moduleCount"),
        o.optInt("videoCount"), o.optInt("quizCount"), o.optJSONArray("outcomes")?.strings().orEmpty()
    )
    fun course(o: JSONObject, summary: CourseSummary) = Course(summary,
        o.getJSONArray("modules").objects().map { m ->
            LearningModule(m.getString("title"), m.getJSONArray("lessons").objects().map { l ->
                Lesson(l.getString("id"), l.getString("title"), l.optString("duration"), l.getInt("module"),
                    l.getString("kind"), l.optBoolean("final"), l.optString("videoId"), l.optBoolean("sharedVideo"),
                    l.optString("html"), l.getJSONArray("questions").objects().map { q ->
                        Question(q.getString("question"), q.getJSONArray("options").strings(), q.getInt("answer"), q.optString("explanation"))
                    })
            })
        }, o.optString("css"),
        o.optJSONArray("about")?.strings().orEmpty(),
        o.optJSONArray("requirements")?.strings().orEmpty(),
        o.optJSONArray("faqs")?.objects()
            ?.map { Faq(it.optString("question"), it.optString("answer")) }
            ?.filter { it.question.isNotBlank() && it.answer.isNotBlank() }
            .orEmpty(),
        o.optJSONObject("instructor")?.let {
            val name = it.optString("name")
            if (name.isBlank()) null else Instructor(name, it.optString("title"), it.optString("bio"))
        })
}

class ContentRepository(private val context: Context) {
    private val cache = linkedMapOf<String, Course>()
    suspend fun organization(): Organization = withContext(Dispatchers.IO) { Organization.parse(JSONObject(read("organization.json"))) }
    suspend fun catalog(): List<CourseSummary> = withContext(Dispatchers.IO) {
        JSONArray(read("catalog.json")).objects().map(ContentParser::summary)
    }
    suspend fun course(summary: CourseSummary): Course = withContext(Dispatchers.IO) {
        cache[summary.id] ?: ContentParser.course(JSONObject(read("courses/${summary.id}.json")), summary).also {
            if (cache.size >= 2) cache.remove(cache.keys.first())
            cache[summary.id] = it
        }
    }
    private fun read(path: String) = context.assets.open("learning/$path").bufferedReader().use { it.readText() }
}

/** Practice scores are not credentials or official certificate decisions. */
object QuizScorer {
    fun score(questions: List<Question>, answers: List<Int>): Int {
        require(questions.isNotEmpty()) { "This assessment has no questions." }
        require(answers.size == questions.size && answers.indices.all { answers[it] in questions[it].options.indices }) { "Answer every question." }
        return (questions.indices.count { answers[it] == questions[it].answer } * 100.0 / questions.size).toInt()
    }
    fun passed(score: Int) = score >= 70
}
