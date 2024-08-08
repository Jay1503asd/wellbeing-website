import React from 'react';
import "./root.css";
import Logo from "../../assets/news_93.png"
import { useNavigate } from 'react-router-dom';

const RootPage: React.FC = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }
    return (
        <div className="root-container">
            <div className="header">
                <img src={Logo} alt="Logo" height = "66px" onClick={handleClick} style = {{cursor: "pointer"}}/>
                <div className="header-links">
                    <div className="header-link">Login</div>
                    <div className="header-link">Register</div>
                </div>
            </div>
            <div className="content">
                <p className="title">Your Student Wellbeing Check</p>
                <p className="description">
                    We care about your overall wellbeing and want to hear from you. This survey is your
                    chance to share your thoughts and feelings about various aspects of your daily life. You will be asked questions about your school experience, relationships with
                    teachers and classmates, and your emotions.
                    <br /> <br />
                    Your responses are anonymous, so please be open and honest. Your feedback
                    will help create a better environment for everyone.
                </p>
                <button>
                    Take the Survey
                </button>
                <p className = "survey"> What's in the survey </p>
                <div style = {{display: "flex", justifyContent: "space-between", paddingBottom: "2rem"}}>
                    <div style = {{display: "flex", flexDirection: "column"}}>
                        <div className = "circle" />
                        <p style = {{fontSize: "24px", fontWeight: "500"}}>Feature 1</p>
                    </div>
                    <div style = {{display: "flex", flexDirection: "column"}}>
                        <div className = "circle" />
                        <p style = {{fontSize: "24px", fontWeight: "500"}}>Feature 2</p>
                    </div>
                    <div style = {{display: "flex", flexDirection: "column"}}>
                        <div className = "circle" />
                        <p style = {{fontSize: "24px", fontWeight: "500"}}>Feature 3</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default RootPage;