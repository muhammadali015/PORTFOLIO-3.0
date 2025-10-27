# Chatbot Deployment Fix for Vercel

## Issue
The chatbot works locally but fails on Vercel deployment.

## Root Cause
Vercel needs to properly recognize the `api/` folder as a serverless function. The issue is likely:
1. The API route file structure
2. Missing or incorrect Vercel configuration

## Solution

### Step 1: Verify API file structure
Ensure your `api/chatbot.ts` file follows Vercel's conventions:

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Your code here
}
```

### Step 2: Simplified vercel.json
The current `vercel.json` should only contain:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Step 3: Ensure @vercel/node is installed
```bash
npm install @vercel/node
```

## Deployment Checklist

1. ✅ Push all changes to Git
2. ✅ Verify `api/chatbot.ts` exists and exports a default function
3. ✅ Deploy on Vercel
4. ✅ Check Vercel Function Logs for errors
5. ✅ Test the chatbot

## Debugging on Vercel

1. Go to your Vercel project dashboard
2. Click on "Functions" tab
3. Look for `/api/chatbot`
4. Check logs for any errors
5. Common issues:
   - Module not found errors
   - API key issues
   - OpenRouter API errors

## If Still Not Working

Try testing the API directly:
```
https://your-vercel-url.vercel.app/api/chatbot
```

Use Postman or curl to test:
```bash
curl -X POST https://your-vercel-url.vercel.app/api/chatbot \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"hello"}]}'
```

