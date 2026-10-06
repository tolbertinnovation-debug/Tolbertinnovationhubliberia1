@file:OptIn(androidx.compose.material3.ExperimentalMaterial3Api::class)
package org.tolbertinnovationhub.learning.ui

import android.content.ActivityNotFoundException
import android.content.Intent
import android.graphics.BitmapFactory
import android.net.Uri
import android.widget.Toast
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.Image
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.outlined.ArrowBack
import androidx.compose.material.icons.automirrored.outlined.ArrowForward
import androidx.compose.material.icons.automirrored.outlined.MenuBook
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.saveable.rememberSaveableStateHolder
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.compose.LifecycleEventEffect
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.coroutines.launch
import org.tolbertinnovationhub.learning.LearningViewModel
import org.tolbertinnovationhub.learning.R
import org.tolbertinnovationhub.learning.BuildConfig
import org.tolbertinnovationhub.learning.data.*

private data class Destination(val title: String, val icon: ImageVector)
private val destinations = listOf(Destination("Courses", Icons.AutoMirrored.Outlined.MenuBook), Destination("Today", Icons.Outlined.Home),
    Destination("Saved", Icons.Outlined.Bookmarks), Destination("You", Icons.Outlined.PersonOutline))

@Composable fun LearningApp(vm: LearningViewModel) {
    LifecycleEventEffect(Lifecycle.Event.ON_RESUME) { vm.checkLocalAccess() }
    var tab by rememberSaveable { mutableIntStateOf(0) }
    var information by rememberSaveable { mutableStateOf<String?>(null) }
    val catalogState = rememberSaveableStateHolder()
    LaunchedEffect(vm.session?.studentId) { tab = 0; information = null }
    val showInformation: (InformationPage) -> Unit = { information = it.name }
    val context = LocalContext.current
    val openLink: (String) -> Unit = { url ->
        val uri = Uri.parse(url)
        if (uri.scheme == "https" && uri.host != null) {
            try { context.startActivity(Intent(Intent.ACTION_VIEW, uri)) }
            catch (_: ActivityNotFoundException) { Toast.makeText(context, "No browser is available on this device.", Toast.LENGTH_LONG).show() }
        }
    }
    BackHandler(vm.course != null) { vm.back() }
    BackHandler(vm.course == null && tab != 0) { tab = 0 }
    BackHandler(information != null) { information = null }
    val snackbar = remember { SnackbarHostState() }
    LaunchedEffect(vm.notice) {
        vm.notice?.let { snackbar.showSnackbar(it, withDismissAction = true); vm.dismissNotice() }
    }
    Scaffold(
        topBar = {
            if (information != null) TopAppBar(title = { Text(InformationPage.valueOf(information!!).title, style = MaterialTheme.typography.titleMedium) },
                navigationIcon = { IconButton(onClick = { information = null }) { Icon(Icons.AutoMirrored.Outlined.ArrowBack, "Back") } })
            else if (vm.course == null) TopAppBar(title = {
                Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                    Image(painterResource(R.drawable.tih_logo), "Tolbert Innovation Hub", Modifier.size(38.dp))
                    Column { Text("TIH Learning", style = MaterialTheme.typography.titleMedium)
                        Text("YOUR FUTURE STARTS HERE", fontSize = 9.sp, letterSpacing = 1.2.sp, color = MaterialTheme.colorScheme.onSurfaceVariant) }
                }
            }, actions = { if (vm.session != null) IconButton(onClick = { tab = 3 }) { Icon(Icons.Outlined.AccountCircle, "Your account") } })
            else TopAppBar(title = { Text(if (vm.lesson == null) "Course overview" else "Module ${vm.lesson!!.module}", style = MaterialTheme.typography.titleMedium) },
                navigationIcon = { IconButton(onClick = vm::back) { Icon(Icons.AutoMirrored.Outlined.ArrowBack, "Back") } },
                actions = { if (vm.lesson != null) {
                    val saved = "${vm.course!!.summary.id}/${vm.lesson!!.id}" in vm.bookmarks()
                    IconButton(onClick = vm::toggleBookmark) { Icon(if (saved) Icons.Outlined.BookmarkAdded else Icons.Outlined.BookmarkBorder, if (saved) "Remove bookmark" else "Save lesson") }
                } })
        },
        bottomBar = { if (vm.session != null && vm.course == null && information == null) NavigationBar(containerColor = MaterialTheme.colorScheme.surface, tonalElevation = 0.dp) {
            destinations.forEachIndexed { i, d -> NavigationBarItem(selected = tab == i, onClick = { tab = i },
                colors = NavigationBarItemDefaults.colors(
                    indicatorColor = MaterialTheme.colorScheme.primaryContainer,
                    selectedIconColor = MaterialTheme.colorScheme.primary,
                    selectedTextColor = MaterialTheme.colorScheme.primary,
                    unselectedIconColor = MaterialTheme.colorScheme.onSurfaceVariant,
                    unselectedTextColor = MaterialTheme.colorScheme.onSurfaceVariant),
                icon = { Icon(d.icon, d.title) }, label = { Text(d.title, fontWeight = if (tab == i) FontWeight.Bold else FontWeight.Normal) }) }
        } }, snackbarHost = { SnackbarHost(snackbar) }
    ) { padding ->
        Box(Modifier.fillMaxSize().padding(padding), contentAlignment = Alignment.TopCenter) {
            Box(Modifier.fillMaxSize().widthIn(max = 1000.dp)) {
                when {
                    information != null && vm.organization != null -> InformationScreen(InformationPage.valueOf(information!!), vm.organization!!, vm.session?.studentId, showInformation)
                    vm.loading -> Loading()
                    vm.catalog.isEmpty() -> EmptyState("Library unavailable", "The learning content could not be loaded.", Icons.Outlined.CloudOff, "Try again", { vm.load() })
                    vm.session == null -> WelcomeScreen(vm, showInformation, onSignUp = { openLink("https://tolbertinnovationhub.org/hub-apply") })
                    vm.course != null && vm.lesson != null && vm.canStudy(vm.course!!.summary.id) -> Reader(vm, openLink, onHelp = { showInformation(InformationPage.HELP) })
                    vm.course != null -> CourseScreen(vm, onHelp = { showInformation(InformationPage.HELP) }, onSignIn = { vm.back(); tab = 3 })
                    tab == 0 -> catalogState.SaveableStateProvider("catalog:${vm.session!!.studentId}") { Explore(vm) }
                    tab == 1 -> Home(vm, onExplore = { tab = 0 }, onSignIn = { tab = 3 })
                    tab == 2 -> Saved(vm)
                    else -> Account(vm, showInformation)
                }
            }
        }
    }
}

