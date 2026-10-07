package org.tolbertinnovationhub.learning.data

import org.json.JSONObject
import java.time.Instant

object AppUpdatePolicy {
    const val PERIOD = 14L * 24 * 60 * 60 * 1000
    data class Policy(val latest: Int, val requiredAfter: Long)
    data class State(val blocked: Boolean, val available: Boolean, val message: String)
    fun parse(raw: JSONObject): Policy {
        require(raw.getInt("schema") == 1)
        val android = raw.getJSONObject("android")
        val latest = android.getInt("latestCode")
        require(latest > 0)
        return Policy(latest, Instant.parse(android.getString("requiredAfter")).toEpochMilli())
    }
    fun evaluate(current: Int, policy: Policy?, verified: Long, now: Long): State {
        if (policy == null || verified <= 0 || now < verified || now - verified >= PERIOD)
            return State(true, false, "Connect to the internet to check for required updates. TIH checks your app version every 14 days.")
        val available = current < policy.latest
        val blocked = available && now >= policy.requiredAfter
        val message = when {
            blocked -> "A required TIH Learning update is ready. Install it from LibApps to continue."
            available -> "A TIH Learning update is available. Install it from LibApps by ${Instant.ofEpochMilli(policy.requiredAfter).toString().take(10)}."
            else -> "Your TIH Learning app is up to date."
        }
        return State(blocked, available, message)
    }
}
