import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../../data/recipesData';
import { RecipeGrid } from '../../components/RecipeGrid/RecipeGrid';
import { RecipeDetail } from '../../components/RecipeDetail/RecipeDetail';
import './recipes.css';

export const Recipes = () => {
  const { id } = useParams();
  const recipe = id && recipes.find((r) => r.id === +id);

  return (
    <main className="recipes-page">
      {!id && (
        <>
          <h1>Recepty</h1>
          <RecipeGrid list={recipes} />
        </>
      )}
      {id && recipe && <RecipeDetail recipe={recipe} />}
      {id && !recipe && <p>Recept nenalezen 😕</p>}
    </main>
  );
};