@Composable private fun Loading() {
    Column(Modifier.fillMaxSize(), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.Center) {
        CircularProgressIndicator(); Spacer(Modifier.height(16.dp)); Text("Preparing your learning space…")
    }
}

@Composable private fun SectionTitle(title: String, caption: String? = null) {
    Column(verticalArrangement = Arrangement.spacedBy(5.dp)) {
        Box(Modifier.width(28.dp).height(3.dp).background(MaterialTheme.colorScheme.secondary, RoundedCornerShape(2.dp)))
        Text(title, style = MaterialTheme.typography.titleLarge)
        if (caption != null) Text(caption, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
    }
}

@Composable internal fun BrandLabel(text: String) {
    Surface(shape = RoundedCornerShape(8.dp), color = MaterialTheme.colorScheme.secondaryContainer,
        contentColor = MaterialTheme.colorScheme.onSecondaryContainer) {
        Text(text, Modifier.padding(horizontal = 10.dp, vertical = 5.dp), style = MaterialTheme.typography.labelSmall,
            fontWeight = FontWeight.Bold, letterSpacing = 0.7.sp, maxLines = 1, overflow = TextOverflow.Ellipsis)
    }
}

@Composable private fun Home(vm: LearningViewModel, onExplore: () -> Unit, onSignIn: () -> Unit) {
    val user = vm.session
    val owned = vm.catalog.filter { vm.canStudy(it.id) }
    val last = user?.let { vm.study.last(it.studentId) }
    val resume = owned.find { it.id == last?.first }
    LazyColumn(Modifier.fillMaxSize(), contentPadding = PaddingValues(20.dp), verticalArrangement = Arrangement.spacedBy(22.dp)) {
        item {
            Column { Text(if (user == null) "WELCOME TO TIH" else "YOUR LEARNING SPACE", fontSize = 11.sp, letterSpacing = 1.5.sp, color = MaterialTheme.colorScheme.secondary, fontWeight = FontWeight.Bold)
                Spacer(Modifier.height(8.dp)); Text(if (user == null) "Build skills.\nBuild your future." else "Keep growing,\n${user.name.substringBefore(' ')}.", style = MaterialTheme.typography.headlineLarge) }
        }
        item {
            Box(Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp))
                .background(Brush.linearGradient(listOf(Navy, BrandBlue)))
                .drawBehind {
                    val center = Offset(size.width * 1.08f, size.height * 0.18f)
                    drawCircle(Color.White.copy(alpha = 0.07f), size.width * 0.48f, center)
                    drawCircle(Color.White.copy(alpha = 0.12f), size.width * 0.64f, center, style = Stroke(1.dp.toPx()))
                }.padding(24.dp)) {
                Column(verticalArrangement = Arrangement.spacedBy(14.dp)) {
                    Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        Icon(Icons.Outlined.AutoAwesome, null, tint = Sky); Text("MADE FOR YOUR NEXT CHAPTER", color = Sky, fontSize = 10.sp, letterSpacing = 1.sp)
                    }
                    Text(if (resume != null) "Pick up where\nyou left off." else "One lesson closer\nto your ambitions.", color = Color.White, style = MaterialTheme.typography.headlineMedium)
                    Text(resume?.title ?: "Practical skills, exam preparation, and opportunities — from the TIH Learning Hub.", color = Color(0xFFD9E8F9), style = MaterialTheme.typography.bodyMedium, maxLines = 3, overflow = TextOverflow.Ellipsis)
                    Button(onClick = { if (resume != null) vm.openCourse(resume, last?.second) else onExplore() },
                        modifier = Modifier.heightIn(min = 48.dp), shape = RoundedCornerShape(14.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = Red, contentColor = Color.White)) {
                        Text(if (resume != null) "Continue learning" else "Find your course"); Spacer(Modifier.width(8.dp)); Icon(Icons.AutoMirrored.Outlined.ArrowForward, null, Modifier.size(18.dp))
                    }
                }
            }
        }
        item { Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            Metric("${vm.catalog.size}", "Courses", Modifier.weight(1f))
            Metric("${vm.catalog.count { it.id.startsWith("wassce-") }}", "WASSCE subjects", Modifier.weight(1f))
            Metric("${owned.size}", "Unlocked", Modifier.weight(1f))
        } }
        if (user == null) item { InfoCard("Your courses, in your pocket", "Sign in with your TIH email to access approved courses. Browse the catalog without an account.", Icons.Outlined.VerifiedUser, "Sign in", onSignIn) }
        if (owned.isNotEmpty()) {
            item { SectionTitle("My learning", "Progress below belongs to this app on this device.") }
            items(owned, key = { "owned-" + it.id }) { course -> CompactCourse(course, vm.completed(course.id).size) { vm.openCourse(course) } }
        } else {
            item { SectionTitle("A great place to begin", "Explore learning paths already available at TIH.") }
            items(vm.catalog.filter { it.id in listOf("computer-literacy", "project-mgmt", "accounting-bookkeeping", "webdev", "design", "entrepreneurship", "android", "office", "leadership", "grant-writing", "english-success", "ielts", "toefl", "ai") }) { c -> CourseCard(c) { vm.openCourse(c) } }
        }
        item { InfoCard("Learn with less data", "Written lessons and quizzes are included in the app. Approved access works offline for up to 7 days. Videos open online only when you choose.", Icons.Outlined.OfflineBolt) }
        item { Text("Tolbert Innovation Hub · Liberia", style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onSurfaceVariant) }
    }
}

