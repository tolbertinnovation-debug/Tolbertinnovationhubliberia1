package org.tolbertinnovationhub.learning.ui

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.input.*
import androidx.compose.ui.unit.dp
import org.tolbertinnovationhub.learning.LearningViewModel

/** Native sign-in; account creation uses the existing TIH registration process. */
@Composable internal fun WelcomeScreen(
    vm: LearningViewModel, showInformation: (InformationPage) -> Unit, onSignUp: () -> Unit
) {
    var email by rememberSaveable { mutableStateOf("") }
    // Never put a password in saved instance state, preferences, or a browser URL.
    var password by remember { mutableStateOf("") }
    var visible by remember { mutableStateOf(false) }
    val keyboard = LocalSoftwareKeyboardController.current
    val focus = LocalFocusManager.current
    val submit = {
        keyboard?.hide(); focus.clearFocus()
        vm.signIn(email.trim(), password)
        Unit
    }
    LazyColumn(Modifier.fillMaxSize().imePadding().testTag("welcome-list"),
        contentPadding = PaddingValues(20.dp), verticalArrangement = Arrangement.spacedBy(18.dp)) {
        item {
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                BrandLabel("WELCOME TO TIH")
                Text("Learn. Grow. Succeed.", style = MaterialTheme.typography.headlineMedium)
                Text("Sign in to explore your courses and keep learning.", style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }
        item {
            Surface(shape = MaterialTheme.shapes.large, color = MaterialTheme.colorScheme.surface,
                border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant)) {
                Column(Modifier.fillMaxWidth().padding(20.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Text("Sign in", style = MaterialTheme.typography.titleLarge)
                    OutlinedTextField(email, { email = it }, Modifier.fillMaxWidth(), enabled = !vm.busy,
                        label = { Text("Email address") }, leadingIcon = { Icon(Icons.Outlined.Email, null) }, singleLine = true,
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email, imeAction = ImeAction.Next))
                    OutlinedTextField(password, { password = it }, Modifier.fillMaxWidth(), enabled = !vm.busy,
                        label = { Text("Password") }, leadingIcon = { Icon(Icons.Outlined.Lock, null) }, singleLine = true,
                        visualTransformation = if (visible) VisualTransformation.None else PasswordVisualTransformation(),
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password, imeAction = ImeAction.Done),
                        keyboardActions = KeyboardActions(onDone = { if (!vm.busy) submit() }),
                        trailingIcon = { IconButton(onClick = { visible = !visible }) {
                            Icon(if (visible) Icons.Outlined.VisibilityOff else Icons.Outlined.Visibility,
                                if (visible) "Hide password" else "Show password")
                        } })
                    Button(onClick = submit, enabled = !vm.busy, modifier = Modifier.fillMaxWidth().heightIn(min = 50.dp)) {
                        if (vm.busy) {
                            CircularProgressIndicator(Modifier.size(18.dp), strokeWidth = 2.dp)
                            Spacer(Modifier.width(10.dp)); Text("Signing in…")
                        } else Text("Sign in securely")
                    }
                    TextButton(onClick = { showInformation(InformationPage.HELP) }, modifier = Modifier.align(Alignment.CenterHorizontally)) {
                        Text("Need help signing in?")
                    }
                }
            }
        }
        item {
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                OutlinedButton(onClick = onSignUp, enabled = !vm.busy, modifier = Modifier.fillMaxWidth().heightIn(min = 50.dp)) {
                    Icon(Icons.Outlined.PersonAdd, null, Modifier.size(20.dp)); Spacer(Modifier.width(8.dp)); Text("Create account")
                }
                Text("New here? Register on the TIH website, then return to sign in with your email and password.",
                    style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }
        item { BrandAttribution(Modifier.fillMaxWidth()) }
        item {
            Column {
                TextButton(onClick = { showInformation(InformationPage.PRIVACY) }) { Text("How your account data is used") }
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    TextButton(onClick = { showInformation(InformationPage.TERMS) }) { Text("Terms of use") }
                    TextButton(onClick = { showInformation(InformationPage.ABOUT) }) { Text("About TIH") }
                }
            }
        }
    }
}
