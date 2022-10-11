import React from 'react';

const Option = ({option}) => {
    return (
        <div  className='bg-white p-4 mt-2 shadow rounded-md hover:bg-gray-300'>{option}</div>
    );
};

export default Option;