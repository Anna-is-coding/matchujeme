import React from 'react';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import './RecipeGrid.css';

export const RecipeGrid = ({ list }) => (
  <div className="grid">
    {list.map((r) => (
      <RecipeCard key={r.id} recipe={r} />
    ))}
  </div>
);
