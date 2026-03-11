# Plan H - CSI.pdf to Cheatsheet Portal (FCS Subject)

## Status: COMPLETE

## Source Book
Foundations of Computer Science, 4th Edition - Behrouz Forouzan
706 pages, 20 chapters, 10 appendices (A-J)

---

## What Was Done to COA (the pattern replicated)

### COA Output Structure
```
CEA/
  COA.html              <- Subject index page (hero + part sections + chapter cards)
  COA/
    CH01-...-CheatSheet.html
    ...CH21
```

### COA.html anatomy
- Hero: eyebrow badge, h1, subtitle (author + edition), stats row
- Parts: section.part.part-{color} with colored bar, label, title, chapter count
- Chapter cards: colored accent bar, CH## badge, title, description, arrow
- Footer: back link, book credit

### Chapter CheatSheet anatomy
- IBM Plex font trio (Mono/Sans/Sans Condensed) via Google Fonts
- Dark GitHub palette: --bg:#0d1117, --surface:#161b22, --surface2:#1c2330, --border:#30363d
- Header: h1, h2, toc-item tags, badge top-right
- Layout: .grid (3-col), .grid-2, col-span-2/3, section-gap
- Cards (.blue/.green/.red/.purple/.orange/.yellow): dot + h3, body with .rule/.formula/.label/ul.items/ol.steps/.tbl/.warn/.info/.tip/.note/code/.tt
- Footer: prev/next nav + back link
- Print CSS: @media print

---

## COMPLETED: CSI Output

### Folder Structure (DONE)
```
CSI/                        <- Top-level folder (separate from CEA)
  CSI.html                  <- Subject index page (purple theme)
  CH/
    CH01-Introduction-CheatSheet.html
    CH02-Number-Systems-CheatSheet.html
    CH03-Data-Storage-CheatSheet.html
    CH04-Operations-on-Data-CheatSheet.html
    CH05-Computer-Organization-CheatSheet.html
    CH06-Computer-Networks-CheatSheet.html
    CH07-Operating-Systems-CheatSheet.html
    CH08-Algorithms-CheatSheet.html
    CH09-Programming-Languages-CheatSheet.html
    CH10-Software-Engineering-CheatSheet.html
    CH11-Data-Structures-CheatSheet.html
    CH12-Abstract-Data-Types-CheatSheet.html
    CH13-File-Structure-CheatSheet.html
    CH14-Databases-CheatSheet.html
    CH15-Data-Compression-CheatSheet.html
    CH16-Security-CheatSheet.html
    CH17-Theory-of-Computation-CheatSheet.html
    CH18-Artificial-Intelligence-CheatSheet.html
    CH19-Social-Media-CheatSheet.html
    CH20-Social-Ethical-Issues-CheatSheet.html
```

### Part Groupings and Colors (DONE)
| Part | Color  | Chapters  | Theme                    |
|------|--------|-----------|--------------------------|
| 1    | blue   | CH01-CH05 | Hardware Foundations     |
| 2    | green  | CH06-CH07 | Networking and Systems   |
| 3    | purple | CH08-CH10 | Algorithms and Programming|
| 4    | orange | CH11-CH14 | Data Management          |
| 5    | red    | CH15-CH18 | Advanced and Theory      |
| 6    | yellow | CH19-CH20 | Society and Ethics       |

### index.html Update (DONE)
- Added .area-csi CSS section (purple/accent4 theme)
- Added CSI section between CEA and MAE
- Hero stats updated (3 areas, 41 chapters)
- Search bar added with live filtering + yellow highlights

### Improvements Over COA (all built in)
1. DONE - Prev/Next chapter nav in footer (CH## <- | Back to FCS | -> CH##)
2. DONE - Floating collapsible TOC sidebar on all chapter pages
3. DONE - Tooltip yellow highlight + viewport clamp
4. DONE - Card flash animation on TOC click

---

## Open / Future Work

- Appendix pages (A-J): priority E (Boolean Algebra), G (Math Review), H (Error Detection)
- Cross-chapter reference links between related topics
- Back-to-top floating button
- Dark/light mode toggle
