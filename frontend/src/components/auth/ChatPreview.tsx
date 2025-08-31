import React, { useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  time: string;
}

const ChatPreview: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey! Welcome to QuickTalk", sender: "other", time: "2:30 PM" },
    { id: 2, text: "Thanks! Excited to try it out", sender: "me", time: "2:31 PM" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(prev => [...prev, 
        { id: 3, text: "Lightning fast messaging ⚡", sender: "other", time: "2:32 PM" }
      ]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 max-w-sm mx-auto">
      {/* Chat Header */}
      <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">QT</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">QuickTalk Team</h3>
          <p className="text-xs text-green-500 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Online
          </p>
        </div>
      </div>
      
      {/* Messages */}
      <div className="space-y-3 pt-3 max-h-32 overflow-hidden">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                msg.sender === 'me'
                  ? 'bg-green-500 text-white rounded-br-md'
                  : 'bg-gray-100 text-gray-800 rounded-bl-md'
              }`}
            >
              <p>{msg.text}</p>
              <p className={`text-xs mt-1 ${
                msg.sender === 'me' ? 'text-green-100' : 'text-gray-500'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPreview;
