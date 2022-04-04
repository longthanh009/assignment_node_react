import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import HeaderWebsite from '../../components/HeaderWebsite';

const LayoutWebsite = () => {
    return (
        <div>
            <HeaderWebsite/>
            <main >
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default LayoutWebsite