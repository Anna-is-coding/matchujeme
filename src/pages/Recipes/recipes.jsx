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
    <section className="recipes-section">
      {!id && (
        <>
          <div className="intro">
            <h2>RECEPTY</h2>
            <p>Objev nové chutě a inspiraci pro svou kuchyni</p>
          </div>
          <RecipeGrid list={recipes} />
        </>
      )}

      {id && recipe && <RecipeDetail recipe={recipe} />}
      {id && !recipe && <p>Recept nenalezen 😕</p>}
    </section>
  );
};
