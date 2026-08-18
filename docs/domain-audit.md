# Domain Audit & Production Domain Configuration

## Executive Summary
This document provides a comprehensive domain audit for 4WHEELS Rent a Car. It details all domain values, preview hosts, and local environment endpoints found across the codebase, along with their status, justification for correction, and final resolution.

Central Configuration Variable: `BUSINESS_INFO.siteUrl` (and `SITE_URL`) set strictly to `https://4wheelsrentacar.pk`.

---

## Domain Audit Matrix

| Found Value | File(s) | Why Incorrect / Context | Correction | Final Status |
| :--- | :--- | :--- | :--- | :--- |
| `https://4wheelsrentacar.pk` | `src/data/business.ts`, `astro.config.mjs`, `src/utils/indexnow.ts` | Primary production domain for 4WHEELS Rent a Car. Centralized via `BUSINESS_INFO.siteUrl`. | Verified and centralized across all canonical, schema, sitemap, and IndexNow generators. | ✅ APPROVED PRODUCTION DOMAIN |
| `4wheels.pk` | `docs/brand-sources.md`, `docs/brand-kit.md`, `docs/google-search-console-launch.md` | Competitor / lookalike portal for used-car buying/selling. Prohibited for official website, canonicals, schema, or contact identity. | Quarantined strictly to internal brand protection and clarification documentation (`/docs/brand-confusion-register.md`, `/docs/domain-audit.md`). Blocked in code by `scripts/verify-entity-qa.js`. | ⚠️ PROHIBITED / QUARANTINED |
| `4wheelsrental.pk` | Internal records | Independent lookalike rental operation. Prohibited from being merged with 4WHEELS Rent a Car identity. | Quarantined to internal brand protection register (`/docs/brand-confusion-register.md`). | ⚠️ PROHIBITED / QUARANTINED |
| `4w-website.vercel.app` | Vercel deployment preview / staging | Temporary Vercel preview domain. Long-term SEO must not be built on preview URLs. | All canonicals, sitemaps, JSON-LD, and OG URLs derive dynamically from `BUSINESS_INFO.siteUrl` (`https://4wheelsrentacar.pk`). | ℹ️ PREVIEW STAGING ONLY |
| `http://localhost:4321` | Local development environment | Local development server port. Must not leak into production build output. | Verified that all build processes generate absolute URLs pointing to `https://4wheelsrentacar.pk`. | ℹ️ LOCAL DEV ONLY |

---

## QA Enforcement Mechanism
An automated QA script (`scripts/verify-entity-qa.js`) runs during `npm run qa` and `npm run build` to block any production code, canonical link, schema ID, or meta tag containing prohibited domains.
