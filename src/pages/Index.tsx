
import React, { useState } from 'react';
import ChatSidebar from '../components/ChatSidebar';
import ChatHeader from '../components/ChatHeader';
import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';
import { mockMessages } from '../data/mockData';

const Index = () => {
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = (content) => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    
    // In a real app, you would send this message to an API
    // and then add the response from the AI bot
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar - 1/4 width on desktop */}
      <div className="hidden md:block md:w-80 h-full">
        <ChatSidebar />
      </div>

      {/* Chat Area - 3/4 width on desktop, full on mobile */}
      <div className="flex flex-col flex-1 h-full">
        <ChatHeader />
        <ChatHistory />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Index;
