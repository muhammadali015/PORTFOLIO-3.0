# Portfolio — Chatbot Setup

This repository includes a serverless API route at `api/chatbot.ts` that proxies requests to OpenRouter.

IMPORTANT: The project requires an OpenRouter API key provided via the `OPENROUTER_API_KEY` environment variable. Do NOT commit your real API key to the repository.

Local development:

1. Create a `.env` file or set the environment variable before running the dev server.

PowerShell example (one-off for the current session):

```powershell
$env:OPENROUTER_API_KEY = "your_openrouter_api_key_here"
npm run dev
```

Vercel (production):

1. Go to your project in the Vercel dashboard.
2. Open Settings -> Environment Variables.
3. Add `OPENROUTER_API_KEY` (Value: your key) and set it for the `Production` environment.
4. Redeploy the site.

Security note:

- A hard-coded key was present in an earlier commit and should be considered compromised. Rotate the OpenRouter API key immediately and remove the leaked key from any public history if necessary.
- After rotating the key, ensure the new key is set in Vercel and locally as needed.

If you'd like, I can add a `.env.example` file and a CI-friendly check to ensure `OPENROUTER_API_KEY` is present at runtime.

Local dev (alternative without Vercel CLI):

You can run a tiny local API shim that proxies /api/chatbot to OpenRouter. This avoids needing the Vercel CLI.

1. Start the local API server in one terminal (it loads `.env` automatically):

```powershell
node dev-server.js
```

2. Start the Vite dev server in another terminal:

```powershell
npm run dev
```

The frontend automatically points to `http://localhost:8787/api/chatbot` when running on localhost, so the chat UI will call the local shim.

If you prefer to emulate Vercel serverless functions instead, install the Vercel CLI and run `npx vercel dev` (this may require logging in to Vercel).

