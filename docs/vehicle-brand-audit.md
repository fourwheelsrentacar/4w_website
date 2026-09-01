# Vehicle Brand & Catalog Audit — 4WHEELS Rent a Car

**Document Date:** August 2026
**Domain Standard:** `https://www.4wheelspk.com/` (or canonical `https://4wheelsrentacar.pk`)

---

## 1. Executive Summary & Brand Overview

This audit covers all vehicle brands operating in or relevant to the Pakistan automotive rental and request market, analyzing brand page existence, model counts in central datasets, visibility in booking configurators, real photograph coverage, official distributor URLs, SEO status, sitemap inclusion, and required actions.

---

## 2. Brand & Catalog Audit Matrix

| Brand | Brand Page Exists? | Models in Dataset | Models Visible on Brand Page | Models in Booking | Real Images | Official Pakistan Source | SEO Status | Sitemap Status | Action |
|---|---|---|---|---|---|---|---|---|---|
| **Toyota** | Yes (`/vehicles/toyota/`) | 12 (6 Fleet + 6 Request) | 12 | Yes | Yes (CC Photo) | https://toyota-indus.com/ | Valid | Indexable | Expand model hierarchy & variants |
| **Honda** | Yes (`/vehicles/honda/`) | 4 (1 Fleet + 3 Request) | 4 | Yes | Yes (CC Photo) | https://www.honda.com.pk/ | Valid | Indexable | Include HR-V, City, Civic variants |
| **Suzuki** | Yes (`/vehicles/suzuki/`) | 3 (1 Fleet + 2 Request) | 3 | Yes | Yes (CC Photo) | https://suzukipakistan.com/ | Valid | Indexable | Include Swift, Alto, Every |
| **Hyundai** | Yes (`/vehicles/hyundai/`) | 4 (0 Fleet + 4 Request) | 4 | Yes | Yes (CC Photo) | https://hyundai-nishat.com/ | Valid | Indexable | Include Santa Fe, Tucson, Elantra, Sonata |
| **Kia** | Yes (`/vehicles/kia/`) | 5 (2 Fleet + 3 Request) | 5 | Yes | Yes (CC Photo) | https://kia-luckymotorcorp.com/ | Valid | Indexable | Separate Sportage QL (fleet) vs Sportage L (request); Carnival |
| **BYD** | Yes (`/vehicles/byd/`) | 5 (0 Fleet + 5 Request) | 5 | Yes | Yes (CC Photo) | https://byd-mega.com/ | Valid | Indexable | Reclassify Sealion 6 -> Sealion 7 (EV/PHEV) per official site |
| **Changan** | Yes (`/vehicles/changan/`) | 3 (0 Fleet + 3 Request) | 3 | Yes | Yes (CC Photo) | https://changan.com.pk/ | Valid | Indexable | Oshan X7, Alsvin, Karvaan |
| **Deepal** | Yes (`/vehicles/deepal/`) | 4 (0 Fleet + 4 Request) | 4 | Yes | Yes (CC Photo) | https://deepal.com.pk/ | Valid | Indexable | S07, L07, S05, E07 |
| **MG** | Yes (`/vehicles/mg/`) | 3 (0 Fleet + 3 Request) | 3 | Yes | Yes (CC Photo) | https://mgmotors.com.pk/ | Valid | Indexable | MG HS, ZS EV, Cyberster |
| **Haval** | Yes (`/vehicles/haval/`) | 2 (0 Fleet + 2 Request) | 2 | Yes | Yes (CC Photo) | https://www.gwm-pakistan.com/ | Valid | Indexable | H6 HEV, Jolion |
| **ORA** | No | 2 (Request) | 0 | Pending | Yes | https://www.gwm-pakistan.com/ | Missing | Needs Link | Create `/vehicles/ora/` |
| **Tank** | No | 1 (Request) | 0 | Pending | Yes | https://www.gwm-pakistan.com/ | Missing | Needs Link | Create `/vehicles/tank/` |
| **Jetour** | Yes (`/vehicles/jetour/`) | 3 (0 Fleet + 3 Request) | 3 | Yes | Yes (CC Photo) | https://jetour.com.pk/ | Valid | Indexable | T2, X70 Plus, Dashing |
| **OMODA** | Yes (`/vehicles/omoda/`) | 2 (0 Fleet + 2 Request) | 2 | Yes | Yes (CC Photo) | https://omodajaecoo.pk/ | Valid | Indexable | OMODA E5, OMODA 7 |
| **JAECOO** | Yes (`/vehicles/jaecoo/`) | 2 (0 Fleet + 2 Request) | 2 | Yes | Yes (CC Photo) | https://omodajaecoo.pk/ | Valid | Indexable | J7, J6 |
| **AION** | No | 2 (Request) | 0 | Pending | Yes | https://www.gacgroup.com/en-pk | Missing | Needs Link | Create `/vehicles/aion/` |
| **HYPTEC** | No | 1 (Request) | 0 | Pending | Yes | https://www.gacgroup.com/en-pk | Missing | Needs Link | Create `/vehicles/hyptec/` |
| **Honri** | No | 2 (Request) | 0 | Pending | Yes | https://honripakistan.com/ | Missing | Needs Link | Create `/vehicles/honri/` |
| **Audi** | Yes (`/vehicles/audi/`) | 1 (1 Fleet + 0 Request) | 1 | Yes | Yes (CC Photo) | https://audi.com.pk/ | Valid | Indexable | A6 Sedan |
| **Yutong** | Yes (`/vehicles/yutong/`) | 1 (1 Fleet + 0 Request) | 1 | Yes | Yes (CC Photo) | https://mastermotor.com.pk/ | Valid | Indexable | Master Yutong Bus |
| **Daewoo** | Yes (`/vehicles/daewoo/`) | 1 (1 Fleet + 0 Request) | 1 | Yes | Yes (CC Photo) | https://daewoo.com.pk/ | Valid | Indexable | Express Luxury Bus |

---

## 3. Key Findings & Sealion 6 Verification

1. **BYD Sealion 6 Audit**: Official BYD Mega Pakistan website (`https://byd-mega.com/`) confirms that the flagship SUV model sold officially in Pakistan is **BYD Sealion 7** (pure EV SUV), while Sealion 6 DM-i is an international variant. Reclassifying record from Sealion 6 to **Sealion 7** to match official Pakistan distributor data.
2. **Actual Fleet vs Pakistan Request Catalog**:
   - **Actual 4WHEELS Fleet (11 Vehicles)**: Toyota Corolla Altis, Honda Civic, Toyota Fortuner Sigma 4, Toyota Hilux Revo, Suzuki Alto VX, Toyota Yaris ATIV, Toyota HiAce Grand Cabin, Toyota Coaster VIP 22-Seater, Audi A6, Kia Sportage QL, Kia Grand Carnival VIP.
   - **Pakistan Request Catalog (30+ Models)**: All other Pakistan-market models (e.g. BYD Seal, BYD Atto 3, BYD Sealion 7, Haval H6 HEV, Deepal S07, Hyundai Santa Fe, MG HS, Changan Oshan X7, Suzuki Swift, Toyota Land Cruiser 300 / Prado, Omoda E5, Jaecoo J7, Aion ES, Hyptec HT, Honri i200/i300, etc.) marked as `REQUEST THIS MODEL`.
3. **Brand Page Architecture Expansion**:
   - Dynamic `/vehicles/[brand]/` routes will cover all 21 verified brands with clean URLs, category filter chips, actual fleet first, request catalog second, official distributor references, FAQs, and structured JSON-LD breadcrumbs.
