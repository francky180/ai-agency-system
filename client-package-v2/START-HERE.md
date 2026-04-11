# AI Agency System

## Welcome

Congratulations. You now own a complete, AI-powered client acquisition system.

This is not a course. Not a template. Not a collection of prompts. This is a fully built, production-ready system — a premium website, an AI marketing engine, structured automation workflows, and everything you need to launch and run a one-person agency powered by AI at every layer.

Follow this guide step by step. You will have a working system in under 30 minutes.

---

## What You Received

| Included | What It Does |
|----------|-------------|
| **Agency Website** | A premium, high-converting website built with Next.js 16, TypeScript, and Tailwind CSS. Designed to turn visitors into paying clients. |
| **AI Marketing Engine** | SEO audits, copy generation, social media calendars, email sequences, competitor analysis — all AI-powered and ready to use. |
| **Automation Workflows** | Structured processes for client acquisition, marketing, and delivery — automated end to end. |
| **System Status Dashboard** | A live page that confirms every subsystem is online and healthy. |
| **Client Package** | This step-by-step onboarding guide (you are reading it now). |
| **Full Documentation** | Clean, beginner-friendly docs covering setup, architecture, and daily operation. |

---

## What You Need to Install

Install these four tools before you begin. All are free.

| Tool | What It Does | Download |
|------|-------------|----------|
| **Node.js** (v18 or higher) | Runs the website and system | https://nodejs.org |
| **Git** | Tracks changes to your project | https://git-scm.com |
| **VS Code** | Your code editor | https://code.visualstudio.com |
| **Claude Code** | The AI engine that powers the system | https://claude.ai/code |

### How to Confirm They Are Installed

Open a terminal (Command Prompt, PowerShell, or VS Code terminal) and run each command:

```bash
node --version
git --version
code --version
claude --version
```

**Expected result:** Each command returns a version number (e.g., `v22.0.0`).

**If any command fails:** Install that tool from the link above, then try again.

---

## How to Run Your System

### Step 1 — Open the Project

Open a terminal and navigate to the project folder:

```bash
cd ai-agency-system
```

### Step 2 — Install Dependencies

```bash
cd site
npm install
```

**What this does:** Downloads all the libraries the website needs to run.

**Expected result:** You see `added XXX packages` and `found 0 vulnerabilities` at the end. This takes 30-60 seconds on first run.

### Step 3 — Start the System

```bash
npm run dev
```

**What this does:** Launches a local development server on your machine.

**Expected result:** You see a message like `Ready in Xms` or `Local: http://localhost:3000`.

### Step 4 — Open in Your Browser

Visit these two URLs:

| URL | What You Should See |
|-----|-------------------|
| http://localhost:3000 | The full agency website — hero section, features, pricing, FAQ, and CTAs |
| http://localhost:3000/system-status | The system status dashboard — all capabilities showing "Active" |

**If both pages load correctly, your system is running.**

---

## How to Verify Everything Works

Run these two commands from inside the `site/` folder:

### Lint Check
```bash
npm run lint
```
**What this does:** Scans the code for errors and style issues.
**Expected result:** Zero errors, zero warnings.

### Production Build
```bash
npm run build
```
**What this does:** Compiles the entire website as if preparing for live deployment.
**Expected result:** `Compiled successfully` with zero errors. You should see routes `/` and `/system-status` listed.

**If both commands pass, your system is verified and production-ready.**

---

## System Status

| Component | Status |
|-----------|--------|
| Agency Website | Ready |
| AI Marketing Engine | Ready |
| Automation Workflows | Ready |
| System Status Dashboard | Ready |
| Client Package | Ready |
| Documentation | Ready |

Everything is built. Everything is tested. Everything works.

---

## Common Issues and Fixes

| Problem | Cause | Fix |
|---------|-------|-----|
| `node: command not found` | Node.js not installed | Install from https://nodejs.org, restart terminal |
| `npm install` shows errors | Outdated Node.js | Update to v18+ (`node --version` to check) |
| Port 3000 already in use | Another app is using it | Close the other app, or run `npm run dev -- -p 3001` |
| Page shows blank white screen | Build error | Check terminal for red error messages |
| `claude: command not found` | Claude Code not installed | Install from https://claude.ai/code |

---

## Reading Order

| Order | File | Purpose |
|-------|------|---------|
| 1 | **START-HERE.md** | Setup and first run (you are here) |
| 2 | **FULL-SYSTEM-GUIDE.md** | Understand how every part works |
| 3 | **SYSTEM-CHECK.md** | Full verification checklist |
| 4 | **Step folders (01–04)** | Detailed walkthrough per step |

Your AI agency starts now.

---

*Next: Read `FULL-SYSTEM-GUIDE.md` to understand how every part of the system works.*
