import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const ChefsCard=({chef})=>{
    return(
        <div className="chef-card">
            <img src="/images/top-chefs/img_1.jpg" alt="" />
            <div className="chef-card-info">
                <h3 className="chef-card-name">Juan Carlos</h3>
                <p className="chef-recipe-count">Recipes: <b>10</b></p>
                <p className="chef-cuisine">Cuisine: <b>Mexican</b></p>
                <p className="chef-icons">
                    <FontAwesomeIcon icon={faFacebook}/> 
                    <FontAwesomeIcon icon={faTwitter}/> 
                    <FontAwesomeIcon icon={faInstagram}/> 
                </p>
            </div>
        </div>
    )
}

export default ChefsCard;