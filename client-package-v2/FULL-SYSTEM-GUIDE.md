# Full System Guide

This document explains what every part of the AI Agency System does, how it fits together, and how you operate it as a one-person agency.

---

## Folder Structure

```
ai-agency-system/
│
├── site/                       The agency website (Next.js application)
│   ├── src/app/                Pages and routes
│   │   ├── page.tsx            Homepage (main landing page)
│   │   ├── layout.tsx          Root layout (metadata, fonts, structure)
│   │   ├── globals.css         Global styles and design tokens
│   │   └── system-status/
│   │       └── page.tsx        System status dashboard
│   ├── src/components/         Reusable UI components (11 total)
│   ├── src/lib/                Utilities and helpers
│   ├── public/                 Static assets (images, icons)
│   └── package.json            Dependencies and scripts
│
├── client-package/             Onboarding guide (you are reading it)
│   ├── START-HERE.md           First file to open
│   ├── FULL-SYSTEM-GUIDE.md    This file
│   ├── SYSTEM-CHECK.md         Verification checklist
│   ├── DELIVERY-INSTRUCTIONS.md How to deliver to your clients
│   └── 01-setup/ through 04-verify/ (Step-by-step folders)
│
├── docs/                       Technical documentation
│   ├── README.md               Architecture and tech stack overview
│   ├── CLIENT_ACQUISITION_SYSTEM.md  Marketing playbook
│   └── SYSTEM_AUDIT_REPORT.md  System audit results
│
└── system-check/               System verification
    └── status.ts               Programmatic health check
```

---

## The Website

The `site/` folder contains a complete, premium agency website.

### Technology

| Technology | What It Does |
|-----------|-------------|
| **Next.js 16** | React framework with App Router — fast, SEO-friendly pages |
| **TypeScript** | Type-safe code that catches errors before they reach your users |
| **Tailwind CSS 4** | Utility-first styling for a clean, consistent design |
| **Motion** | Smooth, professional scroll animations |

### Pages

| Route | What It Is |
|-------|-----------|
| `/` | The main landing page — designed to convert visitors into clients |
| `/system-status` | A live dashboard showing every system capability and its status |

### Homepage Sections (in order)

| # | Section | What It Does |
|---|---------|-------------|
| 1 | **Hero** | Bold headline, tagline, and call-to-action buttons. First impression. |
| 2 | **Social Proof** | Establishes credibility and trust signals |
| 3 | **Three Steps** | Shows the process: how the system works for the client |
| 4 | **Value Bridge** | Connects features to real outcomes |
| 5 | **Entry Offer** | $250 tier — the accessible starting point |
| 6 | **Premium Offer** | $1,500 tier — the full done-for-you package |
| 7 | **Book a Call** | Strategy call booking section |
| 8 | **FAQ** | Answers to the 7 most common questions |
| 9 | **Final CTA** | Closing conversion section with urgency |
| 10 | **Mobile Sticky Bar** | Persistent CTA on mobile (appears after scrolling) |

### Components

Every section is a self-contained component inside `src/components/`. Each one can be customized independently without breaking the rest of the site. There are 11 components total:

`Navbar`, `Hero`, `SocialProof`, `ThreeSteps`, `ValueBridge`, `EntryOffer`, `PremiumOffer`, `BookCall`, `FAQ`, `FinalCTA`, `MobileStickyBar`, `SystemStatus`

---

## The Client Package

The `client-package/` folder is the onboarding experience — the first thing a client reads after receiving the system.

| File | What It Does |
|------|-------------|
| **START-HERE.md** | Entry point. Welcome, required tools, how to run, how to verify. |
| **FULL-SYSTEM-GUIDE.md** | This file. Deep explanation of every part. |
| **SYSTEM-CHECK.md** | Full checklist to confirm everything works. |
| **DELIVERY-INSTRUCTIONS.md** | How to package and deliver the system to your own clients. |
| **01-setup/** | Step 1: Prerequisites and installation |
| **02-install/** | Step 2: Installing dependencies |
| **03-run/** | Step 3: Running the system |
| **04-verify/** | Step 4: Verifying everything works |

All files are written in Markdown — they render cleanly in VS Code, GitHub, and any Markdown viewer.

---

## How the One-Person Agency Model Works

This system is designed for a single operator — you — to run a full agency without employees, freelancers, or expensive tools.

### The Model

```
You + AI Agency System = Full Agency
```

### What You Do vs. What the System Does

| Your Task | How the System Helps |
|-----------|---------------------|
| **Get clients** | The website is built to convert. Deploy it, drive traffic, close deals. |
| **Write code** | Claude Code generates code on demand. No hiring developers. |
| **Run marketing** | The AI marketing engine handles SEO, copy, social, email, and competitor research. |
| **Plan projects** | Structured AI workflows replace spreadsheets and guesswork. |
| **Deliver work** | Use the system to build and ship client projects faster than any traditional agency. |

### The Daily Workflow

1. **Deploy the website** — Put it live on Vercel (or any host). This is your storefront.
2. **Generate marketing** — Use the AI marketing tools to create content, audit SEO, and plan campaigns.
3. **Close clients** — The website does the selling. You handle the conversations.
4. **Deliver projects** — Use Claude Code and the system workflows to build and ship client work.
5. **Repeat** — Every project gets faster. Every workflow gets sharper. The system compounds.

### Why This Works

- **No payroll.** No overhead. No waiting on freelancers.
- **AI handles the heavy lifting.** You handle the relationships.
- **The system is pre-built.** You are not starting from scratch.
- **Everything is modular.** Swap, extend, or customize any part without breaking the rest.

---

## Available Scripts

Run these from the `site/` directory:

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start the development server (http://localhost:3000) |
| `npm run build` | Compile for production (catches all errors) |
| `npm start` | Serve the production build |
| `npm run lint` | Check code quality |

---

## Customization

### Changing Text and Content
Edit the component files in `site/src/components/`. Each section is its own file — change the text directly.

### Changing Colors and Design
Edit `site/src/app/globals.css`. The design tokens (colors, fonts, spacing) are defined as CSS variables at the top of the file.

### Changing Links and CTAs
Search for Stripe URLs or `href` attributes in the component files. All payment links point to Stripe checkout pages.

### Adding New Pages
Create a new folder inside `site/src/app/` with a `page.tsx` file. Next.js automatically creates a route for it.

---

*Next: Open `SYSTEM-CHECK.md` to verify everything is working.*
