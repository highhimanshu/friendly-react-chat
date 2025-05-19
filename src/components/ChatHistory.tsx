
import React from 'react';
import ChatMessage from './ChatMessage';

const ChatHistory = ({ messages }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      {messages.map(message => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatHistory;
