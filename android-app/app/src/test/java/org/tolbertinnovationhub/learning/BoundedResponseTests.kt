package org.tolbertinnovationhub.learning

import okhttp3.ResponseBody.Companion.toResponseBody
import org.junit.Assert.assertEquals
import org.junit.Test
import org.tolbertinnovationhub.learning.data.boundedText
import java.io.IOException

class BoundedResponseTests {
    @Test fun acceptsAtLimit() { assertEquals("hello", "hello".toResponseBody().boundedText(5)) }
    @Test(expected = IOException::class) fun rejectsOversized() { "123456".toResponseBody().boundedText(5) }
    @Test(expected = IOException::class) fun countsUtf8Bytes() { "ééé".toResponseBody().boundedText(5) }
}
