# ClientFlow — Funnel & System Optimization Plan
**Date:** 2026-03-31

---

## Current Funnel Architecture

```
Traffic Sources
    │
    ├── Cold outreach (DMs, emails)
    ├── Social content
    ├── SEO / organic search
    └── Referrals
    │
    ▼
Landing Page (/)
    │
    ├── Hero → Primary CTA ($250) or Secondary ($1,500)
    ├── Social Proof → Build trust
    ├── How It Works → Reduce uncertainty
    ├── Value Bridge → Justify price
    ├── Core Offer ($250) → Entry conversion
    ├── Premium Offer ($1,500) → Upgrade conversion
    ├── Book Call (Free) → Warm lead capture
    ├── FAQ → Handle objections
    └── Final CTA → Last conversion attempt
    │
    ▼
Stripe Checkout
    │
    ├── $250 → Core System delivery
    └── $1,500 → Done-For-You onboarding
    │
    ▼
Post-Purchase
    │
    ├── Instant access (zip download / email)
    ├── Documentation walkthrough
    └── Support channel access
```

---

## Funnel Flow: Validated

### Step 1: Entry ($250)
- **Trigger:** Visitor lands from outreach / organic
- **Action:** Reads landing page, clicks CTA
- **Conversion point:** Stripe checkout
- **Delivery:** Instant access to system package
- **Status:** WORKING

### Step 2: Premium Upgrade ($1,500)
- **Trigger:** Visitor wants hands-on support OR returns after Core purchase
- **Action:** Clicks premium CTA or books call
- **Conversion point:** Stripe checkout or call → invoice
- **Delivery:** Custom onboarding + deployment assistance
- **Status:** WORKING (needs clearer upgrade path for existing Core buyers)

### Step 3: Strategy Call (Free)
- **Trigger:** Visitor unsure which plan fits
- **Action:** Emails to book call
- **Conversion point:** Call → $250 or $1,500 sale
- **Delivery:** 15-min strategy session
- **Status:** WORKING (recommend Calendly upgrade)

---

## Friction Points Identified

### 1. No Post-Purchase Upsell Path
**Problem:** After $250 purchase, there's no automated way to present the $1,500 upgrade.
**Fix:** Add a post-purchase email sequence:
- Day 0: Welcome + access instructions
- Day 3: "How's setup going?" + offer help
- Day 7: "Need custom branding?" → Premium upsell
- Day 14: "Book a free strategy call" → Close on Premium

### 2. Mailto Instead of Scheduling Tool
**Problem:** "Book a call" opens an email compose window — high friction.
**Fix:** Replace with Calendly or Cal.com embed. Reduces steps from 5 (compose → send → wait → schedule → confirm) to 2 (pick time → confirm).

### 3. No Lead Capture for Non-Buyers
**Problem:** Visitors who don't buy leave with no way to follow up.
**Fix Options:**
- Exit-intent popup with email capture (lead magnet: "The AI Agency Blueprint" PDF)
- Free mini-tool or audit in exchange for email
- Newsletter signup in footer

### 4. No Clear Core → Premium Upgrade Path
**Problem:** Site presents both offers but doesn't guide the decision.
**Fix:** Add comparison table between Core and Premium in the pricing section, or add a "Not sure?" toggle that shows feature comparison.

---

## Automation Architecture

### Current State
- Website: Live, static (no backend)
- Payment: Stripe checkout links (no webhooks)
- Delivery: Manual (zip file or email)
- Follow-up: Manual (outreach playbook)
- CRM: None (documented in acquisition system doc)

### Recommended Automation Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| Scheduling | Cal.com or Calendly | Replace mailto for strategy calls |
| Email | ConvertKit or Resend | Post-purchase sequences, lead nurture |
| CRM | Notion or Airtable | Track leads, deals, follow-ups |
| Payments | Stripe webhooks | Trigger delivery + email on purchase |
| Analytics | Plausible or PostHog | Track funnel performance |
| Chat | Crisp or Intercom | Live support for premium clients |

### Priority Implementation Order
1. **Calendly** — immediate win, removes biggest friction point
2. **Email sequences** — capture + nurture non-buyers, upsell buyers
3. **Analytics** — track what's working before optimizing further
4. **CRM** — organize pipeline as volume grows
5. **Stripe webhooks** — automate delivery (only needed at scale)

---

## Revenue Projections

### Conservative (Month 1-3)
| Metric | Target |
|--------|--------|
| Weekly outreach | 50 DMs + 25 emails |
| Website visitors | 100-200/week |
| $250 conversions | 2/week |
| $1,500 conversions | 1/month |
| Monthly revenue | $3,500-4,000 |

### Growth (Month 4-6)
| Metric | Target |
|--------|--------|
| Weekly outreach | 100 DMs + 50 emails |
| Website visitors | 300-500/week |
| $250 conversions | 4/week |
| $1,500 conversions | 2/month |
| Monthly revenue | $7,000-8,000 |

### Scale (Month 7+)
| Metric | Target |
|--------|--------|
| Organic + referral traffic | 500+/week |
| $250 conversions | 6-8/week |
| $1,500 conversions | 3-4/month |
| Monthly revenue | $12,000-15,000 |

---

*Generated as part of the Full System Execution — 2026-03-31*
