import React from "react";
import Logo from "../assets/news_93.png"
import { Profile, Notif, Menu } from "../assets/icons";
import "./navbar.css"

const Navbar: React.FC = () => {
    return(
        <div className="navbar">
            <img src={Logo} alt="Logo" height = "66px"/>
            <div className="icons">
                <div style = {{display: "flex", alignItems: "center", cursor: "pointer"}}>
                <Profile />
                username
                </div>
                <div style = {{cursor: "pointer"}}><Notif /></div>
                <div style = {{cursor: "pointer"}}><Menu /></div>

            </div>
        </div>  
    )
}

export default Navbar;