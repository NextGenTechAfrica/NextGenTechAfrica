# NextGen Technologies — Official Website

> **"BUILDING TODAY / POWERING TOMORROW"**  
> One company. Multiple technologies. One ecosystem.

This repository contains the complete, production-quality informational and brand website for **NextGen Technologies**—a parent technology company and digital venture builder.

---

## 🚀 Overview & Structure

NextGen Technologies is designed to incubate, build, launch, and operate multiple digital platforms under one cohesive ecosystem. The website is crafted to feel credible, human, ambitious, and grounded.

### 🌐 Pages & Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Hero with official NextGen logo, interactive constellation canvas, "The Idea" narrative, interactive ecosystem preview, "What We Build", platform teaser, "Why NextGen Exists", and bottom CTA. |
| `/about` | **About** | The authentic human origin story, the venture builder model, "Where we're going", and the candid "Still building" section. |
| `/ecosystem` | **Ecosystem** | Interactive multi-category architecture (Education, Productivity, Media, Technology Core, Applied AI, Future Projects) and stage definitions (`LIVE`, `IN DEVELOPMENT`, `COMING SOON`, `CONCEPT`). |
| `/platforms` | **Platforms** | Portfolio showcase with filter tabs and incubation rubric. |
| `/platforms/studyforge` | **Platform Detail (StudyForge)** | Reusable platform template featuring the official "Built by NextGen Technologies" badge, Problem vs. Idea comparison, key features grid, active milestone, and inquiry CTA. |
| `/vision` | **Vision & Principles** | Our Vision, Our Mission, 4 Core Principles (*Build with Purpose*, *Keep Learning*, *Think Long Term*, *People First*), and the Builder's Manifesto. |
| `/roadmap` | **Roadmap** | Directional visual roadmap organized into `NOW`, `NEXT`, `LATER`, and `BEYOND` phases. |
| `/contact` | **Contact** | Professional interactive inquiry form with topic presets, direct email copy helper, and configurable contact channels. |

---

## 🎨 Visual Identity & Design System

The visual design language is strictly derived from the official **NextGen Technologies logo** (`public/nextgen-logo.png`):
- **Deep Charcoal / Black**: `#07090b`, `#0b0e12`, `#101419`, `#151b22`
- **Metallic Silver / Titanium**: `#f8fafc`, `#e2e8f0`, `#cbd5e1`, `#94a3b8`, `#64748b`
- **Cyan / Turquoise Accent**: `#00c4d4`, `#22d3ee`, `#0891b2`
- **Typography**: Clean, modern sans (`Plus Jakarta Sans`)
- **Accessibility**: Semantic HTML, ARIA attributes, high-contrast text ratios, and `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Tooling**: Vite 6
- **Routing**: React Router DOM (v6)
- **Styling**: Tailwind CSS with custom design tokens, glassmorphism utilities, and radial gradients
- **Icons**: Lucide React + custom high-contrast SVG brand icons
- **Animations**: Responsive HTML5 Canvas constellation mesh with ambient cursor attraction and accessible fallbacks

---

## 📁 Project Directory Structure

```
nextgentechafrica/
├── public/
│   └── nextgen-logo.png             # Official NextGen Technologies logo asset
├── src/
│   ├── config/
│   │   └── contactConfig.ts         # Central configuration for emails, WhatsApp, and social links
│   ├── data/
│   │   ├── platformsData.ts         # Data-driven platform profiles (StudyForge, Project 02, etc.)
│   │   ├── ecosystemData.ts         # Ecosystem pillars and venture archetypes
│   │   ├── principlesData.ts        # Vision, mission, and foundational principles
│   │   └── roadmapData.ts           # Roadmap phases (NOW, NEXT, LATER, BEYOND)
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces and status types
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx           # Primary, secondary, outline, and ghost buttons
│   │   │   ├── SectionHeading.tsx   # Consistent section titles and badges
│   │   │   ├── StatusBadge.tsx      # Color-coded status pills (LIVE, IN DEV, COMING SOON, CONCEPT)
│   │   │   └── SocialIcons.tsx      # SVG icons for GitHub, LinkedIn, and Instagram
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Responsive header with mobile drawer
│   │   │   └── Footer.tsx           # Full footer with brand summary, links, and back-to-top
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroBackgroundCanvas.tsx
│   │   │   ├── TheIdeaSection.tsx
│   │   │   ├── EcosystemPreview.tsx
│   │   │   ├── WhatWeBuildSection.tsx
│   │   │   ├── PlatformsPreview.tsx
│   │   │   └── WhyNextGenSection.tsx
│   │   ├── ecosystem/
│   │   │   └── EcosystemDiagram.tsx # Interactive constellation and pillar details switcher
│   │   └── platforms/
│   │       └── PlatformCard.tsx     # Platform preview card
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── EcosystemPage.tsx
│   │   ├── PlatformsPage.tsx
│   │   ├── PlatformDetailPage.tsx   # Reusable data-driven platform template
│   │   ├── VisionPage.tsx
│   │   ├── RoadmapPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx                      # Application shell, router, and scroll manager
│   ├── index.css                    # Tailwind base, utilities, and scrollbar styling
│   └── main.tsx                     # Entry mount
├── index.html                       # HTML shell with OpenGraph metadata and Google Fonts
├── tailwind.config.js               # Tailwind design system configuration
├── tsconfig.json                    # TypeScript compiler options
└── vite.config.ts                   # Vite configuration
```

---

## 🏃 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will run on `http://localhost:5173/`.

### 3. Production Build
```bash
npm run build
```
Generates an optimized production bundle in `dist/`.

---

## ⚙️ Configuration & Adding Content

### 1. Updating Contact & Social Channels
Edit [`src/config/contactConfig.ts`](file:///c:/Users/excel/OneDrive/Documents/nextgentechafrica/src/config/contactConfig.ts):
```ts
export const contactConfig = {
  email: 'contact@nextgentech.africa',
  whatsappNumber: 'YOUR_PHONE_NUMBER_HERE', // International format e.g. '2348012345678'
  whatsappDisplay: '+234 80 1234 5678',
  linkedinUrl: 'https://linkedin.com/company/your-company',
  instagramUrl: 'https://instagram.com/your-handle',
  githubUrl: 'https://github.com/your-org',
};
```

### 2. Adding a New Platform
To add another platform to the ecosystem, simply append a new object to [`src/data/platformsData.ts`](file:///c:/Users/excel/OneDrive/Documents/nextgentechafrica/src/data/platformsData.ts). The platform will automatically appear in the showcase, filters, and get its own dedicated detail page at `/platforms/[id]` without touching any UI code!
