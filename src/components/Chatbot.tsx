import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Send, Bot, User, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const API_KEY = "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";
const MODEL = "mistralai/mistral-7b-instruct:free";
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatbotProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Chatbot = ({ isOpen: isOpenProp, onClose }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(isOpenProp || false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm an AI assistant here to help you learn about Muhammad Ali's work and skills. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpenProp !== undefined) {
      setIsOpen(isOpenProp);
    }
  }, [isOpenProp]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isChatLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsChatLoading(true);

    try {
      // Prepare conversation history for the API
      const conversationHistory = [...messages, { role: "user" as const, content: userMessage }].map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Add system context about the portfolio
      const systemContext = `
      You are the AI assistant of Muhammad Ali, a Software Engineer and AI Automation Engineer.
      
      Your role is to assist visitors who want to learn more about Muhammad’s skills, experience, and projects, and to help potential clients understand what he can build for them.
      
      When someone asks about his projects, clearly describe a few examples — focusing on AI automation, full-stack web apps, chatbots, and workflow systems — and mention the kinds of tools and technologies he uses.
      
      If a visitor seems genuinely interested in working with him or asks about collaboration, politely guide them to contact him via email (e.g., "You can reach Muhammad directly at alich11416181@gmail.com for project discussions or inquiries.").
      
      Style Guide:
      - Keep responses professional, friendly, and confident.
      - Write in a natural, conversational tone — not too formal or robotic.
      - Be concise and respectful of the user’s time.
      - Always highlight Muhammad’s strengths, such as:
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
      
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: "system", content: systemContext },
            ...conversationHistory
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", response.status, errorText);
        throw new Error(`API returned ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      
      const botResponse = data.choices[0]?.message?.content || "I apologize, but I'm having trouble processing that request. Could you please rephrase your question?";
      
      setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [...prev, { 
        role: "assistant", 
        content: "I'm sorry, I'm having trouble connecting to the AI service right now. Please check your console for more details or try again in a moment." 
      }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all z-50"
      >
        <Bot className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-8rem)] z-50 flex flex-col shadow-2xl rounded-lg overflow-hidden border bg-background"
    >
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5" />
          <h3 className="font-semibold">AI Assistant</h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="text-primary-foreground hover:bg-primary-foreground/20"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 bg-muted/20">
        {messages.map((message, index) => (
          <AnimatePresence key={index}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex gap-2 max-w-[80%] ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`rounded-lg px-3 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border"
                  }`}
                >
                  <div className="text-sm prose prose-sm max-w-none prose-headings:text-sm prose-p:my-2 prose-strong:text-foreground prose-strong:font-semibold break-words overflow-wrap-anywhere prose-a:break-all prose-pre:break-words prose-code:break-all">
                    <ReactMarkdown 
                      components={{
                        p: ({children}) => <p className="break-words">{children}</p>,
                        strong: ({children}) => <strong className="break-words">{children}</strong>,
                        a: ({href, children}) => <a href={href} className="break-all">{children}</a>,
                        code: ({children}) => <code className="break-all">{children}</code>,
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
        
        {isChatLoading && (
          <div className="flex gap-2 justify-start">
            <div className="p-2 rounded-full bg-muted text-muted-foreground">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-card border rounded-lg px-3 py-2">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-background">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend} disabled={isChatLoading} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Chatbot;

