import React from 'react';

import '../../stylesheets/ss-components/home/HomeHero.css';

function HomeHero() {
    return (
        <section id="home" className="home-section home-section-hero">
            <div className="home-section-inner">
                <div className="home-hero-banner">
                    <p className="p-sm home-section-kicker">Buzzworthy Sips</p>
                    <h1 className="serif">Sip Dirty & Crunch Happy<br/>with Buzzworthy Sips.</h1>
                    <button
                        type="button"
                        className="hero-cta-btn"
                        onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    >
                        Find Us
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
