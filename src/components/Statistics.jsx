import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis,
    YAxis
} from "recharts";




const Statistics = () => {

    const loaddata= useLoaderData()
     const data= loaddata.data

     
        
    
    return (
       <ResponsiveContainer className='mt-12 mx-auto' width="80%" height={400}>
         <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
      </LineChart>
       </ResponsiveContainer>
    );
};

export default Statistics;