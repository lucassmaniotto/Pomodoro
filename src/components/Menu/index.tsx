import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Menu() {
  return (
    <header className="menu">
      <nav className="menu__nav">
        <h1 className="menu__logo">🍅 PomoApp</h1>
        <div className="menu__separator">
          <Link className="menu__link" to="/">
            Pomodoro
          </Link>
          <Link className="menu__link" to="/configurations">
            Configurações
          </Link>
        </div>
      </nav>
    </header>
  );
}
