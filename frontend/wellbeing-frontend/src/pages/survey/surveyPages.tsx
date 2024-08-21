import React from 'react';
import Navbar from '../../components/navbar';
import SurveyPage from '../../components/surveyPage';
import { Question } from './survey questions/anger';

export const GeneralPage: React.FC<{ filledQuestions: Question[], setFilledQuestions: (newQuestions: Question[]) => void, handleNavigate: (nextPage: string, index: number) => void }> = ({ filledQuestions, setFilledQuestions, handleNavigate }) => {
  return (
  <>
  <Navbar />
  <SurveyPage 
      questions={filledQuestions} 
      setFilledQuestions={setFilledQuestions} 
      handleNavigate={handleNavigate} 
      nextPage="anger"
      backPage=""
  />
  </>
  );
};

export const AngerPage: React.FC<{ filledQuestions: Question[], setFilledQuestions: (newQuestions: Question[]) => void, handleNavigate: (nextPage: string, index: number) => void }> = ({ filledQuestions, setFilledQuestions, handleNavigate }) => {
    return (
    <>
    <Navbar />
    <SurveyPage 
        questions={filledQuestions} 
        setFilledQuestions={setFilledQuestions} 
        handleNavigate={handleNavigate} 
        nextPage="anxiety"
        backPage="general"
    />
    </>
    );
};

export const AnxietyPage: React.FC<{ filledQuestions: Question[], setFilledQuestions: (newQuestions: Question[]) => void, handleNavigate: (nextPage: string, index: number) => void }> = ({ filledQuestions, setFilledQuestions, handleNavigate }) => {
    return (
    <>
    <Navbar />
      <SurveyPage 
        questions={filledQuestions} 
        setFilledQuestions={setFilledQuestions} 
        handleNavigate={handleNavigate} 
        nextPage="depression"
        backPage="anger"
      />
    </>
    );
};
export const DepressionPage: React.FC<{ filledQuestions: Question[], setFilledQuestions: (newQuestions: Question[]) => void, handleNavigate: (nextPage: string, index: number) => void }> = ({ filledQuestions, setFilledQuestions, handleNavigate }) => {
    return (
    <>
    <Navbar />
      <SurveyPage 
        questions={filledQuestions} 
        setFilledQuestions={setFilledQuestions} 
        handleNavigate={handleNavigate} 
        nextPage="eating-disorder"
        backPage="anxiety"
      
      />
    </>
    );
};

export const EDPage: React.FC<{ filledQuestions: Question[], setFilledQuestions: (newQuestions: Question[]) => void, handleNavigate: (nextPage: string, index: number) => void }> = ({ filledQuestions, setFilledQuestions, handleNavigate }) => {
    return (
    <>
    <Navbar />
      <SurveyPage 
        questions={filledQuestions} 
        setFilledQuestions={setFilledQuestions} 
        handleNavigate={handleNavigate} 
        nextPage="internet"
        backPage="depression"
      />
    </>
    );
};

export const InternetPage: React.FC<{ filledQuestions: Question[], setFilledQuestions: (newQuestions: Question[]) => void, handleNavigate: (nextPage: string, index: number) => void }> = ({ filledQuestions, setFilledQuestions, handleNavigate }) => {
    return (
    <>
    <Navbar />
      <SurveyPage 
        questions={filledQuestions} 
        setFilledQuestions={setFilledQuestions} 
        handleNavigate={handleNavigate} 
        nextPage="report"
        backPage="eating-disorder"
      />
    </>
    );
};


