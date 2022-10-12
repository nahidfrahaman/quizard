import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Option from './Option';




const QuizDetails = ({qus,quizNO}) => {
    
    const {question,options,correctAnswer}=qus
    console.log(correctAnswer)

    const [color, setColor]= useState('');

    const handleToQuizAns =(option)=>{
        
         if (option === correctAnswer){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Congrats! Your answer is right',
                showConfirmButton: false,
                timer: 1000
              })
              setColor('bg-blue-500')
         }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops... ',
                text: 'Your Answer is wrong!',
                
              })
         }
    }

    return (
        <div className='w-[96%] lg:w-[50%] mx-auto bg-orange-200 mt-8 p-8 border rounded-md'>
            <h2 className='text-3xl'> Quiz:{quizNO}{question} </h2>
            <p>correct Asn:</p>
            {
              options.map((option, index)=> <Option 
              handleToQuizAns={handleToQuizAns}
                color={color} 
                key={index +1}
                option={option}
                ></Option>)
            }
        </div>
    );
};

export default QuizDetails;