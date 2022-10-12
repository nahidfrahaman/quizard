import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import Option from './Option';




const QuizDetails = ({qus,quizNO}) => {

    
    
    const {question,options,correctAnswer}=qus
    console.log(correctAnswer)

    const [color, setColor]= useState();
    const handleTocolor=(col)=>{
       setColor(col)
    }

    const handleToQuizAns =(option)=>{
        
         if (option === correctAnswer){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Congrats! Your answer is right',
                showConfirmButton: false,
                timer: 1000
              })
             
         }else{
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Opps! Your answer is wrong',
                showConfirmButton: false,
                timer: 1000
              })
         }
    }
 

    
    
    const handleToShowAns=()=>{
        
        toast(`Right Answer is: ${correctAnswer}`)
    }

    return (
        <div className='w-[96%] lg:w-[50%] mx-auto bg-orange-200 mt-8 p-8 border rounded-md relative'>
            <h2 className='text-3xl'> Quiz:{quizNO}{question} </h2>
            
            {
              options.map((option, index)=> <Option 
              handleToShowAns={handleToShowAns}
              handleToQuizAns={handleToQuizAns}
              handleTocolor={handleTocolor}
              color={color} 
                key={index +1}
                option={option}
                ></Option>)
            }

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
    );
};

export default QuizDetails;