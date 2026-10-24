# Billbox — Modern Invoicing SaaS Platform (Frontend)

> A modern, pixel-perfect, production-grade frontend implementation of the **Billbox** invoicing SaaS platform for freelancers, small businesses, and agencies. Built with React 19, TypeScript, Vite, Tailwind CSS, GSAP, and Lenis smooth scrolling.

---

## 1. Project Overview

**Billbox** is an online invoicing web platform designed for small businesses, sole proprietors, and freelancers. It automates real-time tax authority reporting (API 3.0), provides two-way bank synchronization with automated payment reconciliation, manages recurring subscription billing, and gives accountants direct read-only access.

This repository contains the standalone, production-ready frontend client crafted to achieve absolute design fidelity, fluid 60fps micro-interactions, responsive adaptability across all viewports, and strict enterprise TypeScript standards.

---

## 2. Key Features

- **Interactive Product Simulation**:
  - Live tax submission stepper dynamically cycling through `Issued` (14:02:11) &rarr; `Submitting to tax authority…` (14:02:12) &rarr; `Accepted · INV-7Q2K` (14:02:13).
  - High-fidelity invoice creation mockup with customer fields, line items table, and real-time total calculation.
  - Floating status pills with ambient shadows and physics-inspired easing.
- **Dynamic Bento Grid**:
  - Six purpose-built feature cards featuring custom interactive modules: laser pulse wire animation, bank reconciliation feed with matching indicators, recurring month selector with toggle switch, and receivables monitor with an SVG sparkline area chart.
- **Interactive Pricing Engine**:
  - Instant toggle between **Monthly** and **Annual** billing with smooth GSAP rate interpolations ($0, $9/mo vs $7/mo, $19/mo vs $15/mo) and dynamic savings calculations.
- **Accessible Accordion FAQ**:
  - Smooth height-expanding FAQ module with accessible ARIA states (`aria-expanded`, keyboard navigation, rotating circular plus/minus indicators).
- **Infinite Marquees**:
  - Multi-client logo marquee with smooth continuous looping.
  - 3-column alternating auto-scrolling testimonial wall (columns 1 & 3 scroll upward, column 2 scrolls downward; pauses smoothly on hover).
- **Smooth Momentum Scrolling**:
  - Hardware-accelerated momentum scrolling powered by **Lenis**, synchronized directly into the GSAP ticker.
- **Comprehensive Responsive Design**:
  - Fully responsive across desktop (1440px), laptop (1280px), tablet (768px), and mobile (390px) viewports with dedicated mobile drawer navigation.

---

## 3. Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React 19** | Modern component-based UI architecture |
| **Language** | **TypeScript 7** | Strict type safety, clean interfaces, zero compile errors |
| **Bundler & Tooling** | **Vite 6** | Instant HMR and optimized Rollup production builds |
| **Styling** | **Tailwind CSS 3** + Custom CSS | Design system tokens, variables, radial glows, glassmorphism |
| **Animation Engine** | **GSAP 3** & **ScrollTrigger** | Stacking cards, text reveal scrubbing, counters, and tweens |
| **Smooth Scroll** | **Lenis 1.3** | Hardware-accelerated smooth scrolling with ticker integration |
| **Icons & Media** | **SVG Sprite System** | Zero-latency, crisp vector iconography without external overhead |

---
## 4. Installation & Setup

### Prerequisites
- Node.js `v18.0.0` or higher (tested on Node `v20.x` / `v24.x`)
- npm `v9.0.0` or higher

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/billcircle-invoicing.git
cd billcircle-invoicing
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
The application will launch automatically at `http://localhost:5174/`.

---

## 5. Development & Build Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server at `http://localhost:5174/` with HMR |
| `npm run build` | Builds optimized production bundle to the `dist/` directory |
| `npm run preview` | Previews the compiled production build locally at `http://localhost:4173/` |
| `npm run typecheck` | Runs TypeScript compiler in `noEmit` mode with strict type checking |

---

## 6. Project Structure

```
├── .gitignore                    # Standard Node & Vite ignore rules
├── index.html                    # HTML shell, typography preconnects & SplitText script
├── netlify.toml                  # Netlify deployment configuration & SPA redirects
├── package.json                  # Dependencies, engine versions, and scripts
├── postcss.config.js             # PostCSS plugin pipeline
├── tailwind.config.js            # Tailwind theme tokens and fonts
├── tsconfig.json                 # Strict TypeScript configuration
├── tsconfig.node.json            # Node/Vite tooling TypeScript configuration
├── vercel.json                   # Vercel deployment configuration & SPA routing
├── vite.config.ts                # Vite dev server and React plugin setup
├── public/
│   ├── _redirects                # Static host SPA redirect fallback
│   └── screenshots/              # Project reference assets
└── src/
    ├── App.tsx                   # Master layout, GSAP context & Lenis scroll lifecycle
    ├── index.css                 # Core CSS design tokens, glows, and responsive styles
    ├── main.tsx                  # React DOM mount point
    ├── vite-env.d.ts             # Vite client typings & global interface definitions
    └── components/
        ├── FAQ.tsx               # Accessible accordion FAQ component
        ├── Features.tsx          # 6-cell Bento grid interactive showcase
        ├── FinalCTA.tsx          # Bottom conversion CTA with ambient lighting
        ├── Footer.tsx            # Multi-column footer and typography wordmark
        ├── Hero.tsx              # Hero header, floating cards & dynamic dashboard
        ├── HowItWorks.tsx        # 3-step desktop stacking cards with scrub effects
        ├── Logos.tsx             # Infinite client logo marquee
        ├── Navbar.tsx            # Sticky glass navigation bar and mobile drawer
        ├── Pricing.tsx           # Monthly / annual interactive pricing switch
        ├── Statement.tsx         # Dark brand statement with stats counter
        ├── SvgSprite.tsx         # Centralized SVG symbol sprite library
        └── Testimonials.tsx      # 3-column auto-scrolling wall of testimonials
```

---

## 7. Deployment Instructions

This project is pre-configured for instant zero-configuration deployment to **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Deploy to Vercel
1. Install Vercel CLI (or connect your GitHub repository at [vercel.com](https://vercel.com)):
   ```bash
   npm i -g vercel
   ```
2. Run deployment:
   ```bash
   vercel
   ```
   - Build Command: `npm run build`
   - Output Directory: `dist`
*(Pre-configured via `vercel.json` with automatic SPA rewrites)*

### Deploy to Netlify
1. Install Netlify CLI (or push to GitHub and import into [netlify.com](https://netlify.com)):
   ```bash
   npm i -g netlify-cli
   ```
2. Run deployment:
   ```bash
   netlify deploy --prod
   ```
*(Pre-configured via `netlify.toml` and `public/_redirects`)*

---

## 8. Links & Verification

- **Live Production URL**: [https://billbox-invoicing.vercel.app/](https://billbox-invoicing.vercel.app/)
- **Developer Portfolio**: [https://rishirajshukla.netlify.app/](https://rishirajshukla.netlify.app/)

---

## 9. License & Attribution

This frontend implementation was built as a showcase project demonstrating modern SaaS UI engineering, micro-interactions, responsive design systems, and animation performance.
