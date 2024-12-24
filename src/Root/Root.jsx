import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
             <Navbar></Navbar>
            <div className='min-h-[calc(100vh-324px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;