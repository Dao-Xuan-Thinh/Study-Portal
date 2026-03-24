/* Study Portal – chapter bookmark / star system */
(function(){
  var SK = 'study_bookmarks';

  function getBookmarks(){ try{ return JSON.parse(localStorage.getItem(SK)||'[]'); }catch(e){ return []; } }
  function setBookmarks(arr){ try{ localStorage.setItem(SK,JSON.stringify(arr)); }catch(e){} }
  function isBookmarked(h){ return getBookmarks().indexOf(h) !== -1; }
  function toggleBookmark(h){
    var bm = getBookmarks(), i = bm.indexOf(h);
    if(i === -1){ bm.push(h); } else { bm.splice(i,1); }
    setBookmarks(bm);
    return i === -1;
  }

  /* ── CSS ── */
  var style = document.createElement('style');
  style.textContent =
    /* Star button lives inside .card-top flex row — no absolute positioning needed */
    '.star-btn{background:none;border:none;cursor:pointer;font-size:14px;line-height:1;'+
    'font-family:Arial,sans-serif;color:#6e7681;padding:3px 5px;border-radius:4px;'+
    'opacity:0;flex-shrink:0;margin-left:auto;'+
    'transition:opacity .18s,color .15s,transform .15s;}'+
    '.chapter-card:hover .star-btn{opacity:1;}'+
    '.star-btn.starred{opacity:1;color:#e3b341;}'+
    '.star-btn:hover{opacity:1!important;color:#e3b341;transform:scale(1.2);}'+
    /* Starred section */
    '#starred-section{margin-bottom:32px;}'+
    '#starred-section .part-header{border-bottom-color:rgba(227,179,65,0.3);}'+
    '#starred-section .part-bar{background:#e3b341!important;}'+
    '#starred-section .part-label{color:#e3b341!important;}'+
    '#starred-section .chapter-card:hover{border-color:rgba(227,179,65,0.55);box-shadow:0 8px 24px rgba(0,0,0,0.4);}'+
    '#starred-section .star-btn{opacity:1;}'+   /* always visible in starred section */
    '#starred-section .star-btn:hover{color:#f85149;}'; /* red hint = "remove" on hover */
  document.head.appendChild(style);

  /* ── Make a fresh star button with correct state ── */
  function makeStarBtn(href, starred){
    var btn = document.createElement('button');
    btn.className = 'star-btn'+(starred?' starred':'');
    btn.title = starred ? 'Remove bookmark' : 'Bookmark this chapter';
    btn.setAttribute('aria-label', 'Toggle bookmark');
    btn.textContent = starred ? '★' : '☆';
    btn.addEventListener('click', function(e){
      e.preventDefault(); e.stopPropagation();
      var now = toggleBookmark(href);
      /* Sync all star buttons for this card */
      document.querySelectorAll('[data-star-href]').forEach(function(b){
        if(b.getAttribute('data-star-href') === href){
          b.className='star-btn'+(now?' starred':'');
          b.textContent=now?'★':'☆';
          b.title=now?'Remove bookmark':'Bookmark this chapter';
        }
      });
      renderStarred();
    });
    btn.setAttribute('data-star-href', href);
    return btn;
  }

  /* ── Rebuild starred section ── */
  function renderStarred(){
    var bm = getBookmarks();
    var existing = document.getElementById('starred-section');
    if(bm.length === 0){ if(existing) existing.remove(); return; }

    if(!existing){
      existing = document.createElement('section');
      existing.id = 'starred-section';
      existing.className = 'part';
      var main = document.querySelector('main') || document.querySelector('.main') || document.body;
      var firstPart = main.querySelector('.part');
      if(firstPart) main.insertBefore(existing, firstPart);
      else main.appendChild(existing);
    }

    /* Build card map excluding starred section itself */
    var cardMap = {};
    document.querySelectorAll('main .chapter-card, .main .chapter-card').forEach(function(c){
      if(!c.closest('#starred-section')) cardMap[c.getAttribute('href')] = c;
    });

    existing.innerHTML =
      '<div class="part-header">'+
        '<div class="part-bar"></div>'+
        '<div class="part-header-text">'+
          '<div class="part-label">Starred</div>'+
          '<div class="part-title">Bookmarked Chapters</div>'+
        '</div>'+
        '<div class="part-count">'+bm.length+' chapter'+(bm.length!==1?'s':'')+'</div>'+
      '</div>'+
      '<div class="cards" id="starred-cards"></div>';

    var starredCards = existing.querySelector('#starred-cards');
    bm.forEach(function(href){
      var orig = cardMap[href];
      if(!orig) return;
      var clone = orig.cloneNode(true);
      /* Remove any existing star button from clone, then add fresh one */
      var oldBtn = clone.querySelector('.star-btn');
      if(oldBtn) oldBtn.remove();
      var cardTop = clone.querySelector('.card-top');
      var freshBtn = makeStarBtn(href, true); /* always starred in this section */
      if(cardTop) cardTop.appendChild(freshBtn);
      else clone.appendChild(freshBtn);
      starredCards.appendChild(clone);
    });
  }

  /* ── Attach star buttons to all chapter cards ── */
  function initCards(){
    document.querySelectorAll('.chapter-card').forEach(function(card){
      if(card.querySelector('.star-btn')) return;
      var href = card.getAttribute('href');
      if(!href) return;
      var cardTop = card.querySelector('.card-top');
      var btn = makeStarBtn(href, isBookmarked(href));
      if(cardTop) cardTop.appendChild(btn);
      else card.appendChild(btn);
    });
    renderStarred();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initCards);
  } else {
    initCards();
  }
})();

