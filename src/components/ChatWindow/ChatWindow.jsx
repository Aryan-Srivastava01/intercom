import React, { useState, useEffect, useRef } from 'react';
import { Paperclip, Image, Smile, Send, Moon, X, MoreHorizontal } from 'lucide-react';
import Header from '../Header/Header';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      text: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.",
      sender: "left",
      time: "1min",
      name: "Luis"
    },
    {
      text: "Let me just look into this for you, Luis.",
      sender: "right",
      time: "1min",
      seen: true
    }
  ]);

  const messagesEndRef = useRef(null);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    const text = inputText.trim();
    if (!text) return;

    const newMsg = {
      text,
      sender: 'right',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMsg]);
    setInputText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <Header 
          title="Luis Easton" 
          rightComponent={
            <div className="header-buttons">
              <button className="header-btn">
                <MoreHorizontal size={16} />
              </button>
              <button className="header-btn">
                <Moon size={16} />
              </button>
              <button className="header-btn close-btn">
                <X size={16} />
                <span>Close</span>
              </button>
            </div>
          }
        />
      </div>

      <div className="chat-messages">
        {messages.map((msg, idx) => {
          if (msg.sender === 'left') {
            return (
              <div key={idx} className="message-row left">
                <div className="avatar">L</div>
                <div className="message-content">
                  <div className="message left">{msg.text}</div>
                  <div className="message-footer">
                    <span className="sender">Seen</span>
                    <span className="time">{msg.time}</span>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={idx} className="message-row right">
                <div className="message-content right">
                  <div className="message right">{msg.text}</div>
                  <div className="message-footer right">
                    {msg.seen && <span className="sender">Seen</span>}
                    <span className="time">{msg.time}</span>
                  </div>
                </div>
                <div className="avatar agent">J</div>
              </div>
            );
          }
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <div className="chat-controls">
          <button className="chat-type-dropdown">Chat <span>▾</span></button>
          <div className="shortcut-hint">Use ⇧K for shortcuts</div>
        </div>
        
        <div className="chat-input-bar">
          <div className="chat-input-tools">
            <button><Paperclip size={16} /></button>
            <button><Image size={16} /></button>
            <button><Smile size={16} /></button>
          </div>
          <input
            type="text"
            placeholder="Message Chat"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="chat-input"
          />
          <div className="chat-input-actions">
            <button className="send-button" onClick={handleSend}>
              <Send size={16} />
            </button>
            <button className="send-options">▾</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;