package org.tolbertinnovationhub.learning.ui

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.safeDrawingPadding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import kotlinx.coroutines.delay
import org.tolbertinnovationhub.learning.R

/** Local artwork needs no network; rotating or returning from another app does not replay it. */
@Composable
fun WelcomeLaunch(content: @Composable () -> Unit) {
    var welcomeFinished by rememberSaveable { mutableStateOf(false) }
    LaunchedEffect(Unit) {
        delay(1800)
        welcomeFinished = true
    }
    if (welcomeFinished) {
        content()
    } else {
        Box(Modifier.fillMaxSize().background(Color.White).safeDrawingPadding()) {
            Image(
                painter = painterResource(R.drawable.tih_welcome),
                contentDescription = "Welcome to TIH Learning Hub. Learn new skills. Build your future. Your learning journey starts here.",
                modifier = Modifier.fillMaxSize(),
                contentScale = ContentScale.Fit
            )
        }
    }
}
