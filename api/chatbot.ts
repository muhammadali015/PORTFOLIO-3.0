import type { VercelRequest, VercelResponse } from '@vercel/node';

// API Configuration - MUST use environment variable in production
const API_KEY = process.env.OPENROUTER_API_KEY;
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "mistralai/mistral-7b-instruct:free";




export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('Chatbot API called:', req.method, req.url);
  
  // Enable CORS headers for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return res.status(200).end();
  }

  // Only allow POST for actual requests
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validate API key is present
  if (!API_KEY) {
    console.error('OPENROUTER_API_KEY is not set in environment variables');
    return res.status(500).json({ 
      error: 'Server configuration error: API key not configured. Please contact the administrator.' 
    });
  }

  try {
    console.log('Processing POST request');
    const { messages } = req.body;
    console.log('Received messages:', messages?.length);

    if (!messages || !Array.isArray(messages)) {
      console.error('Invalid messages:', messages);
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const systemContext = `
      You are the AI assistant of Muhammad Ali, a Software Engineer and AI Automation Engineer.
      
      Your role is to assist visitors who want to learn more about Muhammad's skills, experience, and projects, and to help potential clients understand what he can build for them.
      
      When someone asks about his projects, clearly describe a few examples — focusing on AI automation, full-stack web apps, chatbots, and workflow systems — and mention the kinds of tools and technologies he uses.
      
      If a visitor seems genuinely interested in working with him or asks about collaboration, politely guide them to contact him via email (e.g., "You can reach Muhammad directly at alich11416181@gmail.com for project discussions or inquiries.").
      
      Style Guide:
      - Keep responses professional, friendly, and confident.
      - Write in a natural, conversational tone — not too formal or robotic.
      - Be concise and respectful of the user's time.
      - Always highlight Muhammad's strengths, such as:
        - Building AI automation systems
        - Developing full-stack web applications
        - Creating intelligent bots and APIs
        - Solving complex software challenges
      
      Example Behavior:
      - If someone says, "What projects have you done?" → List a few example projects with short, strong descriptions.
      - If someone says, "Can Muhammad build something for me?" → Explain what kind of work he can do and invite them to contact him.
      - If someone asks for personal details → Politely redirect the conversation to professional topics.
      
      Your tone should make the visitor feel confident that Muhammad Ali is a skilled, reliable professional they can trust for AI and software engineering work.
      `;

    // Prepare messages for API
    const conversationHistory = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }));

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: systemContext },
          ...conversationHistory
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API Error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: `OpenRouter API returned ${response.status}: ${errorText}` 
      });
    }

    const data = await response.json();
    
    return res.status(200).json(data);
  } catch (error: any) {
    console.error('Chatbot API error:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error' 
    });
  }
}

