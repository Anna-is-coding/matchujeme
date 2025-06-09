import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeDetail.css';

export const RecipeDetail = ({ recipe }) => (
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
        <p className="servings">{recipe.servings} porcí</p>

        <section className="ingredients">
          <h3>Ingredience</h3>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </section>

        <section className="instructions">
          <h3>Postup</h3>
          <ol>
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  </article>
);
