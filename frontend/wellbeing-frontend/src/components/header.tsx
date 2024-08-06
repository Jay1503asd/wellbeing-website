import React, { useState } from "react";
import "./header.css";
import { Speed, Survey, Profile, Feedback } from "../assets/icons";
import {useNavigate} from "react-router-dom";

interface BoxProps {
  icon: React.ReactElement;
  text: string;
}

const Box: React.FC<BoxProps> = ({ icon, text }) => {
  const [isActive, setIsActive] = useState(false);
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

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <Box icon={<Speed />} text="Dashboard" />
      <Box icon={<Survey />} text="Surveys" />
      <Box icon={<Profile />} text="Profile" />
      <Box icon={<Feedback />} text="Feedback" />
    </div>
  );
};

export default Header;
