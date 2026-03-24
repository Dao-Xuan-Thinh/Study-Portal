/* Study Portal – shared navigation bar + back-to-top + dark/light theme */
(function(){
  if(document.getElementById('study-nav')) return;

  var scriptEl = document.currentScript;
  var rootUrl = scriptEl ? scriptEl.src.replace(/[^/]*$/, '') : '';

  var href = (window.location.href || '').replace(/\\/g, '/');
  var lc   = href.toLowerCase();

  var subjectLabel = '', subjectUrl = '', isChapter = false, isSubject = false;

  if     (lc.indexOf('/cea/coa/')       !== -1){ isChapter=true;  subjectLabel='COA';  subjectUrl=rootUrl+'CEA/COA.html'; }
  else if(lc.indexOf('/cea/coa.html')   !== -1){ isSubject=true;  subjectLabel='COA'; }
  else if(lc.indexOf('/csi/ch/')        !== -1){ isChapter=true;  subjectLabel='FCS';  subjectUrl=rootUrl+'CSI/CSI.html'; }
  else if(lc.indexOf('/csi/csi.html')   !== -1){ isSubject=true;  subjectLabel='FCS'; }
  else if(lc.indexOf('/mae/alg/')       !== -1){ isChapter=true;  subjectLabel='ALG';  subjectUrl=rootUrl+'MAE/ALG.html'; }
  else if(lc.indexOf('/mae/alg.html')   !== -1){ isSubject=true;  subjectLabel='ALG'; }
  else if(lc.indexOf('/mae/cal1/')      !== -1){ isChapter=true;  subjectLabel='CAL1'; subjectUrl=rootUrl+'MAE/CAL1.html'; }
  else if(lc.indexOf('/mae/cal1.html')  !== -1){ isSubject=true;  subjectLabel='CAL1'; }
  else if(lc.indexOf('/mae/cal2/')      !== -1){ isChapter=true;  subjectLabel='CAL2'; subjectUrl=rootUrl+'MAE/CAL2.html'; }
  else if(lc.indexOf('/mae/cal2.html')  !== -1){ isSubject=true;  subjectLabel='CAL2'; }

  var portalUrl = rootUrl + 'index.html';

  /* ── Breadcrumbs ── */
  var crumbs = '';
  crumbs += '<a href="'+portalUrl+'" class="snav-crumb">⌂ Portal</a>';
  if(isSubject){
    crumbs += '<span class="snav-sep">›</span>';
    crumbs += '<span class="snav-crumb snav-current">'+subjectLabel+'</span>';
  } else if(isChapter){
    crumbs += '<span class="snav-sep">›</span>';
    crumbs += '<a href="'+subjectUrl+'" class="snav-crumb">'+subjectLabel+'</a>';
    crumbs += '<span class="snav-sep">›</span>';
    var chTitle = document.title.split(/\s*[—–\-]\s*/)[0].trim();
    crumbs += '<span class="snav-crumb snav-current">'+chTitle+'</span>';
  }

  /* ── CSS ── */
  var css =
    '#study-nav{position:fixed;top:0;left:0;right:0;z-index:9999;height:40px;'+
    'background:rgba(13,17,23,0.97);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);'+
    'border-bottom:1px solid #30363d;display:flex;align-items:center;}'+
    '.snav-inner{max-width:1400px;width:100%;margin:0 auto;padding:0 16px;'+
    'display:flex;align-items:center;gap:0;}'+
    '.snav-crumbs{flex:1;display:flex;align-items:center;overflow:hidden;min-width:0;}'+
    '.snav-crumb{color:#8b949e;text-decoration:none;font-family:"IBM Plex Mono",monospace;'+
    'font-size:11px;padding:4px 7px;border-radius:3px;white-space:nowrap;'+
    'transition:color .15s,background .15s;}'+
    'a.snav-crumb:hover{color:#e6edf3;background:rgba(139,148,158,0.14);}'+
    '.snav-current{color:#e6edf3;font-weight:600;font-family:"IBM Plex Mono",monospace;'+
    'font-size:11px;padding:4px 7px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}'+
    '.snav-sep{color:#484f58;font-size:13px;padding:0 2px;flex-shrink:0;}'+
    /* Theme toggle */
    '.snav-theme-btn{flex-shrink:0;margin-left:8px;background:none;border:1px solid #30363d;'+
    'border-radius:5px;padding:3px 8px;cursor:pointer;font-size:13px;color:#8b949e;'+
    'transition:color .15s,border-color .15s,background .15s;line-height:1;}'+
    '.snav-theme-btn:hover{color:#e6edf3;border-color:#8b949e;background:rgba(139,148,158,0.1);}'+
    /* Back-to-top */
    '#btt-btn{position:fixed;bottom:28px;right:28px;z-index:9998;width:40px;height:40px;'+
    'border-radius:50%;border:1px solid #30363d;background:rgba(22,27,34,0.96);'+
    'color:#8b949e;font-size:18px;cursor:pointer;display:none;align-items:center;'+
    'justify-content:center;transition:background .15s,color .15s;'+
    'backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);}'+
    '#btt-btn:hover{background:#1c2330;color:#e6edf3;border-color:#8b949e;}'+
    '#btt-btn.btt-visible{display:flex;}'+
    /* ── Light Mode Overrides ── */
    'html.light-mode{--bg:#f6f8fa;--surface:#ffffff;--surface2:#eaeef2;--border:#d0d7de;'+
    '--text:#24292f;--text-muted:#57606a;--text-dim:#6e7781;--yellow:#bf8700;color-scheme:light;}'+
    'html.light-mode body{background-color:#f6f8fa!important;color:#24292f!important;}'+
    'html.light-mode .hero{background:linear-gradient(160deg,#f0f2f5 0%,#ffffff 60%,#eaeef2 100%)!important;}'+
    'html.light-mode .hero::before{opacity:0.15!important;}'+
    'html.light-mode #study-nav{background:rgba(246,248,250,0.97)!important;border-bottom-color:#d0d7de!important;}'+
    'html.light-mode .snav-crumb{color:#57606a!important;}'+
    'html.light-mode .snav-current{color:#24292f!important;}'+
    'html.light-mode a.snav-crumb:hover{color:#24292f!important;background:rgba(0,0,0,0.06)!important;}'+
    'html.light-mode .snav-sep{color:#d0d7de!important;}'+
    'html.light-mode .snav-theme-btn{color:#57606a!important;border-color:#d0d7de!important;}'+
    'html.light-mode .snav-theme-btn:hover{color:#24292f!important;background:rgba(0,0,0,0.06)!important;}'+
    'html.light-mode #btt-btn{background:rgba(255,255,255,0.96)!important;border-color:#d0d7de!important;color:#57606a!important;}'+
    'html.light-mode #btt-btn:hover{background:#f0f2f5!important;color:#24292f!important;}'+
    'html.light-mode .chapter-card{background:#ffffff!important;}'+
    'html.light-mode .chapter-card:hover{box-shadow:0 8px 24px rgba(0,0,0,0.1)!important;}'+
    'html.light-mode .search-wrap{background:#ffffff!important;border-bottom-color:#d0d7de!important;}'+
    'html.light-mode .footer{background:#ffffff!important;border-top-color:#d0d7de!important;}'+
    /* Chapter content cards (COA/CSI chapter files) */
    'html.light-mode .card{background:#ffffff!important;border-color:#d0d7de!important;}'+
    'html.light-mode .card-header{background:#f6f8fa!important;}'+
    'html.light-mode code,html.light-mode pre{background:#eaeef2!important;color:#24292f!important;}'+
    /* MAE chapter files */
    'html.light-mode .page-header{background:linear-gradient(160deg,#f0f2f5 0%,#ffffff 100%)!important;border-bottom-color:#d0d7de!important;}'+
    'html.light-mode #page-toc{background:#ffffff!important;border-color:#d0d7de!important;}'+
    'html.light-mode .section{background:#ffffff!important;border-color:#d0d7de!important;}'+
    'html.light-mode .def,html.light-mode .theorem,html.light-mode .formula,html.light-mode .example,html.light-mode .note{border-left-color:#d0d7de!important;}';

  var styleEl = document.createElement('style');
  styleEl.id = 'study-nav-style';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── Theme logic ── */
  var TK = 'study_theme';
  function getTheme(){ try{ return localStorage.getItem(TK)||'dark'; }catch(e){ return 'dark'; } }
  function applyTheme(t){
    document.documentElement.classList.toggle('light-mode', t === 'light');
    if(themeBtn){
      themeBtn.textContent = t === 'light' ? '🌙' : '☀';
      themeBtn.title = t === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
    }
  }

  /* ── Nav element ── */
  var nav = document.createElement('nav');
  nav.id = 'study-nav';
  nav.setAttribute('aria-label', 'Breadcrumb');
  nav.innerHTML =
    '<div class="snav-inner">'+
      '<div class="snav-crumbs">'+crumbs+'</div>'+
      '<button class="snav-theme-btn" id="snav-theme" title="Toggle theme" aria-label="Toggle dark/light mode">☀</button>'+
    '</div>';
  document.body.insertBefore(nav, document.body.firstChild);

  var themeBtn = document.getElementById('snav-theme');
  applyTheme(getTheme());

  themeBtn.addEventListener('click', function(){
    var next = getTheme() === 'light' ? 'dark' : 'light';
    try{ localStorage.setItem(TK, next); }catch(e){}
    applyTheme(next);
  });

  /* Push body content below fixed nav */
  var curPad = parseInt(window.getComputedStyle(document.body).paddingTop) || 0;
  document.body.style.paddingTop = (curPad + 40) + 'px';

  /* ── Back-to-top button ── */
  var bttEl = document.createElement('button');
  bttEl.id = 'btt-btn';
  bttEl.setAttribute('aria-label', 'Back to top');
  bttEl.setAttribute('title', 'Back to top');
  bttEl.textContent = '↑';
  document.body.appendChild(bttEl);

  window.addEventListener('scroll', function(){
    bttEl.classList.toggle('btt-visible', window.scrollY > 320);
  }, {passive: true});
  bttEl.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
})();
