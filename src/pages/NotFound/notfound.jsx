import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css';

export const NotFound = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 text-center">
      <div className="notfound-card">
        <h1 className="notfound-title">Stránka nenalezena</h1>
        <p className="notfound-text">Omlouváme se, ale požadovaná stránka neexistuje.</p>
        <Link className="notfound-button" to="/">Zpět na domovskou stránku</Link>
      </div>
    </section>
  );
};

export default NotFound;


