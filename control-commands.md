# System Control Commands
# Copy-paste any command below into your terminal

## START PHIMINDFLOW (Port 3001)
```
cd "C:/Users/franc/Projects/websites/phimindflow-site/site" && npx kill-port 3001 2>/dev/null; npm run dev -- -p 3001
```

## START CREDIT SYSTEM (Port 3002)
```
cd "C:/Users/franc/Projects/websites/credit-system/site" && npx kill-port 3002 2>/dev/null; npm run dev -- -p 3002
```

## START AI AGENCY (Port 3003)
```
cd "C:/Users/franc/Projects/websites/ai-agency-system/site" && npx kill-port 3003 2>/dev/null; npm run dev -- -p 3003
```

## STOP ALL SERVERS
```
npx kill-port 3001 3002 3003
```

## URLs when running:
- PhiMindFlow:   http://localhost:3001
- Credit System: http://localhost:3002
- AI Agency:     http://localhost:3003
- Network access (any device on WiFi): replace localhost with 192.168.1.183
