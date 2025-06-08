import React from 'react';
import './QuizResults.css';

export const QuizResults = ({ resultKeys, results }) => {
  // Vykreslíme pouze, pokud máme jediný výsledek
  if (resultKeys.length !== 1) return null;

  const key = resultKeys[0];
  const { title, description, tip } = results[key];

  // Mapování klíč → cesta k obrázku ve složce public/img
  const images = {
    zen: '/img/zenPijak.png',
    influencer: '/img/matchaInfluencer.png',
    zdravy: '/img/superFoodNadsenec.png',
    kofein: '/img/kofeinovyZachranar.png',
  };

  const imgSrc = images[key];

  return (
    // přidána třída quiz-results pro snadné cílení CSS
    <section className="quiz-section quiz-results">
      <div className="quiz-container">
        {/* Nadpis jako na úvodní stránce */}
        <h1 className="quiz-title">Jaký typ matcha pijáka jsi?</h1>

        {/* Karta výsledku */}
        <div className="result-card">
          <div className="result-text">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
              <em>{tip}</em>
            </p>
            <button
              className="next-button"
              onClick={() => window.location.reload()}
            >
              Zkusit znovu
            </button>
          </div>
          <div className="result-image">
            <img src={imgSrc} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
};
