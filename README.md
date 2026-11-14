# THE ORIGIN

**Explore NASA microgravity combustion research through a traceable, interactive evidence workspace.**

A working browser-based prototype developed for the **NASA Space Apps Challenge 2026 — Flame in Freefall**. THE ORIGIN helps students, researchers and reviewers find relevant investigations, inspect published experimental results and understand the limits of comparisons.

**Release:** v0.3 · **Runtime:** HTML, CSS and JavaScript · **Installation:** none required

## Start here: try the application

1. Open [dist/index.html](dist/index.html).
2. Click **Download raw file** in GitHub.
3. Open the downloaded HTML file in Chrome, Edge or Firefox.

The interface and bundled data work offline. An internet connection is needed to open external NASA sources. No account, API key, Node.js installation or paid service is required to run the downloaded app.

A GitHub file preview displays source code rather than running the application. For web hosting, serve the contents of `dist/` with a static website host. A public deployment URL is not listed here until judge access has been verified.

### Suggested judge walkthrough

1. Open **Research Explorer** and search for **cool** to find related combustion summaries.
2. Inspect a record's findings, source reference, interpretation and limitations.
3. Compare selected investigation summaries and notice which contextual fields are unavailable.
4. Open **Experimental Data**, switch between the BASS/BASS-II and Saffire datasets, and inspect individual run provenance and quality flags.
5. Export the numerical data as CSV or JSON for further inspection.

This demonstrates the project's central contribution: connecting a finding to its source while keeping experimental context and uncertainty visible.

## The problem

NASA microgravity combustion knowledge is distributed across papers, technical presentations, mission pages and investigation catalogs. Comparing results requires more than matching keywords: fuel, oxygen, airflow, geometry, measurement methods and outcome definitions all matter.

A published result can be useful without being directly comparable to another experiment. THE ORIGIN makes those distinctions part of the research workflow.

## Our solution

THE ORIGIN brings curated investigation summaries and selected published test rows into one browser workspace. Users can move from a high-level finding to its source, inspect experimental context and export structured data.

The contribution is the organization, interface and provenance-aware review workflow. The scientific findings belong to the cited NASA research; we do not claim those findings as new discoveries.

## Features

| Capability | What reviewers can do |
| --- | --- |
| Research dashboard | See the scope of the curated catalog and navigate the workspace. |
| Research Explorer | Search and combine program, fuel and environment filters. |
| Investigation comparison | Compare up to three summaries, including missing contextual information. |
| Experimental Data | Inspect 13 selected published test rows, study-specific plots, units and source references. |
| Evidence search | Retrieve source-linked summaries using deterministic keyword matching; unsupported queries return a no-evidence state. |
| Reading priorities | Inspect a transparent editorial ranking for research reading order. |
| Mission applications | Review possible relevance, explicitly labeled as interpretation. |
| Visualization lab | Explore descriptive views without presenting them as predictive simulations. |
| Local research drafts | Save unverified drafts in the current browser, separately from the curated evidence. |
| Exports | Download catalog and experiment snapshots for review. |
| Responsive interface | Use desktop or narrow-screen layouts, keyboard navigation and motion controls. |

CSS animations respect reduced-motion preferences and the application's Motion toggle.

## NASA data and provenance

The project maintains **two separate levels of evidence**:

| Dataset | Included scope | Important distinction |
| --- | --- | --- |
| Investigation catalog | 9 curated summaries across BASS, Saffire, FLEX, ACME and SAME | Summaries describe investigations; they are not individual experimental runs. |
| Numerical dataset | 13 selected published test rows: 9 BASS/BASS-II and 4 Saffire fabric runs | Transcribed from two primary NASA-hosted documents; not raw sensor ingestion. |

Across the project, seven unique NASA source documents support the curated material. They include different document types, not seven peer-reviewed papers. SAME means **Smoke Aerosol Measurement Experiment**.

### Primary numerical sources

