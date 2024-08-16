import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { anger } from '../pages/survey/survey questions/anger.ts';
import { anxiety } from '../pages/survey/survey questions/anxiety.ts';
import { depression } from '../pages/survey/survey questions/depression.ts';
import { ed } from '../pages/survey/survey questions/ed.ts';
import { internet } from '../pages/survey/survey questions/internet.ts';
import { AngerPage, AnxietyPage, DepressionPage, EDPage, InternetPage } from "../pages/survey/surveyPages.tsx";
import { Question } from '../pages/survey/survey questions/anger.ts';
import ReportPage from './report.tsx';

export const SurveyParent: React.FC = () => {
  // Initialize filledQuestions state with empty responses
  const [filledQuestions, setFilledQuestions] = useState<Question[][]>([
    [...anger],
    [...anxiety],
    [...depression],
    [...ed],
    [...internet],
  ]);

  const navigate = useNavigate();

  // Handle navigation with state passing
  const handleNavigate = (nextPage: string, index: number) => {
    navigate(`/surveys/${nextPage}`, { state: { index, filledQuestions } });
  };

  return (
    <Routes>
      <Route path="/anger" element={<AngerPage filledQuestions={filledQuestions[0]} setFilledQuestions={(newQuestions) => {
        const updatedQuestions = [...filledQuestions];
        updatedQuestions[0] = newQuestions;
        setFilledQuestions(updatedQuestions);
      }} handleNavigate={(nextPage) => handleNavigate(nextPage, 0)} />} />

      <Route path="/anxiety" element={<AnxietyPage filledQuestions={filledQuestions[1]} setFilledQuestions={(newQuestions) => {
        const updatedQuestions = [...filledQuestions];
        updatedQuestions[1] = newQuestions;
        setFilledQuestions(updatedQuestions);
      }} handleNavigate={(nextPage) => handleNavigate(nextPage, 0)} />} />

      <Route path="/depression" element={<DepressionPage filledQuestions={filledQuestions[2]} setFilledQuestions={(newQuestions) => {
        const updatedQuestions = [...filledQuestions];
        updatedQuestions[2] = newQuestions;
        setFilledQuestions(updatedQuestions);
      }} handleNavigate={(nextPage) => handleNavigate(nextPage, 0)} />} />

    <Route path="/eating-disorder" element={<EDPage filledQuestions={filledQuestions[3]} setFilledQuestions={(newQuestions) => {
        const updatedQuestions = [...filledQuestions];
        updatedQuestions[3] = newQuestions;
        setFilledQuestions(updatedQuestions);
      }} handleNavigate={(nextPage) => handleNavigate(nextPage, 0)} />} />

    <Route path="/internet" element={<InternetPage filledQuestions={filledQuestions[4]} setFilledQuestions={(newQuestions) => {
        const updatedQuestions = [...filledQuestions];
        updatedQuestions[4] = newQuestions;
        setFilledQuestions(updatedQuestions);
      }} handleNavigate={(nextPage) => handleNavigate(nextPage, 0)} />} />
    
    <Route path = "/report" element = {<ReportPage filledQuestions={filledQuestions} />} />
    </Routes>
  );
};

