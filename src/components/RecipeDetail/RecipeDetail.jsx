import React from 'react';
import './RecipeDetail.css';

export const RecipeDetail = ({ recipe }) => (
  <article className="detail">
    <h1>{recipe.title}</h1>
    <img src={recipe.image} alt={recipe.title} />
    {/* tady pak ingredience a postup */}
  </article>
);
