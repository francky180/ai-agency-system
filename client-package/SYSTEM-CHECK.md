# System Check

Use this checklist to verify that every part of the AI Agency System is working correctly.

---

## Prerequisites Check

Open a terminal and run each command. Confirm you get a version number back.

| Command | Expected | Pass? |
|---------|----------|-------|
| `node --version` | v18.0.0 or higher | [ ] |
| `npm --version` | v9.0.0 or higher | [ ] |
| `git --version` | v2.0.0 or higher | [ ] |
| `claude --version` | Any version | [ ] |

---

## File Check

Confirm these files and folders exist inside `ai-agency-system/`:

| Path | Type | Pass? |
|------|------|-------|
| `site/` | Folder | [ ] |
| `site/package.json` | File | [ ] |
| `site/src/app/page.tsx` | File | [ ] |
| `site/src/app/layout.tsx` | File | [ ] |
| `site/src/app/globals.css` | File | [ ] |
| `site/src/app/system-status/page.tsx` | File | [ ] |
| `site/src/components/Hero.tsx` | File | [ ] |
| `site/src/components/SystemStatus.tsx` | File | [ ] |
| `client-package/START-HERE.md` | File | [ ] |
| `client-package/FULL-SYSTEM-GUIDE.md` | File | [ ] |
| `client-package/SYSTEM-CHECK.md` | File | [ ] |
| `client-package/DELIVERY-INSTRUCTIONS.md` | File | [ ] |
| `docs/README.md` | File | [ ] |
| `system-check/status.ts` | File | [ ] |

---

## Dev Server Check

Start the development server:

```bash
cd site
npm run dev
```

| Check | Expected | Pass? |
|-------|----------|-------|
| Server starts | "Ready in Xms" message appears | [ ] |
| No errors in terminal | Zero red error messages | [ ] |

---

## Localhost Check

Open your browser and visit these URLs while the dev server is running:

| URL | What You Should See | Pass? |
|-----|-------------------|-------|
| http://localhost:3000 | Full agency homepage with 8 sections | [ ] |
| http://localhost:3000/system-status | System status dashboard with capability table | [ ] |

### Homepage Section Check

Scroll through the homepage and confirm each section loads:

| # | Section | Visible? |
|---|---------|----------|
| 1 | Hero (headline + CTA buttons) | [ ] |
| 2 | What This System Is (3 cards) | [ ] |
| 3 | What You Get (6 feature cards) | [ ] |
| 4 | How It Works (4 steps) | [ ] |
| 5 | The Difference (comparison table) | [ ] |
| 6 | Built for Results (3 stat cards) | [ ] |
| 7 | Primary CTA | [ ] |
| 8 | Final CTA | [ ] |

### System Status Page Check

| Check | Expected | Pass? |
|-------|----------|-------|
| Green "All systems operational" badge | Visible with pulse animation | [ ] |
| "Your system is fully ready" headline | Visible | [ ] |
| Capability table | 6 rows, all showing "Active" | [ ] |

---

## Error-Free Check

Stop the dev server (Ctrl+C) and run these commands:

### Lint

```bash
npm run lint
```

| Check | Expected | Pass? |
|-------|----------|-------|
| Lint result | Zero errors, zero warnings | [ ] |

### Production Build

```bash
npm run build
```

| Check | Expected | Pass? |
|-------|----------|-------|
| Build result | "Compiled successfully" | [ ] |
| Errors | Zero | [ ] |
| Routes generated | `/` and `/system-status` listed | [ ] |

---

## Final Verdict

If every checkbox above is checked:

**Your system is fully operational. Zero errors. Ready to deploy.**

If any check failed, refer to `START-HERE.md` for setup instructions or `FULL-SYSTEM-GUIDE.md` for troubleshooting context.

---

*Next: Read `DELIVERY-INSTRUCTIONS.md` to learn how to package and send this system to a client.*
