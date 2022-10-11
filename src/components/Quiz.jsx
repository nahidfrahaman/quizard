import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizSection from './QuizSection';

const Quiz = () => {
    const quizdata= useLoaderData();
    const quizDatas = quizdata.data
   console.log(quizDatas)
    return (
        <div>
           <QuizSection quizDatas={quizDatas}></QuizSection>
        </div>
    );
};

export default Quiz;