/* Study Portal – cross-chapter reference links */
(function(){
  var scriptEl = document.currentScript;
  var rootUrl = scriptEl ? scriptEl.src.replace(/[^/]*$/, '') : '';

  /* Map: path-relative-to-root → array of {url, title, sub} */
  var RELATED = {
    /* ── COA ── */
    'CEA/COA/CH01-Basic-Concepts-CheatSheet.html':[
      {url:'CSI/CH/CH01-Introduction-CheatSheet.html',title:'Introduction to Computer Science',sub:'FCS'},
      {url:'CSI/CH/CH05-Computer-Organization-CheatSheet.html',title:'Computer Organization',sub:'FCS'}],
    'CEA/COA/CH03-Computer-Function-Interconnection-CheatSheet.html':[
      {url:'CSI/CH/CH05-Computer-Organization-CheatSheet.html',title:'Computer Organization',sub:'FCS'}],
    'CEA/COA/CH04-Cache-Memory-CheatSheet.html':[
      {url:'CEA/COA/CH05-Internal-Memory-CheatSheet.html',title:'Internal Memory',sub:'COA'}],
    'CEA/COA/CH05-Internal-Memory-CheatSheet.html':[
      {url:'CEA/COA/CH04-Cache-Memory-CheatSheet.html',title:'Cache Memory',sub:'COA'},
      {url:'CSI/CH/CH03-Data-Storage-CheatSheet.html',title:'Data Storage',sub:'FCS'}],
    'CEA/COA/CH07-Input-Output-CheatSheet.html':[
      {url:'CEA/COA/CH08-OS-Support-CheatSheet.html',title:'OS Support',sub:'COA'}],
    'CEA/COA/CH08-OS-Support-CheatSheet.html':[
      {url:'CSI/CH/CH07-Operating-Systems-CheatSheet.html',title:'Operating Systems',sub:'FCS'},
      {url:'CEA/COA/CH07-Input-Output-CheatSheet.html',title:'Input / Output',sub:'COA'}],
    'CEA/COA/CH09-Number-Systems-CheatSheet.html':[
      {url:'CSI/CH/CH02-Number-Systems-CheatSheet.html',title:'Number Systems',sub:'FCS'},
      {url:'CSI/CH/CH03-Data-Storage-CheatSheet.html',title:'Data Storage',sub:'FCS'},
      {url:'CEA/COA/CH10-Computer-Arithmetic-CheatSheet.html',title:'Computer Arithmetic',sub:'COA'}],
    'CEA/COA/CH10-Computer-Arithmetic-CheatSheet.html':[
      {url:'CEA/COA/CH09-Number-Systems-CheatSheet.html',title:'Number Systems',sub:'COA'},
      {url:'CSI/CH/CH04-Operations-on-Data-CheatSheet.html',title:'Operations on Data',sub:'FCS'}],
    'CEA/COA/CH11-Digital-Logic-CheatSheet.html':[
      {url:'CSI/CH/CH04-Operations-on-Data-CheatSheet.html',title:'Operations on Data',sub:'FCS'}],
    'CEA/COA/CH12-Instruction-Sets-Characteristics-CheatSheet.html':[
      {url:'CEA/COA/CH13-Addressing-Modes-CheatSheet.html',title:'Addressing Modes',sub:'COA'},
      {url:'CEA/COA/CH14-Processor-Structure-Function-CheatSheet.html',title:'Processor Structure & Function',sub:'COA'}],
    'CEA/COA/CH13-Addressing-Modes-CheatSheet.html':[
      {url:'CEA/COA/CH12-Instruction-Sets-Characteristics-CheatSheet.html',title:'Instruction Sets',sub:'COA'},
      {url:'CEA/COA/CH14-Processor-Structure-Function-CheatSheet.html',title:'Processor Structure & Function',sub:'COA'}],
    'CEA/COA/CH14-Processor-Structure-Function-CheatSheet.html':[
      {url:'CEA/COA/CH12-Instruction-Sets-Characteristics-CheatSheet.html',title:'Instruction Sets',sub:'COA'},
      {url:'CEA/COA/CH15-RISC-CheatSheet.html',title:'RISC',sub:'COA'},
      {url:'CSI/CH/CH05-Computer-Organization-CheatSheet.html',title:'Computer Organization',sub:'FCS'}],
    'CEA/COA/CH15-RISC-CheatSheet.html':[
      {url:'CEA/COA/CH14-Processor-Structure-Function-CheatSheet.html',title:'Processor Structure & Function',sub:'COA'},
      {url:'CEA/COA/CH16-ILP-Superscalar-CheatSheet.html',title:'ILP & Superscalar',sub:'COA'}],
    'CEA/COA/CH16-ILP-Superscalar-CheatSheet.html':[
      {url:'CEA/COA/CH15-RISC-CheatSheet.html',title:'RISC',sub:'COA'},
      {url:'CEA/COA/CH17-Parallel-Processing-CheatSheet.html',title:'Parallel Processing',sub:'COA'}],
    'CEA/COA/CH17-Parallel-Processing-CheatSheet.html':[
      {url:'CEA/COA/CH16-ILP-Superscalar-CheatSheet.html',title:'ILP & Superscalar',sub:'COA'},
      {url:'CEA/COA/CH18-Multicore-CheatSheet.html',title:'Multicore',sub:'COA'}],
    'CEA/COA/CH18-Multicore-CheatSheet.html':[
      {url:'CEA/COA/CH17-Parallel-Processing-CheatSheet.html',title:'Parallel Processing',sub:'COA'},
      {url:'CEA/COA/CH19-GPGPU-CheatSheet.html',title:'GPGPU',sub:'COA'}],
    'CEA/COA/CH19-GPGPU-CheatSheet.html':[
      {url:'CEA/COA/CH17-Parallel-Processing-CheatSheet.html',title:'Parallel Processing',sub:'COA'},
      {url:'CEA/COA/CH18-Multicore-CheatSheet.html',title:'Multicore',sub:'COA'}],
    'CEA/COA/CH20-Control-Unit-Operation-CheatSheet.html':[
      {url:'CEA/COA/CH21-Microprogrammed-Control-CheatSheet.html',title:'Microprogrammed Control',sub:'COA'}],
    'CEA/COA/CH21-Microprogrammed-Control-CheatSheet.html':[
      {url:'CEA/COA/CH20-Control-Unit-Operation-CheatSheet.html',title:'Control Unit Operation',sub:'COA'}],
    /* ── FCS ── */
    'CSI/CH/CH01-Introduction-CheatSheet.html':[
      {url:'CEA/COA/CH01-Basic-Concepts-CheatSheet.html',title:'Basic Concepts & Computer Evolution',sub:'COA'}],
    'CSI/CH/CH02-Number-Systems-CheatSheet.html':[
      {url:'CEA/COA/CH09-Number-Systems-CheatSheet.html',title:'Number Systems & Arithmetic',sub:'COA'},
      {url:'CSI/CH/CH03-Data-Storage-CheatSheet.html',title:'Data Storage',sub:'FCS'}],
    'CSI/CH/CH03-Data-Storage-CheatSheet.html':[
      {url:'CSI/CH/CH02-Number-Systems-CheatSheet.html',title:'Number Systems',sub:'FCS'},
      {url:'CEA/COA/CH09-Number-Systems-CheatSheet.html',title:'Number Systems & Arithmetic',sub:'COA'},
      {url:'CEA/COA/CH05-Internal-Memory-CheatSheet.html',title:'Internal Memory',sub:'COA'}],
    'CSI/CH/CH04-Operations-on-Data-CheatSheet.html':[
      {url:'CEA/COA/CH10-Computer-Arithmetic-CheatSheet.html',title:'Computer Arithmetic',sub:'COA'},
      {url:'CEA/COA/CH11-Digital-Logic-CheatSheet.html',title:'Digital Logic',sub:'COA'}],
    'CSI/CH/CH05-Computer-Organization-CheatSheet.html':[
      {url:'CEA/COA/CH01-Basic-Concepts-CheatSheet.html',title:'Basic Concepts',sub:'COA'},
      {url:'CEA/COA/CH14-Processor-Structure-Function-CheatSheet.html',title:'Processor Structure & Function',sub:'COA'}],
    'CSI/CH/CH07-Operating-Systems-CheatSheet.html':[
      {url:'CEA/COA/CH08-OS-Support-CheatSheet.html',title:'OS Support',sub:'COA'}],
    'CSI/CH/CH11-Data-Structures-CheatSheet.html':[
      {url:'CSI/CH/CH12-Abstract-Data-Types-CheatSheet.html',title:'Abstract Data Types',sub:'FCS'}],
    'CSI/CH/CH12-Abstract-Data-Types-CheatSheet.html':[
      {url:'CSI/CH/CH11-Data-Structures-CheatSheet.html',title:'Data Structures',sub:'FCS'}],
    'CSI/CH/CH13-File-Structure-CheatSheet.html':[
      {url:'CSI/CH/CH14-Databases-CheatSheet.html',title:'Databases',sub:'FCS'}],
    'CSI/CH/CH14-Databases-CheatSheet.html':[
      {url:'CSI/CH/CH13-File-Structure-CheatSheet.html',title:'File Structure',sub:'FCS'}],
    /* ── ALG ── */
    'MAE/ALG/CH01-Systems-Linear-Equations-CheatSheet.html':[
      {url:'MAE/ALG/CH02-Matrix-Algebra-CheatSheet.html',title:'Matrix Algebra',sub:'ALG'}],
    'MAE/ALG/CH02-Matrix-Algebra-CheatSheet.html':[
      {url:'MAE/ALG/CH01-Systems-Linear-Equations-CheatSheet.html',title:'Linear Equations',sub:'ALG'},
      {url:'MAE/ALG/CH03-Determinants-Diagonalization-CheatSheet.html',title:'Determinants & Diagonalization',sub:'ALG'}],
    'MAE/ALG/CH03-Determinants-Diagonalization-CheatSheet.html':[
      {url:'MAE/ALG/CH02-Matrix-Algebra-CheatSheet.html',title:'Matrix Algebra',sub:'ALG'},
      {url:'MAE/ALG/CH07-Linear-Transformations-CheatSheet.html',title:'Linear Transformations',sub:'ALG'}],
    'MAE/ALG/CH04-Vector-Geometry-CheatSheet.html':[
      {url:'MAE/ALG/CH05-Vector-Space-Rn-CheatSheet.html',title:'Vector Space Rⁿ',sub:'ALG'},
      {url:'MAE/ALG/CH08-Orthogonality-CheatSheet.html',title:'Orthogonality',sub:'ALG'}],
    'MAE/ALG/CH05-Vector-Space-Rn-CheatSheet.html':[
      {url:'MAE/ALG/CH04-Vector-Geometry-CheatSheet.html',title:'Vector Geometry',sub:'ALG'},
      {url:'MAE/ALG/CH06-Abstract-Vector-Spaces-CheatSheet.html',title:'Abstract Vector Spaces',sub:'ALG'}],
    'MAE/ALG/CH06-Abstract-Vector-Spaces-CheatSheet.html':[
      {url:'MAE/ALG/CH05-Vector-Space-Rn-CheatSheet.html',title:'Vector Space Rⁿ',sub:'ALG'},
      {url:'MAE/ALG/CH07-Linear-Transformations-CheatSheet.html',title:'Linear Transformations',sub:'ALG'}],
    'MAE/ALG/CH07-Linear-Transformations-CheatSheet.html':[
      {url:'MAE/ALG/CH05-Vector-Space-Rn-CheatSheet.html',title:'Vector Space Rⁿ',sub:'ALG'},
      {url:'MAE/ALG/CH09-Change-of-Basis-CheatSheet.html',title:'Change of Basis',sub:'ALG'}],
    'MAE/ALG/CH08-Orthogonality-CheatSheet.html':[
      {url:'MAE/ALG/CH04-Vector-Geometry-CheatSheet.html',title:'Vector Geometry',sub:'ALG'},
      {url:'MAE/ALG/CH10-Inner-Product-Spaces-CheatSheet.html',title:'Inner Product Spaces',sub:'ALG'}],
    'MAE/ALG/CH09-Change-of-Basis-CheatSheet.html':[
      {url:'MAE/ALG/CH07-Linear-Transformations-CheatSheet.html',title:'Linear Transformations',sub:'ALG'},
      {url:'MAE/ALG/CH10-Inner-Product-Spaces-CheatSheet.html',title:'Inner Product Spaces',sub:'ALG'}],
    'MAE/ALG/CH10-Inner-Product-Spaces-CheatSheet.html':[
      {url:'MAE/ALG/CH08-Orthogonality-CheatSheet.html',title:'Orthogonality',sub:'ALG'},
      {url:'MAE/ALG/CH09-Change-of-Basis-CheatSheet.html',title:'Change of Basis',sub:'ALG'}],
    'MAE/ALG/CH11-Canonical-Forms-CheatSheet.html':[
      {url:'MAE/ALG/CH03-Determinants-Diagonalization-CheatSheet.html',title:'Determinants & Diagonalization',sub:'ALG'}],
    /* ── CAL1 ── */
    'MAE/CAL1/CH01-Functions-Graphs-CheatSheet.html':[
      {url:'MAE/CAL1/CH02-Limits-CheatSheet.html',title:'Limits',sub:'CAL1'}],
    'MAE/CAL1/CH02-Limits-CheatSheet.html':[
      {url:'MAE/CAL1/CH01-Functions-Graphs-CheatSheet.html',title:'Functions & Graphs',sub:'CAL1'},
      {url:'MAE/CAL1/CH03-Derivatives-CheatSheet.html',title:'Derivatives',sub:'CAL1'}],
    'MAE/CAL1/CH03-Derivatives-CheatSheet.html':[
      {url:'MAE/CAL1/CH02-Limits-CheatSheet.html',title:'Limits',sub:'CAL1'},
      {url:'MAE/CAL1/CH04-Applications-Derivatives-CheatSheet.html',title:'Applications of Derivatives',sub:'CAL1'},
      {url:'MAE/CAL1/CH05-Integration-CheatSheet.html',title:'Integration',sub:'CAL1'}],
    'MAE/CAL1/CH04-Applications-Derivatives-CheatSheet.html':[
      {url:'MAE/CAL1/CH03-Derivatives-CheatSheet.html',title:'Derivatives',sub:'CAL1'}],
    'MAE/CAL1/CH05-Integration-CheatSheet.html':[
      {url:'MAE/CAL1/CH03-Derivatives-CheatSheet.html',title:'Derivatives',sub:'CAL1'},
      {url:'MAE/CAL1/CH06-Applications-Integration-CheatSheet.html',title:'Applications of Integration',sub:'CAL1'},
      {url:'MAE/CAL2/CH01-Integration-CheatSheet.html',title:'Integration (CAL2 cont.)',sub:'CAL2'}],
    'MAE/CAL1/CH06-Applications-Integration-CheatSheet.html':[
      {url:'MAE/CAL1/CH05-Integration-CheatSheet.html',title:'Integration',sub:'CAL1'},
      {url:'MAE/CAL2/CH02-Applications-Integration-CheatSheet.html',title:'Applications of Integration (CAL2)',sub:'CAL2'}],
    /* ── CAL2 ── */
    'MAE/CAL2/CH01-Integration-CheatSheet.html':[
      {url:'MAE/CAL1/CH05-Integration-CheatSheet.html',title:'Integration (CAL1)',sub:'CAL1'},
      {url:'MAE/CAL2/CH03-Techniques-Integration-CheatSheet.html',title:'Techniques of Integration',sub:'CAL2'}],
    'MAE/CAL2/CH02-Applications-Integration-CheatSheet.html':[
      {url:'MAE/CAL1/CH06-Applications-Integration-CheatSheet.html',title:'Applications of Integration (CAL1)',sub:'CAL1'}],
    'MAE/CAL2/CH03-Techniques-Integration-CheatSheet.html':[
      {url:'MAE/CAL2/CH01-Integration-CheatSheet.html',title:'Integration',sub:'CAL2'}],
    'MAE/CAL2/CH04-Differential-Equations-CheatSheet.html':[
      {url:'MAE/CAL1/CH03-Derivatives-CheatSheet.html',title:'Derivatives',sub:'CAL1'},
      {url:'MAE/CAL1/CH05-Integration-CheatSheet.html',title:'Integration',sub:'CAL1'}],
    'MAE/CAL2/CH05-Sequences-Series-CheatSheet.html':[
      {url:'MAE/CAL2/CH06-Power-Series-CheatSheet.html',title:'Power Series',sub:'CAL2'}],
    'MAE/CAL2/CH06-Power-Series-CheatSheet.html':[
      {url:'MAE/CAL2/CH05-Sequences-Series-CheatSheet.html',title:'Sequences & Series',sub:'CAL2'}],
    'MAE/CAL2/CH07-Parametric-Polar-CheatSheet.html':[
      {url:'MAE/CAL1/CH05-Integration-CheatSheet.html',title:'Integration',sub:'CAL1'}]
  };

  /* ── Subject badge colors ── */
  var SUB_COLORS = {COA:'#58a6ff',FCS:'#d2a8ff',ALG:'#a78bfa',CAL1:'#818cf8',CAL2:'#3fb5a8'};

  /* ── Determine which entry matches current page ── */
  var pageHref = (window.location.href||'').replace(/\\/g,'/');
  var matchKey = null;
  for(var k in RELATED){
    if(pageHref.toLowerCase().indexOf(k.toLowerCase()) !== -1){ matchKey = k; break; }
  }
  if(!matchKey) return;

  var entries = RELATED[matchKey];
  if(!entries || !entries.length) return;

  /* ── CSS ── */
  if(!document.getElementById('related-style')){
    var s = document.createElement('style');
    s.id = 'related-style';
    s.textContent =
      '.related-section{margin-top:28px;padding:20px 0 4px;border-top:1px solid var(--border,#30363d);}'+
      '.related-title{font-family:"IBM Plex Mono",monospace;font-size:10px;text-transform:uppercase;'+
      'letter-spacing:1.5px;color:var(--text-dim,#6e7681);margin-bottom:12px;}'+
      '.related-links{display:flex;flex-wrap:wrap;gap:8px;}'+
      '.related-link{display:inline-flex;align-items:center;gap:6px;text-decoration:none;'+
      'background:var(--surface,#161b22);border:1px solid var(--border,#30363d);'+
      'border-radius:6px;padding:6px 12px;transition:border-color .15s,background .15s,transform .15s;}'+
      '.related-link:hover{transform:translateY(-1px);}'+
      '.related-badge{font-family:"IBM Plex Mono",monospace;font-size:9px;font-weight:600;'+
      'border-radius:3px;padding:2px 6px;color:#0d1117;}'+
      '.related-name{font-family:"IBM Plex Sans",sans-serif;font-size:13px;'+
      'color:var(--text,#e6edf3);font-weight:500;}'+
      '.related-arrow{font-size:11px;color:var(--text-dim,#6e7681);}';
    document.head.appendChild(s);
  }

  /* ── Build widget ── */
  var div = document.createElement('div');
  div.className = 'related-section';
  var html = '<div class="related-title">See Also</div><div class="related-links">';
  entries.forEach(function(e){
    var color = SUB_COLORS[e.sub] || '#8b949e';
    html +=
      '<a class="related-link" href="'+rootUrl+e.url+'" style="border-color:'+color+'22;">'+
        '<span class="related-badge" style="background:'+color+';">'+e.sub+'</span>'+
        '<span class="related-name">'+e.title+'</span>'+
        '<span class="related-arrow">↗</span>'+
      '</a>';
  });
  html += '</div>';
  div.innerHTML = html;

  /* Inject after main content, before closing body */
  function inject(){
    /* Try to find a good anchor: .header or body */
    var body = document.querySelector('.page-body') ||
               document.querySelector('.content') ||
               document.body;
    body.appendChild(div);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
