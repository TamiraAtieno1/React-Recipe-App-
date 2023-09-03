import React from "react";
import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";

const IntroSection=()=>{
    const images = [
        "/images/gallery/img_1.jpg",
        "/images/gallery/img_2.jpg",
        "/images/gallery/img_3.jpg",
        "/images/gallery/img_4.jpg",
        "/images/gallery/img_5.jpg",
        "/images/gallery/img_6.jpg",
        "/images/gallery/img_7.jpg",
        "/images/gallery/img_8.jpg",
        "/images/gallery/img_9.jpg",
    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">TheRecipe is a place where you can satisfy your soul and tummy with delicious food recipes of all cuisine. So start exploring now for free recipes! </p>
                <Link to={'/recipes'}><button className="btn">explore now </button></Link>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"}/>
                )) }
            </div>
        </div>
    )
}

export default IntroSection;