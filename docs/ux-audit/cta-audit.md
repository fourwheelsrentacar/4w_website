# 4WHEELS Rent a Car — Commercial CTA Audit Matrix

| Page Path | CTA Text | Type | Destination Href | Expected Behavior | Actual Behavior | Viewport | Status |
|---|---|---|---|---|---|---|---|
| `/` | 🚗 BOOK YOUR TRIP | Primary Button | `/booking/` | Opens 7-step visual configurator at Step 1 | Opens Configurator Step 1 | Desktop / Mobile | ✅ PASS |
| `/` | 🧭 PLAN MY TRIP | Secondary Button | `/trip-planner/` | Opens trip planner & cost estimator | Opens Trip Planner | Desktop / Mobile | ✅ PASS |
| Header | BOOK YOUR TRIP | Header CTA | `/booking/` | Opens 7-step visual configurator | Opens Configurator | Desktop / Mobile | ✅ PASS |
| Footer | BOOK YOUR TRIP | Footer CTA | `/booking/` | Opens 7-step visual configurator | Opens Configurator | Desktop / Mobile | ✅ PASS |
| Mobile Sticky Bar | 🚗 Book Your Trip | Sticky Bar | `/booking/` | Opens 7-step visual configurator | Opens Configurator | Mobile | ✅ PASS |
| Mobile Sticky Bar | 📞 Call Us | Sticky Bar | `tel:+923216616644` | Triggers voice call to 0321 6616644 | Triggers voice call | Mobile | ✅ PASS |
| `/fleet/` | BOOK YOUR TRIP | Card CTA | `/booking/?vehicle=...` | Opens configurator with pre-selected vehicle | Opens Configurator at Step 5 | Desktop / Mobile | ✅ PASS |
| `/fleet/` | CALL 0321 6616644 | Card CTA | `tel:+923216616644` | Triggers voice call to 0321 6616644 | Triggers voice call | Desktop / Mobile | ✅ PASS |
| `/fleet/[vehicle]/` | Book Your Trip | Primary CTA | `/booking/?vehicle=...` | Pre-selects vehicle and moves to route step | Opens Configurator at Step 5 | Desktop / Mobile | ✅ PASS |
| `/vehicles/[brand]/[model]/` | Book Your Trip | Primary CTA | `/booking/?vehicle=...` | Pre-selects catalog vehicle and moves to route step | Opens Configurator at Step 5 | Desktop / Mobile | ✅ PASS |
| `/find-my-vehicle/` | BOOK YOUR TRIP | Result CTA | `/booking/?vehicle=...` | Pre-selects matched vehicle | Opens Configurator at Step 5 | Desktop / Mobile | ✅ PASS |
| `/compare-vehicles/` | Choose & Configure | Table CTA | `/booking/?brand=...` | Pre-selects brand & model | Opens Configurator at Step 3/5 | Desktop / Mobile | ✅ PASS |
| `/official/` | 💬 Contact Official WhatsApp | Primary CTA | `https://wa.me/923216616644?text=...` | Opens official WhatsApp chat | Opens WhatsApp chat | Desktop / Mobile | ✅ PASS |
| `/press/` | Verify Official Details | Advisory CTA | `/official/` | Navigates to official verification hub | Navigates to Verification Hub | Desktop / Mobile | ✅ PASS |
| `/press/[slug]/` | View Official Verification Hub | Article CTA | `/official/` | Navigates to official verification hub | Navigates to Verification Hub | Desktop / Mobile | ✅ PASS |
| `/routes/` | Plan This Trip | Route CTA | `/trip-planner/?origin=...` | Opens pre-filled trip planner | Opens Trip Planner | Desktop / Mobile | ✅ PASS |
| `/routes/[slug]/` | 🚗 BOOK YOUR TRIP | Primary CTA | `/booking/` | Opens 7-step visual configurator | Opens Configurator | Desktop / Mobile | ✅ PASS |
| `/guides/` | 🚗 Book Your Trip | Article CTA | `/booking/` | Opens 7-step visual configurator | Opens Configurator | Desktop / Mobile | ✅ PASS |
