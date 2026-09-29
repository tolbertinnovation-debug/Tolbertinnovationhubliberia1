package org.tolbertinnovationhub.learning.data

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import okhttp3.HttpUrl.Companion.toHttpUrl
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject
import java.io.IOException
import java.util.concurrent.TimeUnit

data class HubSession(val accessToken: String, val refreshToken: String, val studentId: String,
    val name: String, val grants: Set<String>, val verifiedAt: Long) {
    fun canStudy(course: String, now: Long = System.currentTimeMillis()): Boolean =
        now >= verifiedAt && now - verifiedAt < OFFLINE_WINDOW_MS &&
            (course in grants || (course.startsWith("wassce-") && "wassce-all" in grants))
    fun json() = JSONObject().put("accessToken", accessToken).put("refreshToken", refreshToken)
        .put("studentId", studentId).put("name", name).put("grants", JSONArray(grants.toList())).put("verifiedAt", verifiedAt).toString()
    companion object {
        const val OFFLINE_WINDOW_MS = 7L * 24 * 60 * 60 * 1000
        fun parse(value: String): HubSession {
            val o = JSONObject(value)
            return HubSession(o.getString("accessToken"), o.getString("refreshToken"), o.getString("studentId"),
                o.getString("name"), o.getJSONArray("grants").strings().toSet(), o.getLong("verifiedAt"))
        }
    }
}
class HubAccessException(message: String) : Exception(message)
class HubNetworkException(message: String) : IOException(message)

/** Existing authenticated endpoints only. Never reads the student roster or writes payments/progress. */
class HubApi(private val base: String, private val publishableKey: String,
    private val client: OkHttpClient = OkHttpClient.Builder().connectTimeout(20, TimeUnit.SECONDS)
        .readTimeout(25, TimeUnit.SECONDS).callTimeout(45, TimeUnit.SECONDS).followRedirects(false).build()) {
    suspend fun signIn(email: String, password: String): HubSession = withContext(Dispatchers.IO) {
        val token = JSONObject(request("auth/v1/token?grant_type=password", JSONObject().put("email", email.trim()).put("password", password)))
        profile(token.getString("access_token"), token.getString("refresh_token"))
    }
    suspend fun refresh(old: HubSession, onRotatedTokens: (HubSession) -> Unit = {}): HubSession = withContext(Dispatchers.IO) {
        val token = JSONObject(request("auth/v1/token?grant_type=refresh_token", JSONObject().put("refresh_token", old.refreshToken)))
        // Persist newly rotated credentials even if the subsequent profile read loses its connection.
        // This does not extend the cached grant's verification time or grant any new access.
        onRotatedTokens(old.copy(accessToken = token.getString("access_token"), refreshToken = token.getString("refresh_token")))
        val next = profile(token.getString("access_token"), token.getString("refresh_token"))
        if (next.studentId != old.studentId) throw HubAccessException("Your account changed. Please sign in again.")
        next
    }
    private fun profile(access: String, refresh: String): HubSession {
        val rows = JSONArray(request("rest/v1/rpc/student_me", JSONObject(), access))
        if (rows.length() != 1) throw HubAccessException("This account is not yet linked to a TIH student profile. Contact TIH support for account help.")
        val student = rows.getJSONObject(0)
        if (student.optString("status") != "active") throw HubAccessException("Your TIH account is not active. Please contact TIH support.")
        val id = student.getString("id")
        val url = "$base/rest/v1/enrollments".toHttpUrl().newBuilder()
            .addQueryParameter("student_id", "eq.$id")
            .addQueryParameter("select", "student_id,item_id,access_granted,payment_status").build()
        val grants = JSONArray(execute(Request.Builder().url(url).header("apikey", publishableKey)
            .header("Authorization", "Bearer $access").build())).objects()
            .filter { it.optString("student_id") == id && (it.optBoolean("access_granted") || it.optString("payment_status") in setOf("paid", "confirmed")) }
            .map { it.getString("item_id") }.toSet()
        return HubSession(access, refresh, id, student.optString("name", "Learner"), grants, System.currentTimeMillis())
    }
    private fun request(path: String, body: JSONObject, token: String? = null): String {
        val req = Request.Builder().url("$base/$path").header("apikey", publishableKey)
            .post(body.toString().toRequestBody("application/json".toMediaType()))
        if (token != null) req.header("Authorization", "Bearer $token")
        return execute(req.build())
    }
    private fun execute(request: Request): String {
        try {
            client.newCall(request).execute().use { response ->
                if (!response.isSuccessful) {
                    if (response.code == 429 || response.code >= 500) throw HubNetworkException("The Learning Hub is temporarily unavailable. Please try again shortly.")
                    throw HubAccessException("Sign-in or account verification failed. Check your email and password, or contact TIH support for account help.")
                }
                return response.body?.string() ?: throw HubNetworkException("The server returned no data. Please try again.")
            }
        } catch (e: IOException) { throw HubNetworkException("Unable to connect. Check your internet connection and try again.") }
    }
}
