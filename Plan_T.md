(Unfinish Do not do stuff in here)

---

## Bug Fixes

### FIXED - Tooltip yellow highlight (all 41 chapter files)
- .tt keywords now show yellow background + color:var(--yellow) on hover
- Tooltip popup clipping fixed: removed overflow:hidden from .card, moved it to .card-header only
- Tooltip viewport overflow fixed: JS clamps popup horizontally using --tt-shift CSS variable

### FIXED - COA CH17 legacy mode encoding errors
- Removed the entire legacy design section (2033 to 971 lines)
- Garbled box-drawing characters eliminated
- Toggle button and legacy CSS removed; new design is now the only view

---

## QOL

### DONE - Floating TOC sidebar (all 41 chapter files)
- Fixed right-side panel auto-generated from .card-header h3 via JS
- Scroll spy highlights active card using position-based tracking (closest card to 30% viewport)
- Click TOC link: smooth scroll + blue outline pulse animation on target card (card-flash keyframes)
- Collapsible: click "Contents" header to collapse/expand (chevron animates); state persists via localStorage
- Hidden on screens < 1200px

### DONE - Search bar on index.html
- Live keyword filter across all subject cards
- Matching text highlighted in yellow (search-highlight class)
- Shows result count; hides empty sections; clear button
- Pure JS, no backend

---

## Open / Future

- Back-to-top button (floating arrow)
- Dark/light mode toggle
- CSI appendix pages (priority: E, G, H)
- Cross-chapter reference links