@Composable private fun Metric(value: String, label: String, modifier: Modifier) {
    Surface(modifier, shape = RoundedCornerShape(16.dp), color = MaterialTheme.colorScheme.surface,
        border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.65f))) {
        Column(Modifier.padding(vertical = 18.dp, horizontal = 10.dp)) {
            Text(value, style = MaterialTheme.typography.headlineMedium, color = MaterialTheme.colorScheme.primary)
            Text(label, fontSize = 11.sp, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable private fun Explore(vm: LearningViewModel) {
    var query by rememberSaveable { mutableStateOf("") }
    var category by rememberSaveable { mutableStateOf("All") }
    val grid = rememberLazyGridState()
    val scope = rememberCoroutineScope()
    val keyboard = LocalSoftwareKeyboardController.current
    val categories = remember(vm.catalog) { listOf("All", "WASSCE") + vm.catalog.filterNot { it.id.startsWith("wassce-") }.map { it.category }.distinct().sorted() }
    val matches = remember(vm.catalog, query, category) { vm.catalog.filter {
        (category == "All" || (category == "WASSCE" && it.id.startsWith("wassce-")) || it.category == category) &&
            (it.title + " " + it.description + " " + it.category).contains(query.trim(), ignoreCase = true)
    } }
    val showTop by remember { derivedStateOf { grid.firstVisibleItemIndex > 3 } }
    fun resetScroll() { scope.launch { grid.scrollToItem(0) } }
    Box(Modifier.fillMaxSize().imePadding()) {
        // Header, search, filters and cards share one vertical scroll surface.
        // SaveableStateProvider in LearningApp retains the position on return from a course.
        LazyVerticalGrid(columns = GridCells.Adaptive(290.dp), state = grid,
            modifier = Modifier.fillMaxSize().testTag("course-list"),
            contentPadding = PaddingValues(start = 20.dp, end = 20.dp, top = 20.dp, bottom = 88.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp), horizontalArrangement = Arrangement.spacedBy(16.dp)) {
            item(key = "header", span = { GridItemSpan(maxLineSpan) }) {
                SectionTitle("Find your next skill", "Your courses, ready when you are.")
            }
            item(key = "search", span = { GridItemSpan(maxLineSpan) }) {
                OutlinedTextField(query, { query = it; resetScroll() }, Modifier.fillMaxWidth(), singleLine = true,
                    placeholder = { Text("Search courses, skills, or subjects") }, leadingIcon = { Icon(Icons.Outlined.Search, null) },
                    trailingIcon = if (query.isNotEmpty()) { { IconButton(onClick = { query = ""; resetScroll() }) { Icon(Icons.Outlined.Close, "Clear search") } } } else null,
                    keyboardOptions = KeyboardOptions(imeAction = ImeAction.Search), keyboardActions = KeyboardActions(onSearch = { keyboard?.hide() }),
                    shape = RoundedCornerShape(16.dp))
            }
            item(key = "filters", span = { GridItemSpan(maxLineSpan) }) {
                LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    items(categories) { item -> FilterChip(selected = item == category, onClick = { category = item; resetScroll(); keyboard?.hide() }, label = { Text(item) }) }
                }
            }
            item(key = "count", span = { GridItemSpan(maxLineSpan) }) {
                Text("${matches.size} ${if (matches.size == 1) "course" else "courses"}", style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
            if (matches.isEmpty()) item(key = "empty", span = { GridItemSpan(maxLineSpan) }) {
                Column(Modifier.fillMaxWidth().padding(vertical = 24.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Text("No matches yet", style = MaterialTheme.typography.titleLarge)
                    Text("Try a different word or choose All categories.", style = MaterialTheme.typography.bodyMedium)
                    OutlinedButton(onClick = { query = ""; category = "All"; resetScroll() }) { Text("Clear filters") }
                }
            }
            items(matches, key = { "course:" + it.id }, contentType = { "course" }) { c -> CourseCard(c) { keyboard?.hide(); vm.openCourse(c) } }
        }
        if (showTop) SmallFloatingActionButton(onClick = { scope.launch { grid.animateScrollToItem(0) } },
            modifier = Modifier.align(Alignment.BottomEnd).padding(16.dp),
            containerColor = MaterialTheme.colorScheme.primary, contentColor = MaterialTheme.colorScheme.onPrimary) {
            Icon(Icons.Outlined.KeyboardArrowUp, "Back to top")
        }
    }
}

@Composable private fun CourseCover(course: CourseSummary, modifier: Modifier) {
    val context = LocalContext.current
    val bitmap by produceState<androidx.compose.ui.graphics.ImageBitmap?>(null, course.image) {
        value = withContext(Dispatchers.IO) {
            if (!course.image.startsWith("images/")) null else runCatching {
                context.assets.open("learning/${course.image}").use { BitmapFactory.decodeStream(it)?.asImageBitmap() }
            }.getOrNull()
        }
    }
    Box(modifier.background(Brush.linearGradient(listOf(Navy, BrandBlue))), contentAlignment = Alignment.Center) {
        if (bitmap != null) Image(bitmap!!, null, Modifier.fillMaxSize(), contentScale = ContentScale.Crop)
        else Icon(Icons.AutoMirrored.Outlined.MenuBook, null, Modifier.size(52.dp), tint = Color(0xFFB5D8FF))
    }
}

@Composable private fun CourseCard(course: CourseSummary, onClick: () -> Unit) {
    Card(onClick, Modifier.fillMaxWidth(), shape = RoundedCornerShape(20.dp),
        border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.65f)),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)) {
        CourseCover(course, Modifier.fillMaxWidth().height(155.dp))
        Column(Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(9.dp)) {
            BrandLabel(course.category.uppercase())
            Text(course.title, style = MaterialTheme.typography.titleMedium, maxLines = 2, overflow = TextOverflow.Ellipsis)
            Text(course.description, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant, maxLines = 2, overflow = TextOverflow.Ellipsis)
            HorizontalDivider(color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.65f))
            Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                Text("${course.moduleCount} modules · ${course.lessonCount} entries", style = MaterialTheme.typography.labelMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant, modifier = Modifier.weight(1f))
                Surface(shape = RoundedCornerShape(12.dp), color = MaterialTheme.colorScheme.primaryContainer) {
                    Icon(Icons.AutoMirrored.Outlined.ArrowForward, "View course", Modifier.padding(10.dp).size(19.dp), tint = MaterialTheme.colorScheme.primary)
                }
            }
        }
    }
}

