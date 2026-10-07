package org.tolbertinnovationhub.learning.ui

import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.compose.LifecycleEventEffect
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.withContext
import okhttp3.OkHttpClient
import okhttp3.Request
import org.json.JSONObject
import org.tolbertinnovationhub.learning.BuildConfig
import org.tolbertinnovationhub.learning.data.AppUpdatePolicy
import java.util.concurrent.TimeUnit

@Composable fun AppUpdateGate(content: @Composable () -> Unit) {
    val context = LocalContext.current
    val prefs = remember { context.getSharedPreferences("tih-app-updates", android.content.Context.MODE_PRIVATE) }
    var tick by remember { mutableIntStateOf(0) }
    var state by remember { mutableStateOf<AppUpdatePolicy.State?>(null) }
    var busy by remember { mutableStateOf(false) }
    LifecycleEventEffect(Lifecycle.Event.ON_RESUME) { tick++ }
    LaunchedEffect(Unit) { while (true) { delay(60_000); tick++ } }
    LaunchedEffect(tick) {
        busy = true
        state = withContext(Dispatchers.IO) {
            var verified = prefs.getLong("verified", 0)
            var policy = runCatching { AppUpdatePolicy.parse(JSONObject(prefs.getString("policy", "") ?: "")) }.getOrNull()
            val now = System.currentTimeMillis()
            if (verified <= 0 || now < verified || now - verified >= 3_600_000 || state == null) {
                runCatching {
                    val client = OkHttpClient.Builder().callTimeout(10, TimeUnit.SECONDS).build()
                    client.newCall(Request.Builder().url("https://tolbertinnovationhub.org/app-updates.json?t=$now").header("Cache-Control", "no-cache").build()).execute().use { response ->
                        check(response.isSuccessful)
                        val text = response.body?.string() ?: error("Empty update policy")
                        check(text.length < 16384)
                        val parsed = AppUpdatePolicy.parse(JSONObject(text))
                        verified = System.currentTimeMillis()
                        policy = parsed
                        prefs.edit().putString("policy", text).putLong("verified", verified).apply()
                    }
                }
            }
            AppUpdatePolicy.evaluate(BuildConfig.VERSION_CODE, policy, verified, System.currentTimeMillis())
        }
        busy = false
    }
    fun openStore() {
        runCatching { context.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("https://tolbertinnovationhub.org/libapps"))) }
    }
    val result = state
    when {
        result == null -> Box(Modifier.fillMaxSize().padding(24.dp)) { Text("Checking TIH Learning updates…") }
        result.blocked -> Column(Modifier.fillMaxSize().padding(24.dp), verticalArrangement = Arrangement.spacedBy(18.dp)) {
            Text(if (result.available) "Upgrade required" else "Check for updates", style = MaterialTheme.typography.headlineMedium)
            Text(result.message)
            Text("Your saved notes and study progress remain on this phone.")
            Button(onClick = { openStore() }, modifier = Modifier.fillMaxWidth()) { Text("Download update from LibApps") }
            OutlinedButton(onClick = { prefs.edit().putLong("verified", 0).apply(); tick++ }, enabled = !busy, modifier = Modifier.fillMaxWidth()) { Text(if (busy) "Checking…" else "Check again") }
            BrandAttribution(Modifier.fillMaxWidth())
        }
        else -> Column(Modifier.fillMaxSize()) {
            if (result.available) Surface(color = MaterialTheme.colorScheme.primaryContainer) {
                Column(Modifier.fillMaxWidth().padding(12.dp)) {
                    Text(result.message, style = MaterialTheme.typography.bodySmall)
                    TextButton(onClick = { openStore() }) { Text("Upgrade from LibApps") }
                }
            }
            Box(Modifier.weight(1f)) { content() }
        }
    }
}
