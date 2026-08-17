# 4WHEELS Rent a Car - Lahore Knowledge Hub & Brand Authority System

Official Web Application & Technical SEO Infrastructure for **4WHEELS Rent a Car**, Johar Town, Lahore.

## Core Business Identity
- **Business Name:** 4WHEELS Rent a Car
- **Official Phone & WhatsApp:** 0321 6616644
- **International WhatsApp:** +923216616644
- **Physical Address:** 5 F-1, Block F1, Phase 1, Johar Town, Lahore, Pakistan
- **Official Website:** https://4wheelsrentacar.pk
- **Official Facebook:** https://www.facebook.com/4wheelrentacar/
- **Google Business Profile:** https://share.google/GORL8SQ4nxmZkqP2i

---

## Content Architecture & Knowledge Hub

### Content Collections
- `src/data/blog/`: Contains 50 Markdown guides organized into 6 core topic clusters (Renting 101, Service Types, Vehicle Selection, Old vs New Models, Lahore Knowledge, Returns & Safety).
- `src/data/press/`: Contains official press announcements and public brand protection notices.

### Creating a New Article
To add a new guide, create a `.md` file in `src/data/blog/` following this frontmatter schema:

```yaml
---
title: "How to Rent a Car in Lahore: Complete Guide"
slug: "how-to-rent-a-car-in-lahore-guide"
description: "Detailed guide on renting a car in Lahore."
category: "Renting 101"
tags: ["Beginner Guide", "Lahore Rental"]
author: "4WHEELS Editorial Team"
datePublished: "2025-01-15"
dateModified: "2025-01-15"
heroImage: "/brand/og-brand.png"
heroImageAlt: "4WHEELS Rent a Car Lahore"
featured: false
draft: false
index: true
readingTime: "6 min read"
relatedServices: ["/rent-a-car-lahore/"]
relatedPosts: ["how-to-verify-official-4wheels-rent-a-car"]
quickAnswer: "Direct 2-4 sentence summary of the article."
keyTakeaways:
  - "Takeaway point 1"
  - "Takeaway point 2"
---
```

---

## Brand Assets & Guidelines
- Vector logo lockups and media assets are located in `/public/brand/`:
  - `logo-primary.svg` (Primary light background)
  - `logo-dark.svg` (Dark background)
  - `logo-mark.svg` (Emblem)
  - `favicon.svg` (Favicon)
  - `og-brand.png` (Social sharing card)
- Public guidelines page available at `/brand/`.
- Media brand kit available at `/press/brand-assets/`.

---

## Public Notices & Brand Protection
- Official verification page: `/verify-4wheels/`
- Public notices archive: `/public-notices/`
- First Notice: `/public-notices/4wheelsrental-pk/` (Clarifying non-affiliation with `4wheelsrental.pk` / `0306-6363774`).

---

## Google Search Console Setup & SEO Workflow
1. Build and deploy production site (`npm run build`).
2. Register domain property in Google Search Console for `https://4wheelsrentacar.pk`.
3. Submit sitemap index: `https://4wheelsrentacar.pk/sitemap-index.xml`.
4. Verify `robots.txt` at `https://4wheelsrentacar.pk/robots.txt`.
5. Run local audit script: `node audit_content.js`.
