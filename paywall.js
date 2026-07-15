/* ============================================================
   TIH LEARNING HUB, PAYWALL / PAID-ACCESS GATE
   ------------------------------------------------------------
   Locks a course or WASSCE subject until the learner is signed in
   AND has entered a valid access code issued by an administrator
   after mobile-money payment. Reusable across pages.

   Usage (call after HubDB is loaded):
     Paywall.require({
       itemId: 'computer-literacy',           // course id or WASSCE subject id
       itemTitle: 'Computer Literacy',         // shown in the overlay
       onUnlocked: function () { ... }         // optional; default reloads page
     });

   Behaviour:
     - Not signed in  → redirect to the student login (returns here after).
     - No access yet  → full-screen overlay with payment instructions and an
                        access-code field; page content stays blocked.
     - Has access     → does nothing; the page renders normally.
   ============================================================ */
var Paywall = (function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function currentReturnParam(itemId) {
    // Preserve the page the learner was trying to reach so login can return them.
    try { return encodeURIComponent(window.location.pathname.split('/').pop() + window.location.search); }
    catch (e) { return encodeURIComponent(itemId); }
  }

  function buildOverlay(opts, student) {
    var P = HubDB.PAYMENT;
    // Per-item price (premium courses cost more than the US$2 default).
    var amount = (typeof HubDB.priceFor === 'function') ? HubDB.priceFor(opts.itemId) : P.amountUSD;
    var currencyNote = (typeof HubDB.currencyNoteFor === 'function') ? HubDB.currencyNoteFor(opts.itemId) : P.currencyNote;
    var waText = 'PAYMENT / ACCESS REQUEST, TIH Learning Hub\n'
      + 'Student: ' + (student.name || '') + '\n'
      + 'Student ID: ' + student.id + '\n'
      + 'Item: ' + (opts.itemTitle || opts.itemId) + '\n'
      + 'Item ID: ' + opts.itemId + '\n'
      + 'I have paid ' + currencyNote + ' via Mobile Money to ' + P.momoNumber + ' (' + P.momoName + '). '
      + 'Please confirm and send my access code.';
    var wa = 'https://wa.me/' + String(HubDB.WHATSAPP_NUMBER).replace(/[^0-9]/g, '') + '?text=' + encodeURIComponent(waText);
    // Call / text the same number, with the learner's name + ID pre-filled.
    var contactIntl = '+' + String(HubDB.WHATSAPP_NUMBER).replace(/[^0-9]/g, '');
    var smsText = 'TIH Learning Hub payment. Name: ' + (student.name || '') + ', Student ID: ' + student.id
      + '. I paid ' + currencyNote + ' for "' + (opts.itemTitle || opts.itemId) + '". Please confirm and send my access code.';
    var telLink = 'tel:' + contactIntl;
    var smsLink = 'sms:' + contactIntl + '?body=' + encodeURIComponent(smsText);

    var o = document.createElement('div');
    o.id = 'tihPaywall';
    o.setAttribute('role', 'dialog');
    o.setAttribute('aria-modal', 'true');
    o.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(15,23,42,.72);display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:1.5rem 1rem;font-family:Inter,system-ui,sans-serif;';
    o.innerHTML =
      '<div style="background:#fff;max-width:440px;width:100%;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.4);overflow:hidden;margin:auto;">'
      + '<div style="background:linear-gradient(135deg,#001a45,#002868);color:#fff;padding:1.4rem 1.5rem;text-align:center;">'
      + '<div style="font-size:2rem;line-height:1;margin-bottom:.4rem;">🔒</div>'
      + '<div style="font-family:Poppins,sans-serif;font-weight:800;font-size:1.15rem;">This Course is Locked</div>'
      + '<div style="font-size:.85rem;color:rgba(255,255,255,.82);margin-top:.25rem;">' + esc(opts.itemTitle || opts.itemId) + '</div>'
      + '</div>'
      + '<div style="padding:1.4rem 1.5rem;">'
      + '<p style="font-size:.92rem;color:#374151;margin:0 0 1rem;">Access to this course costs <b>US$' + esc(amount) + '</b>. Follow these steps to unlock it:</p>'
      + '<ol style="margin:0 0 1rem 1.1rem;padding:0;font-size:.9rem;color:#374151;line-height:1.7;">'
      + '<li><b>Pay ' + esc(currencyNote) + '</b> by Mobile Money to:<br><a href="' + telLink + '" style="display:inline-flex;align-items:center;gap:.4rem;background:#eaf4ff;border:1px dashed #1E3A8A;border-radius:8px;padding:.55rem .9rem;margin-top:.35rem;font-weight:700;color:#1E3A8A;text-decoration:none;">📞 ' + esc(P.momoNumber) + ' &middot; ' + esc(P.momoName) + '</a><span style="display:block;font-size:.72rem;color:#64748b;margin-top:.25rem;">Tap the number to call</span></li>'
      + '<li style="margin-top:.6rem;">Confirm your payment with the TIH team, by <b>WhatsApp</b>, <b>text</b>, or <b>call</b> (buttons below). Always send your <b>name</b> and <b>Student ID</b>: <b>' + esc(student.id) + '</b>.</li>'
      + '<li style="margin-top:.6rem;">The administrator confirms your payment and sends you a <b>6-character access code</b>.</li>'
      + '<li style="margin-top:.6rem;">Enter the code below to unlock this course.</li>'
      + '</ol>'
      + '<a href="' + wa + '" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;gap:.5rem;background:#25D366;color:#fff;font-weight:700;text-decoration:none;border-radius:999px;padding:.8rem;min-height:50px;font-size:.92rem;">💬 Send Payment Confirmation on WhatsApp</a>'
      + '<div style="display:flex;gap:.5rem;margin-top:.6rem;">'
      + '<a href="' + telLink + '" style="flex:1;display:flex;align-items:center;justify-content:center;gap:.4rem;background:#1E3A8A;color:#fff;font-weight:700;text-decoration:none;border-radius:999px;padding:.75rem;min-height:48px;font-size:.9rem;">📞 Call</a>'
      + '<a href="' + smsLink + '" style="flex:1;display:flex;align-items:center;justify-content:center;gap:.4rem;background:#1565d8;color:#fff;font-weight:700;text-decoration:none;border-radius:999px;padding:.75rem;min-height:48px;font-size:.9rem;">✉️ Text</a>'
      + '</div>'
      + '<p style="font-size:.78rem;color:#64748b;margin:.7rem 0 0;text-align:center;">Send your <b>name</b> and <b>Student ID</b> (' + esc(student.id) + ') so we can confirm your payment.</p>'
      + '<button id="tihRequestBtn" style="width:100%;background:#1E3A8A;color:#fff;border:none;border-radius:999px;font-weight:800;font-size:.95rem;padding:.85rem;margin-top:.9rem;cursor:pointer;font-family:inherit;min-height:50px;">📩 I\'ve Paid, Request Access</button>'
      + '<div id="tihRequestFb" style="font-size:.84rem;font-weight:600;min-height:1.1em;margin-top:.5rem;text-align:center;"></div>'
      + '<div style="border-top:1px solid #e2e8f0;margin:1.1rem 0 .9rem;"></div>'
      + '<label style="display:block;font-size:.82rem;font-weight:700;color:#374151;margin-bottom:.4rem;">Already got your access code? Enter it here:</label>'
      + '<input id="tihAccessInput" type="text" maxlength="6" placeholder="ACCESS CODE" style="width:100%;padding:.8rem .9rem;border:1.5px solid #e2e8f0;border-radius:10px;font-family:inherit;font-size:1.05rem;text-transform:uppercase;letter-spacing:.2em;text-align:center;min-height:50px;box-sizing:border-box;" />'
      + '<button id="tihAccessBtn" style="width:100%;background:#E31E24;color:#fff;border:none;border-radius:10px;font-weight:800;font-size:1rem;padding:.85rem;margin-top:.6rem;cursor:pointer;font-family:inherit;min-height:50px;">🔓 Unlock Course</button>'
      + '<div id="tihAccessFb" style="font-size:.85rem;font-weight:600;color:#e31e24;min-height:1.1em;margin-top:.5rem;"></div>'
      + '<div style="margin-top:1rem;text-align:center;">'
      + '<a href="hub-dashboard.html" style="color:#64748b;font-size:.82rem;text-decoration:none;">← Back to My Dashboard</a>'
      + '</div>'
      + '</div></div>';
    return o;
  }

  function require(opts) {
    if (typeof HubDB === 'undefined') { return; }
    opts = opts || {};
    var itemId = opts.itemId;
    if (!itemId) return;

    var session = HubDB.studentSession();
    if (!session) {
      window.location.replace('hub-dashboard.html?next=' + currentReturnParam(itemId));
      return;
    }
    var student = HubDB.findStudent(session.id);
    if (!student || student.status !== 'active') {
      window.location.replace('hub-dashboard.html?next=' + currentReturnParam(itemId));
      return;
    }
    if (HubDB.hasAccess(itemId)) return; // already paid & unlocked → allow

    // Locked: block the page with the payment overlay.
    var overlay = buildOverlay(opts, student);
    document.body.appendChild(overlay);
    document.documentElement.style.overflow = 'hidden';

    function attempt() {
      var input = document.getElementById('tihAccessInput');
      var fb = document.getElementById('tihAccessFb');
      var code = (input.value || '').trim();
      if (code.length < 6) { fb.textContent = 'Enter the 6-character code from the TIH team.'; return; }
      HubDB.verifyAccessCode(student.id, itemId, code).then(function (ok) {
        if (ok) {
          document.documentElement.style.overflow = '';
          overlay.remove();
          if (typeof opts.onUnlocked === 'function') opts.onUnlocked();
          else window.location.reload();
        } else {
          fb.textContent = 'Invalid code. Check with the TIH team after your payment is confirmed.';
        }
      });
    }
    document.getElementById('tihAccessBtn').addEventListener('click', attempt);
    document.getElementById('tihAccessInput').addEventListener('keydown', function (e) { if (e.key === 'Enter') attempt(); });

    // "I've paid, Request Access": logs a request the admin can grant in one tap.
    var reqBtn = document.getElementById('tihRequestBtn');
    if (reqBtn) {
      reqBtn.addEventListener('click', function () {
        var fb = document.getElementById('tihRequestFb');
        reqBtn.disabled = true; reqBtn.textContent = 'Sending request…';
        HubDB.requestAccess(itemId).then(function (res) {
          if (res && res.ok) {
            fb.style.color = '#16a34a';
            fb.textContent = '✅ Request sent! The TIH team will confirm your payment and unlock it, then log in again.';
            reqBtn.textContent = '✅ Request Sent';
          } else {
            reqBtn.disabled = false; reqBtn.textContent = '📩 I\'ve Paid, Request Access';
            fb.style.color = '#e31e24';
            fb.textContent = res && res.offline
              ? 'Could not reach the server. Please use WhatsApp, Text, or Call above.'
              : 'Could not send the request. Please use WhatsApp, Text, or Call above.';
          }
        });
      });
    }
  }

  return { require: require };
})();
