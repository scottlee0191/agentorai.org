"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Send, Bot } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function ChatDemo() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! 👋 How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const demoResponses: Record<string, string> = {
    "pricing": "Our pricing starts at $29/month for the Starter plan. We also offer Professional ($79/month) and Enterprise (custom pricing) plans. Would you like to know more about the features included in each plan?",
    "features": "Our key features include natural language understanding, intent recognition, dynamic responses with rich media, lead capture, human handoff, and a comprehensive analytics dashboard. Which feature would you like to know more about?",
    "trial": "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started. Would you like me to help you set up a trial account?",
    "integration": "We integrate with popular platforms like Salesforce, HubSpot, Zendesk, Intercom, and more. We also provide a REST API for custom integrations. Which system are you currently using?",
    "setup": "Setting up our chat assistant is easy! Just add a single line of JavaScript to your website, and our system will do the rest. You can then customize the assistant's knowledge, appearance, and behavior through our dashboard.",
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    
    // Simulate AI typing
    setIsTyping(true)
    
    // Find a response based on keywords or use a default
    setTimeout(() => {
      setIsTyping(false)
      
      let responseText = "I'm not sure about that. Can you ask something about our pricing, features, trial, integration, or setup?"
      
      // Check for keywords in the input
      for (const [keyword, response] of Object.entries(demoResponses)) {
        if (input.toLowerCase().includes(keyword.toLowerCase())) {
          responseText = response
          break
        }
      }
      
      const assistantMessage: Message = {
        role: "assistant",
        content: responseText,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, assistantMessage])
    }, 1500)
  }

  return (
    <Card className="w-full max-w-md mx-auto border shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-16 w-16">
            <Bot className="h-16 w-16" />
          </Avatar>
          <div>
            <h3 className="font-medium">AgentorAI Assistant</h3>
            <p className="text-xs opacity-90">Online</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[400px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-100"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t p-4 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about pricing, features, trial..."
              className="flex-1 bg-muted/50 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="icon" onClick={handleSend} disabled={!input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 