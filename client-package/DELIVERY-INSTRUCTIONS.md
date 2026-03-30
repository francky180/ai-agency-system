# Delivery Instructions

How to package and deliver the AI Agency System to a client.

---

## What to Send to the Client

Send the entire `ai-agency-system` folder. This includes:

| Folder | What It Contains |
|--------|-----------------|
| `site/` | The complete agency website (source code, config, dependencies) |
| `client-package/` | Onboarding guides including START-HERE.md |
| `docs/` | Technical documentation |
| `system-check/` | System verification tools |

**Do not send partial folders.** The system is designed to work as a complete package.

---

## Which Folder to Zip

Zip the root project folder:

```
ai-agency-system/
```

### Before Zipping

Remove the `node_modules` folder to keep the file size small. The client will reinstall dependencies during setup.

```bash
cd ai-agency-system/site
rm -rf node_modules
rm -rf .next
cd ../..
```

Then zip the entire `ai-agency-system` folder.

### Recommended Zip Name

```
ai-agency-system-v1.zip
```

### Expected Zip Size

Without `node_modules` and `.next`, the zip should be under 1 MB.

---

## What the Client Opens First

Tell the client:

> Open the folder `client-package` and read the file `START-HERE.md`.

This is the entry point. It walks them through:

1. What they purchased
2. What tools to install
3. How to run the system locally
4. How to verify everything works

The reading order after that:

| Order | File | Purpose |
|-------|------|---------|
| 1 | `START-HERE.md` | Setup and first run |
| 2 | `FULL-SYSTEM-GUIDE.md` | Understand the full system |
| 3 | `SYSTEM-CHECK.md` | Verify everything works |
| 4 | `DELIVERY-INSTRUCTIONS.md` | (For you — not needed by end client) |

**Tip:** You can remove `DELIVERY-INSTRUCTIONS.md` from the client's copy if you prefer. It is meant for you, the agency operator, not the end client.

---

## Recommended Next Steps

After delivering the system to the client:

### For the Client

1. **Follow START-HERE.md** — Install tools, run the system, verify success
2. **Customize the website** — Update text, colors, and branding to match their business
3. **Deploy to production** — Push to Vercel, Netlify, or any hosting provider
4. **Start using the AI tools** — Run marketing campaigns, generate copy, audit SEO

### For You (the Agency Operator)

1. **Schedule a kickoff call** — Walk the client through the system live
2. **Offer a customization package** — Charge for branding, copy, and design tweaks
3. **Offer ongoing support** — Monthly retainer for updates, new features, and AI marketing runs
4. **Use this as a repeatable product** — Deliver the same system to multiple clients with minimal changes

---

## Delivery Checklist

Before sending to the client, confirm:

- [ ] `node_modules` removed from zip
- [ ] `.next` build folder removed from zip
- [ ] All 4 client-package files present
- [ ] `site/` folder complete with all components
- [ ] `docs/README.md` present
- [ ] `system-check/status.ts` present
- [ ] You have tested `npm install`, `npm run dev`, `npm run build` yourself
- [ ] System runs with zero errors

---

**Once all boxes are checked, the system is ready to deliver.**
