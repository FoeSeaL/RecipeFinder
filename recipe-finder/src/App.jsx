import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import recipes from './data/recipes';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      <Header />
      <div className="app">
      <main className="main-content">
        {selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onBackClick={handleBackClick} />
        ) : (
          <>
            <SearchBar onSearch={handleSearch} />
            <RecipeList recipes={filteredRecipes} onRecipeClick={handleRecipeClick} />
          </>
        )}
      </main>
      </div>
    </>
  );
}

export default App;