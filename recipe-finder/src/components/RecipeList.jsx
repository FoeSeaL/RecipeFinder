import RecipeCard from './RecipeCard';

function RecipeList({ recipes, onRecipeClick }) {
  if (recipes.length === 0) {
    return <p className="no-results">No recipes found. Try another search!</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onClick={() => onRecipeClick(recipe)} 
        />
      ))}
    </div>
  );
}

export default RecipeList;