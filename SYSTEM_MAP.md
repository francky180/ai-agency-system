# SYSTEM MAP

**Complete folder and file reference.**

---

## Top-Level Structure

```
ai-agency-system/
│
├── site/                        Next.js 16 website
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx       Root layout (metadata, fonts, OG tags)
│   │   │   ├── page.tsx         Homepage (main landing page)
│   │   │   ├── globals.css      Global styles
│   │   │   ├── favicon.ico      Site favicon
│   │   │   └── system-status/
│   │   │       └── page.tsx     System health dashboard
│   │   ├── components/
│   │   │   ├── Hero.tsx         Main hero section
│   │   │   ├── Navbar.tsx       Navigation bar
│   │   │   ├── ThreeSteps.tsx   3-step process section
│   │   │   ├── WhatYouGet.tsx   Features/deliverables
│   │   │   ├── Pricing.tsx      Pricing table
│   │   │   ├── EntryOffer.tsx   Entry tier CTA
│   │   │   ├── PremiumOffer.tsx Premium tier CTA
│   │   │   ├── ValueBridge.tsx  Value proposition bridge
│   │   │   ├── SocialProof.tsx  Testimonials/proof
│   │   │   ├── FAQ.tsx          FAQ accordion
│   │   │   ├── Guarantee.tsx    Risk reversal section
│   │   │   ├── BookCall.tsx     Booking CTA section
│   │   │   ├── FinalCTA.tsx     Final conversion section
│   │   │   ├── MobileStickyBar.tsx  Mobile sticky CTA
│   │   │   └── SystemStatus.tsx System status component
│   │   └── lib/
│   │       └── links.ts         Centralized link config (Stripe, email)
│   ├── public/                  Static assets (empty — ready for OG images)
│   ├── package.json             Dependencies and scripts
│   ├── next.config.ts           Next.js configuration
│   ├── tsconfig.json            TypeScript configuration
│   ├── eslint.config.mjs        Linting rules
│   ├── postcss.config.mjs       PostCSS + Tailwind
│   ├── CLAUDE.md                Claude Code instructions
│   └── AGENTS.md                Next.js version warning
│
├── video/                       Remotion 4 video project
│   ├── src/
│   │   ├── Root.tsx             Composition registry
│   │   ├── Video.tsx            Main video component
│   │   ├── index.ts             Entry point
│   │   ├── theme.ts             Visual theme constants
│   │   ├── components/          Reusable video components
│   │   │   ├── AnimatedText.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── GoldGlow.tsx
│   │   └── scenes/              7-scene video sequence
│   │       ├── S1_Problem.tsx
│   │       ├── S2_OldWay.tsx
│   │       ├── S3_Solution.tsx
│   │       ├── S4_Process.tsx
│   │       ├── S5_Pricing.tsx
│   │       ├── S6_Proof.tsx
│   │       └── S7_CTA.tsx
│   ├── out/video.mp4            Rendered video output
│   ├── output.mp4               Alternative render output
│   ├── package.json             Remotion dependencies
│   └── tsconfig.json            TypeScript config
│
├── client-package-v2/           Client onboarding (RECOMMENDED)
│   ├── START-HERE.md            Entry point for clients
│   ├── FULL-SYSTEM-GUIDE.md     Complete reference guide
│   ├── SYSTEM-CHECK.md          Verification checklist
│   ├── DELIVERY-INSTRUCTIONS.md Handoff protocol
│   ├── 01-setup/README.md       Environment setup
│   ├── 02-install/README.md     Installation steps
│   ├── 03-run/README.md         Running the system
│   └── 04-verify/README.md      Verification steps
│
├── client-package/              Client onboarding (v1 — legacy)
│   └── (same structure as v2)
│
├── docs/                        Technical documentation
│   ├── README.md                Architecture overview
│   ├── CLIENT_ACQUISITION_SYSTEM.md
│   ├── FUNNEL_OPTIMIZATION_PLAN.md
│   ├── REMOTION_VIDEO_BLUEPRINT.md
│   ├── FULL_SYSTEM_AUDIT.md
│   ├── SYSTEM_AUDIT_REPORT.md
│   └── SYSTEM_REPORT_V2.md
│
├── system-check/                Health monitoring
│   └── status.ts                System status function
│
├── delivery/                    Packaged deliverables
│   ├── ai-agency-system-v1.zip  Ready-to-send package
│   ├── DELIVERY_SUMMARY.md      What's included
│   └── SEND_ME_FIRST.txt        Entry point for recipient
│
├── README.md                    Project overview (START HERE)
├── SYSTEM_BLUEPRINT.md          Full architecture reference
├── INSTALL_GUIDE.md             Setup from zero guide
├── SYSTEM_MAP.md                This file
├── SEND_ME_FIRST.txt            Quick entry point
├── control-commands.md          Dev server port commands
└── .gitignore                   Git exclusions
```

---

## Most Important Files

| Priority | File | Purpose |
|----------|------|---------|
| 1 | README.md | Start here — overview and quick start |
| 2 | SYSTEM_BLUEPRINT.md | Full architecture understanding |
| 3 | INSTALL_GUIDE.md | Setup on any machine |
| 4 | site/src/lib/links.ts | Configure Stripe + email links |
| 5 | site/src/app/layout.tsx | Site metadata, SEO, fonts |
| 6 | site/src/app/page.tsx | Homepage entry point |
| 7 | video/src/Video.tsx | Main video composition |
| 8 | client-package-v2/START-HERE.md | Client onboarding entry |
