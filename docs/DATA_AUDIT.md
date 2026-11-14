# Experimental data audit — v0.3

This release adds 13 selected published test rows. It does not import raw sensor streams. Review date: 14 November 2026. AI transcription was checked against both PDF text and rendered tables. Human scientific review remains pending.

## Source files

- BASS/BASS-II: NTRS 20150008962, conference paper, 2015. Appendix on PDF page 9; study methods on pages 2–3. https://ntrs.nasa.gov/api/citations/20150008962/downloads/20150008962.pdf
- Saffire: NTRS 20170008805, presentation, 2017. Table I and footnote i on PDF page 29; fuel reuse context on page 16. https://ntrs.nasa.gov/api/citations/20170008805/downloads/20170008805.pdf

The original PDFs were downloaded, table pages rendered and visually inspected. SHA-256 hashes of the downloaded PDFs are preserved in data/experiments.json. Source PDFs are linked rather than republished. No plots were digitized.

## Selection and exclusions

BASS subset: six rows with explicit quenching labels, two rows with source-flagged oxygen readings, and one non-ignition row. This is an intentional teaching/research subset, not random sampling or the entire experiment. Blank source comments remain null. No extinction outcome is inferred from a blank comment.

Saffire subset: the four fabric rows with reported spread rates. Other materials and tests are outside this extraction. The opposed-flow row is marked reused. Conditions differ across runs; no pooled regression or causal conclusion is offered.

## Field semantics

Names carry units (cm, mm, cm/s, mm/s, s, atm). Pressure for BASS is a study-level stated condition, not a per-run sensor measurement. Saffire pressure is null. BASS approximate thickness is marked approximate. Oxygen approximation and final-value ranges are retained. Saffire oxygen estimates use measured CO2 with the initial ISS reference, rather than being presented as continuously measured oxygen. No uncertainty is invented when the source omits it.

The final airflow in a quenched BASS row is the reported endpoint of a changed-flow run. It is not a universal extinction threshold. Width groups can be viewed separately. Both suspect-oxygen rows and the non-ignition row stay out of the quenching chart. Missing spread rates are null, not zero.

Saffire bars show individual reported averages; no error bars are drawn because rate uncertainty is not extracted. The comparison checker flags cross-study pooling, suspect oxygen, reused fuel and geometry/direction differences. Even a within-study match is only descriptive and explicitly excludes causal inference.

## Files and reproduction

- data/experiments.json: canonical dataset, source manifest, checksums and review status.
- src/experiments.js: filtering, plot inclusion and comparison guard rules.
- dist/experiments.json and dist/experiments.csv: downloadable snapshots produced by node build.js.
- tests/experiments.test.js: provenance, table-value regression checks, flags, plot membership, compatibility and export checks.

There is no automated NASA ingestion in this version. Repeat transcription checks after any source or dataset change. Do not promote this dataset to human-reviewed status without an actual independent review.

## PSI follow-up

Official catalog entries located: BASS-II PSI-25 https://psi.nasa.gov/physci/repo/data/investigations/PSI-25 and Saffire-I PSI-98 https://psi.nasa.gov/physci/repo/data/investigations/PSI-98. Those raw assets have not been ingested. The current numerical data is sourced from the two NTRS documents above, not claimed to be a PSI raw-data download.

Next: obtain PSI run logs and sensor/image metadata; reconcile IDs and timing with the paper; add uncertainty and experimental-method compatibility before expanding analyses.
