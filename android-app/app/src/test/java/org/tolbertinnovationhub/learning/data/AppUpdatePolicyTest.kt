package org.tolbertinnovationhub.learning.data

import org.junit.Assert.*
import org.junit.Test

class AppUpdatePolicyTest {
    private val now = 1800000000000L
    private val policy = AppUpdatePolicy.Policy(43, now + 1000)
    @Test fun newerVersionNotifiesThenBlocksAtDeadline() {
        assertTrue(AppUpdatePolicy.evaluate(42, policy, now, now).available)
        assertFalse(AppUpdatePolicy.evaluate(42, policy, now, now).blocked)
        assertTrue(AppUpdatePolicy.evaluate(42, policy, now, now + 1000).blocked)
    }
    @Test fun currentVersionDoesNotRequireReinstall() {
        assertFalse(AppUpdatePolicy.evaluate(43, policy, now, now + 1000).blocked)
        assertFalse(AppUpdatePolicy.evaluate(44, policy, now, now + 1000).blocked)
    }
    @Test fun verificationExpiresExactlyAtFourteenDays() {
        assertFalse(AppUpdatePolicy.evaluate(43, policy, now, now + AppUpdatePolicy.PERIOD - 1).blocked)
        assertTrue(AppUpdatePolicy.evaluate(43, policy, now, now + AppUpdatePolicy.PERIOD).blocked)
        assertTrue(AppUpdatePolicy.evaluate(43, policy, now, now - 1).blocked)
        assertTrue(AppUpdatePolicy.evaluate(43, null, 0, now).blocked)
    }
}
