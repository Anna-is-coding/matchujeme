import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export const RecipeCard = ({ recipe }) => (
  <Link to={`/recipes/${recipe.id}`} className="card">
    <img src={recipe.image} alt={recipe.title} />
    <h3>{recipe.title}</h3>
  </Link>
);
