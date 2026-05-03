import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from './Nav';
import '../stylesheets/ss-components/Layout.css';

function Layout() {
    const location = useLocation();

    return (
        <div className="layout-wrapper">
            <Nav />
            <div className="app-content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;