# Step 3 — Run the System

Start the development server and see the website in your browser.

---

## Start the Server

Make sure you are inside the `site/` folder, then run:

```bash
cd site
npm run dev
```

**What this does:** Launches a local development server that compiles and serves the website on your machine.

**Expected result:** You see output like:

```
  ▲ Next.js 16.2.1 (Turbopack)
  - Local:   http://localhost:3000
  Ready in Xms
```

The server is now running. **Keep this terminal open** — closing it stops the server.

---

## View the Website

Open your browser and visit:

### Homepage — http://localhost:3000

You should see a premium agency website with these sections (scroll down to see all of them):

| # | Section | What You See |
|---|---------|-------------|
| 1 | **Navbar** | Logo, navigation links, CTA button (fixed at top) |
| 2 | **Hero** | Large headline, description, 3 action buttons |
| 3 | **Social Proof** | Credibility and trust indicators |
| 4 | **Three Steps** | "How It Works" process breakdown |
| 5 | **Value Bridge** | Features connected to outcomes |
| 6 | **Entry Offer** | $250 pricing card |
| 7 | **Premium Offer** | $1,500 pricing card |
| 8 | **Book a Call** | Strategy call booking section |
| 9 | **FAQ** | 7 expandable questions |
| 10 | **Final CTA** | Closing conversion section |

**Scroll animations:** Sections fade and slide in as you scroll. This is powered by Motion.

**Mobile:** Resize your browser window to see the responsive mobile layout. A sticky CTA bar appears at the bottom on small screens.

### System Status — http://localhost:3000/system-status

You should see:
- A dashboard with system capability rows
- Every capability showing "Active" status
- A clean, professional layout

---

## Common Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| `Port 3000 is already in use` | Another app on port 3000 | Close the other app, or use: `npm run dev -- -p 3001` |
| Blank white page | JavaScript error | Check the terminal for red error messages |
| Styles look broken | Tailwind not loading | Stop server (`Ctrl+C`), run `npm run dev` again |
| Page loads but sections missing | Component error | Check terminal — the error will name the broken file |

---

## Stopping the Server

Press `Ctrl+C` in the terminal to stop the development server.

---

## Expected Result

After completing this step:
- Homepage loads with all 10 sections visible
- System status page loads with all capabilities showing "Active"
- Scroll animations work
- No errors in the terminal

---

*Next: Proceed to [04-verify](../04-verify/README.md) to run the full verification.*
