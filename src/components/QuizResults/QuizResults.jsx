import React from 'react';
import './QuizResults.css';

export const QuizResults = ({ resultKeys, results }) => {
  // Vykreslíme pouze, pokud máme jediný výsledek
  if (resultKeys.length !== 1) return null;

  const { title, description, tip } = results[resultKeys[0]];

  return (
    <div className="result-container">
      <h2>Výsledek: {title}</h2>
      <p>{description}</p>
      <p>
        <em>{tip}</em>
      </p>
      <button className="next-button" onClick={() => window.location.reload()}>
        Zkusit znovu
      </button>
    </div>
  );
};
