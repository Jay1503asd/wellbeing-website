import React from "react";
import "./survey.css";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import { Survey } from "../../assets/icons";

const SurveyHome: React.FC = () => {
    return(
        <div className="page-container">
            <Navbar />
            <Header page = "Surveys"/>
            <div className = "dashboard-description">
                <div style = {{color: "#1E3263", margin: "0rem"}}><Survey  height = "100px" width = "100px"/></div>
                <p style = {{color: "#1E3263", margin: "0rem", fontFamily: "Jost, sans-serif", fontWeight: "600", fontSize: "60px"}}> Take the Survey </p>
                <p style = {{fontFamily: "Jost, sans-serif", margin: "0rem 0rem 1rem 0rem", fontSize: "24px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Ut maximus tellus massa, nec dictum arcu <br /> pulvinar ac. Nulla aliquam accumsan rutrum.</p>
                <button style = {{marginTop: "2rem"}}>
                    Take the Survey
                </button>
            </div>
        </div>
    )
}

export default  SurveyHome;