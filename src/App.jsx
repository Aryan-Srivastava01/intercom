import React from 'react';
import Sidebar from '../src/components/Sidebar/Sidebar';
import ChatWindow from './components/ChatWindow/ChatWindow';
import AICopilot from './components/AICopilot/AICopilot';
import Header from './components/Header/Header';

function App() {
  return (
    
    <div className="app">
      <Sidebar />
      <ChatWindow />
      <AICopilot />
      </div>
    
  );
}

export default App;
