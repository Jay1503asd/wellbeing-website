import React from 'react';
import { FaSmile, FaFrown, FaMeh, FaGrinBeam, FaAngry } from 'react-icons/fa';
import { Question } from '../pages/survey/survey questions/anger';
import { useLocation } from "react-router-dom";
import "./surveyPage.css"

interface SurveyPageProps {
  questions: Question[];
  setFilledQuestions: (newQuestions: Question[]) => void;
  handleNavigate: (nextPage: string, index: number) => void;
  nextPage: string;
  backPage: string;
}

const SurveyPage: React.FC<SurveyPageProps> = ({ questions, setFilledQuestions, handleNavigate, nextPage, backPage }) => {
  const location = useLocation();

  function handleOptionChange(index: number, value: number, reversal: boolean) {
    const newResponses = [...questions];
    newResponses[index] = { ...newResponses[index], response: reversal ? 6 - value : value };
    setFilledQuestions(newResponses);
  }
  return (
    <div className="survey-container">
      <div className="instructions">
        <p>Read each statement and select the appropriate response to indicate how you feel right now, that is, at this very moment. Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best.</p>
      </div>
      <table className="survey-table">
        <tbody>
          {questions?.map((question, index) => (
            <tr key={index} className={index % 2 === 0 ? 'row-even' : 'row-odd'}>
              <td>
                <div className="question-container">
                  <p className="question-text">{question.question}</p>
                  <div className="options-container">
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="stronglyAgree" onChange={() => handleOptionChange(index, 5, question.reversal)} checked = {question.reversal ? question.response == 1 : question.response == 5}/>
                      <span className="icon-container">{question.reversal ? <FaGrinBeam />: <FaAngry />}</span> Strongly Agree
                    </label>
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="agree" onChange={() => handleOptionChange(index, 4, question.reversal)} checked = {question.reversal ? question.response == 2 : question.response == 4}/>
                      <span className="icon-container">{question.reversal ? <FaSmile />: <FaFrown />}</span> Agree
                    </label>
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="neutral" onChange={() => handleOptionChange(index, 3, question.reversal)}  checked = {question.response == 3}/>
                      <span className="icon-container"><FaMeh /></span> Neutral
                    </label>
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="disagree" onChange={() => handleOptionChange(index, 2, question.reversal)} checked = {question.reversal ? question.response == 4 : question.response == 2}/>
                      <span className="icon-container">{question.reversal ? <FaFrown />: <FaSmile />}</span> Disagree
                    </label>
                    <label className="option-label">
                      <input type="radio" name={`question${index}`} value="stronglyDisagree" onChange={() => handleOptionChange(index, 1, question.reversal)} checked = {question.reversal ? question.response == 5 : question.response == 1}/>
                      <span className="icon-container">{question.reversal ? <FaAngry />: <FaGrinBeam />}</span> Strongly Disagree
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button onClick={() => handleNavigate(backPage, (location.state?.index ?? 0) - 1)}>
        {"Back"}
      </button>
      <button onClick={() => handleNavigate(nextPage, (location.state?.index ?? 0) + 1)}>
        {"Next"}
      </button>
      </div>
    </div>
  );
};

export default SurveyPage;