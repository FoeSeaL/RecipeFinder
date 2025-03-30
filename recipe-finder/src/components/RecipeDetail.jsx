function RecipeDetail({ recipe, onBackClick }) {
    return (
      <div className="recipe-detail">
        <button className="back-button" onClick={onBackClick}>
          &larr; Back to Recipes
        </button>
        
        <div className="recipe-detail-content">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="recipe-detail-image" 
          />
          
          <div className="recipe-detail-info">
            <h1>{recipe.title}</h1>
            
            <div className="recipe-meta">
              <p className="recipe-time">{recipe.cookTime} mins</p>
              <div className="recipe-tags">
                {recipe.tags.map((tag, index) => (
                  <span key={index} className="recipe-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="recipe-ingredients">
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            {recipe.instructions && (
              <div className="recipe-instructions">
                <h2>Instructions</h2>
                <ol>
                  {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
            
            {!recipe.instructions && (
              <div className="recipe-instructions">
                <h2>Instructions</h2>
                <p>Combine all ingredients and cook to your preference. Enjoy!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default RecipeDetail;