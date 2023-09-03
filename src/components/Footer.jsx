import React from "react";

const Footer = () =>{
    return(
        <div className="footer container">
            <div className="footer-section">
                <p className="title">TheRecipesHub.com</p>
                <p>TheRecipesHub is a place where you can find abundant food recipes to soothe your soul. So start exploring now for free recipes!</p>
                <p>&copy; 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>TheRecipesHub@gmail.com</p>
                <p>+254 711 895 052</p>
                <p>Nairobi, Kenya</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    )
}

export default Footer;