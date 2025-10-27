# Fix for "User not found" Error (401)

## Problem
The OpenRouter API is returning `401: "User not found"`, which means the API key is invalid.

## Solutions

### Option 1: Get a New API Key from OpenRouter

1. Go to https://openrouter.ai/
2. Sign up or log in
3. Go to your API Keys section
4. Generate a new API key
5. Copy the key

### Option 2: Use Environment Variables (Recommended)

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Environment Variables
   - Add: `OPENROUTER_API_KEY` with your valid key
   - Redeploy

2. **Locally, create a `.env.local` file:**
   ```
   OPENROUTER_API_KEY=your_valid_key_here
   ```

### Option 3: Update the API Key Directly

Replace the API key in `api/chatbot.ts` with your valid key.

## Verify Your API Key

Test your API key with curl:
```bash
curl https://openrouter.ai/api/v1/auth/key \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Should return your key information, not an error.

## After Fixing the API Key

1. Update `api/chatbot.ts` with the valid key
2. Commit and push to Git
3. Vercel will auto-redeploy
4. Test the chatbot again

## Alternative: Use a Different AI Service

If OpenRouter continues to have issues, you can:
- Use OpenAI directly (requires OpenAI account)
- Use Anthropic Claude (requires Anthropic account)
- Use a fallback to mock responses

