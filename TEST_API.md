# Testing the Chatbot API on Vercel

## Step 1: Check Browser Console

When you test the chatbot on the deployed site:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Try sending a message
4. Look for logs that start with "Sending request to:", "Response status:", etc.

## Step 2: Enable Runtime Logs on Vercel

1. Go to your Vercel dashboard
2. Click on your deployment
3. Go to "Observability" tab (left sidebar)
4. Enable "Runtime Logs" - this will show you what's happening on the server

## Step 3: Test the API Directly

You can test the API endpoint directly using curl or Postman:

```bash
curl -X POST https://portfolio-3-0-g66t.vercel.app/api/chatbot \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {
        "role": "user",
        "content": "hello"
      }
    ]
  }'
```

Or use this JavaScript in browser console:
```javascript
fetch('https://portfolio-3-0-g66t.vercel.app/api/chatbot', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [{ role: 'user', content: 'hello' }]
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

## Step 4: Check Common Issues

### Issue: Network Error (CORS)
**Look for**: CORS error in console
**Solution**: Already handled in API code

### Issue: 500 Internal Server Error
**Look for**: 500 status in response
**Possible causes**:
- OpenRouter API key invalid
- API key has no credits
- Network issue calling OpenRouter

### Issue: 404 Not Found
**Look for**: API route not found
**Solution**: Check that function is deployed (it is according to your screenshot)

### Issue: Response parsing error
**Look for**: "Failed to parse JSON" or similar
**Solution**: Check what OpenRouter is returning

## Step 5: Quick Fix Checklist

✅ API function is deployed (`/api/chatbot`)
✅ Node.js 22.x running
✅ Function size: 7.1 kB
❓ OpenRouter API key has credits
❓ API key is valid
❓ Network can reach OpenRouter API

## Next Steps

1. **Enable Runtime Logs** on Vercel to see server-side errors
2. **Test the API directly** using the curl command above
3. **Check browser console** for client-side errors
4. **Share the logs** so we can fix the specific error

