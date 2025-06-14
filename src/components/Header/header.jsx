import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import burgerIcon from '/img/burgermenu.svg';
import closeIcon from '/img/matchaclose.png';
import logo from '/img/matchujeme-logo.svg';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <img
        className="burgermenu"
        src={open ? closeIcon : burgerIcon}
        onClick={toggleMenu}
        alt="Menu toggle"
      />

      <div className={open ? 'navmob open' : 'navmob closenavmob'}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Domů
            </NavLink>
          </li>
          <li>
            <NavLink to="/facts" onClick={toggleMenu}>
              Poznej Matchu
            </NavLink>
          </li>
          <li>
            <NavLink to="/stepbystep/1" onClick={toggleMenu}>
              Příprava krok za krokem
            </NavLink>
          </li>
          <li>
            <NavLink to="/recipes" onClick={toggleMenu}>
              Recepty
            </NavLink>
          </li>
          <li>
            <NavLink to="/quiz" onClick={toggleMenu}>
              Kvíz
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Domů</NavLink>
          </li>
          <li>
            <NavLink to="/facts">Poznej Matchu</NavLink>
          </li>
          <li>
            <NavLink to="/stepbystep/1">Příprava krok za krokem</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recepty</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Kvíz</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
