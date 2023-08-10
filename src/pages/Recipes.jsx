import React from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";

const Recipes = () => {
    const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

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
    return(
        <div>
            <PreviousSearches
                isLoading={isLoading}
                query={query}
                setQuery={setQuery}
                handleSubmit={handleSubmit}
            />
            <div className="recipes-container">
            {recipes ? recipes.map(recipe => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
              />
            )) : "No Results."}

            </div>
        </div>
    )
}

export default Recipes;

