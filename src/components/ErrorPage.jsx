import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const error= useRouteError()
    
    return (
        <div className='w-[450px] h-[500px] flex flex-col justify-center items-center mx-auto'>
            <h2 className='text-4xl text-stone-700 font-bold'>OPPS! An error Ocurred</h2>
            <h1 className='text-5xl text-Center'>4<span className='text-blue-500'>0</span>4</h1>
           {
            error && (
                <div>
                    <p className=' text-stone-700 text-lg'>{error.statusText || error.message}</p>
                </div>
            )
           }
            <button className='btn bg-[#007D7C] mt-4'><Link to='/home'>Back  to HOme</Link></button>
        </div>
    );
};

export default ErrorPage;