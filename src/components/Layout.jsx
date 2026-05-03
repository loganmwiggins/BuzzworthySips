import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Nav from './Nav';
import '../stylesheets/ss-components/Layout.css';

function Layout() {
    const location = useLocation();
    const hideNavRoutes = [ "/maintenance" ]; // Define routes where Nav should be hidden

    return (
        <div className="layout-wrapper">
            {!hideNavRoutes.includes(location.pathname) && <Nav />}

            <div className="app-content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;