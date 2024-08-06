import ActionBox from "../../components/ActionBox";
import "./dashboard.css"
import React from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import { Speed } from "../../assets/icons";

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <Header />
            <div className = "dashboard-description">
                <div style = {{color: "#1E3263", margin: "0rem"}}><Speed  height = "100px" width = "100px"/></div>
                <p style = {{color: "#1E3263", margin: "0rem", fontFamily: "Jost, sans-serif", fontWeight: "600", fontSize: "60px"}}> My Dashboard </p>
                <p style = {{fontFamily: "Jost, sans-serif", margin: "0rem 0rem 1rem 0rem", fontSize: "24px"}}> Keep track of all the activities related to your <br /> Student Wellbeing Survey via the dashboard.</p>
            </div>
            <div className="action-boxes">
                <ActionBox heading1 = "get started" heading2="take the survey" buttonText="take the survey" />
                <ActionBox heading1 = "insights" heading2="survey report" buttonText="take the survey" /> 
                <ActionBox heading1 = "keep updated" heading2="view your notifications" buttonText="take the survey" /> 
                <ActionBox heading1 = "discover" heading2="support resources" buttonText="take the survey" /> 
                <ActionBox heading1 = "feedback" heading2="message us" buttonText="take the survey" /> 
            </div> 
        </div>
    )
}

export default Dashboard