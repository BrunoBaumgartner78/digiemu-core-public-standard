# DigiEmu Core — Public Standard Site

Public website for the **DigiEmu Core Public Standard**: deterministic knowledge infrastructure, snapshot-verifiable state reconstruction, and audit-ready verification.

This repo hosts the **public standard pages** (Spec, Reference, Architecture, Compliance, Contact) and serves downloadable audit artifacts (DOCX) under `/public/docs`.

---

## What’s inside

- **Next.js App Router** site (static-first pages)
- **Dark mode** + minimalist UI
- **Snapshot verification narrative** (replay → canonical encoding → SHA-256 → evidence)
- **Reference / Audit artifacts** page with downloadable **DOCX** documents
- **SEO** basics:
  - OpenGraph/Twitter metadata
  - `app/sitemap.ts` → `/sitemap.xml`
  - `app/robots.ts` → `/robots.txt`
  - Favicons + `site.webmanifest`
- Custom **404** (`app/not-found.tsx`) with a subtle globe backdrop

---

## Routes

- `/` Home
- `/spec`
- `/reference`
- `/architecture`
- `/compliance`
- `/contact`
- `/imprint`
- `/privacy`
- `/sitemap.xml`
- `/robots.txt`

---

## Documents (downloads)

Documents live in:

- `public/docs/`

Links are defined in:

- `src/config/links.ts`

If you add a new artifact:
1. Drop the `.pdf` into `public/docs/`
2. Add/update the path in `src/config/links.ts`
3. Update the cards / download buttons where needed (`/spec`, `/reference`, CTA sections)

---

## Local development

Install dependencies:

```bash
npm ci