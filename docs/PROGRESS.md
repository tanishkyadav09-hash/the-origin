# Development checklist

The first-action deliverable is an initial working browser prototype, not a submission-complete scientific product.

| Phase | Completed | Files | Tested | Remaining / next step |
|---|---|---|---|---|
| 1: Challenge | Reviewed official indexed brief; corrected SAME name | METHODOLOGY.md | NASA source retrieval | Confirm full challenge resources, rules and deadline |
| 2: Architecture | Offline-first static design; evidence schema; explicit nulls | src/core.js, src/data.js, build.js | Data and logic tests | Run-level measurement schema before quantitative plots |
| 3: Prototype | Eight functional views and responsive styling | src/index.html, src/style.css, src/app.js, dist/index.html | Desktop browser flows | Mobile and cross-browser QA |
| 4: Research | Seven starter records, five official source documents | src/data.js, dist/catalog.json | Provenance and metadata checks | Primary paper extraction, raw PSI datasets, scientific review |
| 5: Comparison | Context table, selected records, count/coverage charts | src/app.js | Selection, missing fields, chart filtering | Comparable numeric measurements and uncertainty plots |
| 6: Intelligence | Cited local keyword retrieval and abstention | src/core.js, src/app.js | Matching and no-evidence states | Optional server-side RAG when authorized/configured |
| 7: Safety | Transparent reading-order score and mission interpretations | src/core.js, src/app.js | Ranking and mission UI | Expert calibration; no validated risk prediction planned |
| 8: QA | Seven automated tests; desktop interaction checks | tests/core.test.js, QA.md | Recorded checks only | Mobile, persistence, export and accessibility audit |
| 9: Submission | Project narrative and demonstration script draft | SUBMISSION.md | Content checked against implemented scope | Final slides/video, confirmed rules, human review and submission |

Next scientific milestone: extract a small, comparable run-level dataset with units, exact page/table references and uncertainty. Next engineering milestone: complete mobile/export/persistence QA, then enable numeric plots only after compatibility review.

## v0.2 — interface refinement

Replaced the glowing orbital card with a restrained technical illustration, consistent SVG navigation icons, navy/sage palette, editorial heading typography, compact statistics and a research reading-list table. Added staggered view entrances, animated chart reveals, dialog transitions, hover feedback, a persistent motion toggle and prefers-reduced-motion support. Dashboard count wording now distinguishes total catalog records from source-check status. Desktop and narrow-viewport search/navigation verified; see QA.md. All original research records retained.

## v0.3 — primary-source data milestone

Added 13 selected test rows from two NASA-hosted primary documents, two corresponding research-library summaries, per-row provenance, quality flags, separate study plots, width filtering, comparison checks and JSON/CSV export. Numeric dataset is separate from investigation summaries; aggregate summary slots remain null. Published tables are now available, but raw PSI ingestion, full experiment coverage, uncertainty estimates and independent scientific review remain outstanding. See DATA_AUDIT.md.
