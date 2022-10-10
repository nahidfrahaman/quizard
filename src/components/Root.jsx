import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHeader from './NavbarHeader';

const Root = () => {
    return (
        <div>
            <NavbarHeader></NavbarHeader>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;