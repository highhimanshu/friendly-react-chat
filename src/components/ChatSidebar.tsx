
import React, { useState } from 'react';
import { mockChats, mockUser } from '../data/mockData';
import { Plus, ChevronDown, FileText, Folder, History, Settings, Home } from 'lucide-react';

const ChatSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    today: true,
    yesterday: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const todayChats = mockChats.filter(chat => chat.date === "Today");
  const yesterdayChats = mockChats.filter(chat => chat.date === "Yesterday");

  return (
    <div className="w-full h-full flex flex-col border-r bg-gray-50">
      {/* Logo */}
      <div className="p-4 border-b">
        <h1 className="text-2xl font-light text-gray-500">LOGO</h1>
      </div>

      {/* New Chat Button */}
      <div className="p-4 flex items-center justify-between border-b">
        <span className="font-medium">New Chat</span>
        <button className="text-gray-500 hover:text-gray-700">
          <Plus size={20} />
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {/* Today Section */}
        <div className="border-b">
          <div 
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleSection('today')}
          >
            <span className="text-gray-500">Today</span>
            <ChevronDown 
              size={18} 
              className={`text-gray-500 transition-transform ${expandedSections.today ? '' : '-rotate-90'}`} 
            />
          </div>

          {expandedSections.today && (
            <div>
              {todayChats.map(chat => (
                <div 
                  key={chat.id}
                  className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${chat.selected ? 'bg-gray-100' : ''}`}
                >
                  <FileText size={18} className="text-gray-500 mr-3" />
                  <span className="text-gray-700 truncate">{chat.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Yesterday Section */}
        <div className="border-b">
          <div 
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleSection('yesterday')}
          >
            <span className="text-gray-500">Yesterday</span>
            <ChevronDown 
              size={18} 
              className={`text-gray-500 transition-transform ${expandedSections.yesterday ? '' : '-rotate-90'}`} 
            />
          </div>

          {expandedSections.yesterday && (
            <div>
              {yesterdayChats.map(chat => (
                <div 
                  key={chat.id}
                  className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer ${chat.selected ? 'bg-gray-200' : ''}`}
                >
                  <FileText size={18} className="text-gray-500 mr-3" />
                  <span className="text-gray-700 truncate">{chat.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="p-4 border-t">
        <div className="flex items-center py-3 text-gray-600 hover:text-gray-800 cursor-pointer">
          <Home size={18} className="mr-3" />
          <span>My Classes</span>
        </div>
        <div className="flex items-center py-3 text-gray-600 hover:text-gray-800 cursor-pointer">
          <Folder size={18} className="mr-3" />
          <span>My Files</span>
        </div>
        <div className="flex items-center py-3 text-gray-600 hover:text-gray-800 cursor-pointer">
          <History size={18} className="mr-3" />
          <span>My History</span>
        </div>
        <div className="flex items-center py-3 text-gray-600 hover:text-gray-800 cursor-pointer">
          <Settings size={18} className="mr-3" />
          <span>Settings</span>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 border-t flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
          <img 
            src="https://i.pravatar.cc/100" 
            alt="User avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-medium text-gray-800">{mockUser.name}</div>
          <div className="text-sm text-gray-500">{mockUser.role}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
