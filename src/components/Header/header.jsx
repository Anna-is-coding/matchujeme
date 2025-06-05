import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import burgerIcon from './icons/burgermenu.svg';

export const Header = () => {
  return (
    <header className="shadow-md">
      <div className="navbar" style={{ backgroundColor: '#3b5704', color: '#fff' }}>
        {/* MOBILE MENU */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><NavLink to="/">Domů</NavLink></li>
              <li><NavLink to="/facts">Poznej matchu</NavLink></li>
              <li><NavLink to="/stepbystep">Příprava</NavLink></li>
              <li><NavLink to="/recipes">Recepty</NavLink></li>
              <li><NavLink to="/quiz">Kvíz</NavLink></li>
            </ul>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-1000 rounded-box gap-x-18">
            <li><NavLink to="/">Domů</NavLink></li>
            <li><NavLink to="/facts">Poznej matchu</NavLink></li>
            <li><NavLink to="/stepbystep">Příprava</NavLink></li>
            <li><NavLink to="/recipes">Recepty</NavLink></li>
            <li><NavLink to="/quiz">Kvíz</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

