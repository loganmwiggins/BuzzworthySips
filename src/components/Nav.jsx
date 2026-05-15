import React from 'react';

import '../stylesheets/ss-components/Nav.css';

function Nav() {
    return (
        <div className="nav-ctnr">
            <div className="df aic jcsb g4">
                <p className="nav-title">Buzzworthy Sips</p>
                <div className="nav-btn-ctnr">
                    <button className="nav-btn">
                        <p className="p-sm">Events</p>
                    </button>
                    <button className="nav-btn">
                        <p className="p-sm">Menu</p>
                    </button>
                    <button className="nav-btn">
                        <p className="p-sm">About Us</p>
                    </button>
                    <button className="nav-btn">
                        <p className="p-sm">Contact</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nav;