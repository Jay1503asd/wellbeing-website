import React, { useState } from "react";
import "./header.css";
import { Speed, Survey, Profile, Feedback } from "../assets/icons";
import {useNavigate} from "react-router-dom";

interface BoxProps {
  icon: React.ReactElement;
  text: string;
  page: string;
}

const Box: React.FC<BoxProps> = ({ icon, text, page }) => {
  const [isActive, setIsActive] = useState(text == page);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive(!isActive ? !isActive : isActive);
    navigate(`/${text.toLowerCase()}`)

  };

  return (
    <div className={`box ${isActive ? "active" : ""}`} onClick={handleClick}>
      {icon} {text}
    </div>
  );
};

const Header: React.FC<any> = ({page}) => {
  return (
    <div className="header-container">
      <Box icon={<Speed />} text="Dashboard" page = {page}/>
      <Box icon={<Survey />} text="Surveys" page = {page}/>
      <Box icon={<Profile />} text="Profile" page = {page}/>
      <Box icon={<Feedback />} text="Feedback" page = {page}/>
    </div>
  );
};

export default Header;