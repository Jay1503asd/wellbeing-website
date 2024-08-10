import React from "react";
import "./survey.css";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { Survey } from "../../assets/icons";
import { useNavigate } from "react-router-dom"

const SurveyHome: React.FC = () => {
    const navigate = useNavigate();
    return(
        <div className="page-container">
            <Navbar />
            <Header page = "Surveys"/>
            <div className = "dashboard-description">
                <div style = {{color: "#FD8C2D", marginTop: "2rem"}}><Survey  height = "100px" width = "100px"/></div>
                <p style = {{color: "#FD8C2D", margin: "0rem", fontFamily: "Jost, sans-serif", fontWeight: "600", fontSize: "60px"}}> Take the Survey </p>
                <p style = {{fontFamily: "Jost, sans-serif", margin: "0rem 0rem 1rem 0rem", fontSize: "24px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Ut maximus tellus massa, nec dictum arcu <br /> pulvinar ac. Nulla aliquam accumsan rutrum.</p>
                <button style = {{marginTop: "2rem"}} onClick={() => navigate("/anger")}>
                    Take the Survey
                </button>
            </div>
        </div>
    )
}

export default  SurveyHome;