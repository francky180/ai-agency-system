# System Check

Use this checklist to verify that every part of the AI Agency System is working correctly. Work through each section in order.

---

## 1. Prerequisites Check

Open a terminal and run each command. You should get a version number back.

| Command | Minimum Version | Your Result | Pass? |
|---------|----------------|-------------|:-----:|
| `node --version` | v18.0.0+ | | [ ] |
| `npm --version` | v9.0.0+ | | [ ] |
| `git --version` | v2.0.0+ | | [ ] |
| `claude --version` | Any | | [ ] |

**If any command fails:** Install the missing tool (see START-HERE.md for download links), restart your terminal, and try again.

---

## 2. File Structure Check

Confirm these files and folders exist inside `ai-agency-system/`:

| Path | What It Is | Pass? |
|------|-----------|:-----:|
| `site/` | Website application | [ ] |
| `site/package.json` | Dependencies list | [ ] |
| `site/src/app/page.tsx` | Homepage | [ ] |
| `site/src/app/layout.tsx` | Root layout | [ ] |
| `site/src/app/globals.css` | Global styles | [ ] |
| `site/src/app/system-status/page.tsx` | Status dashboard | [ ] |
| `site/src/components/Hero.tsx` | Hero component | [ ] |
| `site/src/components/Navbar.tsx` | Navigation bar | [ ] |
| `site/src/components/SystemStatus.tsx` | Status component | [ ] |
| `client-package/START-HERE.md` | Entry guide | [ ] |
| `client-package/FULL-SYSTEM-GUIDE.md` | Full guide | [ ] |
| `client-package/SYSTEM-CHECK.md` | This file | [ ] |
| `docs/README.md` | Tech docs | [ ] |
| `system-check/status.ts` | Health check | [ ] |

**Expected result:** All files present. If any are missing, your delivery may be incomplete — re-download or contact support.

---

## 3. Dependency Installation Check

```bash
cd site
npm install
```

| Check | Expected Result | Pass? |
|-------|----------------|:-----:|
| Install completes | `added XXX packages` message | [ ] |
| No critical errors | No red error text | [ ] |
| Vulnerabilities | `found 0 vulnerabilities` (or only informational warnings) | [ ] |

**If install fails:** Make sure you are inside the `site/` folder. Run `pwd` to check your current directory.

---

## 4. Dev Server Check

```bash
npm run dev
```

| Check | Expected Result | Pass? |
|-------|----------------|:-----:|
| Server starts | `Ready in Xms` or `Local: http://localhost:3000` | [ ] |
| No red errors | Terminal shows no error messages | [ ] |

**If server fails to start:** Check that port 3000 is not in use by another application. You can try a different port: `npm run dev -- -p 3001`

---

## 5. Browser Check

Open your browser and visit these URLs while the dev server is running:

### Homepage — http://localhost:3000

Scroll through the full page and confirm each section loads:

| # | Section | What to Look For | Visible? |
|---|---------|-----------------|:--------:|
| 1 | Navbar | Logo + nav links + CTA button at top | [ ] |
| 2 | Hero | Large headline + 3 CTA buttons | [ ] |
| 3 | Social Proof | Credibility indicators | [ ] |
| 4 | Three Steps | Process with "How It Works" heading | [ ] |
| 5 | Value Bridge | Feature/benefit cards | [ ] |
| 6 | Entry Offer ($250) | Pricing card with CTA | [ ] |
| 7 | Premium Offer ($1,500) | Pricing card with CTA | [ ] |
| 8 | Book a Call | Strategy call section | [ ] |
| 9 | FAQ | 7 expandable questions | [ ] |
| 10 | Final CTA | Closing section with button | [ ] |

**Expected result:** All 10 sections visible. Scroll animations trigger as you move down the page.

### System Status — http://localhost:3000/system-status

| Check | Expected Result | Pass? |
|-------|----------------|:-----:|
| Page loads | Status dashboard appears | [ ] |
| Capability table | 6 rows showing capabilities | [ ] |
| All statuses | Every row shows "Active" | [ ] |

---

## 6. Code Quality Check

Stop the dev server (`Ctrl+C` in terminal), then run:

### Lint

```bash
npm run lint
```

| Check | Expected Result | Pass? |
|-------|----------------|:-----:|
| Lint passes | No errors, no warnings | [ ] |

**If lint fails:** Read the error messages carefully. They will tell you which file and line has the issue.

### Production Build

```bash
npm run build
```

| Check | Expected Result | Pass? |
|-------|----------------|:-----:|
| Build succeeds | `Compiled successfully` | [ ] |
| Zero errors | No red error messages | [ ] |
| Routes listed | `/` and `/system-status` shown in output | [ ] |

**If build fails:** The error message will point to the exact file and line. Fix the issue, then run `npm run build` again.

---

## 7. Final Verdict

Count your checkboxes above.

| Result | Meaning |
|--------|---------|
| **All boxes checked** | Your system is fully operational. Zero errors. Ready to deploy. |
| **1-2 boxes unchecked** | Minor issues — review the specific section and fix. |
| **Multiple boxes unchecked** | Re-read START-HERE.md and follow the setup steps again from the beginning. |

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Test production build |
| `npm run lint` | Check code quality |
| `Ctrl+C` | Stop dev server |

---

*Next: Read `DELIVERY-INSTRUCTIONS.md` to learn how to package and send this system to your own clients.*
