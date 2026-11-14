# THE ORIGIN

A browser-first, evidence-grounded microgravity combustion research prototype for the NASA Space Apps **Flame in Freefall** challenge.

## Preview without installing anything

Use the private preview link delivered in ChatGPT. Alternatively, open `dist/index.html` in GitHub, use **Download raw file**, then open the downloaded HTML in Chrome, Edge or Firefox. It is self-contained and requires no Node.js, Python, Git, paid API or internet connection for the interface. NASA source links require internet access.

Do not paste an API key into this application. No model is connected.

## Included in v0.3

- Nine working navigation views (including Experimental Data): command center, explorer, comparison, evidence retrieval, priority ranking, mission applications, visualization lab and project information.
- Nine curated investigation records across BASS, Saffire, FLEX, ACME and SAME.
- Nine records checked against readable NASA text; one checked against indexed NASA PSI catalog metadata.
- Search and combined filters, evidence detail dialogs, comparisons of up to three records, missing-data handling, source citations and catalog export.
- A transparent editorial research-priority method; **not** a fire-risk prediction.
- Unverified research drafts stored locally and kept out of scientific counts and answers.

## Scientific boundaries

The catalog contains seven unique source documents of mixed types, not seven peer-reviewed papers. Source checks establish provenance, not independent validation. The Saffire VI summary uses an NTRS presentation abstract; the Saffire I/II numerical dataset uses a separate full presentation. SAME-R is catalog metadata. Hypotheses, objectives, reported findings and project interpretations are labeled separately. A separate dataset now contains 13 selected published test rows from two primary documents. It preserves units, source references, suspect oxygen flags and reused fuel. Study-specific numerical plots are descriptive; no raw sensor ingestion or cross-study causal comparison is claimed. See [data audit](docs/DATA_AUDIT.md).

SAME is **Smoke Aerosol Measurement Experiment**, not Spacecraft Atmosphere Monitor Experiment.

The official challenge's indexed description was reviewed on 14 November 2026. Direct full-page retrieval returned a gateway error. Detailed resources, eligibility, final submission rules and deadline remain to be confirmed.

## Architecture

`src/data.js` → curated evidence records; `src/core.js` → pure filtering, retrieval, validation and ranking; `src/app.js` → application views and events; `src/style.css` → responsive theme; `src/index.html` → shell. `build.js` bundles these into portable `dist/index.html` and exports `dist/catalog.json`.

No frontend package dependencies, backend, database, remote fonts or external scripts. A build is needed only after editing source; users open the built HTML directly.

Developer commands (in a cloud environment, not required on your laptop):

```sh
node build.js
node --test tests/core.test.js
```

Documentation: [methodology](docs/METHODOLOGY.md), [progress](docs/PROGRESS.md), [QA](docs/QA.md), [submission draft and demo script](docs/SUBMISSION.md).

## AI assistance and attribution

OpenAI ChatGPT assisted research curation, implementation, design, testing and documentation. This is an independent project and does not imply NASA endorsement. Source material remains subject to its applicable terms. The prototype does not claim scientific novelty for NASA findings or validated superintelligence.
