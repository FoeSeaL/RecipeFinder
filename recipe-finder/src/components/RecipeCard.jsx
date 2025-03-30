function RecipeCard({ recipe, onClick }) {
    return (
      <div className="recipe-card" onClick={onClick}>
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        <div className="recipe-content">
          <h2 className="recipe-title">{recipe.title}</h2>
          <p className="recipe-time">{recipe.cookTime} mins</p>
          <div className="recipe-tags">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="recipe-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default RecipeCard;