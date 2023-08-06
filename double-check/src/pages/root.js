import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

function root() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default root;