@Composable private fun CompactCourse(c: CourseSummary, completed: Int, onClick: () -> Unit) {
    Card(onClick, Modifier.fillMaxWidth(), shape = RoundedCornerShape(18.dp), colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)) {
        Column(Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            Text(c.title, style = MaterialTheme.typography.titleMedium)
            LinearProgressIndicator(progress = { (completed.toFloat() / maxOf(1, c.lessonCount)).coerceIn(0f, 1f) }, modifier = Modifier.fillMaxWidth())
            Text("$completed of ${c.lessonCount} entries completed in this app", style = MaterialTheme.typography.labelMedium)
        }
    }
}

@Composable private fun CourseScreen(vm: LearningViewModel, onHelp: () -> Unit, onSignIn: () -> Unit) {
    val course = vm.course ?: return
    val c = course.summary
    val unlocked = vm.canStudy(c.id)
    val done = vm.completed(c.id)
    var expanded by rememberSaveable(c.id) { mutableIntStateOf(0) }
    var openQuestion by rememberSaveable(c.id) { mutableIntStateOf(-1) }
    LazyColumn(Modifier.fillMaxSize(), contentPadding = PaddingValues(20.dp), verticalArrangement = Arrangement.spacedBy(20.dp)) {
        item {
            Card(shape = RoundedCornerShape(24.dp)) { CourseCover(c, Modifier.fillMaxWidth().height(200.dp)) }
        }
        item { Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
            BrandLabel(c.category.uppercase())
            Text(c.title, style = MaterialTheme.typography.headlineMedium)
            Text(c.description, style = MaterialTheme.typography.bodyLarge, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Text("${c.moduleCount} modules · ${c.lessonCount} entries · ${c.videoCount} video links", style = MaterialTheme.typography.labelLarge)
            Text(c.level, style = MaterialTheme.typography.bodyMedium)
        } }
        item {
            if (unlocked) {
                Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                        Text("Your progress", style = MaterialTheme.typography.titleSmall)
                        Text("${done.size * 100 / maxOf(1, course.lessons.size)}%", style = MaterialTheme.typography.titleSmall, color = MaterialTheme.colorScheme.primary)
                    }
                    LinearProgressIndicator(progress = { done.size.toFloat() / maxOf(1, course.lessons.size) }, modifier = Modifier.fillMaxWidth())
                    Button(onClick = { course.lessons.firstOrNull { it.id !in done }?.let(vm::openLesson) ?: course.lessons.firstOrNull()?.let(vm::openLesson) }, modifier = Modifier.fillMaxWidth().heightIn(min = 52.dp)) {
                        Icon(Icons.Outlined.PlayCircleOutline, null); Spacer(Modifier.width(10.dp)); Text(if (done.isEmpty()) "Start learning" else "Continue learning")
                    }
                    Text("${done.size} completed here · written materials work offline", style = MaterialTheme.typography.bodySmall)
                }
            } else InfoCard("${if (vm.session == null) "Sign in to start learning" else "Course access required"}",
                "Use your existing TIH account and approved course access. If an approved course is locked, TIH support can help.", Icons.Outlined.Lock,
                if (vm.session == null) "Sign in" else "Course access help", if (vm.session == null) onSignIn else onHelp)
        }
        item { SectionTitle("Your course roadmap", "Lessons, projects, and assessments from the Learning Hub.") }
        items(course.modules.indices.toList()) { mi ->
            val module = course.modules[mi]
            Card(Modifier.fillMaxWidth(), colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface), shape = RoundedCornerShape(16.dp)) {
                Row(Modifier.fillMaxWidth().clickable { expanded = if (expanded == mi) -1 else mi }.padding(17.dp), verticalAlignment = Alignment.CenterVertically) {
                    Column(Modifier.weight(1f)) { Text(module.title, style = MaterialTheme.typography.titleSmall); Text("${module.lessons.count { it.id in done }}/${module.lessons.size} completed", style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onSurfaceVariant) }
                    Icon(if (expanded == mi) Icons.Outlined.ExpandLess else Icons.Outlined.ExpandMore, if (expanded == mi) "Collapse module" else "Expand module")
                }
                if (expanded == mi) module.lessons.forEach { l ->
                    HorizontalDivider(color = MaterialTheme.colorScheme.surfaceVariant)
                    Row(Modifier.fillMaxWidth().clickable(enabled = unlocked) { vm.openLesson(l) }.padding(horizontal = 16.dp, vertical = 15.dp), verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                        Icon(when { !unlocked -> Icons.Outlined.Lock; l.id in done -> Icons.Outlined.CheckCircle; l.kind == "quiz" -> Icons.Outlined.Quiz; l.kind == "project" -> Icons.Outlined.Assignment; else -> Icons.AutoMirrored.Outlined.MenuBook }, null,
                            Modifier.size(20.dp), tint = if (l.id in done) MaterialTheme.colorScheme.tertiary else MaterialTheme.colorScheme.onSurfaceVariant)
                        Column(Modifier.weight(1f)) { Text(l.title, style = MaterialTheme.typography.bodyMedium); Text(if (l.kind == "quiz") "${l.questions.size} questions" else if (l.videoId.isNotEmpty()) "Read + watch" else "Read + practise", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant) }
                    }
                }
            }
        }
        if (c.outcomes.isNotEmpty()) item { Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
            SectionTitle("What you’ll learn")
            c.outcomes.forEach { outcome -> Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                Icon(Icons.Outlined.CheckCircleOutline, null, tint = MaterialTheme.colorScheme.tertiary, modifier = Modifier.size(20.dp)); Text(outcome, style = MaterialTheme.typography.bodyMedium)
            } }
        } }
        if (course.about.isNotEmpty()) item { Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
            SectionTitle("About this course")
            course.about.forEach { paragraph ->
                Text(paragraph, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        } }
        if (course.requirements.isNotEmpty()) item { Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
            SectionTitle("What you need to start")
            course.requirements.forEach { requirement -> Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                Icon(Icons.Outlined.RadioButtonUnchecked, null, tint = MaterialTheme.colorScheme.secondary, modifier = Modifier.size(20.dp))
                Text(requirement, style = MaterialTheme.typography.bodyMedium)
            } }
        } }
        course.instructor?.let { teacher -> item {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                SectionTitle("Your instructor")
                Card(Modifier.fillMaxWidth(), colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface), shape = RoundedCornerShape(16.dp)) {
                    Row(Modifier.padding(17.dp), horizontalArrangement = Arrangement.spacedBy(14.dp)) {
                        Icon(Icons.Outlined.Person, null, Modifier.size(28.dp), tint = MaterialTheme.colorScheme.secondary)
                        Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                            Text(teacher.name, style = MaterialTheme.typography.titleSmall)
                            if (teacher.title.isNotBlank()) Text(teacher.title, style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.secondary)
                            if (teacher.bio.isNotBlank()) Text(teacher.bio, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
                        }
                    }
                }
            }
        } }
        if (course.faqs.isNotEmpty()) {
            item { SectionTitle("Common questions", "Answered by the Learning Hub course page.") }
            items(course.faqs.indices.toList()) { qi ->
                val faq = course.faqs[qi]
                Card(Modifier.fillMaxWidth(), colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface), shape = RoundedCornerShape(16.dp)) {
                    Row(Modifier.fillMaxWidth().clickable { openQuestion = if (openQuestion == qi) -1 else qi }.padding(17.dp), verticalAlignment = Alignment.CenterVertically) {
                        Text(faq.question, style = MaterialTheme.typography.titleSmall, modifier = Modifier.weight(1f))
                        Icon(if (openQuestion == qi) Icons.Outlined.ExpandLess else Icons.Outlined.ExpandMore,
                            if (openQuestion == qi) "Hide answer" else "Show answer")
                    }
                    if (openQuestion == qi) {
                        HorizontalDivider(color = MaterialTheme.colorScheme.surfaceVariant)
                        Text(faq.answer, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant,
                            modifier = Modifier.padding(horizontal = 17.dp, vertical = 15.dp))
                    }
                }
            }
        }
        item { InfoCard("Official certificates", "App quiz results are practice records. Official completion and certificate approval remain in the existing TIH Learning Hub.", Icons.Outlined.WorkspacePremium, "Certificate help", onHelp) }
    }
}

