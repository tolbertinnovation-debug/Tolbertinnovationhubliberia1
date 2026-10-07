package org.tolbertinnovationhub.learning.ui

import android.content.ActivityNotFoundException
import android.content.Intent
import android.net.Uri
import android.widget.Toast
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.style.TextAlign

@Composable internal fun BrandAttribution(modifier: Modifier = Modifier) {
    val context = LocalContext.current
    TextButton(modifier = modifier.testTag("powered-by-tih"), onClick = {
        try { context.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("https://tolbertinnovationhub.org"))) }
        catch (_: ActivityNotFoundException) { Toast.makeText(context, "Visit tolbertinnovationhub.org in your browser.", Toast.LENGTH_LONG).show() }
    }) {
        Text("Powered by Tolbert Innovation Hub\n(tolbertinnovationhub.org)",
            style = MaterialTheme.typography.bodySmall, textAlign = TextAlign.Center)
    }
}
