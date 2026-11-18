---
description: Import an existing PDF or TXT resume to auto-fill the resume builder.
---

# Importing a resume

Click **Upload resume** in the toolbar and choose a `.pdf` or `.txt` file. The text is extracted **in your browser** with [pdf.js](https://mozilla.github.io/pdf.js/) and mapped onto the editor's sections.

## What works best

- **Text-based PDFs**, e.g. exported from Word, Google Docs or this app. Scanned or image-only PDFs have no text to extract.
- **The app's own ATS text export.** It round-trips cleanly, so you can use it as a backup and restore format.

## Limitations

- Parsing is heuristic. Always review each section after importing.
- Fields that can't be detected fall back to the sample content.
- Your existing profile photo and theme are kept.
