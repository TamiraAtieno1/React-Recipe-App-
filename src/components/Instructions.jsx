import React from "react";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
let vId="";

const Instructions= () =>{
    const [item, setItem]= useState();
    const{MealId}=useParams();
    const recipe = useLocation().state
    console.log(recipe)
    // if(MealId!="")
    // {
    //     fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         setItem(data.meals[0]);
    //     })
    // }
    const url= recipe.strYoutube;
    const str=url.split("=");
    vId=str[str.length-1];
    return(
        <>
                    <div className=" content">
                        <div className="col img"> 
                            <img src={recipe.strMealThumb} alt="" />
                        </div>
                        <div className="inner-content">
                             <h1 className="headings">{recipe.strMeal}</h1>
                             <h2 className="headings">{recipe.strArea}</h2>
                             <h3 className="headings">{recipe.strCategory}</h3>
                        </div>
                    </div>
                    <div className="recipe-details">
                        <div className="ingredients">
                             <h2>Ingredients</h2><br />
                             <h4>{recipe.strIngredient1} :{recipe.strMeasure1}</h4>
                             <h4>{recipe.strIngredient2} :{recipe.strMeasure2}</h4>
                             <h4>{recipe.strIngredient3} :{recipe.strMeasure3}</h4>
                             <h4>{recipe.strIngredient4} :{recipe.strMeasure4}</h4>
                             <h4>{recipe.strIngredient5} :{recipe.strMeasure5}</h4>
                             <h4>{recipe.strIngredient6} :{recipe.strMeasure6}</h4>
                             <h4>{recipe.strIngredient7} :{recipe.strMeasure7}</h4>
                             <h4>{recipe.strIngredient8} :{recipe.strMeasure8}</h4>
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2><br />
                            <h4>{recipe.strInstructions}</h4>
                        </div>
                    </div>
                    <div className="video">
                         <iframe width="100%" height="515" src={`https://www.youtube.com/embed/${vId}`}>
                         </iframe>
                    </div>

        </>
    )
}

export default Instructions;