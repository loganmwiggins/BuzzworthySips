import React from 'react';

import '../stylesheets/ss-components/Nav.css';

function Nav() {
    const handleScrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);

        if (!sectionElement) {
            return;
        }

        sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div className="nav-ctnr">
            <div className="nav-content">
                <button className="nav-home-btn" type="button" onClick={() => handleScrollToSection('home')}>
                    <p className="nav-title">Buzzworthy Sips</p>
                </button>
                <div className="nav-btn-ctnr">
                    <button className="nav-btn" type="button" onClick={() => handleScrollToSection('events')}>
                        <p className="p-sm">Events</p>
                    </button>
                    <button className="nav-btn" type="button" onClick={() => handleScrollToSection('menu')}>
                        <p className="p-sm">Menu</p>
                    </button>
                    <button className="nav-btn" type="button" onClick={() => handleScrollToSection('about-us')}>
                        <p className="p-sm">About Us</p>
                    </button>
                    <button className="nav-btn" type="button" onClick={() => handleScrollToSection('contact')}>
                        <p className="p-sm">Contact</p>
                    </button>
                </div>
                <div>x</div>
            </div>
        </div>
    );
}

export default Nav;