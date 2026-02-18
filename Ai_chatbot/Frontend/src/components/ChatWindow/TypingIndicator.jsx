import { BotIcon } from '../Icons';
import './TypingIndicator.css';

export default function TypingIndicator() {
  return (
    <div className="typing">
      <div className="typing__avatar">
        <BotIcon />
      </div>
      <div className="typing__content">
        <span className="typing__role">AI</span>
        <div className="typing__dots">
          <span className="typing__dot" />
          <span className="typing__dot" />
          <span className="typing__dot" />
        </div>
      </div>
    </div>
  );
}
