import React from 'react';
import { NavLink } from 'react-router-dom';


const Option = ({option,handleToQuizAns}) => {
    return (
        <div onClick={()=>handleToQuizAns(option)} className='bg-white p-4 mt-2 shadow rounded-md hover:bg-gray-300'>
            <NavLink style={({isActive, isPending})=>{
                return {
                    color: isActive? 'blue': 'white'
                }
            } }>{option}</NavLink>
        </div>
    );
};

export default Option;