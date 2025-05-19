
import React, { useState } from 'react';
import ChatSidebar from '../components/ChatSidebar';
import ChatHeader from '../components/ChatHeader';
import ChatHistory from '../components/ChatHistory';
import ChatInput from '../components/ChatInput';
import { mockMessages } from '../data/mockData';
import { PanelLeft } from 'lucide-react';

const Index = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [showSidebar, setShowSidebar] = useState(false); // Start with sidebar closed on mobile

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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar - conditionally shown based on showSidebar state */}
      {showSidebar && (
        <div className="w-64 h-full fixed z-10 bg-white border-r shadow-lg">
          <ChatSidebar />
        </div>
      )}

      {/* Chat Area - full width when sidebar is hidden */}
      <div className="flex flex-col flex-1 h-full">
        <div className="flex items-center p-4 border-b">
          <button 
            onClick={toggleSidebar} 
            className="p-2 mr-2 rounded-full hover:bg-gray-100"
            aria-label={showSidebar ? "Hide sidebar" : "Show sidebar"}
          >
            <PanelLeft size={20} className="text-gray-500" />
          </button>
          <ChatHeader />
        </div>
        <ChatHistory messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Index;
