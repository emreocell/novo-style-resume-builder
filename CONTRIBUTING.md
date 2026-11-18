# Contributing

Thanks for helping improve Novo-Style Resume Builder! Bug reports, feature ideas, docs fixes and code are all welcome.

## Ground rules

- Be kind. Assume good intent.
- Keep the app **local-first**: no backend, no tracking, no data leaving the browser.
- Do not add Novo Resume / NovoResume trademarks, logos or proprietary assets (see [DISCLAIMER.md](DISCLAIMER.md)).

## Getting set up

Requirements: Node.js 20+ and, for the docs, Python 3.10+.

```bash
npm install
npm run dev        # app at http://localhost:5173/novo-style-resume-builder/
npm run lint
npm run build

pip install -r requirements-docs.txt
mkdocs serve       # docs at http://127.0.0.1:8000/novo-style-resume-builder/docs/
```

## Where things live

| Path | What |
| --- | --- |
| `src/types/resume.ts` | The `ResumeData` model everything is built on |
| `src/hooks/useResumeStorage.ts` | Load/save to `localStorage` |
| `src/components/Editor/` | Form editors for each section |
| `src/components/Resume/` | The A4 preview/template |
| `src/lib/` | PDF/ATS export, PDF/TXT import and parsing, theming |
| `docs/` | Documentation site (MkDocs Material) |

## Making a change

1. Find or open an issue. For anything large, discuss the approach first.
2. Fork, then create a branch: `git checkout -b feat/short-description`.
3. Keep PRs focused. Add a screenshot or GIF for UI changes.
4. Make sure `npm run lint`, `npm run build` and `mkdocs build --strict` pass. CI runs them too.
5. Open a PR using the template.

New here? Look for [`good first issue`](https://github.com/parvez3019/novo-style-resume-builder/labels/good%20first%20issue).

By contributing you agree your work is released under the [MIT License](LICENSE).
