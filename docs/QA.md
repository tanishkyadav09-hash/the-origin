# QA report — v0.1, 14 November 2026

## Automated verification

`node build.js` and `node --test tests/core.test.js`: 7 tests passed, 0 failed.

Checks cover unique IDs and NASA URLs; missing measurements kept null; composed filters and empty results; retrieval and abstention; bounded reproducible scores; null versus measured zero; unsafe draft URLs and HTML escaping; standalone build without external script dependencies.

## Browser verification actually performed

Cloud Chrome preview at the provided local preview URL:

- Dashboard loaded with 6 source-checked records, 1 catalog-checked record, 5 programs, 5 documents, 7 investigations.
- Explorer search `cool` returned one record; its evidence dialog opened and closed with citation and limitations.
- An unmatched query displayed the empty state; reset restored the catalog.
- FLEX + Liquid filters returned two records.
- Comparison loaded its two default records, then displayed a third after FLEX-01 selection. Missing parameters remained explicitly non-comparable.
- Saffire question returned one cited source. Unsupported `quantum pineapple superconductivity` returned no supporting evidence.
- Ranking methodology expanded and displayed score components.
- Lunar habitat selection changed the mission context and displayed its extrapolation limit.
- Visualization Lab loaded real catalog counts and date types. Clicking Liquid opened Explorer with two results.
- An unsafe javascript: draft URL was rejected with an actionable error.
- Desktop dashboard screenshot captured and visually reviewed.

Two automation selector calls needed correction (nested label matching and an unsupported role option); the UI controls subsequently worked. Browser extension metadata errors appeared in the browser log; these were extension-origin messages, not proof of an application error.

## Verification still outstanding

- Mobile viewport/device interaction: responsive CSS exists, but not device-tested in this pass.
- Cross-browser checks and full keyboard/screen-reader audit.
- Export download completion and valid-draft persistence across browser restarts.
- Full browser matrix for every filter combination and comparison limit (core logic tests cover related behavior).
- Independent scientific review and link-opening checks on the user's network. NASA text/PDF URLs were retrieved during research; PSI catalog content came from indexed official metadata.
- Offline file:// browser smoke test. Build is self-contained by inspection and automated dependency check, but file:// was not exercised here.

Do not describe these outstanding checks as passed.

## v0.2 visual refresh

Seven automated checks still pass after the refresh. Browser checks confirmed the motion toggle's pressed state, evidence dialog opening/closing, updated dashboard-to-explorer navigation and `cool` search (1 of 7). Desktop full-page screenshot visually reviewed. A 390px iframe viewport (375px content area after scrollbar) showed no body horizontal overflow; mobile navigation and search worked. This is a narrow-viewport check, not physical-device certification. Reduced-motion media-query support is implemented; OS-level preference emulation was not exercised. Scientific content is unchanged.

## v0.3 numerical data

Added six experiment-focused test groups: source/units/review metadata, flagged oxygen exclusion, exact quenching coordinates, Saffire qualifiers, comparison guards, CSV row/blank preservation. These supplement the seven original checks. Source tables were rendered and visually checked before transcription. See DATA_AUDIT.md. Browser checks are recorded after execution below.

Browser validation: study filtering returned four Saffire rows; width filtering returned two 1.2 cm BASS quenching points; cross-study comparisons displayed a no-pooling warning; reused-fuel detail preserved approximate values and provenance; CSV download completed. Final charts visually checked.

## Final release cleanup
Corrected catalog export version, summary-level numerical-data wording and source-specific detail text. CSV now includes pressure provenance and the unavailable uncertainty field. Refreshed project status to distinguish delivered features from scientific and submission milestones.

## Interface and animation refinement
Improved typography, panel hierarchy, responsive layouts and keyboard-accessible tables. Added dashboard shortcuts, header search with slash-key access, collapsible mobile navigation, staggered view and chart entrances, illustration motion and dialog/menu transitions. Motion toggle and prefers-reduced-motion disable all animations. Browser checks: desktop search for cool returned one record, motion toggle updated its pressed state, mobile menu opened then closed on navigation, and 390px iframe data view had equal body/content widths (375px excluding scrollbar). All 13 automated tests passed.
