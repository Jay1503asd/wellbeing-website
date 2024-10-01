import React, { useState } from 'react';
import "./root.css";
import Logo from "../../assets/news_93.png";
import { useNavigate } from 'react-router-dom';
import { FaBrain, FaClipboardList, FaHandsHelping } from 'react-icons/fa';

const RootPage: React.FC = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    function handleClick() {
        navigate("/");
    }

    return (
        <div className="root-container">
            <div className="header">
                <img src={Logo} alt="Logo" height="66px" onClick={handleClick} style={{ cursor: "pointer" }} />
                <div className="header-links">
                    <div className="header-link" onClick={() => navigate("/login")}>Login</div>
                    <div className="header-link" onClick={() => navigate("/register")}>Register</div>
                </div>
            </div>

            <div className="content">
                <p className="title">Student Wellbeing Check</p>
                <p className="description">
                    We care about your overall wellbeing and want to hear from you. This survey is your
                    chance to share your thoughts and feelings about various aspects of your daily life. You will be asked questions about your school experience, relationships with
                    teachers and classmates, and your emotions.
                    <br /> <br />
                    Your responses are anonymous, so please be open and honest. Your feedback
                    will help create a better environment for everyone.
                </p>

                {}
                <button className="feeling-button" onClick={() => setShowDropdown(!showDropdown)}>
                    How are you feeling today?
                </button>

                {}
                {showDropdown && (
                    <div className="dropdown">
                        <button className = "dropdown-button" onClick={() => navigate("/login")}>
                            <span className="emoji">😊 Happy </span>
                        </button>
                        <button className = "dropdown-button" onClick={() => navigate("/login")}>
                            <span className="emoji">😄 Ecstatic </span>
                        </button>
                        <button className = "dropdown-button" onClick={() => navigate("/login")}>
                            <span className="emoji">😐 Neutral </span>
                        </button>
                        <button className = "dropdown-button" onClick={() => navigate("/login")}>
                            <span className="emoji">😢 Sad </span>
                        </button>
                        <button className = "dropdown-button" onClick={() => navigate("/login")}>
                            <span className="emoji">😭 Overwhelmed </span>
                        </button>
                    </div>
                )}

                <p className="survey">Ready to go content</p>

                <div className="features">
                    <div className="feature">
                        <div className="circle">
                            <FaBrain className="icon" />
                        </div>
                        <p className="feature-title">Assessment</p>
                        <p className="feature-description">Assessing your mental health</p>
                    </div>
                    <div className="feature">
                        <div className="circle">
                            <FaClipboardList className="icon" />
                        </div>
                        <p className="feature-title">Report</p>
                        <p className="feature-description">Detailed report</p>
                    </div>
                    <div className="feature">
                        <div className="circle">
                            <FaHandsHelping className="icon" />
                        </div>
                        <p className="feature-title">Resources</p>
                        <p className="feature-description">Resources to seek help</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RootPage;
