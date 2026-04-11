# Step 4 — Verify the System

Run the final checks to confirm your system is production-ready.

---

## Lint Check

Stop the dev server (`Ctrl+C`) if it is still running, then:

```bash
npm run lint
```

**What this does:** Scans every file for code quality issues, style violations, and potential bugs.

**Expected result:** No output (clean pass), or a summary showing zero errors and zero warnings.

| Check | Expected | Pass? |
|-------|----------|:-----:|
| Lint result | Zero errors, zero warnings | [ ] |

---

## Production Build

```bash
npm run build
```

**What this does:** Compiles the entire website exactly as it would be for a live deployment. This is the strictest test — if build passes, the code is production-ready.

**Expected result:**

```
✓ Compiled successfully
Route (app)
┌ ○ /
├ ○ /_not-found
└ ○ /system-status
```

| Check | Expected | Pass? |
|-------|----------|:-----:|
| Build succeeds | `Compiled successfully` | [ ] |
| Zero errors | No red messages | [ ] |
| Routes listed | `/` and `/system-status` in output | [ ] |

---

## Full Verification Checklist

Go through this final checklist to confirm everything:

### Environment
- [ ] Node.js v18+ installed
- [ ] npm v9+ installed
- [ ] Git installed
- [ ] Claude Code installed

### Files
- [ ] `site/` folder exists with all source files
- [ ] `client-package/` folder exists with all guides
- [ ] `docs/` folder exists with README.md
- [ ] `system-check/status.ts` exists

### Functionality
- [ ] `npm install` completes with zero errors
- [ ] `npm run dev` starts the server
- [ ] Homepage loads at http://localhost:3000
- [ ] All 10 homepage sections are visible
- [ ] Scroll animations work
- [ ] System status page loads at http://localhost:3000/system-status
- [ ] All capabilities show "Active"
- [ ] Mobile layout works (resize browser or use DevTools)
- [ ] `npm run lint` passes with zero errors
- [ ] `npm run build` compiles successfully

---

## Final Verdict

| All boxes checked | Your system is fully operational. Zero errors. Ready to deploy. |
|-------------------|---------------------------------------------------------------|
| 1-2 unchecked | Minor issue. Review the specific failing step and fix it. |
| 3+ unchecked | Re-read START-HERE.md and repeat the setup from Step 1. |

---

## Quick Command Reference

| Command | What It Does |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Test production compilation |
| `npm run lint` | Check code quality |
| `npm start` | Serve the production build |
| `Ctrl+C` | Stop the running server |

---

## Your System Is Ready

If all checks pass, you have a verified, production-ready AI agency system.

**Next steps:**
1. Deploy to Vercel (or your preferred host)
2. Connect your domain
3. Start driving traffic
4. Close your first client

---

*For deployment and reselling instructions, see `DELIVERY-INSTRUCTIONS.md`.*
