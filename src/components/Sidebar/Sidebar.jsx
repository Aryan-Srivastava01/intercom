import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeConversation, setActiveConversation] = useState(1);
  
  const conversations = [
    {
      id: 1,
      name: 'Luis - Github',
      message: 'Hey! I have a question...',
      time: '45m',
      avatar: 'L',
      avatarColor: 'default'
    },
    {
      id: 2,
      name: 'Ivan - Nike',
      message: 'Hi there, I have a question...',
      time: '5min',
      avatar: 'I',
      avatarColor: 'red',
      unreadBadge: '3 mins'
    },
    {
      id: 3,
      name: 'Lead from New York',
      message: 'Good morning, let me...',
      time: '40m',
      avatar: 'L',
      avatarColor: 'green',
      hasPriority: true
    },
    {
      id: 4,
      name: 'Booking API problems',
      message: 'Bug report',
      time: '45m',
      company: 'Luis - Small Crafts',
      avatar: 'B',
      avatarColor: 'purple'
    },
    {
      id: 5,
      name: 'Miracle - Exemplary Bank',
      message: "Hey there, I'm here to...",
      time: '45m',
      avatar: 'M',
      avatarColor: 'orange'
    }
  ];

  const handleConversationClick = (conversationId) => {
    setActiveConversation(conversationId);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="inbox-title">Your Inbox</div>
        <div className="header-controls">
          <button className="open-button">
            5 Open <span>▾</span>
          </button>
          <button className="waiting-button">
            Waiting longest <span>▾</span>
          </button>
        </div>
      </div>

      <div className="filters">
        <span>All</span>
        <span>Unread</span>
      </div>

      <div className="conversation-list">
        {conversations.map((conv) => (
          <div 
            key={conv.id} 
            className={`conversation ${activeConversation === conv.id ? 'active' : ''}`}
            onClick={() => handleConversationClick(conv.id)}
          >
            <div className="conversation-avatar">
              <div className={`avatar ${conv.avatarColor !== 'default' ? conv.avatarColor : ''}`}>
                {conv.avatar}
              </div>
            </div>
            <div className="conversation-content">
              <div className="conversation-header">
                <div className="left">
                  <div className="name">{conv.name}</div>
                  <div className="message">{conv.message}</div>
                  {conv.company && <div className="company">{conv.company}</div>}
                  {conv.unreadBadge && <div className="unread-badge">{conv.unreadBadge}</div>}
                </div>
                <div className="right">
                  <div className="time">{conv.time}</div>
                </div>
              </div>
            </div>
            {conv.hasPriority && <div className="priority-badge"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;