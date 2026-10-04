package org.tolbertinnovationhub.learning.ui

import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.shape.RoundedCornerShape

// Shared with tolbertinnovationhub.org/styles.css. The app always uses light mode,
// independently of system appearance and preferences saved by older previews.
val Navy = Color(0xFF002868)
val BrandBlue = Color(0xFF1A4A9C)
val Red = Color(0xFFE31E24)
val Sky = Color(0xFFEAF4FF)
private val Light = lightColorScheme(primary = Navy, onPrimary = Color.White, secondary = Red, onSecondary = Color.White,
    primaryContainer = Sky, onPrimaryContainer = Navy,
    secondaryContainer = Color(0xFFFEE2E2), onSecondaryContainer = Color(0xFF991B1B),
    tertiary = Color(0xFF087362), onTertiary = Color.White, tertiaryContainer = Color(0xFFD7F4EA), onTertiaryContainer = Color(0xFF063C32),
    error = Color(0xFFB3261E), onError = Color.White, errorContainer = Color(0xFFFCE4E1), onErrorContainer = Color(0xFF601410),
    outline = Color(0xFF6B7A90), outlineVariant = Color(0xFFCDD5E2), background = Color(0xFFF4F7FC), onBackground = Color(0xFF0D1520),
    surface = Color.White, onSurface = Color(0xFF0D1520), surfaceVariant = Sky, onSurfaceVariant = Color(0xFF4B5563),
    surfaceDim = Color(0xFFDCE4EF), surfaceBright = Color.White,
    surfaceContainerLowest = Color.White, surfaceContainerLow = Color(0xFFF8FAFD), surfaceContainer = Sky,
    surfaceContainerHigh = Color(0xFFE1ECF9), surfaceContainerHighest = Color(0xFFD7E5F6), surfaceTint = Navy,
    inverseSurface = Color(0xFF111C30), inverseOnSurface = Color(0xFFE8F1FF), inversePrimary = Color(0xFFAFCFFF), scrim = Color.Black)
@Composable fun TihTheme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = Light, shapes = Shapes(
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
