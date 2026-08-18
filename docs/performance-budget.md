# 4WHEELS Rent a Car — Web Performance Budget & Core Web Vitals Standards

## 1. Executive Standards
To ensure fast load times across Pakistan mobile networks (3G/4G/5G) and low-latency user interactions, 4WHEELS Rent a Car enforces strict web performance budgets and Core Web Vitals targets.

---

## 2. Core Web Vitals Performance Targets (75th Percentile Real-User Data)

| Metric | Target Standard | Assessment Category | Primary Optimization Strategy |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | **≤ 2.5 seconds** | Good | Compressed WebP/AVIF hero graphics, preloaded fonts, zero blocking scripts. |
| **INP (Interaction to Next Paint)** | **≤ 200 ms** | Good | Lightweight client JavaScript, passive event listeners, quick DOM execution. |
| **CLS (Cumulative Layout Shift)** | **≤ 0.1** | Good | Explicit width/height attributes on vehicle images, reserved layout dimensions. |

---

## 3. Asset Size & Payload Limits

| Asset Category | Maximum Target Limit | Enforcement Mechanism |
| :--- | :--- | :--- |
| **Total JavaScript (Gzip)** | **< 60 KB** per page | Astro static island isolation; minimal client scripts. |
| **Total CSS (Gzip)** | **< 20 KB** per page | Tailwind CSS tree-shaking & CSS token optimization. |
| **Hero Image File Size** | **< 100 KB** per image | WebP image format, responsive srcset. |
| **Fleet / Vehicle Image File Size** | **< 80 KB** per image | Compressed WebP format with 2D SVG fallback. |
| **Custom Web Fonts** | **< 50 KB** total font payload | WOFF2 font subsetting & font-display: swap. |
| **Third-Party Scripts** | **< 2 external scripts** | Async Google Tag Manager / Analytics loading only. |

---

## 4. Mobile Performance Guidelines

Given that over 70% of rental inquiries in Lahore originate from mobile devices:
- Mobile drawer navigation must render instantly.
- Vehicle filter controls must not induce layout shifts.
- Calendar and date pickers must utilize lightweight native browser inputs.
- WhatsApp handoff buttons must trigger immediately without main-thread blocking.
