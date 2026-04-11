# Step 1 — Setup

Before you can run the system, you need four free tools installed on your machine.

---

## Required Tools

| Tool | Minimum Version | What It Does | Download |
|------|----------------|-------------|----------|
| **Node.js** | v18+ | Runs the website and all scripts | https://nodejs.org |
| **Git** | v2+ | Tracks changes to the project | https://git-scm.com |
| **VS Code** | Latest | Code editor for viewing and editing files | https://code.visualstudio.com |
| **Claude Code** | Latest | AI engine that powers the system | https://claude.ai/code |

**Recommended:** Download the LTS (Long Term Support) version of Node.js, not the Current version.

---

## Verify Installation

Open your terminal and run each command:

```bash
node --version    # Expected: v18.0.0 or higher
npm --version     # Expected: v9.0.0 or higher (installed with Node.js)
git --version     # Expected: v2.0.0 or higher
claude --version  # Expected: any version number
```

**What success looks like:** Each command returns a version number. No errors.

**If a command fails:** That tool is not installed or not in your system PATH. Install it from the link above, restart your terminal, and try again.

---

## Project Structure

Once setup is complete, you should have this folder structure:

```
ai-agency-system/
├── site/               Next.js agency website (this is the main application)
├── client-package/     Onboarding guides (you are here)
├── docs/               System documentation
└── system-check/       System verification tools
```

---

## Expected Result

After completing this step:
- All four tools installed and returning version numbers
- You can see the project folder structure in VS Code

---

*Next: Proceed to [02-install](../02-install/README.md) to install project dependencies.*
