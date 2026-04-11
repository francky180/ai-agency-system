# SYSTEM BLUEPRINT

**ClientFlow — AI Agency System Architecture**

---

## System Overview

This is a self-contained client acquisition platform. It operates as a standalone project with its own website, video assets, client delivery materials, and documentation.

---

## Architecture

```
┌─────────────────────────────────────────────────┐
│                 AI AGENCY SYSTEM                 │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌───────────────┐  │
│  │  WEBSITE  │  │  VIDEO   │  │  CLIENT PKG   │  │
│  │ Next.js   │  │ Remotion │  │  Onboarding   │  │
│  │ 16 + R19  │  │ 4.x     │  │  Guides (v2)  │  │
│  └──────────┘  └──────────┘  └───────────────┘  │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌───────────────┐  │
│  │   DOCS   │  │  SYSTEM  │  │   DELIVERY    │  │
│  │ Technical │  │  CHECK   │  │   ZIP Export  │  │
│  │ + Funnel  │  │  Health  │  │   Ready       │  │
│  └──────────┘  └──────────┘  └───────────────┘  │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## Core Components

### 1. Website (`site/`)

Premium dark-themed agency landing page.

| Feature | Details |
|---------|---------|
| Framework | Next.js 16 (App Router) |
| Components | 15 React components |
| Pages | Homepage (/), System Status (/system-status) |
| Styling | Tailwind CSS 4 + Motion animations |
| Links | Centralized in `src/lib/links.ts` |
| Brand | "ClientFlow" — dark premium design, Geist fonts |

**Key components:** Hero, Navbar, ThreeSteps, WhatYouGet, Pricing, EntryOffer, PremiumOffer, ValueBridge, SocialProof, FAQ, Guarantee, BookCall, FinalCTA, MobileStickyBar, SystemStatus

### 2. Video Generation (`video/`)

Remotion 4 project with a 7-scene promotional video.

| Scene | Content |
|-------|---------|
| S1_Problem | Pain point identification |
| S2_OldWay | Traditional approach problems |
| S3_Solution | ClientFlow solution intro |
| S4_Process | How it works |
| S5_Pricing | Pricing structure |
| S6_Proof | Social proof |
| S7_CTA | Call to action |

**Shared theme:** `src/theme.ts` (consistent visual identity)
**Custom components:** AnimatedText, Badge, GoldGlow
**Output:** `video/out/video.mp4` and `video/output.mp4`

### 3. Client Package (`client-package-v2/`)

Structured onboarding guide for clients receiving the system:

```
01-setup/    → Environment setup instructions
02-install/  → Dependency installation guide
03-run/      → How to run the system
04-verify/   → Verification checklist
START-HERE.md        → Entry point
FULL-SYSTEM-GUIDE.md → Complete reference
SYSTEM-CHECK.md      → Health verification
DELIVERY-INSTRUCTIONS.md → Handoff protocol
```

### 4. Documentation (`docs/`)

| Document | Purpose |
|----------|---------|
| README.md | Architecture overview |
| CLIENT_ACQUISITION_SYSTEM.md | Acquisition strategy |
| FUNNEL_OPTIMIZATION_PLAN.md | Funnel CRO strategy |
| REMOTION_VIDEO_BLUEPRINT.md | Video generation guide |
| FULL_SYSTEM_AUDIT.md | System audit results |
| SYSTEM_REPORT_V2.md | System report v2 |
| SYSTEM_AUDIT_REPORT.md | Latest audit findings |

### 5. System Check (`system-check/`)

TypeScript health monitor (`status.ts`) that verifies:
- Website status
- Marketing engine
- Automation workflows
- Client package integrity
- Documentation completeness
- System Status UI

---

## Workflow

```
LEAD ARRIVES → Website (/) → Reads offer
    ↓
CONVERTS → Entry ($) or Premium ($$$)
    ↓
DELIVERED → Client receives system package
    ↓
ONBOARDED → client-package-v2/ guides them through setup
    ↓
RUNNING → Client has full acquisition system live
```

---

## Global vs Project-Local

| Component | Scope | Notes |
|-----------|-------|-------|
| Website code | Project-local | Self-contained in site/ |
| Video project | Project-local | Self-contained in video/ |
| Client packages | Project-local | Included in delivery |
| Claude marketing skills | Global (~/.claude/skills/) | 15 skills available system-wide |
| Claude marketing agents | Global (~/.claude/agents/) | 5 subagents for audits |
| oh-my-claudecode | Global (~/ai-tools/) | 20 dev agents |
| ui-ux-pro-max-skill | Global (~/ai-tools/) | Design intelligence |

The project does not depend on global tools to function. Global tools enhance development but are not required for the client package.

---

## Pricing Structure (from website)

| Tier | Type | Stripe Link |
|------|------|-------------|
| Entry | Starter package | Configured in `src/lib/links.ts` |
| Premium | Full system | Configured in `src/lib/links.ts` |
| Call | Strategy session | Anchor link (#book-call) |

---

## Deployment

| Field | Value |
|-------|-------|
| Build command | `npm run build` |
| Output | Static export (3 pages) |
| Platform | Vercel-ready (.vercel/ config present) |
| Repository | github.com/francky180/ai-agency-system |
