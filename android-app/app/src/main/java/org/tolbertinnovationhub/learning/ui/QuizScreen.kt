package org.tolbertinnovationhub.learning.ui

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.selection.selectable
import androidx.compose.foundation.selection.selectableGroup
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.heading
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.unit.dp
import org.tolbertinnovationhub.learning.data.Lesson
import org.tolbertinnovationhub.learning.data.Question
import org.tolbertinnovationhub.learning.data.QuizScorer

/** Answer, review, then submit. Official certificate decisions stay in the Learning Hub. */
@Composable internal fun QuizScreen(
    lesson: Lesson, onComplete: (Int) -> Unit, modifier: Modifier = Modifier,
    onContinue: (() -> Unit)? = null, continueLabel: String = "Next lesson"
) {
    // A keyed subtree also resets scroll positions when a different quiz is opened.
    key(lesson.id) { QuizAttempt(lesson, onComplete, modifier, onContinue, continueLabel) }
}

@Composable private fun QuizAttempt(
    lesson: Lesson, onComplete: (Int) -> Unit, modifier: Modifier,
    onContinue: (() -> Unit)?, continueLabel: String
) {
    val questions = lesson.questions
    var answers by rememberSaveable { mutableStateOf(List(questions.size) { -1 }) }
    var current by rememberSaveable { mutableIntStateOf(0) }
    var stage by rememberSaveable { mutableStateOf("answer") }
    var score by rememberSaveable { mutableIntStateOf(-1) }
    var missedOnly by rememberSaveable { mutableStateOf(false) }
    val answered = answers.count { it >= 0 }
    BackHandler(stage == "review") { stage = "answer" }
    if (questions.isEmpty()) {
        Column(modifier.padding(20.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            Text("No questions available", style = MaterialTheme.typography.titleLarge)
            Text("Please contact TIH support for this assessment.")
        }
        return
    }
    val kind = if (lesson.isFinal) "FINAL ASSESSMENT" else if (lesson.title.contains("practice", true)) "PRACTICE" else "KNOWLEDGE CHECK"
    val missed = questions.indices.filter { answers[it] != questions[it].answer }
    Column(modifier.fillMaxWidth()) {
        // All instructional content scrolls; controls remain within reach on small phones.
        key(stage, current.takeIf { stage == "answer" }, missedOnly) {
            LazyColumn(Modifier.weight(1f).fillMaxWidth().testTag("quiz-content"),
                contentPadding = PaddingValues(20.dp), verticalArrangement = Arrangement.spacedBy(16.dp)) {
                item {
                    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Text(kind, style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.secondary)
                        Text(lesson.title, style = MaterialTheme.typography.titleLarge, modifier = Modifier.semantics { heading() })
                        Text(if (stage == "result") "Your learning snapshot" else "${questions.size} questions · 70% to pass · No timer",
                            style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    }
                }
                if (stage == "answer") {
                    item {
                        Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                                Text("Question ${current + 1} of ${questions.size}", style = MaterialTheme.typography.labelLarge)
                                Text("$answered answered", style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
                            }
                            LinearProgressIndicator(progress = { answered.toFloat() / questions.size }, modifier = Modifier.fillMaxWidth())
                            Text("Choose one answer. You can change it before submitting.", style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                        }
                    }
                    item {
                        Surface(shape = RoundedCornerShape(22.dp), color = MaterialTheme.colorScheme.surface) {
                            Column(Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(18.dp)) {
                                Text(questions[current].question, style = MaterialTheme.typography.titleMedium)
                                Column(Modifier.selectableGroup(), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                                    questions[current].options.forEachIndexed { index, option ->
                                        AnswerOption(index, option, answers[current] == index) {
                                            answers = answers.toMutableList().also { it[current] = index }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    item {
                        Text("Jump to a question", style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
                        LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                            items(questions.indices.toList()) { index ->
                                FilterChip(selected = index == current, onClick = { current = index },
                                    modifier = Modifier.heightIn(min = 48.dp).semantics {
                                        contentDescription = "Question ${index + 1}, ${if (answers[index] >= 0) "answered" else "unanswered"}"
                                    }, label = { Text("${index + 1}") }, leadingIcon = if (answers[index] >= 0) {
                                        { Icon(Icons.Outlined.Check, null, Modifier.size(16.dp)) }
                                    } else null)
                            }
                        }
                    }
                } else if (stage == "review") {
                    item {
                        Text("Ready to check your work?", style = MaterialTheme.typography.titleMedium)
                        Text(if (answered == questions.size) "All questions answered. Tap any answer to change it, or submit below."
                            else "${questions.size - answered} unanswered. Complete every question before submitting.",
                            style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    }
                    items(questions.indices.toList()) { index ->
                        Card(onClick = { current = index; stage = "answer" }, modifier = Modifier.fillMaxWidth(),
                            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)) {
                            Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                                Text("Question ${index + 1}", style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.primary)
                                Text(questions[index].question, style = MaterialTheme.typography.bodyMedium)
                                Text(questions[index].options.getOrNull(answers[index]) ?: "Not answered — tap to finish",
                                    style = MaterialTheme.typography.titleSmall, color = if (answers[index] < 0) MaterialTheme.colorScheme.error else MaterialTheme.colorScheme.onSurface)
                            }
                        }
                    }
                } else {
                    item {
                        Surface(shape = RoundedCornerShape(24.dp), color = MaterialTheme.colorScheme.primaryContainer) {
                            Column(Modifier.fillMaxWidth().padding(22.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                                Icon(if (QuizScorer.passed(score)) Icons.Outlined.WorkspacePremium else Icons.Outlined.School,
                                    null, Modifier.size(30.dp), tint = MaterialTheme.colorScheme.onPrimaryContainer)
                                Text("$score%", style = MaterialTheme.typography.displaySmall, color = MaterialTheme.colorScheme.onPrimaryContainer)
                                Text(if (QuizScorer.passed(score)) "Well done!" else "Keep building your skills", style = MaterialTheme.typography.titleLarge,
                                    color = MaterialTheme.colorScheme.onPrimaryContainer)
                                Text("${questions.size - missed.size} of ${questions.size} correct · ${if (QuizScorer.passed(score)) "Passed" else "70% needed to pass"}",
                                    style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onPrimaryContainer)
                            }
                        }
                    }
                    item {
                        Text("Review and learn", style = MaterialTheme.typography.titleMedium)
                        Text("Your best score is saved on this device. These are app practice results; official certificates remain in the TIH Learning Hub.",
                            style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                            FilterChip(!missedOnly, { missedOnly = false }, label = { Text("All answers") })
                            FilterChip(missedOnly, { missedOnly = true }, label = { Text("Missed (${missed.size})") })
                        }
                    }
                    if (missedOnly && missed.isEmpty()) item { Text("You got every answer right.", style = MaterialTheme.typography.bodyLarge) }
                    items(if (missedOnly) missed else questions.indices.toList()) { index ->
                        AnswerReview(questions[index], index, answers[index])
                    }
                    item {
                        OutlinedButton(onClick = {
                            answers = List(questions.size) { -1 }; current = 0; score = -1; missedOnly = false; stage = "answer"
                        }, modifier = Modifier.fillMaxWidth().heightIn(min = 48.dp)) {
                            Icon(Icons.Outlined.Refresh, null, Modifier.size(18.dp)); Spacer(Modifier.width(8.dp)); Text("Practise again")
                        }
                    }
                }
            }
        }
        Surface(color = MaterialTheme.colorScheme.surface, shadowElevation = 4.dp) {
            Column(Modifier.fillMaxWidth().padding(horizontal = 20.dp, vertical = 12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                when (stage) {
                    "answer" -> {
                        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                            OutlinedButton(onClick = { current-- }, enabled = current > 0, modifier = Modifier.weight(1f).heightIn(min = 48.dp)) { Text("Previous") }
                            Button(onClick = { if (current < questions.lastIndex) current++ else stage = "review" },
                                modifier = Modifier.weight(1f).heightIn(min = 48.dp)) { Text(if (current < questions.lastIndex) "Next question" else "Review answers") }
                        }
                        if (current < questions.lastIndex) TextButton(onClick = { stage = "review" }, modifier = Modifier.align(Alignment.CenterHorizontally)) { Text("Review answers ($answered/${questions.size})") }
                    }
                    "review" -> {
                        Button(onClick = {
                            score = QuizScorer.score(questions, answers); stage = "result"; onComplete(score)
                        }, enabled = answered == questions.size, modifier = Modifier.fillMaxWidth().heightIn(min = 48.dp)) { Text("Submit answers") }
                        TextButton(onClick = { current = answers.indexOfFirst { it < 0 }.takeIf { it >= 0 } ?: current; stage = "answer" },
                            modifier = Modifier.align(Alignment.CenterHorizontally)) { Text(if (answered < questions.size) "Finish unanswered questions" else "Back to questions") }
                    }
                    else -> if (onContinue != null) Button(onClick = onContinue, modifier = Modifier.fillMaxWidth().heightIn(min = 48.dp)) { Text(continueLabel) }
                        else Text("Review your answers above, or practise again.", style = MaterialTheme.typography.bodySmall)
                }
            }
        }
    }
}

@Composable private fun AnswerOption(index: Int, text: String, selected: Boolean, onSelect: () -> Unit) {
    Surface(shape = RoundedCornerShape(14.dp),
        color = if (selected) MaterialTheme.colorScheme.primaryContainer else MaterialTheme.colorScheme.surface,
        border = BorderStroke(if (selected) 2.dp else 1.dp, if (selected) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.outlineVariant)) {
        Row(Modifier.fillMaxWidth().heightIn(min = 58.dp).selectable(selected, role = Role.RadioButton, onClick = onSelect)
            .padding(horizontal = 14.dp, vertical = 12.dp), verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            Text(('A'.code + index).toChar().toString(), style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.primary)
            Text(text, Modifier.weight(1f), style = MaterialTheme.typography.bodyLarge)
            Icon(if (selected) Icons.Outlined.CheckCircle else Icons.Outlined.RadioButtonUnchecked, null,
                Modifier.size(22.dp), tint = if (selected) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable private fun AnswerReview(question: Question, index: Int, answer: Int) {
    val correct = answer == question.answer
    Card(Modifier.fillMaxWidth(), colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)) {
        Column(Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                Icon(if (correct) Icons.Outlined.CheckCircle else Icons.Outlined.Info, null, Modifier.size(20.dp),
                    tint = if (correct) MaterialTheme.colorScheme.tertiary else MaterialTheme.colorScheme.error)
                Text("Question ${index + 1} · ${if (correct) "Correct" else "Needs review"}", style = MaterialTheme.typography.labelLarge)
            }
            Text(question.question, style = MaterialTheme.typography.titleSmall)
            if (!correct) Text("Your answer: ${question.options[answer]}", style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Text("Correct answer: ${question.options[question.answer]}", style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.tertiary)
            if (question.explanation.isNotBlank()) {
                HorizontalDivider(color = MaterialTheme.colorScheme.outlineVariant)
                Text(question.explanation, style = MaterialTheme.typography.bodyMedium)
            }
        }
    }
}
