import React from "react";
import Logo from "../assets/news_93.png"
import { Profile, Notif, Menu } from "../assets/icons";
import "./navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/")
    }
    return(
        <div className="navbar">
            <img src={Logo} alt="Logo" height = "66px" style = {{cursor: "pointer"}} onClick={handleClick}/>
            <div className="icons">
                <div style = {{display: "flex", alignItems: "center"}}>
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