# ClientFlow — Remotion Video Blueprint
**Date:** 2026-03-31
**Format:** 90-second premium explainer video
**Style:** Dark cinematic, gold accents, minimal motion design
**Resolution:** 1920x1080 (16:9)
**FPS:** 30

---

## Creative Direction

### Visual Style
- **Background:** Near-black (#09090b) matching website
- **Text:** White (#fafafa) with gold (#c9a84c) accents
- **Typography:** Geist Sans (matching site) — bold headlines, medium body
- **Motion:** Smooth easing, no bounce, no overshoot — premium feel
- **Transitions:** Fade + subtle Y-translate (consistent with site animations)
- **Grid:** Subtle background grid pattern (matches hero section)

### Audio Direction
- **Music:** Minimal electronic, low tempo (70-80 BPM), building tension
- **Style:** Think: corporate fintech ad meets tech startup pitch
- **Voiceover:** Confident, measured, authoritative male or female voice

---

## Scene Breakdown

### Scene 1 — The Problem (0:00–0:15)
**Duration:** 15 seconds

**Visuals:**
- Fade in from black
- Text appears line by line with 0.3s stagger:
  ```
  "You're great at what you do."
  "But finding clients?"
  "That's a full-time job you didn't sign up for."
  ```
- Each line fades in with subtle upward motion (y: 20 → 0)
- Background: subtle gold glow pulse behind text
- Final line in gold accent color

**Voiceover:**
> "You're a freelancer, consultant, or agency owner. You're great at what you do. But finding clients consistently? That's a full-time job you never signed up for."

**Transition:** Fade to black (0.5s)

---

### Scene 2 — The Old Way (0:15–0:28)
**Duration:** 13 seconds

**Visuals:**
- Cost items appear as cards, stacking vertically:
  ```
  Agency website         $3,000–5,000
  Marketing strategy     $2,000+/mo
  SEO & content          $1,500+/mo
  Automation setup       $3,000–5,000
  ```
- Each card slides in from right with slight delay
- Red-tinted strikethrough line animates across each price
- Bottom total appears: "$11,000–$20,000+" with red tint
- Cards compress/shrink as total appears

**Voiceover:**
> "Hiring an agency? That's $11,000 to $20,000 before you even know if it works. Freelancers? Months of coordination. DIY? Months of learning."

**Transition:** Cards dissolve into particles → reform as gold logo

---

### Scene 3 — The Solution (0:28–0:45)
**Duration:** 17 seconds

**Visuals:**
- ClientFlow logo appears center screen (gold on black)
- Logo scales up slightly with gold glow bloom
- Text below: "Your complete client acquisition system"
- Three icon cards animate in from bottom (staggered):
  ```
  [Website icon]     "Production-Ready Website"
  [Engine icon]      "AI Marketing Engine"
  [Automation icon]  "Automation Workflows"
  ```
- Each card has subtle border glow animation
- Additional items fade in as a list below:
  - "Outreach playbook"
  - "Strategy templates"
  - "Full documentation"

**Voiceover:**
> "ClientFlow is a complete, done-for-you client acquisition system. Website. Marketing engine. Automation. Outreach playbook. Strategy. All deployed and ready to generate leads."

**Transition:** Zoom into website mockup

---

### Scene 4 — The Process (0:45–1:00)
**Duration:** 15 seconds

**Visuals:**
- Three numbered steps appear horizontally (matching site's ThreeSteps):
  ```
  01                    02                    03
  "We Deploy"           "Leads Come In"       "You Close"
  Day 1                 7–14 days             Ongoing
  ```
- Connecting line animates between steps (gold gradient)
- Each step card illuminates sequentially (border glow)
- Step 1 glows → Step 2 glows → Step 3 glows
- Timeline bar animates below showing progression

**Voiceover:**
> "Step one: we deploy your system in 24 hours. Step two: your marketing engine starts generating leads within 7 to 14 days. Step three: you focus on what you do best — closing deals and scaling."

**Transition:** Steps compress into pricing card

---

### Scene 5 — The Offer (1:00–1:15)
**Duration:** 15 seconds

**Visuals:**
- Two pricing cards appear side by side:
  ```
  CORE                  DONE-FOR-YOU
  $250                  $1,500
  "Launch it yourself"  "We launch it for you"
  ```
- Gold "Most Popular" badge animates onto $1,500 card
- Feature checkmarks animate in sequence on each card
- Price comparison bar: "$11,000+ value → From $250"
- Bar fills with gold gradient animation

**Voiceover:**
> "Two options. $250 for the complete Core System — everything you need to launch yourself. Or $1,500 for the full Done-For-You experience — custom branding, deployed campaigns, and hands-on launch support. One payment. Lifetime access."

**Transition:** Cards fade, text remains

---

### Scene 6 — Social Proof (1:15–1:25)
**Duration:** 10 seconds

**Visuals:**
- Testimonial cards fade in sequentially:
  ```
  "First lead in 10 days"  — Sarah M., Freelance Designer
  "Saved $2k/mo"           — James K., Marketing Consultant
  "$4.5k closed"           — Ana R., Agency Founder
  ```
- Each card has subtle gold left-border accent
- Metric badges glow gold
- Background: subtle grid pattern

**Voiceover:**
> "Sarah booked her first call in 10 days. James replaced $2,000 a month in ad spend. Ana closed a $4,500 deal in her first week."

**Transition:** Testimonials fade to center

---

### Scene 7 — Final CTA (1:25–1:30)
**Duration:** 5 seconds

**Visuals:**
- Large text fades in:
  ```
  "Stop chasing clients."
  "Start closing them."
  ```
- Second line in gold
- CTA button appears below: "Launch My System →"
- URL fades in below button
- Gold glow bloom intensifies behind text
- Subtle particle effect (gold dots floating upward)

**Voiceover:**
> "Stop chasing clients. Start closing them. Launch your system today."

**Music:** Final note sustains and fades

---

## Technical Specifications

### Remotion Setup
```
remotion-video/
├── src/
│   ├── Root.tsx              # Composition registry
│   ├── Video.tsx             # Main composition (900 frames @ 30fps)
│   ├── scenes/
│   │   ├── Problem.tsx       # Scene 1 (0-450 frames)
│   │   ├── OldWay.tsx        # Scene 2 (450-840 frames)
│   │   ├── Solution.tsx      # Scene 3 (840-1350 frames)
│   │   ├── Process.tsx       # Scene 4 (1350-1800 frames)
│   │   ├── Offer.tsx         # Scene 5 (1800-2250 frames)
│   │   ├── SocialProof.tsx   # Scene 6 (2250-2550 frames)
│   │   └── FinalCTA.tsx      # Scene 7 (2550-2700 frames)
│   ├── components/
│   │   ├── AnimatedText.tsx   # Staggered text reveal
│   │   ├── PricingCard.tsx    # Pricing card with animations
│   │   ├── StepCard.tsx       # Process step card
│   │   ├── TestimonialCard.tsx
│   │   └── GoldGlow.tsx       # Reusable gold glow effect
│   └── styles/
│       └── theme.ts           # Color tokens matching website
├── package.json
└── remotion.config.ts
```

### Frame Timing (30 FPS)
| Scene | Start Frame | End Frame | Duration |
|-------|-------------|-----------|----------|
| Problem | 0 | 450 | 15s |
| Old Way | 450 | 840 | 13s |
| Solution | 840 | 1350 | 17s |
| Process | 1350 | 1800 | 15s |
| Offer | 1800 | 2250 | 15s |
| Social Proof | 2250 | 2550 | 10s |
| Final CTA | 2550 | 2700 | 5s |

### Animation Easing
- Primary: `[0.22, 1, 0.36, 1]` (matches website motion config)
- Spring: `{ damping: 20, stiffness: 100 }` for card entrances
- Fade: `interpolate(frame, [start, start+15], [0, 1])`

### Color Tokens
```typescript
export const theme = {
  background: '#09090b',
  foreground: '#fafafa',
  accent: '#c9a84c',
  accentLight: '#d4b85e',
  muted: '#a1a1aa',
  mutedDim: '#71717a',
  card: '#111113',
  border: '#1f1f23',
};
```

---

## Voiceover Script (Full)

> You're a freelancer, consultant, or agency owner. You're great at what you do. But finding clients consistently? That's a full-time job you never signed up for.
>
> Hiring an agency? That's eleven thousand to twenty thousand dollars before you even know if it works. Freelancers? Months of coordination. DIY? Months of learning.
>
> ClientFlow is a complete, done-for-you client acquisition system. Website. Marketing engine. Automation. Outreach playbook. Strategy. All deployed and ready to generate leads.
>
> Step one: we deploy your system in twenty-four hours. Step two: your marketing engine starts generating leads within seven to fourteen days. Step three: you focus on what you do best — closing deals and scaling.
>
> Two options. Two-fifty for the complete Core System — everything you need to launch yourself. Or fifteen hundred for the full Done-For-You experience — custom branding, deployed campaigns, and hands-on launch support. One payment. Lifetime access.
>
> Sarah booked her first call in ten days. James replaced two thousand a month in ad spend. Ana closed a forty-five hundred dollar deal in her first week.
>
> Stop chasing clients. Start closing them. Launch your system today.

**Word count:** ~170 words
**Estimated read time:** 87 seconds at conversational pace

---

## Distribution Strategy

| Platform | Format | Specs |
|----------|--------|-------|
| Website hero | MP4/WebM | 1920x1080, autoplay muted, loop last 5s |
| Twitter/X | MP4 | 1920x1080, <2:20, subtitles burned in |
| LinkedIn | MP4 | 1920x1080, subtitles, professional tone |
| Instagram Reels | MP4 | 1080x1920 (vertical crop), <90s |
| YouTube | MP4 | 1920x1080, full version + 30s cut |
| Cold outreach | Loom-style | Screen recording of video as walkthrough |

---

## v2 Addendum — New Sections

### Updated Scene 3 (Solution) — Add "What's Inside" Grid
After the ClientFlow logo + tagline, show the 6 deliverable cards in a 2x3 grid:
- Each card animates in sequentially (0.15s delay)
- Cards show: icon (gold), title (white), one-line description (muted)
- Grid should feel like the actual WhatYouGet section of the site
- Add frame count: extend Scene 3 from 17s to 20s (+90 frames)

### Updated Scene 5 (Offer) — Side-by-Side Comparison
Replace the two separate pricing cards with the new unified layout:
- Both cards visible simultaneously (left: Core, right: Done-For-You)
- Checkmarks animate in sequence down both columns
- Premium column has gold border glow
- "Most Popular" badge scales in with spring animation on the $1,500 card
- Core column shows dashes where Premium shows checks (visual contrast)

### New Scene 5b — Guarantee (after pricing, before social proof)
**Duration:** 5 seconds (150 frames)
**Visuals:**
- Shield icon animates in (scale from 0 to 1 with spring)
- "Zero-risk investment" text fades in below
- Three trust points appear: "Full source code" + "Instant access" + "No recurring charges"
**Voiceover:** "And you own everything. Full source code, instant access, no recurring charges. Zero risk."

### Updated Total Duration
- Original: 90 seconds (2700 frames)
- Updated: 98 seconds (2940 frames)
- Still under 2-minute mark for all social platforms

---

*Blueprint updated as part of Full System Execution Pass 2 — 2026-03-31*
