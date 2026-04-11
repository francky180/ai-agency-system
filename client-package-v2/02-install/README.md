# Step 2 — Install Dependencies

The website needs several libraries to run. This step downloads them automatically.

---

## Install

Open your terminal, navigate to the site folder, and run:

```bash
cd ai-agency-system/site
npm install
```

**What this does:** Downloads Next.js, React, Tailwind CSS, TypeScript, Motion (animations), and all other dependencies listed in `package.json`.

**How long it takes:** 30-60 seconds on a typical connection. Longer on first install.

---

## Expected Result

You should see output ending with something like:

```
added 347 packages, and audited 348 packages in 45s
found 0 vulnerabilities
```

The exact number of packages may vary. The important parts:
- **`added XXX packages`** — dependencies installed successfully
- **`found 0 vulnerabilities`** — no security issues

---

## What Gets Installed

| Package | What It Does |
|---------|-------------|
| `next` | React framework (App Router, server rendering, routing) |
| `react` + `react-dom` | UI library |
| `typescript` | Type-safe JavaScript |
| `tailwindcss` | Utility-first CSS framework |
| `motion` | Scroll animations and transitions |
| `eslint` | Code quality checking |

All dependencies are listed in `site/package.json`. You do not need to install anything manually beyond running `npm install`.

---

## Common Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| `npm: command not found` | Node.js not installed | Go back to [01-setup](../01-setup/README.md) |
| `EACCES: permission denied` | Permissions issue | On Mac/Linux: prefix with `sudo`. On Windows: run terminal as Administrator. |
| `npm warn` messages | Informational warnings | Safe to ignore. These are not errors. |
| Very slow install | Slow internet or npm registry | Wait. Or try: `npm install --registry https://registry.npmjs.org` |

---

## Expected Result

After completing this step:
- `node_modules/` folder appears inside `site/`
- No red error messages in terminal
- Ready to start the dev server

---

*Next: Proceed to [03-run](../03-run/README.md) to start the system.*