@Composable private fun Reader(vm: LearningViewModel, openLink: (String) -> Unit, onHelp: () -> Unit) {
    val course = vm.course ?: return; val lesson = vm.lesson ?: return
    // 0 = the written lesson with its video, 1 = the learner's own notes.
    var tab by rememberSaveable(lesson.id) { mutableIntStateOf(0) }
    val hasVideo = LessonVideo.isPlayable(lesson.videoId)
    val user = vm.session ?: return
    var note by remember(lesson.id, user.studentId) { mutableStateOf(vm.study.note(user.studentId, lesson.id)) }
    val position = course.lessons.indexOfFirst { it.id == lesson.id }
    if (lesson.kind == "quiz") {
        key(user.studentId, course.summary.id, lesson.id) {
            val draft = remember { vm.study.quizDraft(user.studentId, course.summary.id, lesson) }
            QuizScreen(lesson, onComplete = vm::completeQuiz, modifier = Modifier.fillMaxSize(),
                onContinue = { course.lessons.getOrNull(position + 1)?.let(vm::openLesson) ?: vm.back() },
                continueLabel = if (position < course.lessons.lastIndex) "Next lesson" else "Course overview",
                initialDraft = draft,
                onDraftChange = { vm.study.saveQuizDraft(user.studentId, course.summary.id, lesson, it) })
        }
        return
    }
    Column(Modifier.fillMaxSize()) {
        LinearProgressIndicator(progress = { (position + 1f) / maxOf(1, course.lessons.size) }, modifier = Modifier.fillMaxWidth())
        Column(Modifier.padding(horizontal = 20.dp, vertical = 12.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Text("LESSON ${position + 1} OF ${course.lessons.size}" + if (lesson.duration.isNotBlank()) " · ${lesson.duration}" else "",
                style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Text(lesson.title, style = MaterialTheme.typography.titleLarge, maxLines = 3, overflow = TextOverflow.Ellipsis)
            if (lesson.kind != "quiz") Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                FilterChip(tab == 0, { tab = 0 }, label = { Text("Lesson") })
                FilterChip(tab == 1, { tab = 1 }, label = { Text("My notes") })
            }
            if (lesson.sharedVideo && tab == 0) Text("Video: shared module overview. The reading below covers this topic.", style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
        when {
            tab == 1 -> Column(Modifier.weight(1f).padding(horizontal = 20.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text("Your takeaways, questions, and project work", style = MaterialTheme.typography.titleSmall)
                Text("Automatically saved on this device for your TIH account.", style = MaterialTheme.typography.bodySmall)
                OutlinedTextField(note, { note = it.take(20000); vm.saveNote(note) }, Modifier.fillMaxWidth().weight(1f), placeholder = { Text("What did you learn? How will you apply it?") }, label = { Text("Personal study notes") })
                Spacer(Modifier.height(12.dp))
            }
            lesson.html.isNotBlank() -> {
                // One scrolling page: the video on top, the written lesson below it,
                // the way the course player lays it out on the website. The lesson is
                // given its measured height so the whole page scrolls together and the
                // video moves out of the way as the learner reads.
                var noteHeight by remember(lesson.id) { mutableIntStateOf(0) }
                Column(
                    Modifier.weight(1f).fillMaxWidth().verticalScroll(rememberScrollState())
                ) {
                    if (hasVideo) key(lesson.id) {
                        LessonVideoPlayer(lesson.videoId, Modifier.fillMaxWidth().padding(horizontal = 20.dp), openLink)
                    }
                    key(lesson.id) {
                        RichLesson(
                            lesson.html, course.css, vm.fontSize.toInt(),
                            Modifier.fillMaxWidth().height(if (noteHeight > 0) noteHeight.dp else 900.dp),
                            onContentHeight = { noteHeight = it + 24 },
                            onLink = openLink
                        )
                    }
                }
            }
            else -> Box(Modifier.weight(1f)) { EmptyState("Learning material unavailable", "This entry has no standalone written note in the existing course material. TIH support can help you find it.", Icons.AutoMirrored.Outlined.MenuBook, "Get help", onHelp) }
        }
        Surface(shadowElevation = 5.dp) {
            Row(Modifier.fillMaxWidth().padding(14.dp), verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                if (lesson.kind != "quiz") {
                    val done = lesson.id in vm.completed(course.summary.id)
                    Button(onClick = vm::completeLesson, enabled = !done, modifier = Modifier.weight(1f)) { Text(if (done) "Completed" else "Mark complete") }
                } else Text("Practice · pass at 70%", style = MaterialTheme.typography.labelMedium, modifier = Modifier.weight(1f))
                val index = course.lessons.indexOfFirst { it.id == lesson.id }
                OutlinedButton(onClick = { course.lessons.getOrNull(index + 1)?.let(vm::openLesson) }, enabled = index < course.lessons.lastIndex) { Text("Next"); Icon(Icons.AutoMirrored.Outlined.ArrowForward, null, Modifier.size(18.dp)) }
            }
        }
    }
}

@Composable private fun Saved(vm: LearningViewModel) {
    val saved = vm.bookmarks()
    var entries by remember { mutableStateOf<List<Pair<CourseSummary, Lesson>>>(emptyList()) }
    val context = LocalContext.current
    LaunchedEffect(saved) {
        val repository = ContentRepository(context)
        entries = vm.catalog.filter { c -> saved.any { it.startsWith(c.id + "/") } }.flatMap { c -> repository.course(c).lessons.filter { "${c.id}/${it.id}" in saved }.map { c to it } }
    }
    if (saved.isEmpty()) { EmptyState("Your personal reading shelf", "Save a lesson with the bookmark button. It will be easy to find here when you return.", Icons.Outlined.Bookmarks); return }
    LazyColumn(contentPadding = PaddingValues(20.dp), verticalArrangement = Arrangement.spacedBy(16.dp)) {
        item { SectionTitle("Saved for later", "${entries.size} lessons in your reading shelf") }
        items(entries, key = { it.second.id }) { (c, l) ->
            Card(onClick = { vm.openCourse(c, l.id) }, modifier = Modifier.fillMaxWidth(), colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)) {
                Column(Modifier.padding(20.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    Text(l.title, style = MaterialTheme.typography.titleMedium); Text(c.title, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                }
            }
        }
    }
}

@Composable private fun Account(vm: LearningViewModel, showInformation: (InformationPage) -> Unit) {
    var confirmClear by remember { mutableStateOf(false) }
    LazyColumn(Modifier.fillMaxSize().testTag("account-list"), contentPadding = PaddingValues(20.dp), verticalArrangement = Arrangement.spacedBy(22.dp)) {
        item { SectionTitle("Your learning, your way", "Welcome to TIH Learning Hub for Android.") }
        item {
            InfoCard(vm.session!!.name, "${vm.session!!.studentId}\n${vm.session!!.grants.size} approved course grants. Access last verified ${java.text.DateFormat.getDateInstance().format(java.util.Date(vm.session!!.verifiedAt))}.", Icons.Outlined.VerifiedUser)
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                TextButton(onClick = { vm.refresh() }, enabled = !vm.busy) { Text(if (vm.busy) "Refreshing…" else "Refresh access") }
                TextButton(onClick = vm::signOut) { Text("Sign out") }
            }
        }
        item { Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
            SectionTitle("Make yourself comfortable")
            Text("Reading size: ${vm.fontSize.toInt()} px", style = MaterialTheme.typography.titleSmall)
            Slider(vm.fontSize, vm::changeFontSize, valueRange = 16f..24f, steps = 7)
            Text("Lesson pages use a light paper background to preserve the original teaching diagrams.", style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        } }
        item { InfoCard("Offline, with clear boundaries", "Notes, quizzes, bookmarks, and local progress work without a connection after approved access is verified. Reconnect at least every 7 days. YouTube videos need internet and open in your video app or browser.", Icons.Outlined.CloudDownload) }
        item { InfoCard("Your data stays yours", "No advertising or analytics SDKs. Passwords are never stored. Sign-in tokens are encrypted using Android Keystore. Study records stay on this device and do not yet sync to the website.", Icons.Outlined.PrivacyTip) }
        item { Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
            SectionTitle("We’re here to help")
            listOf(InformationPage.HELP, InformationPage.ABOUT, InformationPage.PRIVACY, InformationPage.TERMS, InformationPage.DELETE).forEach { page ->
                OutlinedButton(onClick = { showInformation(page) }, modifier = Modifier.fillMaxWidth()) { Text(page.title) }
            }
            if (vm.session != null) TextButton(onClick = { confirmClear = true }) { Text("Clear my study data on this device", color = MaterialTheme.colorScheme.error) }
            Text("TIH Learning · ${BuildConfig.VERSION_NAME}", style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        } }
    }
    if (confirmClear) AlertDialog(onDismissRequest = { confirmClear = false }, title = { Text("Clear local study data?") },
        text = { Text("This removes this account’s app notes, bookmarks, quiz scores, and local progress. It cannot be undone. Your website account will not change.") },
        confirmButton = { TextButton(onClick = { vm.clearStudy(); confirmClear = false }) { Text("Clear data") } },
        dismissButton = { TextButton(onClick = { confirmClear = false }) { Text("Cancel") } })
}

@Composable private fun InfoCard(title: String, text: String, icon: ImageVector, action: String? = null, onAction: (() -> Unit)? = null) {
    Surface(shape = RoundedCornerShape(18.dp), color = MaterialTheme.colorScheme.primaryContainer, modifier = Modifier.fillMaxWidth()) {
        Column(Modifier.padding(20.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                Surface(shape = RoundedCornerShape(12.dp), color = MaterialTheme.colorScheme.surface) {
                    Icon(icon, null, Modifier.padding(10.dp).size(22.dp), tint = MaterialTheme.colorScheme.primary)
                }
                Text(title, style = MaterialTheme.typography.titleMedium, color = MaterialTheme.colorScheme.onPrimaryContainer, modifier = Modifier.weight(1f))
            }
            Text(text, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
            if (action != null && onAction != null) TextButton(onClick = onAction, contentPadding = PaddingValues(0.dp)) { Text(action); Spacer(Modifier.width(6.dp)); Icon(Icons.AutoMirrored.Outlined.ArrowForward, null, Modifier.size(18.dp)) }
        }
    }
}

@Composable private fun EmptyState(title: String, text: String, icon: ImageVector, action: String? = null, onAction: (() -> Unit)? = null) {
    Column(Modifier.fillMaxSize().padding(32.dp), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.Center) {
        Icon(icon, null, Modifier.size(58.dp), tint = MaterialTheme.colorScheme.primary)
        Spacer(Modifier.height(22.dp)); Text(title, style = MaterialTheme.typography.titleLarge)
        Spacer(Modifier.height(10.dp)); Text(text, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
        if (action != null && onAction != null) { Spacer(Modifier.height(20.dp)); Button(onClick = onAction) { Text(action) } }
    }
}
