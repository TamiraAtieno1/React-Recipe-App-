import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard= ({recipe}) => {
    const {
                idMeal,
                strMeal,
                strCategory,
                strMealThumb,
            } = recipe;
    
    let navigate = useNavigate();
    return(
        <div className="recipe-card">
            <img 
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
                pt="65%"
             />
            <div className="recipe-card-info">
                <p className="recipe-title">{strMeal}</p>
                <p className="view-btn" key={recipe.idMeal} onClick={()=>{navigate(`/${recipe.idMeal}`)}}>VIEW RECIPE</p>
            </div>
        </div>
    )
}

export default RecipeCard;

// const RecipeCard=({recipe})=>{
//     const {
//         idMeal,
//         strMeal,
//         strCategory,
//         strMealThumb,
//     } = recipe;

//     return (
//         <div className="card">
//             <img
//                 src={strMealThumb}
//                 alt={strMeal}
//                 className="card-image"
//             />
//             <div className="card-body">
//                 <span className="category">{strCategory}</span>
//                 <h3>{strMeal}</h3>
//                 <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" className="instrucions">Instructions</a>
//             </div>
//         </div>
//     )
// }