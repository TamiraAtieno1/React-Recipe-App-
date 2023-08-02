import { useState, useEffect } from 'react'
import React from 'react'
import "./styles/index.scss"
import NavBar from './components/NavBar'
import IntroSection from './components/IntroSection'
import ImproveSkills from './components/ImproveSkills'
import SearchBar from './components/SearchBar'
import RecipeCard from './components/RecipeCard'
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data)
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <>
      <div className='App'>
      <NavBar />
      <div className='container main'>
          <IntroSection />
          <ImproveSkills />
      </div>
      {/* <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
      </div> */}
      </div>
    </>
  )
}

export default App;
