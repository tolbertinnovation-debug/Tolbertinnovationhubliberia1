package org.tolbertinnovationhub.learning.ui

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.shape.RoundedCornerShape

val Navy = Color(0xFF142A50)
val Red = Color(0xFFC62235)
val Sky = Color(0xFFDDECFA)
private val Light = lightColorScheme(primary = Navy, onPrimary = Color.White, secondary = Red,
    primaryContainer = Sky, onPrimaryContainer = Navy, secondaryContainer = Sky, onSecondaryContainer = Navy,
    tertiary = Color(0xFF087362), onTertiary = Color.White, tertiaryContainer = Color(0xFFD7F4EA), onTertiaryContainer = Color(0xFF063C32),
    outline = Color(0xFF748398), outlineVariant = Color(0xFFD8E1ED), background = Color(0xFFF7F8FC), surface = Color.White,
    onBackground = Color(0xFF15253D), surfaceContainer = Color(0xFFEAF0F7),
    surfaceVariant = Color(0xFFEAF0F7), onSurface = Color(0xFF15253D), onSurfaceVariant = Color(0xFF516176))
private val Dark = darkColorScheme(primary = Color(0xFFAFCCFF), onPrimary = Color(0xFF102C51), secondary = Color(0xFFFFADB7),
    primaryContainer = Color(0xFF243E63), onPrimaryContainer = Color(0xFFE3EEFF),
    secondaryContainer = Color(0xFF2A3E59), onSecondaryContainer = Color(0xFFE3EEFF),
    tertiary = Color(0xFF78D9C4), onTertiary = Color(0xFF00382D), tertiaryContainer = Color(0xFF164D43), onTertiaryContainer = Color(0xFFB3F1DF),
    outline = Color(0xFF8394AC), outlineVariant = Color(0xFF354860), background = Color(0xFF101B2B), surface = Color(0xFF18263B),
    onBackground = Color(0xFFE5EDFA), surfaceContainer = Color(0xFF18263B),
    surfaceVariant = Color(0xFF25374F), onSurface = Color(0xFFE5EDFA), onSurfaceVariant = Color(0xFFBDCCE1))

@Composable fun TihTheme(mode: String, content: @Composable () -> Unit) {
    val dark = mode == "Dark" || (mode == "System" && isSystemInDarkTheme())
    MaterialTheme(colorScheme = if (dark) Dark else Light, shapes = Shapes(
        small = RoundedCornerShape(12.dp), medium = RoundedCornerShape(18.dp), large = RoundedCornerShape(24.dp)
    ), typography = Typography(
        headlineLarge = TextStyle(fontFamily = FontFamily.SansSerif, fontWeight = FontWeight.Bold, fontSize = 32.sp, lineHeight = 38.sp),
        headlineMedium = TextStyle(fontWeight = FontWeight.Bold, fontSize = 25.sp, lineHeight = 32.sp),
        titleLarge = TextStyle(fontWeight = FontWeight.Bold, fontSize = 21.sp, lineHeight = 28.sp),
        titleSmall = TextStyle(fontWeight = FontWeight.SemiBold, fontSize = 15.sp, lineHeight = 22.sp),
        labelLarge = TextStyle(fontWeight = FontWeight.SemiBold, fontSize = 14.sp, lineHeight = 20.sp),
        titleMedium = TextStyle(fontWeight = FontWeight.SemiBold, fontSize = 17.sp, lineHeight = 24.sp),
        bodyLarge = TextStyle(fontSize = 16.sp, lineHeight = 25.sp),
        bodyMedium = TextStyle(fontSize = 14.sp, lineHeight = 21.sp)
    ), content = content)
}
