import { MenuIcon } from '../Icons';
import './Header.css';

export default function Header({ onMenuClick }) {
  return (
    <header className="header">
      <button className="header__menu" onClick={onMenuClick}>
        <MenuIcon />
      </button>
      <h1 className="header__title">AI Chatbot</h1>
      <div className="header__spacer" />
    </header>
  );
}
