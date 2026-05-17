import React from 'react';

import '../../stylesheets/ss-components/home/HomeAbout.css';

function HomeAbout() {
    return (
        <section id="about-us" className="home-section home-section-about">
            <div className="home-section-inner">
                <div className="home-section-header">
                    <div className="tal">
                        <p className="p-sm home-section-kicker">About Us</p>
                        <h1 className="serif">Service-First, Flavor-Forward</h1>
                    </div>
                </div>
                <p className="home-section-copy">
                    Buzzworthy Sips is a family-friendly, family-owned dirty soda pop-up serving delicious dirty sodas and energy-drink mixes across the Treasure Coast.
                </p>
            </div>
        </section>
    );
}

export default HomeAbout;
