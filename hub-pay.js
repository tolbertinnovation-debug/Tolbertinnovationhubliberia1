/* ============================================================
   TIH LEARNING HUB — PAYMENTS CLIENT (Flutterwave)
   ------------------------------------------------------------
   Thin, safe front-end helper. It NEVER handles a secret key.
   It only asks our Supabase Edge Function (create-payment) for a
   hosted-checkout link and sends the learner there. The amount is
   decided by the server, so nothing here can be tampered with to
   pay less.

   Usage:
     if (HubPay.enabled()) HubPay.startCheckout('webdev');

   Controlled by window.TIH_PAYMENTS_CONFIG in hub-config.js.
   While enabled:false this module is inert and callers should fall
   back to the existing request-access / manual-deposit flow.
   ============================================================ */
(function () {
  var CFG = (typeof window !== 'undefined' && window.TIH_PAYMENTS_CONFIG) || {};

  function enabled() {
    return !!(CFG.enabled && CFG.functionsBase);
  }

  // Pull the signed-in learner from HubDB when the caller doesn't pass one.
  function currentLearner() {
    try {
      if (typeof HubDB !== 'undefined' && HubDB.studentSession) {
        var s = HubDB.studentSession();
        if (s && s.id) return s;
      }
    } catch (e) {}
    return null;
  }

  function titleFor(itemId) {
    try {
      if (typeof COURSES_DB !== 'undefined' && COURSES_DB[itemId] && COURSES_DB[itemId].title) {
        return COURSES_DB[itemId].title;
      }
    } catch (e) {}
    if (itemId === 'wassce-all') return 'WASSCE PRO — All Subjects';
    return itemId;
  }

  // Returns a Promise. On success it redirects the browser to the hosted
  // checkout page (so the Promise usually does not resolve in-page). On
  // failure it resolves { ok:false, error } so the caller can show a message
  // and fall back to the manual flow.
  function startCheckout(itemId, opts) {
    opts = opts || {};
    if (!enabled()) return Promise.resolve({ ok: false, error: 'Online payment is not enabled yet.' });

    var learner = currentLearner();
    var studentId = opts.studentId || (learner && learner.id) || '';
    if (!studentId) return Promise.resolve({ ok: false, error: 'Please sign in before paying.' });

    var payload = {
      studentId: studentId,
      studentName: opts.studentName || (learner && learner.name) || '',
      email: opts.email || (learner && learner.email) || '',
      phone: opts.phone || (learner && learner.phone) || '',
      itemId: itemId,
      itemTitle: opts.itemTitle || titleFor(itemId),
      currency: opts.currency || CFG.currency || 'USD',
      redirectUrl: opts.redirectUrl ||
        (location.origin + location.pathname.replace(/[^\/]*$/, '') + 'payment-complete.html')
    };

    return fetch(CFG.functionsBase.replace(/\/$/, '') + '/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (r) { return r.json().then(function (j) { return { status: r.status, body: j }; }); })
      .then(function (res) {
        if (res.body && res.body.link) {
          // Remember what we were paying for, so the return page can confirm it.
          try {
            sessionStorage.setItem('tih_pay_pending', JSON.stringify({
              itemId: itemId, tx_ref: res.body.tx_ref, at: new Date().toISOString()
            }));
          } catch (e) {}
          window.location.href = res.body.link;
          return { ok: true };
        }
        return { ok: false, error: (res.body && res.body.error) || 'Could not start payment.' };
      })
      .catch(function (e) { return { ok: false, error: String(e) }; });
  }

  window.HubPay = { enabled: enabled, startCheckout: startCheckout, config: CFG };
})();
