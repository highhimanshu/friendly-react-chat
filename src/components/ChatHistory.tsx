
import React from 'react';
import ChatMessage from './ChatMessage';
import { mockMessages } from '../data/mockData';

const ChatHistory = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      {mockMessages.map(message => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatHistory;
