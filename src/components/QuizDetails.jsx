import React from 'react';
import Option from './Option';

const QuizDetails = ({qus}) => {
    
    const {question,options,id,correctAnswer}=qus
    console.log(correctAnswer)
    return (
        <div className='w-[96%] lg:w-[50%] mx-auto bg-orange-200 mt-8 p-8 border rounded-md'>
            <h2 className='text-3xl'> Quiz:{id.slice(23,25)}{question} </h2>
            <p>correct Asn:</p>
            {
              options.map(option=> <Option 
                option={option}
                ></Option>)
            }
        </div>
    );
};

export default QuizDetails;