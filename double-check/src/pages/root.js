import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../GlobalStyle';

function root() {
    return (
        <>
            <GlobalStyles />
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default root;
