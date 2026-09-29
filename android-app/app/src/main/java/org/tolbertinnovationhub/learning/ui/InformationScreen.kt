package org.tolbertinnovationhub.learning.ui

import android.content.ActivityNotFoundException
import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.widget.Toast
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import org.tolbertinnovationhub.learning.BuildConfig
import org.tolbertinnovationhub.learning.R
import org.tolbertinnovationhub.learning.data.*

enum class InformationPage(val title: String) {
    ABOUT("About TIH"), HELP("Help & support"), PRIVACY("Privacy & your data"), TERMS("Learning terms"), DELETE("Delete TIH account")
}

@Composable fun InformationScreen(page: InformationPage, info: Organization, studentId: String?, onPage: (InformationPage) -> Unit) {
    val context = LocalContext.current
    fun launch(action: String, uri: Uri) {
        try { context.startActivity(Intent(action, uri)) }
        catch (_: ActivityNotFoundException) { Toast.makeText(context, "No app is available. Use the contact details shown here.", Toast.LENGTH_LONG).show() }
    }
    fun email(subject: String, body: String = "") = launch(Intent.ACTION_SENDTO,
        Uri.parse("mailto:${info.email}?subject=${Uri.encode(subject)}&body=${Uri.encode(body)}"))
    LazyColumn(Modifier.fillMaxSize(), contentPadding = PaddingValues(20.dp), verticalArrangement = Arrangement.spacedBy(20.dp)) {
        when (page) {
            InformationPage.ABOUT -> {
                item { Column(Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Image(painterResource(R.drawable.tih_logo), info.name, Modifier.size(92.dp))
                    Text(info.name, style = MaterialTheme.typography.headlineSmall)
                    Text(info.address, style = MaterialTheme.typography.bodyMedium)
                } }
                item { InformationCard(InformationSection("Our mission", listOf(info.mission))) }
                item { InformationCard(InformationSection("Our vision", listOf(info.vision))) }
                item { InformationCard(InformationSection("Learning with TIH", listOf("Your existing TIH courses, with written lessons, practice quizzes, bookmarks, and personal notes. Course materials and artwork are copied from the TIH Learning Hub.", "TIH Learning ${BuildConfig.VERSION_NAME}"))) }
                item { OutlinedButton(onClick = { onPage(InformationPage.HELP) }, modifier = Modifier.fillMaxWidth()) { Text("Help & support") } }
            }
            InformationPage.HELP -> {
                item { InformationCard(InformationSection("Talk to TIH", listOf(info.email, info.phone, info.address))) }
                item { Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Button(onClick = { email("TIH Learning app support") }, modifier = Modifier.fillMaxWidth()) { Text("Email TIH support") }
                    OutlinedButton(onClick = { launch(Intent.ACTION_DIAL, Uri.parse("tel:${info.phone}")) }, modifier = Modifier.fillMaxWidth()) { Text("Call TIH support") }
                    OutlinedButton(onClick = { launch(Intent.ACTION_VIEW, Uri.parse("https://wa.me/${info.phone.filter(Char::isDigit)}")) }, modifier = Modifier.fillMaxWidth()) { Text("Open WhatsApp") }
                } }
                item { InformationCard(InformationSection("Support hours · Liberia time", info.hours)) }
                items(info.help) { InformationCard(it) }
                item { TextButton(onClick = { onPage(InformationPage.DELETE) }) { Text("Delete TIH account") } }
            }
            InformationPage.PRIVACY -> {
                item { Text("TIH Learning privacy notice", style = MaterialTheme.typography.headlineSmall) }
                item { Text("How this Android app handles your information. TIH contact details and privacy rights are taken from its published policy, last updated ${info.policyUpdated}.") }
                items(info.privacy) { InformationCard(it) }
                item { InformationCard(info.audience) }
                item { InformationCard(InformationSection("Privacy contact", listOf(info.name, info.email, info.address))) }
                item { OutlinedButton(onClick = { onPage(InformationPage.DELETE) }, modifier = Modifier.fillMaxWidth()) { Text("Delete TIH account") } }
            }
            InformationPage.TERMS -> {
                item { Text("Learning with your existing TIH account", style = MaterialTheme.typography.headlineSmall) }
                item { Text("The following sections are copied from TIH’s website terms, last updated ${info.policyUpdated}. References to other TIH services apply when you use those services.") }
                item { InformationCard(InformationSection("This app", listOf("Approved course access is required to study. Practice results remain on this phone and do not issue official certificates. Course materials are for personal learning; permission to republish them is not included."))) }
                items(info.terms) { InformationCard(it) }
            }
            InformationPage.DELETE -> {
                item { DeletionRequest(info, studentId, ::email) }
            }
        }
    }
}

@Composable private fun InformationCard(section: InformationSection) {
    Card(Modifier.fillMaxWidth(), colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)) {
        Column(Modifier.padding(20.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            Text(section.title, style = MaterialTheme.typography.titleMedium)
            section.paragraphs.forEach { Text(it, style = MaterialTheme.typography.bodyMedium) }
        }
    }
}

@Composable private fun DeletionRequest(info: Organization, studentId: String?, email: (String, String) -> Unit) {
    val context = LocalContext.current
    var address by rememberSaveable { mutableStateOf("") }
    var acknowledged by rememberSaveable { mutableStateOf(false) }
    val body = "Please delete my TIH Learning account and associated personal data.\n\nRegistered email: ${address.trim()}\nStudent ID: ${studentId ?: "I can provide this if needed"}\n\nPlease tell me how to verify ownership and confirm any records that must be retained, the reason, and the retention period."
    val valid = android.util.Patterns.EMAIL_ADDRESS.matcher(address.trim()).matches() && acknowledged
    Column(verticalArrangement = Arrangement.spacedBy(18.dp)) {
        Text("Request account deletion", style = MaterialTheme.typography.headlineSmall)
        Text("This concerns your TIH account and associated server data, including the account you use on the website. It is different from clearing study records on this phone.")
        Text("TIH verifies account ownership before processing deletion. Its published privacy policy says privacy requests receive a response within 30 days, subject to legal retention requirements.")
        OutlinedTextField(address, { address = it }, Modifier.fillMaxWidth(), label = { Text("Registered email address") }, singleLine = true, keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email))
        Row(verticalAlignment = Alignment.CenterVertically) {
            Checkbox(acknowledged, { acknowledged = it })
            Text("I understand this requests deletion of my shared TIH account.", style = MaterialTheme.typography.bodyMedium)
        }
        Text("Recipient: ${info.email}", style = MaterialTheme.typography.labelLarge)
        Text("Your email app will open so you can review and send the request. Opening a draft does not send it or delete your account.")
        Button(onClick = { email("TIH Learning account deletion request", body) }, enabled = valid, modifier = Modifier.fillMaxWidth()) { Text("Review request in email") }
        OutlinedButton(onClick = {
            (context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager).setPrimaryClip(ClipData.newPlainText("TIH deletion request", "To: ${info.email}\nSubject: TIH Learning account deletion request\n\n$body"))
            Toast.makeText(context, "Request copied. Send it to ${info.email}.", Toast.LENGTH_LONG).show()
        }, enabled = valid, modifier = Modifier.fillMaxWidth()) { Text("Copy request") }
        Text("No email app? Copy the request and send it using webmail. You can also contact ${info.phone} for help. Do not send your password.", style = MaterialTheme.typography.bodySmall)
    }
}
