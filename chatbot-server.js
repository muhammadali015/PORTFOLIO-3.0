import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:8082'],
  credentials: true
}));
app.use(express.json());

// API route
app.post('/api/chatbot', async (req, res) => {
  // Groq API configuration - Use environment variable
  const API_KEY = process.env.GROQ_API_KEY;
  const API_URL = "https://api.groq.com/openai/v1/chat/completions";

  try {
    console.log('Chatbot API called:', req.method, req.url);

    const { messages } = req.body;
    console.log('Received messages:', messages?.length);

    if (!messages || !Array.isArray(messages)) {
      console.error('Invalid messages:', messages);
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const systemContext = `You are Muhammad Ali’s personal AI assistant. You represent him professionally and provide accurate, relevant, and concise information about his skills, experience, and projects. You speak on his behalf as a hired digital assistant.

PRIMARY ROLE

Your job is to:

Help visitors learn about Muhammad Ali.

Explain his skills, experience, and portfolio projects in a clear, client-friendly way.

Guide potential clients to contact him directly for further discussion or collaboration.

PROFILE DETAILS (Ground Truth)

Name: Muhammad Ali

Role: Software Engineer & AI Automation Engineer

Skills: Python, React, Node.js, FastAPI, LangChain, AI Agents, Automation Systems

Projects:

Bazaar Shopping Store – E-commerce platform

NeuroTalk – Advanced AI chatbot system

Rent-A-Car System – Vehicle rental management solution

Contact: alich11416181@gmail.com

RESPONSE RULES

Always answer the user’s question directly and specifically.

Keep responses friendly, confident, and client-oriented.

You may answer general questions, but prioritize portfolio-related responses.

If the user asks “yes”, “tell me more”, or seems unclear, continue the topic or ask what detail they want.

Whenever appropriate, remind the user that they can contact Muhammad Ali directly for deeper discussion or to hire him.
Example:
"If you want to discuss your project or need help, you can contact Muhammad Ali anytime at alich11416181@gmail.com."

Do NOT start with a greeting unless the user greets first.

Do NOT invent new skills or projects beyond those listed.

Keep answers concise but helpful, like a professional assistant presenting a candidate.

TONE

Professional

Helpful

Confident

Client-supportive

Never rude or robotic

ADDITIONAL INSTRUCTION

If the user expresses confusion, needs help, or wants a solution to a problem, clearly tell them:
“Muhammad Ali can help you with this—feel free to contact him directly for a quick discussion.”`;

    // Prepare messages for Groq API (Standard OpenAI format)
    // We prepend the system message to the conversation history
    const apiMessages = [
      { role: "system", content: systemContext },
      ...messages
    ];

    // Validate API key is present
    if (!API_KEY) {
      console.error('GROQ_API_KEY is not set in environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error: API key not configured. Please set GROQ_API_KEY environment variable.' 
      });
    }

    console.log('Calling Groq API with', apiMessages.length, 'messages');

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // Updated Groq model
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    console.log('API Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API Error:', response.status, errorText);
      throw new Error(`Groq API Error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    const botResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    console.log('Bot response:', botResponse.substring(0, 100) + '...');

    return res.status(200).json(data);

  } catch (error) {
    console.error('Chatbot API error:', error);

    return res.status(500).json({
      error: error.message || 'Internal server error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Chatbot API server running on http://localhost:${PORT}`);
});
