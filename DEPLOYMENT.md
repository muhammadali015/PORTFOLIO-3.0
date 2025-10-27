# Vercel Deployment Guide

## Chatbot API Configuration

The chatbot uses a serverless API route to communicate with OpenRouter AI, avoiding CORS issues when deployed.

### Files Created:
- `api/chatbot.ts` - Serverless API route
- `vercel.json` - Vercel configuration

### Important Notes:

1. **API Route**: The chatbot now calls `/api/chatbot` instead of directly calling OpenRouter
2. **CORS Fixed**: All API calls go through Vercel's serverless function
3. **Environment Variables**: The API key is stored in the code - consider moving to environment variables for production

### Deployment Steps:

1. Push to your repository
2. Deploy on Vercel (connect your Git repository)
3. The build will automatically use `npm run build`
4. Vercel will automatically detect the `api/` folder and deploy it as serverless functions

### Testing Locally:

1. Run `npm run dev` for development
2. For testing the API route locally, you may need to use Vercel CLI:
   ```bash
   npx vercel dev
   ```

### Environment Variables (Optional - Recommended for Production):

You can set these in Vercel Dashboard under Project Settings > Environment Variables:
- `OPENROUTER_API_KEY` - Your OpenRouter API key

Then update `api/chatbot.ts` to use:
```typescript
const API_KEY = process.env.OPENROUTER_API_KEY || "your-default-key";
```

