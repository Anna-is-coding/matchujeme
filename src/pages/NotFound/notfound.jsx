import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4">Stránka nenalezena</h1>
        <p className="mb-6">Omlouváme se, ale požadovaná stránka neexistuje.</p>
        <Link className="next-button" to="/">Zpět na domovskou stránku</Link>
      </div>
    </section>
  );
};

export default NotFound;


