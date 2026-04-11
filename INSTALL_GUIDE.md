# INSTALL GUIDE

**From fresh machine to fully running system.**

---

## Requirements

| Tool | Minimum Version | Install |
|------|----------------|---------|
| Node.js | 18+ (recommended 24.x) | https://nodejs.org |
| Git | 2.x+ | https://git-scm.com |
| Code editor | Any (VS Code recommended) | https://code.visualstudio.com |

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/francky180/ai-agency-system.git
cd ai-agency-system
```

Or if you received this as a ZIP:
```bash
unzip ai-agency-system-v1.zip
cd ai-agency-system
```

---

## Step 2: Install Website Dependencies

```bash
cd site
npm install
```

This installs Next.js 16, React 19, Tailwind CSS 4, and all other dependencies.

---

## Step 3: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

You should see the ClientFlow agency landing page.

---

## Step 4: Verify the Build

```bash
npm run lint    # Should complete with no errors
npm run build   # Should complete with 3 static pages
```

Expected output:
```
Route (app)
├ ○ /
├ ○ /_not-found
└ ○ /system-status
```

---

## Step 5: Video Generation (Optional)

```bash
cd ../video
npm install
npm start           # Opens Remotion Studio
npm run render      # Renders MP4 video
```

---

## Step 6: Run on Custom Port

To run alongside other projects:

```bash
cd site
npm run dev -- -p 3003
```

---

## Deployment to Vercel

Option A — via GitHub:
1. Push to GitHub
2. Go to vercel.com → Import Project
3. Select the repository
4. Set root directory to `site`
5. Deploy

Option B — via CLI:
```bash
npm install -g vercel
cd site
vercel
```

---

## What Requires Manual Setup

| Task | Details |
|------|---------|
| Stripe links | Update in `site/src/lib/links.ts` |
| Email address | Update in `site/src/lib/links.ts` |
| Domain | Configure DNS in Vercel dashboard |
| Analytics | Add tracking script to `site/src/app/layout.tsx` |
| OG image | Add to `site/public/` and reference in layout.tsx metadata |

---

## Troubleshooting

| Issue | Solution |
|-------|---------|
| `npm install` fails | Delete `node_modules` and `package-lock.json`, retry |
| Port already in use | Use `npx kill-port 3000` or change port with `-p` flag |
| Build fails | Run `npm run lint` first to catch errors |
| Remotion won't start | Ensure you're in the `video/` directory, not `site/` |
