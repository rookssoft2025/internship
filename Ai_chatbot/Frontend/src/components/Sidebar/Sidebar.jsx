import { PlusIcon, ChatIcon, TrashIcon } from '../Icons';
import './Sidebar.css';

export default function Sidebar({
  conversations,
  activeId,
  onSelect,
  onCreate,
  onDelete,
  isOpen,
  onClose,
}) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <button className="sidebar__new-btn" onClick={onCreate}>
            <PlusIcon />
            <span>New Chat</span>
          </button>
        </div>

        <nav className="sidebar__nav">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`sidebar__item ${conv.id === activeId ? 'sidebar__item--active' : ''}`}
              onClick={() => {
                onSelect(conv.id);
                onClose();
              }}
            >
              <ChatIcon />
              <span className="sidebar__item-title">{conv.title}</span>
              <button
                className="sidebar__delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(conv.id);
                }}
              >
                <TrashIcon />
              </button>
            </div>
          ))}
        </nav>

        <div className="sidebar__footer">
          <span className="sidebar__footer-text">AI Chatbot</span>
        </div>
      </aside>
    </>
  );
}
