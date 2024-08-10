import React from 'react';
import './surveyPage.css';
import { FaSmile, FaFrown, FaMeh, FaGrinBeam, FaAngry } from 'react-icons/fa';
import {useNavigate} from "react-router-dom"

interface SurveyPageProps {
  questions: string[];
  nextPage: string;
}

const SurveyPage: React.FC<SurveyPageProps> = ({ questions, nextPage }) => {

  const navigate = useNavigate();
  function handleClick() {
      navigate(`/${nextPage}`);
  }

  return (
    <div className="survey-container">
      <div className="instructions">
        <p>Read each statement and select the appropriate response to indicate how you feel right now, that is, at this very moment. Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best.</p>
      </div>
      <table className="survey-table">
        <tbody>
          {questions.map((question, index) => (
            <tr key={index} className={index % 2 === 0 ? 'row-even' : 'row-odd'}>
              <td>
                <div className="question-container">
                  <p className="question-text">{question}</p>
                  <div className="options-container">
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="stronglyDisagree" />
                      <span className="icon-container"><FaAngry className="icon" /></span> Strongly Disagree
                    </label>
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="disagree" />
                      <span className="icon-container"><FaFrown className="icon" /></span> Disagree
                    </label>
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="neutral" />
                      <span className="icon-container"><FaMeh className="icon" /></span> Neutral
                    </label>
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="agree" />
                      <span className="icon-container"><FaSmile className="icon" /></span> Agree
                    </label>
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="stronglyAgree" />
                      <span className="icon-container"><FaGrinBeam className="icon" /></span> Strongly Agree
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style = {{display: "flex", justifyContent: "flex-end"}}>
        <button onClick={handleClick}>
          {"Next"}
        </button>
      </div>
    </div>
  );
};

export default SurveyPage;