- **BASS/BASS-II:** [NTRS 20150008962](https://ntrs.nasa.gov/citations/20150008962). Appendix on PDF page 9; methods on pages 2–3.
- **Saffire:** [NTRS 20170008805](https://ntrs.nasa.gov/citations/20170008805). Table I and footnote on PDF page 29; reused-fuel context on page 16.

See the [complete source register and methodology](docs/METHODOLOGY.md), [experimental data audit](docs/DATA_AUDIT.md) and [canonical numerical dataset](data/experiments.json).

### How we preserve context

- Retain source pages, run identifiers, units and source-file checksums.
- Keep missing values as missing, never as zero.
- Preserve source-flagged suspect oxygen readings and reused-fuel labels.
- Keep approximate and derived quantities distinguishable from direct measurements.
- Exclude suspect-oxygen and non-ignition rows from the BASS quenching plot.
- Flag differences in study, geometry, flow direction and fuel history before comparison.
- Keep source findings, research objectives and project interpretations distinct.

The numerical subset is deliberately selected, not random or exhaustive. NASA source documents are linked rather than republished.

## Frontend, backend and storage

**This release is a static frontend application.** Its current features run entirely in the browser.

| Layer | Implementation |
| --- | --- |
| Frontend | Plain HTML, CSS and JavaScript |
| Application logic | Local filtering, lexical retrieval, ranking, comparison checks and exports |
| Data | Curated records and published-result snapshots bundled into the build |
| Draft storage | Browser local storage; not shared between devices or users |
| Backend | None in this release |
| Database | No hosted database |
| External AI service | None connected |
| Build and tests | Node.js built-in tools; not required by end users |

There is no live NASA data feed, automated PSI ingestion, login service or server-side processing. No API secrets should be entered into the application.

### Repository structure

| Path | Purpose |
| --- | --- |
| `src/index.html` | Application shell |
| `src/style.css` | Responsive layout, visual styling and animation |
| `src/data.js` | Curated investigation summaries |
| `src/core.js` | Filtering, retrieval, validation and reading-priority logic |
| `src/experiments.js` | Numerical filtering, plot rules, comparison checks and CSV export |
| `src/app.js` | Views and interaction handlers |
| `data/experiments.json` | Canonical run-level data, provenance and review status |
| `build.js` | Creates the portable application and data exports |
| `dist/` | Ready-to-run HTML and downloadable data snapshots |
| `tests/` | Automated software checks |
| `docs/` | Methodology, data audit, QA, progress and submission notes |

## Reproduce the build

For developers with Node.js installed, run these commands from the repository root:

```sh
node build.js
node --test tests/*.test.js
```

The build produces:

- `dist/index.html` — self-contained application.
- `dist/catalog.json` — investigation catalog.
- `dist/experiments.json` — numerical data and provenance.
- `dist/experiments.csv` — exported test rows.

There are no frontend package dependencies to install.

## Validation

The packaged v0.3 release passed **13 automated tests**. Checks cover filtering, retrieval and unsupported queries, missing values, draft validation, standalone build properties, numerical provenance, source flags, plot membership, comparison rules and CSV export.

Browser checks covered desktop interactions and a narrow-screen layout, including search, source details, data filtering, export, navigation and the Motion toggle.

These checks establish implemented software behavior and consistency with the extraction rules. They do not establish independent scientific validation. See [QA documentation](docs/QA.md) and the [data audit](docs/DATA_AUDIT.md).

## Scope and limitations

- **No connected LLM:** the evidence-search interface uses local keyword matching. Any “AI Intelligence” navigation label refers to this limited retrieval interface, not a generative model or validated superintelligence.
- **No fire-risk prediction:** reading-priority scores are editorial heuristics, not hazard severity, safety certification or material approval.
- **No causal claims:** plots are descriptive; differences between runs cannot be attributed to a single factor without appropriate experimental controls.
- **Limited sample:** the numerical data contains 13 selected published rows, not complete NASA experiment archives.
- **No invented uncertainty:** unavailable error estimates remain unavailable.
- **Review pending:** AI-assisted source checks establish provenance, not independent human scientific review. SAME-R is based on indexed catalog metadata.
- **No measured impact claim:** potential usefulness has not yet been established through a researcher usability study.

This is a research and educational prototype, not an operational spacecraft safety tool.

## Next steps

1. Obtain independent scientific review of summaries and transcribed values.
2. Expand primary-source coverage and reconcile NASA PSI run logs and metadata.
3. Add uncertainty and method compatibility where supported by the sources.
4. Evaluate usability with students and researchers.
5. Consider evidence-grounded generation only with citation validation, unsupported-answer handling and secure server-side configuration.

## AI assistance and attribution

**OpenAI ChatGPT** assisted source research, table transcription, summaries, software development, interface design, testing, documentation and presentation preparation.

The runtime application itself does not call ChatGPT or another generative model. Human contributors remain responsible for reviewing scientific statements and final submission materials.

THE ORIGIN is an independent project. It does not imply NASA endorsement, certification or affiliation. Source material remains subject to its applicable terms.

## Submission materials and rights

- [Submission draft and demo notes](docs/SUBMISSION.md)
- [Methodology and source register](docs/METHODOLOGY.md)
- [Experimental data audit](docs/DATA_AUDIT.md)
- [Quality assurance notes](docs/QA.md)
- [Development progress](docs/PROGRESS.md)

A separate presentation and downloadable submission package have also been prepared; public links should be added only after they are accessible without sign-in.

This README does not grant a software license. Project owners must confirm an appropriate license and any third-party obligations before public submission. All submitted links should be tested in a signed-out browser, and the team must confirm the official challenge and event submission requirements.
