package org.tolbertinnovationhub.learning.data

/** Completed records are retained; gaps must be finished before later topics open. */
object LessonSequence {
    fun unlocked(order: List<String>, completed: Set<String>, id: String): Boolean {
        val index = order.indexOf(id)
        return index >= 0 && order.take(index).all { it in completed }
    }
}
