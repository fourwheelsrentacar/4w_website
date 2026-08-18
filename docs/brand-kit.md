# 4WHEELS Rent a Car — Official Brand Kit & Style Guide

---

## 1. Official Brand Identity
- **Official Brand Name**: 4WHEELS Rent a Car
- **Short Name / Badge Title**: 4WHEELS
- **Established Year**: 2008
- **Primary Slogan**: Self Drive & With Driver Car Rental in Lahore
- **Trust Wording**: "Serving Lahore Since 2008" / "An established Pakistani vehicle-rental brand serving Lahore since 2008."
- **Official Head Office**: 5, F1, Block F1, Johar Town Phase 1, Lahore, Pakistan
- **Official Phone**: 0321 6616644 / +92 321 6616644
- **Official WhatsApp**: +92 321 6616644
- **Official Email**: 4wheels44@gmail.com
- **Official Facebook**: `https://www.facebook.com/4wheelrentacar/`
- **Official Website**: `https://4wheelsrentacar.pk`

---

## 2. Brand Color Palette (HEX Values & Source Asset)
Derived directly from the owner-supplied official Facebook page assets and verified brand logo (`/public/favicon.svg`):

| Variable Token | Color Name | HEX Code | Primary Application |
| :--- | :--- | :--- | :--- |
| `--brand-primary` | 4WHEELS Red | `#E0121A` | Primary brand logos, primary CTA buttons, active navigation states, badges |
| `--brand-primary-hover` | Deep Crimson | `#B80C13` | Hover states for red CTA buttons |
| `--brand-secondary` | Slate Navy | `#0F172A` | Header/Footer background, dark section blocks, high-contrast typography |
| `--brand-accent` | Amber Gold | `#F59E0B` | Plan My Trip CTAs, highlighted notices, rating stars |
| `--brand-bg` | Pure White | `#FFFFFF` | Default page background |
| `--brand-surface` | Slate Light | `#F8FAFC` | Card fill, section backgrounds, table headers |
| `--brand-text` | Slate Dark | `#0F172A` | Body text, headings, contrast copy |
| `--brand-text-muted` | Muted Gray | `#64748B` | Captions, metadata, secondary text |
| `--brand-border` | Border Gray | `#E2E8F0` | Card borders, dividers, table borders |
| `--brand-success` | Emerald Green | `#10B981` | Verification badges, WhatsApp CTAs, confirmed statuses |
| `--brand-warning` | Amber Alert | `#F59E0B` | Payment advisories, customer safety reminders |
| `--brand-danger` | Alert Red | `#EF4444` | Prohibited notices, cancellation warnings |

**Source Asset**: Extracted from official Facebook cover/logo assets and CSS design tokens in `src/styles/tokens.css`.

---

## 3. Logo Usage & Specifications
- **Primary Logo Block**: Red background box (`#E0121A`) with bold, white, extra-bold sans-serif uppercase text `4WHEELS`, accompanied by text `Rent a Car Lahore`.
- **Minimum Display Size**:
  - Web Header: Height 32px (Desktop), 28px (Mobile)
  - Favicon / Touch Icon: 32x32px SVG (`/public/favicon.svg`)
- **Clear Space Rule**: Maintain minimum 8px padding around logo block in all navigation and media graphics.
- **Prohibited Alterations**:
  - Do NOT stretch or warp logo aspect ratio.
  - Do NOT change logo background to unapproved colors (e.g. green or cyan).
  - Do NOT alter text font to decorative script.

---

## 4. Typography System
System-first, high-performance font stack for optimal speed and readability:
`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`

| Role | Weight | Size (Desktop/Mobile) | Tracking | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| Display H1 | Black (`900`) | `3xl` - `5xl` (30px-48px) | Tight (`-0.025em`) | `1.1` |
| Section H2 | Bold (`700`) | `2xl` - `3xl` (24px-30px) | Normal | `1.2` |
| Card H3 | Bold (`700`) | `lg` - `xl` (18px-20px) | Normal | `1.3` |
| Body Text | Regular (`400`) / Medium (`500`) | `sm` - `base` (14px-16px) | Normal | `1.6` |
| Small / Label | Medium (`500`) / Bold (`700`) | `xs` (12px) | Wide (`0.05em`) | `1.4` |

---

## 5. UI Elements: Buttons, Cards, & Forms
- **Primary Commercial CTA**: Red background (`#E0121A`), rounded-lg, font-bold, white text. Text: "Check Availability" or "Book Your Trip".
- **Trip Planner CTA**: Amber Gold (`#F59E0B`), font-black, slate-950 text. Text: "Plan My Trip".
- **WhatsApp CTA**: Emerald Green (`#10B981`) or Slate-800 with emerald text. Text: "💬 Contact Official WhatsApp".
- **Vehicle Cards**: White card fill (`#FFFFFF`), subtle border (`#E2E8F0`), hover elevation (`translateY(-4px)`), clear technical specs (Engine CC, transmission, fuel economy, capacity).

---

## 6. Press & Social Media Visual Rules
- **Press Graphics**: Clean slate background (`#0F172A`), official red logo badge, clear headline text, publication date, and official web domain (`4wheelsrentacar.pk`).
- **Media Representation**: No graphics imitating third-party news outlets or falsely asserting media endorsements.

---

## 7. Tone of Voice & Messaging Standards
- **Tone**: Professional, transparent, informative, authoritative, and helpful.
- **Mandatory Phrase**: "Serving Lahore Since 2008".
- **Prohibited Phrases**:
  - "Pakistan's #1 Rent a Car"
  - "Pakistan's oldest Rent a Car"
  - "Lahore's oldest Rent a Car"
  - "Pakistan's most trusted rental company"
  - "Largest rental company in Pakistan"
  - "Cheapest rental company"
