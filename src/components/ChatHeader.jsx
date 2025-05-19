
import React from 'react';
import { Download, Clipboard } from 'lucide-react';

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between flex-1">
      <h2 className="text-lg font-medium text-gray-700">Lorem ipsum dolor</h2>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Download size={18} className="text-gray-500" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Clipboard size={18} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
