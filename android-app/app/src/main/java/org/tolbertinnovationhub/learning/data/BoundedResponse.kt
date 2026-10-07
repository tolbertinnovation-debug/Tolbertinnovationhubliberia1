package org.tolbertinnovationhub.learning.data

import okhttp3.ResponseBody
import java.io.ByteArrayOutputStream
import java.io.IOException

/** Limits decoded bytes, including responses without a Content-Length header. */
fun ResponseBody.boundedText(limit: Int): String {
    require(limit > 0)
    return byteStream().use { input ->
        val output = ByteArrayOutputStream()
        val buffer = ByteArray(4096)
        while (true) {
            val count = input.read(buffer)
            if (count < 0) break
            if (count > limit - output.size()) throw IOException("Response too large")
            output.write(buffer, 0, count)
        }
        output.toString("UTF-8")
    }
}
