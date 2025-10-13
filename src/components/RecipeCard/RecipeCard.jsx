import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

export const RecipeCard = ({ recipe }) => (
  <Link to={`/recipes/${recipe.id}`} className="card">
    <picture>
      <source srcSet={recipe.image.replace('.png', '.webp')} type="image/webp" />
      <img src={recipe.image} alt={recipe.title} loading="lazy" decoding="async" width="640" height="220" />
    </picture>
    <h3>{recipe.title}</h3>
  </Link>
);
