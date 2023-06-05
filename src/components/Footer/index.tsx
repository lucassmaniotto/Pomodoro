import React from 'react';
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';

import './styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Deselvolvido por{' '}
        <a
          href="https://github.com/lucassmaniotto"
          target="_blank"
          rel="noreferrer"
        >
          Lucas Smaniotto
        </a>{' '}
        😃
      </p>
      <div className="footer__social">
        <a href="https://github.com/lucassmaniotto">
          <AiFillGithub size={25} />
        </a>
        <a href="https://www.instagram.com/licaaaaaas">
          <AiOutlineInstagram size={25} />
        </a>
        <a href="https://twitter.com/alpiste_punk">
          <AiOutlineTwitter size={25} />
        </a>
      </div>
    </footer>
  );
}
