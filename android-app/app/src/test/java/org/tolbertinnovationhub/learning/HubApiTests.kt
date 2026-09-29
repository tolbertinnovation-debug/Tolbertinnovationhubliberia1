package org.tolbertinnovationhub.learning

import kotlinx.coroutines.runBlocking
import okhttp3.mockwebserver.MockResponse
import okhttp3.mockwebserver.MockWebServer
import org.junit.Assert.*
import org.junit.Test
import org.tolbertinnovationhub.learning.data.*

class HubApiTests {
    @Test fun authenticationUsesBearerAndNeverReadsAnotherStudentsGrants() = runBlocking {
        MockWebServer().use { server ->
            server.enqueue(MockResponse().setBody("""{"access_token":"access","refresh_token":"refresh"}"""))
            server.enqueue(MockResponse().setBody("""[{"id":"TIH-STU-TEST","name":"Test Learner","status":"active"}]"""))
            server.enqueue(MockResponse().setBody("""[{"student_id":"TIH-STU-TEST","item_id":"android","access_granted":true,"payment_status":"paid"},{"student_id":"OTHER","item_id":"ai","access_granted":true},{"student_id":"TIH-STU-TEST","item_id":"data","access_granted":false,"payment_status":"pending"}]"""))
            val session = HubApi(server.url("/").toString().trimEnd('/'), "public-key").signIn("test@example.test", "test-password")
            assertEquals(setOf("android"), session.grants)
            assertEquals("/auth/v1/token?grant_type=password", server.takeRequest().path)
            val profile = server.takeRequest()
            assertEquals("Bearer access", profile.getHeader("Authorization"))
            assertEquals("id,name,status", profile.requestUrl!!.queryParameter("select"))
            val grants = server.takeRequest()
            assertTrue(grants.path!!.contains("student_id=eq.TIH-STU-TEST"))
            assertEquals("Bearer access", grants.getHeader("Authorization"))
            Unit
        }
    }
    @Test fun suspendedAccountsFailClosed() = runBlocking {
        MockWebServer().use { server ->
            server.enqueue(MockResponse().setBody("""{"access_token":"access","refresh_token":"refresh"}"""))
            server.enqueue(MockResponse().setBody("""[{"id":"TEST","name":"Test","status":"suspended"}]"""))
            try { HubApi(server.url("/").toString().trimEnd('/'), "key").signIn("x", "y"); fail("Expected failure") }
            catch (_: HubAccessException) { assertEquals(2, server.requestCount) }
            Unit
        }
    }
}
