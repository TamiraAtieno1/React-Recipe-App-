import React from "react";
import ChefsCard from "./ChefsCard";

const ChefSection=()=>{
    const chefs = [
        {
            name: "Juan Carlos",
            img: "/images/top-chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/images/top-chefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/images/top-chefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/images/top-chefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "American",
        },
        {
            name: "Blake Lively",
            img: "/images/top-chefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "French",
        },
        {
            name: "Ben Affleck",
            img: "/images/top-chefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return(
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                {/* <ChefsCard/>
                <ChefsCard/>
                <ChefsCard/>
                <ChefsCard/>
                <ChefsCard/>
                <ChefsCard/> */}
                {chefs.map(chef => <ChefsCard key={chef.name} chef={chef}/>)}
            </div>
        </div>
    )
}

export default ChefSection;