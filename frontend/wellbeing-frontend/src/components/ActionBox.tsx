import React from "react";
import "./ActionBox.css"

interface ActionBoxProps {
    heading1: string;
    heading2: string;
    text?: string;
    buttonText: string;
} 

const ActionBox: React.FC<ActionBoxProps> = ({heading1, heading2, text, buttonText}) => {
    return (
        <div className="action-box">
            <div className="heading1">
                {heading1}
            </div>
            <div className="heading2">
                {heading2}
            </div>
            <div className="text">
                {text ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus tellus massa, nec dictum arcu pulvinar ac. Nulla aliquam accumsan rutrum."}
            </div>
            <button>
                {buttonText}
            </button>
        </div>
        
    )
}

export default ActionBox;