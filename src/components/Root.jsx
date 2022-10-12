import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import NavbarHeader from "./NavbarHeader";


export const TopicContext= createContext([])

const Root = () => {
    const loaderData= useLoaderData()
    const topicsData= loaderData.data
    
    
    return (
        <TopicContext.Provider value={topicsData}>
            <NavbarHeader></NavbarHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </TopicContext.Provider>
    );
};

export default Root;