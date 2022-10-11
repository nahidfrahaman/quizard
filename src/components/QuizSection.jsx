import React from 'react';
import QuizDetails from './QuizDetails';

const QuizSection = ({quizDatas}) => {
    const {total,name,questions,}=quizDatas
    console.log(questions)
    return (
        <div>
            <h1 className='text-3xl font-bold text-[#007D7C] text-center mt-5 border rounded'>Quiz of {name}</h1>
            
            <p className='text-2xl text-gray-400 font-bold text-center mt-3'>total quiz: {total}</p>
           <div className='mt-8 text-cente'>
           {
            questions.map(qus=> <QuizDetails
                qus={qus} 
                key={qus.id}></QuizDetails>)
           }
           </div>
           
        </div>
    );
};

export default QuizSection;