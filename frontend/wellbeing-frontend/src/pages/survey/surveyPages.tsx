import React from 'react';
import Navbar from '../../components/navbar';
import SurveyPage from '../../components/surveyPage';
import { anger } from './survey questions/anger';
import { anxiety } from './survey questions/anxiety';
import { depression } from './survey questions/depression';
import { ed } from './survey questions/ed';
import { internet } from './survey questions/internet';

export const AngerPage: React.FC = () => {
    return (
        <div> 
            <Navbar />
            <SurveyPage questions={anger} nextPage = "anxiety"/>
        </div>
    )
}

export const AnxietyPage: React.FC = () => {
    return (
        <div> 
            <Navbar />
            <SurveyPage questions={anxiety} nextPage = "depression"/>
        </div>
    )
}

export const DepressionPage: React.FC = () => {
    return (
        <div> 
            <Navbar />
            <SurveyPage questions={depression} nextPage = "eating-disorder"/>
        </div>
    )
}

export const EDPage: React.FC = () => {
    return (
        <div> 
            <Navbar />
            <SurveyPage questions={ed} nextPage = "internet"/>
        </div>
    )
}

export const InternetPage: React.FC = () => {
    return (
        <div> 
            <Navbar />
            <SurveyPage questions={internet} nextPage = "submit"/>
        </div>
    )
}

