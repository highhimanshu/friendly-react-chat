
import React, { useState } from 'react';
import { Send, Paperclip, Smile, Plus } from 'lucide-react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t p-4 bg-gray-50">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="flex-1 bg-white border rounded-lg flex items-center">
          <div className="p-3">
            <button type="button" className="text-gray-400 hover:text-gray-600">
              <Plus size={20} />
            </button>
          </div>
          
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 py-3 px-2 outline-none"
          />
          
          <div className="p-3 flex space-x-2">
            <button type="button" className="text-gray-400 hover:text-gray-600">
              <Smile size={20} />
            </button>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="ml-2 p-3 text-gray-500 hover:text-gray-700"
          disabled={!message.trim()}
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
