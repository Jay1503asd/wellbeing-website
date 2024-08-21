import ActionBox from "../../components/ActionBox";
import "./dashboard.css"
import React from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import { Speed } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="dashboard-container">
            <Navbar />
            <Header page = "Dashboard"/>
            <div className = "dashboard-description">
                <div style = {{color: "#FD8C2D", margin: "0rem"}}><Speed  height = "100px" width = "100px"/></div>
                <p style = {{color: "#FD8C2D", margin: "0rem", fontFamily: "Jost, sans-serif", fontWeight: "600", fontSize: "60px"}}> My Dashboard </p>
                <p style = {{fontFamily: "Jost, sans-serif", margin: "0rem 0rem 1rem 0rem", fontSize: "24px"}}> Keep track of all the activities related to your <br /> Student Wellbeing Survey via the dashboard.</p>
            </div>
            <div className="action-boxes">
                <ActionBox heading1 = "get started" heading2="take the survey" buttonText="take the survey" color = "#fef3c7" onClick = {() => navigate("/surveys")}/>
                <ActionBox heading1 = "insights" heading2="survey report" buttonText="gain insights" color = "#fcd34d" onClick = {() => navigate("/report")}/> 
                <ActionBox heading1 = "keep updated" heading2="view your notifications" buttonText="manage my notifications" onClick = {() => navigate("")}color = "#bef264"/> 
                <ActionBox heading1 = "discover" heading2="support resources" buttonText="learn more" onClick = {() => navigate("/strategies")}color = "#e879f9"/> 
                <ActionBox heading1 = "feedback" heading2="message us" buttonText="send feedback" color = "#a78bfa"/> 
            </div> 
        </div>
    )
}

export default Dashboard