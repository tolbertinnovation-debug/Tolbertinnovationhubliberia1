plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
}

// Owner-controlled identity and signing. CI builds an explicitly unsigned release bundle.
val releaseApplicationId = providers.environmentVariable("TIH_APPLICATION_ID").orElse("org.tolbertinnovationhub.learning").get()
require(releaseApplicationId.matches(Regex("[a-zA-Z][a-zA-Z0-9_]*(\\.[a-zA-Z][a-zA-Z0-9_]*)+"))) { "Invalid TIH_APPLICATION_ID" }
val releaseVersionCode = providers.environmentVariable("TIH_VERSION_CODE").orElse("2").get().toInt()
require(releaseVersionCode > 0) { "TIH_VERSION_CODE must be positive" }
val signingValues = listOf("TIH_KEYSTORE_PATH", "TIH_KEYSTORE_PASSWORD", "TIH_KEY_ALIAS", "TIH_KEY_PASSWORD").map { providers.environmentVariable(it).orNull }
require(signingValues.all { it == null } || signingValues.all { !it.isNullOrBlank() }) { "Supply all four TIH signing environment variables, or none" }

android {
    namespace = "org.tolbertinnovationhub.learning"
    compileSdk = 36
    defaultConfig {
        applicationId = releaseApplicationId
        minSdk = 26
        targetSdk = 36
        versionCode = releaseVersionCode
        versionName = "0.2.0"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }
    if (signingValues.all { it != null }) signingConfigs.create("ownerRelease") {
        storeFile = file(signingValues[0]!!)
        storePassword = signingValues[1]
        keyAlias = signingValues[2]
        keyPassword = signingValues[3]
    }
    buildTypes {
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
            if (signingValues.all { it != null }) signingConfig = signingConfigs.getByName("ownerRelease")
        }
        debug { applicationIdSuffix = ".preview"; versionNameSuffix = "-preview" }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
    buildFeatures { compose = true; buildConfig = true }
    packaging { resources.excludes += "/META-INF/{AL2.0,LGPL2.1}" }
}

val exportLearning by tasks.registering(Exec::class) {
    workingDir(rootProject.projectDir.parentFile)
    commandLine("node", "android-app/tools/export-learning.mjs")
    // Run every build: the website remains the single source of course content.
}
tasks.named("preBuild") { dependsOn(exportLearning) }

dependencies {
    val composeBom = platform("androidx.compose:compose-bom:2025.03.01")
    implementation(composeBom)
    androidTestImplementation(composeBom)
    implementation("androidx.activity:activity-compose:1.10.1")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.material:material-icons-extended")
    implementation("androidx.compose.ui:ui-tooling-preview")
    debugImplementation("androidx.compose.ui:ui-tooling")
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7")
    implementation("androidx.lifecycle:lifecycle-runtime-compose:2.8.7")
    implementation("androidx.core:core-splashscreen:1.0.1")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.10.1")
    implementation("com.squareup.okhttp3:okhttp:4.12.0")
    implementation("org.jsoup:jsoup:1.18.3")
    testImplementation("junit:junit:4.13.2")
    testImplementation("org.json:json:20240303")
    testImplementation("com.squareup.okhttp3:mockwebserver:4.12.0")
    androidTestImplementation("androidx.test.ext:junit:1.2.1")
    androidTestImplementation("androidx.test:runner:1.6.2")
    androidTestImplementation("androidx.compose.ui:ui-test-junit4")
    debugImplementation("androidx.compose.ui:ui-test-manifest")
}
