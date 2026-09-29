package org.tolbertinnovationhub.learning

import android.app.Application
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONObject
import org.tolbertinnovationhub.learning.data.*

class LearningViewModel(app: Application) : AndroidViewModel(app) {
    private val content = ContentRepository(app)
    private val vault = SessionVault(app)
    val study = StudyStore(app)
    private val prefs = app.getSharedPreferences("preferences", 0)
    private lateinit var api: HubApi
    @Volatile private var sessionGeneration = 0
    var catalog by mutableStateOf<List<CourseSummary>>(emptyList()); private set
    var course by mutableStateOf<Course?>(null); private set
    var lesson by mutableStateOf<Lesson?>(null); private set
    var session by mutableStateOf<HubSession?>(null); private set
    var loading by mutableStateOf(true); private set
    var busy by mutableStateOf(false); private set
    var notice by mutableStateOf<String?>(null); private set
    var localRevision by mutableIntStateOf(0); private set
    var theme by mutableStateOf(prefs.getString("theme", "System") ?: "System"); private set
    var fontSize by mutableFloatStateOf(prefs.getFloat("fontSize", 18f)); private set

    init { load() }
    fun load() = viewModelScope.launch {
        loading = true
        try {
            catalog = content.catalog()
            val config = withContext(Dispatchers.IO) {
                getApplication<Application>().assets.open("learning/config.json").bufferedReader().use { JSONObject(it.readText()) }
            }
            api = HubApi(config.getString("url"), config.getString("anonKey"))
            session = withContext(Dispatchers.IO) { vault.load()?.let(HubSession::parse) }
        } catch (e: Exception) { if (e is CancellationException) throw e; notice = "Unable to load the learning library. Please retry." }
        loading = false
        if (session != null) refresh()
    }
    fun dismissNotice() { notice = null }
    fun signIn(email: String, password: String) = viewModelScope.launch {
        if (busy || loading || !::api.isInitialized) return@launch
        if (email.isBlank() || password.isBlank()) { notice = "Enter your email and password."; return@launch }
        busy = true; notice = null
        val generation = sessionGeneration
        try {
            val verified = api.signIn(email, password)
            if (generation != sessionGeneration) return@launch
            withContext(Dispatchers.IO) { vault.save(verified.json()) }
            if (generation != sessionGeneration) { vault.clear(); return@launch }
            session = verified
            notice = "Welcome, ${verified.name.substringBefore(' ')}. Your approved courses are ready."
        } catch (e: Exception) {
            if (e is CancellationException) throw e
            notice = if (e is HubAccessException || e is HubNetworkException) e.message else "Could not complete sign-in. Please try again."
        } finally { busy = false }
    }
    fun refresh() = viewModelScope.launch {
        val old = session ?: return@launch
        if (busy || !::api.isInitialized) return@launch
        busy = true
        val generation = sessionGeneration
        try {
            val next = api.refresh(old) { rotated ->
                // Callback is on IO; the generation check prevents a logout from being undone.
                if (generation == sessionGeneration) {
                    vault.save(rotated.json())
                    if (generation != sessionGeneration) vault.clear()
                }
            }
            if (generation != sessionGeneration) return@launch
            withContext(Dispatchers.IO) { vault.save(next.json()) }
            if (generation != sessionGeneration) { vault.clear(); return@launch }
            session = next
            if (course != null && !next.canStudy(course!!.summary.id)) lesson = null
            notice = "Course access updated. App progress is saved on this device."
        } catch (e: Exception) {
            if (e is CancellationException) throw e
            if (generation != sessionGeneration) return@launch
            if (e is HubAccessException) { signOut(); notice = e.message }
            else {
                val cached = withContext(Dispatchers.IO) { vault.load()?.let(HubSession::parse) }
                if (generation == sessionGeneration && cached?.studentId == old.studentId) session = cached
                notice = "Could not refresh access. Previously approved courses remain available offline for up to 7 days after verification."
            }
        } finally { busy = false }
    }
    fun signOut() { sessionGeneration++; session = null; lesson = null; course = null; vault.clear(); localRevision++ }
    fun checkLocalAccess() {
        val c = course ?: return
        if (lesson != null && !canStudy(c.summary.id)) { lesson = null; notice = "Reconnect and refresh your course access to continue studying." }
    }
    fun canStudy(id: String) = session?.canStudy(id) == true
    fun openCourse(summary: CourseSummary, lessonId: String? = null) = viewModelScope.launch {
        if (loading) return@launch
        loading = true; lesson = null
        try {
            course = content.course(summary)
            if (lessonId != null && canStudy(summary.id)) course?.lessons?.find { it.id == lessonId }?.let(::openLesson)
        } catch (e: Exception) { if (e is CancellationException) throw e; notice = "This course could not be opened. Please try again." }
        finally { loading = false }
    }
    fun openLesson(value: Lesson) {
        val c = course ?: return
        if (!canStudy(c.summary.id)) { notice = "Sign in and refresh your approved course access to study this lesson."; return }
        lesson = value; study.remember(session!!.studentId, c.summary.id, value.id); localRevision++
    }
    fun back() { if (lesson != null) lesson = null else course = null }
    fun completeLesson() {
        val c = course ?: return; val l = lesson ?: return; val user = session ?: return
        if (!canStudy(c.summary.id) || l.kind == "quiz") return
        study.mark(user.studentId, c.summary.id, l.id); localRevision++
    }
    fun completeQuiz(score: Int) {
        val c = course ?: return; val l = lesson ?: return; val user = session ?: return
        if (!canStudy(c.summary.id) || l.kind != "quiz") return
        study.saveScore(user.studentId, l.id, score)
        if (QuizScorer.passed(score)) study.mark(user.studentId, c.summary.id, l.id)
        localRevision++
    }
    fun completed(id: String): Set<String> { localRevision; return session?.let { study.completed(it.studentId, id) }.orEmpty() }
    fun bookmarks(): Set<String> { localRevision; return session?.let { study.bookmarks(it.studentId) }.orEmpty() }
    fun toggleBookmark() {
        val c = course ?: return; val l = lesson ?: return; val user = session ?: return
        study.toggleBookmark(user.studentId, c.summary.id, l.id); localRevision++
    }
    fun saveNote(text: String) { val l = lesson ?: return; session?.let { study.saveNote(it.studentId, l.id, text) } }
    fun setTheme(value: String) { theme = value; prefs.edit().putString("theme", value).apply() }
    fun setFontSize(value: Float) { fontSize = value; prefs.edit().putFloat("fontSize", value).apply() }
    fun clearStudy() { session?.let { study.clear(it.studentId) }; localRevision++ }
}
