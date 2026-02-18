import { BotIcon, UserIcon } from '../Icons';
import './MessageBubble.css';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`message ${isUser ? 'message--user' : 'message--bot'}`}>
      <div className="message__avatar">
        {isUser ? <UserIcon /> : <BotIcon />}
      </div>
      <div className="message__content">
        <span className="message__role">{isUser ? 'You' : 'AI'}</span>
        <div className="message__text">{message.content}</div>
      </div>
    </div>
  );
}
