
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, BrainCircuit } from "lucide-react";

const AIChat = () => {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'ai'}>>([
    { text: "Hello! I'm NOVA, your AI investment advisor. How can I assist you with your investment journey today?", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses: Record<string, string> = {
    "investment": "Our quantum computing platform combines neural networks with expert broker insights to create optimized investment strategies. We process over 10TB of market data daily to identify emerging opportunities before they become mainstream.",
    "fees": "Our fee structure utilizes a transparent tiered system based on your investment amount. Starting at just 0.5% for managed accounts, with performance-based options available. Our AI continuously optimizes to reduce costs while maximizing returns.",
    "minimum": "The minimum investment amount is $5,000. This threshold enables our AI to create a properly diversified portfolio across multiple asset classes while implementing sophisticated hedging strategies.",
    "broker": "Our brokers are elite financial professionals with advanced degrees and at least 8 years of experience. They work in tandem with our AI system, providing human expertise where it matters most - strategic planning and personalized guidance.",
    "returns": "While future returns cannot be guaranteed, our AI-driven portfolios have consistently outperformed market indices by 6-12% annually over the past 5 years, with significantly reduced volatility compared to traditional investment approaches.",
    "ai": "Our proprietary neural network uses quantum computing to analyze market patterns across multiple dimensions simultaneously. It continuously evolves through reinforcement learning, developing new investment theories and testing them against decades of historical data."
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = "I don't have specific information about that yet. Our investment specialists can provide detailed answers tailored to your financial situation. Would you like to register for a consultation?";

      // Check for keywords in the user's message
      for (const [keyword, reply] of Object.entries(predefinedResponses)) {
        if (inputValue.toLowerCase().includes(keyword)) {
          response = reply;
          break;
        }
      }

      setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section id="ai-assistant" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-invest-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-invest-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-invest-purple/10 px-3 py-1 mb-4">
            <span className="text-sm font-medium uppercase tracking-wider text-invest-purple">Interactive AI</span>
          </div>
          <h2 className="text-3xl font-bold gradient-text sm:text-4xl">Quantum AI Assistant</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Ask our neural network any question about investing with us
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-invest-purple to-invest-blue rounded-full"></div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card overflow-hidden border-0 shadow-xl">
          <div className="bg-gradient-to-r from-invest-purple to-invest-blue p-4 flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">NOVA</h3>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span className="text-xs text-white/80">Quantum Assistant</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-80 overflow-y-auto p-6 space-y-6 bg-white/40">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start max-w-xs md:max-w-md">
                  {message.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-invest-purple to-invest-blue flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div 
                    className={`px-4 py-3 rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-invest-purple to-invest-blue text-white ml-2' 
                        : 'bg-white shadow-md border border-gray-100'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start max-w-xs md:max-w-md">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-invest-purple to-invest-blue flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="typing-dot bg-invest-purple"></div>
                      <div className="typing-dot bg-invest-purple"></div>
                      <div className="typing-dot bg-invest-purple"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-100 bg-white/60">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our AI technology, investment strategies, or returns..."
                className="flex-grow bg-white/80 backdrop-blur-sm border-gray-200 focus-visible:ring-invest-purple"
              />
              <Button 
                onClick={handleSend}
                className="button-gradient"
                disabled={!inputValue.trim()}
              >
                <Send size={18} />
              </Button>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Try asking about: minimum investment, fees, returns, AI technology, or broker qualifications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
