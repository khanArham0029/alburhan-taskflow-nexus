
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChatMessage } from '@/lib/types';
import { format, parseISO } from 'date-fns';

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      sender: 'assistant',
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user message
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        content: input,
        sender: 'user',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      
      // Simulate AI response
      setTimeout(() => {
        let response = '';
        if (input.toLowerCase().includes('idea') || input.toLowerCase().includes('creative')) {
          response = "Here are some creative ideas you might consider:\n\n1. Interactive video segments that allow viewers to choose their learning path\n2. A collaborative research dashboard where teams can share insights in real-time\n3. Virtual reality tours of historical locations relevant to your educational content\n4. Gamified learning modules that track progress and reward achievement";
        } else if (input.toLowerCase().includes('write') || input.toLowerCase().includes('content')) {
          response = "For effective educational content, consider this structure:\n\n1. Start with a compelling question or scenario that illustrates why the topic matters\n2. Present key concepts clearly with real-world examples\n3. Include varied perspectives on the topic to encourage critical thinking\n4. Close with practical applications or reflection questions\n\nWould you like me to help outline a specific topic?";
        } else if (input.toLowerCase().includes('problem') || input.toLowerCase().includes('error') || input.toLowerCase().includes('issue')) {
          response = "Let's troubleshoot this step by step:\n\n1. Could you describe exactly what's happening?\n2. When did you first notice the issue?\n3. Have you made any recent changes to the project?\n\nOnce I have this information, I can suggest potential solutions.";
        } else {
          response = "I'm here to assist with creative ideas, content suggestions, and task-related queries. How can I help with your current project?";
        }
        
        const assistantMessage: ChatMessage = {
          id: Date.now().toString(),
          content: response,
          sender: 'assistant',
          timestamp: new Date().toISOString()
        };
        
        setMessages(prev => [...prev, assistantMessage]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] border rounded-lg overflow-hidden bg-white">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">AI Assistant</h2>
        <p className="text-sm text-muted-foreground">
          Get creative ideas, content suggestions, and help with tasks
        </p>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'assistant' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-alburhan-purple text-white">AI</AvatarFallback>
                </Avatar>
              )}
              
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user' 
                    ? 'bg-alburhan-purple text-white' 
                    : 'bg-muted'
                }`}
              >
                <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {format(new Date(message.timestamp), 'h:mm a')}
                </div>
              </div>
              
              {message.sender === 'user' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-alburhan-blue text-white">U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask for ideas, content help, or task assistance..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
