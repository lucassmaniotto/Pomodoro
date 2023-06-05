import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Menu() {
  return (
    <header className="menu">
      <nav className="menu__nav">
        <Link className="menu__link" to="/">
          Pomodoro
        </Link>
        <Link className="menu__link" to="/configurations">
          Configurações
        </Link>
      </nav>
    </header>
  );
}
