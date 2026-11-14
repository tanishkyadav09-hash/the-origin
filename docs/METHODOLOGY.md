# Methodology and architecture decisions

## Evidence model

Each record is an investigation-level source summary, not an experimental run. Fields include unique ID, program, experiment, title, publication label, document type, date and date meaning, fuel class, materials, environment, category, verification status, source URL, exact source section, short quotation, finding/objective, project interpretation, limitations, experimental context, atmosphere and numeric parameter slots.

Dates must retain their meaning. A page update, dataset release or conference start is not a publication or experiment date. Null means not established or not extracted; it never means zero.

Verification date for this seed catalog: 2026-11-14. Recheck source content when extending it. 'Source checked' is textual provenance; 'Catalog checked' is indexed official metadata only. Neither is a certification or reproducibility review. All entries still need human scientific review.

## Source register

1. BASS and BASS-II: https://www.nasa.gov/wp-content/uploads/2025/07/burning-and-suppression-of-solids-bass.pdf?emrc=3a5c2c — page 1 objectives and page 6 BASS-II results. Treat the ventilation comparison as a hypothesis. Do not transfer drop-tower example parameters to ISS records.
2. Saffire VI: https://ntrs.nasa.gov/citations/20240007488 — abstract and document metadata; presentation type, acquired 11 June 2024; ICES meeting starts 21 July 2024. Full presentation measurements not extracted.
3. FLEX and FLEX-2: https://www.nasa.gov/missions/station/studying-combustion-and-fire-safety/ — paragraphs for each investigation. Page last updated 7 March 2024.
4. ACME BRE: https://science.nasa.gov/mission/acme/ — Spacecraft Applications and investigation list. Program overviews disagree about the total number of component studies; do not infer an exhaustive ACME count.
5. SAME-R: https://psi.nasa.gov/physci/repo/data/investigations/PSI-101 — indexed official catalog metadata, version 4, DOI 10.60555/2np7-jv14, initial release 18 September 2024. The live rendered text was not accessible to the research fetcher. Catalog checked only. No data downloaded.

PSI entry point https://psi.nasa.gov/ redirected to https://science.nasa.gov/biological-physical/data/ during research. This prototype does not assume a stable PSI ingestion API.

## Retrieval

Normalize the question to lowercase terms, drop common words, count matching terms across experiment, program, title, category, materials and findings, and return up to three nonzero matches. Ties use catalog order. Render exact curated summaries, short quotations, source links, interpretations and limitations. Never ask a language model to invent missing evidence. An unsupported question produces a no-evidence state. Lexical matches are candidates, not proof of relevance; this is disclosed in the interface.

A future generative implementation needs a server-side secret, explicit model configuration, retrieved evidence context, claim-to-source validation, abstention tests and token/cost limits. ChatGPT Plus is not treated as API access. No provider is configured in v0.1.

## Priority score

Editorial score = spacecraft relevance (0–2) + traceability (0–2) + technical detail (0–1). Relevance 2 means explicitly linked to fire safety, 1 means indirect relevance. Traceability 2 means readable NASA text reviewed, 1 means indexed catalog only. Technical detail 1 identifies a technical presentation abstract, 0 an overview/catalog. It is a coarse reading-order heuristic, not an evidence-quality or hazard severity metric. No mission or material safety certification follows from it. Uncertainty is displayed in limitations rather than silently subtracted from a danger score.

## Comparability gate

Quantitative comparison is intentionally disabled in the seed version. Before adding it, represent values with units, uncertainty, source page/table, run ID, method and extraction-review status. Match fuel composition, geometry, oxygen basis, pressure, ventilation direction/rate, gravity duration and endpoint definition. Do not mix extinction oxygen index, flame temperature and heat release as one metric. Never plot missing values as zero.

## Local drafts and security

Drafts require title, program, HTTPS URL and summary. Rendered user text is HTML-escaped. Source links open with noopener/noreferrer. Drafts remain unverified and do not enter retrieval, rankings or catalog statistics. Local storage is best effort; export is the backup path. There are no network submissions, API keys or analytics in the app. Draft editing/removal and reviewed promotion into the catalog remain future work.

## Decisions

Use plain JavaScript for a zero-install demonstration. Keep authored source modular but ship one file to avoid file:// module/CORS failures. Use CSS-based accessible count charts instead of a CDN chart dependency. A conceptual orbital illustration is labeled decorative; it is not a flame simulation. Maintain responsive breakpoints at 1100px and 720px, with horizontally scrollable tables and navigation.
