import React from 'react';

import { navigateToUrl } from 'single-spa';

import './navbar.css';

const LINKS = [
  {
    name: 'Модуль 1',
    link: '/',
  },
  {
    name: 'Модуль 2',
    link: '/two',
  },
];

export default function Root(props) {
  return (
    <ul className="home-navbar__links">
      {LINKS.map((link) => {
        return (
          <li
            key={`home-navbar__${link.name}`}
            onClick={() => navigateToUrl(link.link)}
          >
            <p>{link.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
