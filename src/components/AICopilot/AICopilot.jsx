import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FaRobot } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi'; // Replace with the right icon if needed
import './AICopilot.css';

const AICopilot = () => {
  const [activeTab, setActiveTab] = useState('copilot');

  return (
    <div className="ai-copilot">
      <div className="ai-copilot-header">
        <div className="copilot-tabs">
          <div
            className={`tab ${activeTab === 'copilot' ? 'active' : ''}`}
            onClick={() => setActiveTab('copilot')}
          >
            <FaRobot size={14} style={{ marginRight: 4 }} />
            AI Copilot
          </div>
          <div
            className={`tab ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </div>
          <div className="tab-right-icon">
            <FiMenu size={16} />
          </div>
        </div>
      </div>

      {/* Content below stays the same */}
      <div className="copilot-content">
        <div className="copilot-avatar">
          <div className="avatar-icon">AI</div>
        </div>

        <div className="copilot-header">
          <h3>Hi, I'm Fin AI Copilot</h3>
          <p>Ask me anything about this conversation.</p>
        </div>
      </div>

      <div className="copilot-footer">
        <div className="suggestion-container">
          <span className="suggestion-label">Suggested</span>
          <span className="suggestion-icon">💡</span>
          <span className="suggestion-text">How do I get a refund?</span>
        </div>

        <div className="copilot-input-wrapper">
          <input type="text" placeholder="Ask a question..." />
          <button className="submit-button">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICopilot;
