import React from 'react';


const Option = ({option,handleToQuizAns,color}) => {
    console.log(color)
    
    
    
    return (
        <div onClick={()=>handleToQuizAns(option)} className='bg-white mt-5 p-4'>
            <input  type="radio" id={option}  />
             <label htmlFor=""> {option}</label>
        </div>
    );
};

export default Option;