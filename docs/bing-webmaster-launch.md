# Bing Webmaster Tools & IndexNow Launch Protocol

## Executive Summary
This document details site verification, IndexNow submission, and AI performance monitoring for Bing Webmaster Tools on the official production domain `https://4wheelsrentacar.pk`.

---

## 1. Bing Webmaster Tools Verification & Sitemap
1. **Verification**: Log into Bing Webmaster Tools and import verified property directly from Google Search Console or place XML meta tag verification file on `https://4wheelsrentacar.pk`.
2. **Sitemap Submission**: Submit primary sitemap index: `https://4wheelsrentacar.pk/sitemap-index.xml`.
3. **URL Inspection**: Perform Bing URL Inspection on Homepage, `/official/`, `/fleet/`, `/trip-planner/`, and major service pages.
4. **Indexing Diagnostics**: Review Crawl Control and Site Explorer for crawl errors or blocked resources.
5. **Search Performance**: Track organic queries, impressions, CTR, and search rankings in Bing.

---

## 2. IndexNow Protocol Implementation
1. **Host**: `4wheelsrentacar.pk`
2. **Key Location**: `https://4wheelsrentacar.pk/[API_KEY].txt`
3. **Function**: Utility module `src/utils/indexnow.ts` triggers POST notifications to `https://api.indexnow.org/indexnow` upon page publication or update.
4. **Url Rules**:
   - ✅ SUBMIT: Canonical public URLs (e.g. `https://4wheelsrentacar.pk/official/`, `https://4wheelsrentacar.pk/press/`)
   - ❌ EXCLUDE: Booking state URLs, filter query parameters (`?brand=toyota`), draft press releases, preview staging URLs, or internal docs.

---

## 3. Microsoft Bing AI & GEO Performance Monitoring
1. **Total Citations**: Monitor overall citation counts across Microsoft Copilot and Bing AI answers for car rental queries in Lahore.
2. **Cited Pages**: Identify which official pages (`/official/`, `/fleet/`, `/trip-planner/`, `/rental-terms/`) are cited as trusted primary sources.
3. **AI Visibility**: Track brand entity visibility for queries like "4WHEELS Rent a Car Johar Town phone" and "official car rental in Lahore".
4. **AI Citation Quality**: Ensure AI answers accurately quote official contact details (0321 6616644, Johar Town Phase 1, Lahore) without hallucinating unverified claims.
