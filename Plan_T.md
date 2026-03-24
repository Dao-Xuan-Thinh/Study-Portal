## TODO LIST
- Bookmark system: star/unstar chapters, persisted in localStorage — starred chapters has it own section on top 
- Improve Search bar - can how search for keywords in a chapter instead of just the name of the chapters
- PWA / offline support: service worker + manifest so the site works offline (great for exam cramming with no wifi)
- Navigation Bar (Right now there isnt one and navigating within the website is quite difficult)


----------------------------------
## Finished ##


-  Create cheat sheet sets for CAL1, CAL2,(If too big then dont do CAL1 and CAL2 yet only do ALGEBRA) ALGEBRA, each having it's own folder inside MAE (Stick closely and in detail with the pdf book's material which is in /Source Books/)
    | Put every css into its own .css file for better reusablity and smaller html size (What can be reusable put in the file what cannot and is unique to that .html page stay in the html file) (JS too if use JS)
-  Also try giving cheat sheets of MAE a new design to fit the theme.
-  Chapter search bar: a live filter on CEA/COA.html that searches chapter titles + part names as you type
-  The search bar in the index.html is off, change it so its central and be easier on the eyes (also make it tooks like a terminal for cool points)
-  After all that you are free to look around and write what you want to do or report down any bugs you found around the code base

### DONE - MAE Cheatsheet Sets (ALG, CAL1, CAL2)
- MAE/ALG/ — 11 chapters (Nicholson Linear Algebra, CH01–CH11), ~381 KB, 137 cards
- MAE/CAL1/ — 6 chapters (OpenStax Calculus Vol.1, CH01–CH06), ~100 KB, 58 cards
- MAE/CAL2/ — 7 chapters (OpenStax Calculus Vol.2, CH01–CH07), ~116 KB, 68 cards
- Each chapter links to shared.css + subject CSS (alg.css / cal1.css / cal2.css)
- Floating TOC, semantic blocks (.def/.theorem/.formula/.example/.note/.warn), tooltips, footer nav

### DONE - MAE Design System
- MAE/shared.css: dark GitHub-palette base, semantic content blocks, yellow tooltip, floating TOC sidebar, card-flash animation, print CSS
- MAE/ALG/alg.css: violet (#a78bfa) accent overrides
- MAE/CAL1/cal1.css: indigo (#6e7fe6) accent overrides
- MAE/CAL2/cal2.css: teal (#3fb5a8) accent overrides
- MAE/ALG.html, CAL1.html, CAL2.html: subject index pages with hero + chapter cards

### DONE - Chapter search bar on CEA/COA.html
- Live filter by chapter title, CH## badge, part name as you type
- Yellow highlight on matches, hides empty parts, shows result count

### DONE - Search bar on index.html (terminal style + chapter search)
- Centered (max-width 640px), terminal-style with live clock (HH:MM:SS from local machine) + ❯ prompt
- Filters subject cards + shows chapter results panel (all 65 chapters searchable)
- Chapter results: [CODE] · CH## · Chapter Name · Subject Name ↗
- Up to 8 results shown with "+N more" overflow hint; yellow match highlighting

### DONE - Codebase bug sweep
- All 21 COA + 20 CSI chapter back-links verified correct
- CH17 dual-design toggle confirmed functional
- index.html → all 5 subject pages resolve correctly
- MAE shared.css all semantic classes properly defined
- Zero bugs found outside MAE (which was in-progress at time of sweep)

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
