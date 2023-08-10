import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import React from 'react'
import "./styles/index.scss"
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Settings from './pages/Settings'

import SearchBar from './components/SearchBar'
import RecipeCard from './components/RecipeCard'
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


function App() {
 

  return (
    <Router>
      <NavBar />
      <div className='container main'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;







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

      // const [isLoading, setIsLoading] = useState(false);
      // const [query, setQuery] = useState("");
      // const [recipes, setRecipes] = useState([]);
      
      // // search for the recipe
      // const searchRecipes = async () => {
      //   setIsLoading(true);
      //   const url = searchApi + query
      //   const res = await fetch(url);
      //   const data = await res.json();
      //   //console.log(data)
      //   setRecipes(data.meals);
      //   setIsLoading(false);
      // };
    
      // useEffect(() => {
      //   searchRecipes()
      // }, []);
    
      // const handleSubmit = (event) => {
      //   event.preventDefault();
      //   searchRecipes();
      // }