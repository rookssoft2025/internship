import { useState } from 'react';
import { useChat } from './hooks/useChat';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import ChatWindow from './components/ChatWindow/ChatWindow';
import InputBar from './components/InputBar/InputBar';
import './App.css';

export default function App() {
  const {
    conversations,
    activeConversationId,
    setActiveConversationId,
    messages,
    isLoading,
    send,
    createConversation,
    deleteConversation,
  } = useChat();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Sidebar
        conversations={conversations}
        activeId={activeConversationId}
        onSelect={setActiveConversationId}
        onCreate={createConversation}
        onDelete={deleteConversation}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="app__main">
        <Header onMenuClick={() => setSidebarOpen((v) => !v)} />
        <ChatWindow messages={messages} isLoading={isLoading} />
        <InputBar onSend={send} isLoading={isLoading} />
      </main>
    </div>
  );
}
