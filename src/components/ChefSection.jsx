import React from "react";
import ChefsCard from "./ChefsCard";

const ChefSection=()=>{
    return(
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                <ChefsCard/>
                <ChefsCard/>
                <ChefsCard/>
                <ChefsCard/>
                <ChefsCard/>
                <ChefsCard/>
            </div>
        </div>
    )
}

export default ChefSection;