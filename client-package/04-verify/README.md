# Step 4 — Verify the System

## Run Lint Check

```bash
cd site
npm run lint
```

Expected output: No errors.

## Run Production Build

```bash
npm run build
```

Expected output: Build completes successfully with zero errors.

## Verification Checklist

- [ ] `npm run dev` starts without errors
- [ ] Homepage loads at http://localhost:3000
- [ ] All 8 sections are visible on the homepage
- [ ] System status page loads at http://localhost:3000/system-status
- [ ] All capabilities show "Active" status
- [ ] `npm run lint` passes with no errors
- [ ] `npm run build` completes successfully

## System Status

If all checks pass, your system is fully operational.

| Check | Expected |
|-------|----------|
| Dev server | Starts on port 3000 |
| Homepage | All sections render |
| System status | All capabilities active |
| Lint | Zero errors |
| Build | Compiles successfully |

Your AI agency system is ready to deploy.
