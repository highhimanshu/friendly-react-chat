
import React from 'react';
import { mockMessageDetails } from '../data/mockData';

const MessageContent = ({ sender, content }) => {
  if (sender === 'AI Bot') {
    return <div className="text-gray-700">{content}</div>;
  } 
  return <div>{content}</div>;
};

const MessageDetail = ({ detail }) => {
  return (
    <div className="mt-4">
      <h3 className="font-medium mb-2">1. {detail.title}</h3>
      
      {detail.contentItems.map((section, idx) => (
        <div key={idx} className="mb-4">
          <h4 className="mb-1">{section.title}</h4>
          <ul className="space-y-1 ml-4">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx} className={`flex ${item.type === 'nested-bullet' ? 'ml-8' : ''}`}>
                <span className="mr-2">•</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'AI Bot';
  const associatedDetail = isBot ? mockMessageDetails[0] : null;

  return (
    <div className={`flex mb-6 ${isBot ? '' : 'justify-end'}`}>
      {isBot && (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 flex-shrink-0">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M6.5,9H9.5C9.87,9 10.17,9.3 10.25,9.66L11.69,18.33C11.76,18.69 11.5,19 11.13,19H6.87C6.5,19 6.24,18.69 6.31,18.33L7.75,9.66C7.83,9.3 8.13,9 8.5,9M12.5,9H15.5C15.87,9 16.17,9.3 16.25,9.66L17.69,18.33C17.76,18.69 17.5,19 17.13,19H12.87C12.5,19 12.24,18.69 12.31,18.33L13.75,9.66C13.83,9.3 14.13,9 14.5,9Z"
              />
            </svg>
          </div>
        </div>
      )}
      
      <div className={`max-w-3xl ${isBot ? '' : 'ml-auto'}`}>
        <div className="flex items-center mb-1.5">
          <div className={`font-medium ${isBot ? 'text-gray-800' : ''}`}>{message.sender}</div>
          <div className="text-xs text-gray-500 ml-2">{message.timestamp}</div>
        </div>
        
        <div className={`p-4 rounded-lg ${
          isBot ? 'bg-white border border-gray-200' : 'bg-blue-500 text-white'
        }`}>
          <MessageContent sender={message.sender} content={message.content} />
          
          {isBot && associatedDetail && <MessageDetail detail={associatedDetail} />}
        </div>
      </div>
      
      {!isBot && (
        <div className="w-10 h-10 invisible flex-shrink-0">
          {/* This is a spacer to balance the layout */}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
