import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import burgerIcon from './icons/burgermenu.svg';

export const Header = () => {
  return (
    <header>
      <img className="burgermenu" src={burgerIcon}></img>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Domů</NavLink>
          </li>
          <li>
            <NavLink to="/facts">Vše o matcha</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Kvíz</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recepty</NavLink>
          </li>
          <li>
            <NavLink to="/stepbystep">Příprava krok za krokem</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
