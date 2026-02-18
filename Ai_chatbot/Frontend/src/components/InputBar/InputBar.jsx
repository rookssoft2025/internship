import { useState } from 'react';
import { SendIcon } from '../Icons';
import './InputBar.css';

export default function InputBar({ onSend, isLoading }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || isLoading) return;
    onSend(text);
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="input-bar-wrapper">
      <form className="input-bar" onSubmit={handleSubmit}>
        <textarea
          className="input-bar__textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message AI..."
          rows={1}
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`input-bar__send ${text.trim() ? 'input-bar__send--active' : ''}`}
          disabled={!text.trim() || isLoading}
        >
          <SendIcon />
        </button>
      </form>
      <p className="input-bar__disclaimer">
        AI can make mistakes. Consider checking important information.
      </p>
    </div>
  );
}
