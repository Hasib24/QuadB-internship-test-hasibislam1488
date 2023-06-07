import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <main>
            <Header></Header>
            <Outlet></Outlet>
        </main>
    );
};

export default HomeLayout;