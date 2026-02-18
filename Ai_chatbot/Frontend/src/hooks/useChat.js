import { useState, useCallback } from 'react';
import { sendMessage } from '../services/api';

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content: 'Hello! How can I help you today?',
};

export function useChat() {
  const [conversations, setConversations] = useState([
    { id: 'default', title: 'New Chat', messages: [WELCOME_MESSAGE] },
  ]);
  const [activeConversationId, setActiveConversationId] = useState('default');
  const [isLoading, setIsLoading] = useState(false);

  const activeConversation = conversations.find((c) => c.id === activeConversationId);
  const messages = activeConversation?.messages || [];

  const send = useCallback(
    async (text) => {
      if (!text.trim() || isLoading) return;

      const userMsg = { id: Date.now().toString(), role: 'user', content: text.trim() };

      setConversations((prev) =>
        prev.map((c) => {
          if (c.id !== activeConversationId) return c;
          const updated = [...c.messages, userMsg];
          const title = c.messages.length <= 1 ? text.trim().slice(0, 30) : c.title;
          return { ...c, title, messages: updated };
        })
      );

      setIsLoading(true);

      try {
        const history = messages
          .filter((m) => m.id !== 'welcome')
          .map((m) => ({ role: m.role, content: m.content }));

        const data = await sendMessage(text.trim(), history);

        const botMsg = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.reply || data.response || data.message || 'Sorry, something went wrong.',
        };

        setConversations((prev) =>
          prev.map((c) =>
            c.id === activeConversationId ? { ...c, messages: [...c.messages, botMsg] } : c
          )
        );
      } catch {
        const errorMsg = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        };
        setConversations((prev) =>
          prev.map((c) =>
            c.id === activeConversationId ? { ...c, messages: [...c.messages, errorMsg] } : c
          )
        );
      } finally {
        setIsLoading(false);
      }
    },
    [activeConversationId, isLoading, messages]
  );

  const createConversation = useCallback(() => {
    const id = Date.now().toString();
    setConversations((prev) => [
      ...prev,
      { id, title: 'New Chat', messages: [WELCOME_MESSAGE] },
    ]);
    setActiveConversationId(id);
  }, []);

  const deleteConversation = useCallback(
    (id) => {
      setConversations((prev) => {
        const filtered = prev.filter((c) => c.id !== id);
        if (filtered.length === 0) {
          const newConv = { id: Date.now().toString(), title: 'New Chat', messages: [WELCOME_MESSAGE] };
          setActiveConversationId(newConv.id);
          return [newConv];
        }
        if (activeConversationId === id) {
          setActiveConversationId(filtered[filtered.length - 1].id);
        }
        return filtered;
      });
    },
    [activeConversationId]
  );

  return {
    conversations,
    activeConversationId,
    setActiveConversationId,
    messages,
    isLoading,
    send,
    createConversation,
    deleteConversation,
  };
}
