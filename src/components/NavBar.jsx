import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import {  faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

const NavBar=()=>{
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    const closeSidebar=()=>{
        setShowSidebar(false)
    }
    return (
     <>
            <div className="navbar container">
                <a href="#!" className="logo">TheF<span>oo</span>dies<span>hub</span></a>
                <div className="nav-links">
                    { links.map(link => (
                        <a href="#!" key={link.name}>{link.name}</a>
                    ))}
                    {/* <a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">Settings</a> */}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <SideBar close={closeSidebar} links={links}/>}
     </>
    )
}

export default NavBar;