import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../GlobalStyle';

function Root() {
    return (
        <>
            <GlobalStyles />
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;
