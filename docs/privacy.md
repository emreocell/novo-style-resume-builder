---
description: The resume builder stores your data only in your browser's localStorage. There is no account, server or tracking.
---

# Privacy

**Your resume never leaves your device.**

- No account, no login and no backend server. The app is a static website.
- Everything you type, including your photo, is saved in your browser's **`localStorage`** under the key `novo-resume-builder-data-v2`.
- Imported PDF/TXT files are parsed **locally** in the browser and never uploaded.
- The app has no analytics or tracking scripts.

## Third-party requests

The only network requests besides loading the app itself are for **web fonts from Google Fonts** (all fonts except Georgia). Google receives a normal font request (your IP and browser), but never any resume content. If that matters to you, pick **Georgia**, or [self-host](self-hosting.md) and bundle the fonts.

## Clearing your data

- Click **Reset template** to replace your data with the sample resume, **or**
- Clear site data for the page in your browser settings.

!!! warning "Back up your work"
    `localStorage` is tied to one browser on one device and is wiped if you clear site data. Use **Download ATS Text** as a backup you can [re-import](guide/import.md).
