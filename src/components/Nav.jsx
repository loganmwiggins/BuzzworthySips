import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../stylesheets/ss-components/Nav.css';

function Nav() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } });
            return;
        }

        const sectionElement = document.getElementById(sectionId);

        if (!sectionElement) {
            return;
        }

        sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const handleHomeClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
            return;
        }

        handleScrollToSection('home');
    };

    return (
        <header className="nav-ctnr">
            <div className="nav-content">
                <button
                    className="nav-home-btn"
                    type="button"
                    onClick={handleHomeClick}
                    aria-label="Scroll to hero section"
                >
                    <img src="/assets/icons/bee.svg" alt="Bee" draggable="false" />
                    <span className="nav-title serif">Buzzworthy Sips</span>
                </button>
                <div className="nav-btn-ctnr">
                    <button className="nav-btn" type="button" onClick={() => handleScrollToSection('events')}>
                        <span className="p-sm">Events</span>
                    </button>
                    <button className="nav-btn" type="button" onClick={() => handleScrollToSection('menu')}>
                        <span className="p-sm">Menu</span>
                    </button>
                    <button className="nav-btn" type="button" onClick={() => handleScrollToSection('about-us')}>
                        <span className="p-sm">About Us</span>
                    </button>
                    <button className="nav-btn" type="button" onClick={() => handleScrollToSection('contact')}>
                        <span className="p-sm">Contact</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Nav;