package org.tolbertinnovationhub.learning.ui

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.outlined.ArrowForward
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.focus.FocusDirection
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.*
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.tolbertinnovationhub.learning.LearningViewModel

/** Native sign-in; account creation uses the existing TIH registration process. */
@Composable internal fun WelcomeScreen(
    vm: LearningViewModel, showInformation: (InformationPage) -> Unit, onSignUp: () -> Unit
) {
    var email by rememberSaveable { mutableStateOf("") }
    // Passwords must never be stored in saved instance state, preferences or URLs.
    var password by remember { mutableStateOf("") }
    var visible by remember { mutableStateOf(false) }
    var submitted by remember { mutableStateOf(false) }
    val emailError = submitted && (email.trim().isEmpty() || !email.trim().contains('@'))
    val passwordError = submitted && password.isEmpty()
    val keyboard = LocalSoftwareKeyboardController.current
    val focus = LocalFocusManager.current
    val submit = {
        submitted = true
        if (!vm.busy && email.trim().contains('@') && password.isNotEmpty()) {
            keyboard?.hide(); focus.clearFocus()
            vm.signIn(email.trim(), password)
        }
        Unit
    }
    Box(Modifier.fillMaxSize(), contentAlignment = Alignment.TopCenter) {
        LazyColumn(Modifier.widthIn(max = 560.dp).fillMaxSize().imePadding().testTag("welcome-list"),
            contentPadding = PaddingValues(horizontal = 20.dp, vertical = 16.dp),
            verticalArrangement = Arrangement.spacedBy(18.dp)) {
            item {
                Column(Modifier.fillMaxWidth().clip(RoundedCornerShape(26.dp))
                    .background(Brush.linearGradient(listOf(Navy, BrandBlue)))
                    .drawBehind {
                        val center = Offset(size.width * 1.02f, size.height * .24f)
                        for (radius in listOf(.28f, .48f, .68f)) {
                            drawCircle(Color.White.copy(alpha = .075f), size.width * radius, center, style = Stroke(1.5.dp.toPx()))
                        }
                        drawCircle(Color(0xFF8AC7FF).copy(alpha = .12f), size.width * .2f, Offset(size.width * .93f, size.height * .94f))
                    }.padding(22.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Surface(color = Color.White.copy(alpha = .14f), shape = RoundedCornerShape(50)) {
                        Row(Modifier.padding(horizontal = 12.dp, vertical = 7.dp), verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(7.dp)) {
                            Box(Modifier.size(6.dp).clip(RoundedCornerShape(50)).background(Color(0xFFFF8588)))
                            Text("WELCOME TO TIH", color = Color.White, fontSize = 10.sp, letterSpacing = 1.2.sp, fontWeight = FontWeight.Bold)
                        }
                    }
                    Text("Learn. Grow. Succeed.", color = Color.White, style = MaterialTheme.typography.headlineMedium)
                    Text("Sign in to explore your courses and keep learning.", color = Color(0xFFE2EEFF), style = MaterialTheme.typography.bodyMedium)
                    Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        Icon(Icons.Outlined.School, null, Modifier.size(18.dp), tint = Color(0xFFA9D9FF))
                        Text("Your future starts here", color = Color(0xFFC4E4FF), style = MaterialTheme.typography.labelMedium)
                    }
                }
            }
            item {
                Surface(shape = RoundedCornerShape(24.dp), color = MaterialTheme.colorScheme.surface,
                    border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant.copy(alpha = .6f)), shadowElevation = 3.dp) {
                    Column(Modifier.fillMaxWidth().padding(20.dp), verticalArrangement = Arrangement.spacedBy(14.dp)) {
                        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                            Surface(shape = RoundedCornerShape(14.dp), color = Sky) {
                                Icon(Icons.Outlined.Lock, null, Modifier.padding(12.dp).size(22.dp), tint = Navy)
                            }
                            Column(verticalArrangement = Arrangement.spacedBy(2.dp)) {
                                Text("Sign in", style = MaterialTheme.typography.titleLarge, color = Navy)
                                Text("Continue your learning journey", style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                            }
                        }
                        OutlinedTextField(email, { email = it }, Modifier.fillMaxWidth().testTag("login-email"), enabled = !vm.busy,
                            label = { Text("Email address") }, leadingIcon = { Icon(Icons.Outlined.Email, null) }, singleLine = true,
                            shape = RoundedCornerShape(14.dp), isError = emailError,
                            supportingText = if (emailError) {{ Text("Enter a valid email address.") }} else null,
                            colors = OutlinedTextFieldDefaults.colors(unfocusedContainerColor = Color(0xFFF8FAFD), unfocusedBorderColor = Color(0xFFD5DFEC)),
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email, imeAction = ImeAction.Next),
                            keyboardActions = KeyboardActions(onNext = { focus.moveFocus(FocusDirection.Down) }))
                        OutlinedTextField(password, { password = it }, Modifier.fillMaxWidth().testTag("login-password"), enabled = !vm.busy,
                            label = { Text("Password") }, leadingIcon = { Icon(Icons.Outlined.Lock, null) }, singleLine = true,
                            shape = RoundedCornerShape(14.dp), isError = passwordError,
                            supportingText = if (passwordError) {{ Text("Enter your password.") }} else null,
                            colors = OutlinedTextFieldDefaults.colors(unfocusedContainerColor = Color(0xFFF8FAFD), unfocusedBorderColor = Color(0xFFD5DFEC)),
                            visualTransformation = if (visible) VisualTransformation.None else PasswordVisualTransformation(),
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password, imeAction = ImeAction.Done),
                            keyboardActions = KeyboardActions(onDone = { submit() }),
                            trailingIcon = { IconButton(onClick = { visible = !visible }) {
                                Icon(if (visible) Icons.Outlined.VisibilityOff else Icons.Outlined.Visibility,
                                    if (visible) "Hide password" else "Show password")
                            } })
                        Button(onClick = submit, enabled = !vm.busy, modifier = Modifier.fillMaxWidth().heightIn(min = 54.dp),
                            shape = RoundedCornerShape(14.dp), contentPadding = PaddingValues(horizontal = 20.dp, vertical = 14.dp)) {
                            if (vm.busy) {
                                CircularProgressIndicator(Modifier.size(18.dp), strokeWidth = 2.dp, color = MaterialTheme.colorScheme.onPrimary)
                                Spacer(Modifier.width(10.dp)); Text("Signing in…")
                            } else {
                                Text("Sign in securely"); Spacer(Modifier.width(10.dp))
                                Icon(Icons.AutoMirrored.Outlined.ArrowForward, null, Modifier.size(18.dp))
                            }
                        }
                        TextButton(onClick = { showInformation(InformationPage.HELP) }, modifier = Modifier.align(Alignment.CenterHorizontally)) {
                            Text("Need help signing in?")
                        }
                    }
                }
            }
            item {
                Surface(color = Sky, shape = RoundedCornerShape(20.dp)) {
                    Column(Modifier.fillMaxWidth().padding(18.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                        Text("New to TIH Learning?", color = Navy, style = MaterialTheme.typography.titleSmall)
                        Text("Create your account on the TIH website, then return here to sign in.",
                            style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                        OutlinedButton(onClick = onSignUp, enabled = !vm.busy, modifier = Modifier.fillMaxWidth().heightIn(min = 48.dp),
                            shape = RoundedCornerShape(12.dp), border = BorderStroke(1.dp, Navy.copy(alpha = .25f))) {
                            Icon(Icons.Outlined.PersonAdd, null, Modifier.size(20.dp)); Spacer(Modifier.width(8.dp)); Text("Create account")
                        }
                    }
                }
            }
            item {
                Column(Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally) {
                    TextButton(onClick = { showInformation(InformationPage.PRIVACY) }) { Text("How your account data is used", style = MaterialTheme.typography.labelMedium) }
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        TextButton(onClick = { showInformation(InformationPage.TERMS) }) { Text("Terms of use", style = MaterialTheme.typography.labelMedium) }
                        TextButton(onClick = { showInformation(InformationPage.ABOUT) }) { Text("About TIH", style = MaterialTheme.typography.labelMedium) }
                    }
                }
            }
            item { BrandAttribution(Modifier.fillMaxWidth()) }
        }
    }
}
