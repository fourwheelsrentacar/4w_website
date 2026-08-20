# 4WHEELS Verified Pakistan Route Database Report

## Overview
The internal route database (`src/data/routes.ts`) provides verified planning distances, typical driving durations, primary motorways/highways, toll estimations, and Google Maps direction links for common Pakistan intercity and local routes.

## Verified Route Records Matrix

| Route ID | Origin | Destination | Stored Distance | Duration | Primary Road / Motorway | Toll Est. (PKR) | Verified Source | Verified Date | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `johar-town-lahore-airport` | Johar Town, Lahore | Lahore Airport (LHE) | 35 km | 45 mins | Lahore Ring Road (L-20) | 60 | NHA & Ring Road Authority | 2026-08-18 | ✅ Active |
| `dha-lahore-lahore-airport` | DHA Lahore | Lahore Airport (LHE) | 15 km | 25 mins | Lahore Ring Road (L-20) | 0 | 4WHEELS Fleet GPS Logs | 2026-08-18 | ✅ Active |
| `gulberg-lahore-airport` | Gulberg, Lahore | Lahore Airport (LHE) | 18 km | 30 mins | Cantt / Airport Road | 0 | 4WHEELS Fleet GPS Logs | 2026-08-18 | ✅ Active |
| `lahore-sheikhupura` | Lahore | Sheikhupura | 45 km | 60 mins | Sheikhupura Road / M-2 | 120 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-kasur` | Lahore | Kasur | 55 km | 65 mins | Ferozepur Road | 50 | Punjab Highway Dept | 2026-08-18 | ✅ Active |
| `lahore-faisalabad` | Lahore | Faisalabad | 180 km | 2h 15m | M-3 Motorway | 500 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-gujranwala` | Lahore | Gujranwala | 85 km | 1h 30m | GT Road (N-5) | 100 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-sialkot` | Lahore | Sialkot | 103 km | 1h 20m | M-11 Sialkot Motorway | 350 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-gujrat` | Lahore | Gujrat | 120 km | 2h 00m | GT Road (N-5) / M-11 | 200 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-jhelum` | Lahore | Jhelum | 175 km | 2h 40m | GT Road (N-5) | 250 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-rawalpindi` | Lahore | Rawalpindi | 375 km | 4h 30m | M-2 Motorway | 1100 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-multan` | Lahore | Multan | 345 km | 4h 00m | M-3 & M-4 Motorway | 950 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-sahiwal` | Lahore | Sahiwal | 170 km | 2h 30m | GT Road (N-5) | 200 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-okara` | Lahore | Okara | 130 km | 1h 50m | GT Road (N-5) | 150 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-bahawalpur` | Lahore | Bahawalpur | 410 km | 5h 00m | M-4 Motorway / N-5 | 1150 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-rahim-yar-khan` | Lahore | Rahim Yar Khan | 600 km | 7h 30m | M-4 & M-5 Motorway | 1600 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-sargodha` | Lahore | Sargodha | 185 km | 2h 30m | M-2 Motorway (Kot Momin) | 550 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-mianwali` | Lahore | Mianwali | 330 km | 5h 00m | M-2 / M-14 Motorway | 900 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-chakwal` | Lahore | Chakwal | 290 km | 3h 40m | M-2 Motorway (Balkassar) | 800 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-murree` | Lahore | Murree | 435 km | 5h 45m | M-2 + N-75 Expressway | 1250 | NHA Motorway & Highway | 2026-08-18 | ✅ Active |
| `lahore-islamabad` | Lahore | Islamabad | 375 km | 4h 30m | M-2 Motorway | 1100 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-taxila` | Lahore | Taxila | 405 km | 4h 50m | M-2 Motorway / N-5 | 1150 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-abbottabad` | Lahore | Abbottabad | 460 km | 5h 30m | M-2 + Hazara M-15 | 1350 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-nathia-gali` | Lahore | Nathia Gali | 465 km | 6h 10m | M-2 + Hazara M-15 | 1350 | NHA & KPK Tourism Dept | 2026-08-18 | ✅ Active |
| `lahore-naran` | Lahore | Naran Valley | 600 km | 9h 00m | M-2 + Hazara M-15 + N-15 | 1500 | KPK Tourism & NHA | 2026-08-18 | ✅ Active |
| `lahore-kaghan` | Lahore | Kaghan Valley | 580 km | 8h 30m | M-2 + Hazara M-15 + N-15 | 1500 | KPK Tourism & NHA | 2026-08-18 | ✅ Active |
| `lahore-swat` | Lahore | Swat (Mingora) | 530 km | 7h 00m | M-2 + M-1 + Swat M-16 | 1600 | Swat Expressway & NHA | 2026-08-18 | ✅ Active |
| `lahore-peshawar` | Lahore | Peshawar | 490 km | 5h 30m | M-2 & M-1 Motorway | 1450 | NHA Motorway Database | 2026-08-18 | ✅ Active |
| `lahore-karachi` | Lahore | Karachi | 1210 km | 14h 00m | M-3/M-4/M-5/M-9 Network | 3800 | NHA National Corridor | 2026-08-18 | ✅ Active |
| `lahore-hyderabad` | Lahore | Hyderabad | 1060 km | 12h 30m | M-5 Sukkur-Multan / N-5 | 3200 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-quetta` | Lahore | Quetta | 980 km | 14h 00m | N-70 / N-50 Highway | 1200 | NHA Distance Matrix | 2026-08-18 | ✅ Active |
| `lahore-muzaffarabad` | Lahore | Muzaffarabad | 470 km | 6h 30m | M-2 + N-75 + Kohala Road | 1300 | AJK Tourism & NHA | 2026-08-18 | ✅ Active |
| `lahore-skardu` | Lahore | Skardu | 830 km | 14h 00m | M-2 + Hazara M-15 + S-1 | 1800 | GB Tourism & NHA | 2026-08-18 | ✅ Active |
| `lahore-hunza` | Lahore | Hunza (Karimabad)| 880 km | 15h 00m | M-2 + Hazara M-15 + KKH | 1800 | GB Tourism & KKH NHA | 2026-08-18 | ✅ Active |

## Unknown Route Fallback Logic
For routes not found in the verified database:
1. System generates a direct Google Maps driving directions link (`https://www.google.com/maps/dir/?api=1&origin=[origin]&destination=[destination]&travelmode=driving`).
2. Displays label: "Route Not in Quick Database"
3. Allows optional customer distance input labeled: "Customer-entered planning distance. 4WHEELS will confirm."
