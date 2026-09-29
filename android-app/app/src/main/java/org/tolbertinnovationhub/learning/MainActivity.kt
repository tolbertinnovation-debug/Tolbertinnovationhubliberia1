package org.tolbertinnovationhub.learning

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.lifecycle.viewmodel.compose.viewModel
import org.tolbertinnovationhub.learning.ui.LearningApp
import org.tolbertinnovationhub.learning.ui.TihTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        installSplashScreen()
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            val model: LearningViewModel = viewModel()
            TihTheme(model.theme) { LearningApp(model) }
        }
    }
}
