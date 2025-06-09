import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeDetail.css';

export const RecipeDetail = ({ recipe }) => {
  const [checked, setChecked] = useState(recipe.ingredients.map(() => false));

  const toggleCheck = (idx) => {
    const copy = [...checked];
    copy[idx] = !copy[idx];
    setChecked(copy);
  };

  return (
    <article className="recipe-detail">
      <Link to="/recipes" className="back-button">
        ← Zpět na všechny recepty
      </Link>

      <div className="recipe-card">
        <div className="image-container">
          <img src={recipe.image} alt={recipe.title} />
        </div>

        <div className="content-container">
          <h1>{recipe.title}</h1>

          <section className="ingredients">
            <h3>Ingredience</h3>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() => toggleCheck(i)}
                    />
                    {ing}
                  </label>
                </li>
              ))}
            </ul>
          </section>

          <section className="instructions">
            <h3>Postup</h3>
            <ol>
              {recipe.instructions.map((step, i) => (
                <li key={i}>
                  <span className="step-number">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </article>
  );
};
