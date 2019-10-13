import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';

const App = () => {
  const APP_ID = "582fcb3a";
  const APP_KEY = "11e37304f9b358e897724e5e294ff8a3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("paneer");

  useEffect(() => {
      getRecipe();

  }, [query]);

  const getRecipe= async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);

  }

  const updateSearch = e => {
      setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);

    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch} >

      <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
      <button type="submit" className="search-button"> Search</button>

      </form>

        <div className='recipes'>  {recipes.map(recipe => (
            <Recipe key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}

                    ingredients = {recipe.recipe.ingredients}

                    />
          ))}
        </div>
    </div>
  );
};

export default App;
