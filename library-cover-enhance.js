/**
 * TIH Digital Library — original PDF cover for book 101 (Accounting for Non-Accountants)
 * Loads after main library script. Requires cover101-p1.js + cover101-p2.js.
 */
(function () {
  function apply() {
    if (typeof BOOKS === 'undefined' || !Array.isArray(BOOKS)) {
      setTimeout(apply, 50);
      return;
    }
    var covers = window.BOOK_COVERS || {};
    if (!covers[101]) {
      setTimeout(apply, 80);
      return;
    }
    // Attach cover to book 101
    BOOKS.forEach(function (b) {
      if (b.id === 101 && covers[101]) b.cover = covers[101];
    });

    // Override bookCard to show real cover image when present
    var _origCard = bookCard;
    bookCard = function (book, small) {
      var fav = isFav(book.id);
      var catColor = (CAT_COLORS && CAT_COLORS[book.cat]) || '#002868';
      var coverInner = book.cover
        ? '<img src="' + book.cover + '" alt="' + book.title + ' cover" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />' +
          (book.hasPdf ? '<span class="lib-pdf-badge">FREE PDF</span>' : '') +
          (book.isNew ? '<span class="lib-new-ribbon">NEW</span>' : '')
        : '<div class="lib-cover-spine"></div><div class="lib-cover-shine"></div>' +
          (book.isNew ? '<span class="lib-new-ribbon">NEW</span>' : '') +
          (book.hasPdf ? '<span class="lib-pdf-badge">FREE PDF</span>' : '') +
          '<div class="lib-cover-content"><span class="lib-cover-brand">TIH Digital Library</span><div>' +
          '<div class="lib-cover-title">' + book.title + '</div>' +
          '<div class="lib-cover-author">' + book.author + '</div></div></div>' +
          '<span class="lib-cover-symbol" aria-hidden="true">' + book.icon + '</span>' +
          '<div class="lib-cover-label">' + (book.cat || '').toUpperCase() + '</div>';
      return (
        '<div class="lib-book-card" onclick="openBook(' + book.id + ')" tabindex="0" role="button" aria-label="Open ' + book.title + '" onkeydown="if(event.key===\'Enter\')openBook(' + book.id + ')">' +
        '<div class="lib-cover" style="' + (book.cover ? 'background:#0f172a;' : 'background:' + book.bg + ';') + '">' +
        coverInner +
        '</div>' +
        '<p class="lib-book-title">' + book.title + '</p>' +
        '<p class="lib-book-author">' + book.author + '</p>' +
        '<span class="lib-cat-badge" style="background:' + catColor + '18;color:' + catColor + ';">' + book.cat + '</span>' +
        '</div>'
      );
    };

    // Re-render so cards pick up the new cover
    if (typeof renderAllShelves === 'function') renderAllShelves();
    if (typeof renderCatPills === 'function') renderCatPills();

    // Patch openBook modal cover
    var _origOpen = openBook;
    openBook = function (id) {
      _origOpen(id);
      var book = BOOKS.find(function (b) { return b.id === id; });
      if (!book || !book.cover) return;
      var el = document.querySelector('#bookModalBody .lib-modal-cover');
      if (el) {
        el.style.background = '#0f172a';
        el.innerHTML = '<img src="' + book.cover + '" alt="' + book.title + ' cover" style="width:100%;height:100%;object-fit:cover;display:block;" />';
      }
    };
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
