package org.tolbertinnovationhub.learning.ui

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

val Navy = Color(0xFF142A50)
val Red = Color(0xFFC62235)
val Sky = Color(0xFFDDECFA)
private val Light = lightColorScheme(primary = Navy, onPrimary = Color.White, secondary = Red,
    tertiary = Color(0xFF087C69), background = Color(0xFFF7F8FC), surface = Color.White,
    surfaceVariant = Color(0xFFEAF0F7), onSurface = Color(0xFF15253D), onSurfaceVariant = Color(0xFF516176))
private val Dark = darkColorScheme(primary = Color(0xFFAFCCFF), secondary = Color(0xFFFFADB7),
    tertiary = Color(0xFF78D9C4), background = Color(0xFF101B2B), surface = Color(0xFF18263B),
    surfaceVariant = Color(0xFF25374F), onSurface = Color(0xFFE5EDFA), onSurfaceVariant = Color(0xFFBDCCE1))

@Composable fun TihTheme(mode: String, content: @Composable () -> Unit) {
    val dark = mode == "Dark" || (mode == "System" && isSystemInDarkTheme())
    MaterialTheme(colorScheme = if (dark) Dark else Light, typography = Typography(
        headlineLarge = TextStyle(fontFamily = FontFamily.SansSerif, fontWeight = FontWeight.Bold, fontSize = 32.sp, lineHeight = 38.sp),
        headlineMedium = TextStyle(fontWeight = FontWeight.Bold, fontSize = 25.sp, lineHeight = 32.sp),
        titleLarge = TextStyle(fontWeight = FontWeight.Bold, fontSize = 21.sp, lineHeight = 28.sp),
        titleMedium = TextStyle(fontWeight = FontWeight.SemiBold, fontSize = 17.sp, lineHeight = 24.sp),
        bodyLarge = TextStyle(fontSize = 16.sp, lineHeight = 25.sp),
        bodyMedium = TextStyle(fontSize = 14.sp, lineHeight = 21.sp)
    ), content = content)
}
