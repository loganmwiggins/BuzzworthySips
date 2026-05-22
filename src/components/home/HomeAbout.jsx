import React from 'react';

import '../../stylesheets/ss-components/home/HomeAbout.css';

const ABOUT_POINTS = [
    'Family-friendly service that still feels premium.',
    'Bright flavor combinations and custom mix-ins.',
    'Flexible setups for markets, parties, and events.',
];

const ABOUT_STATS = [
    { value: '100%', label: 'Built around your branding' },
    { value: '1', label: 'Strong visual system' },
    { value: '∞', label: 'Room for future photography' },
];

function HomeAbout() {
    return (
        <section id="about-us" className="home-section home-section-about">
            <div className="home-section-inner">
                <div className="home-section-header home-about-header">
                    <div className="home-section-header-title">
                        <p className="p-sm home-section-kicker">About Us</p>
                        <h1 className="serif">Service-First, <i>Flavor-Forward</i></h1>
                        {/* <p className="home-section-copy">
                            This area mirrors the screenshot’s mix of quote-style panels and soft imagery.
                            It can hold a brand story, founder note, or a photo collage without changing
                            the overall design language.
                        </p> */}
                    </div>
                </div>

                <div className="home-about-layout">
                    <article className="home-about-quote-card">
                        <p className="home-about-quote-mark">“</p>
                        {/* <h2 className="serif">
                            Buzzworthy Sips is a family-owned dirty soda pop-up serving playful drinks and
                            polished event setups across the Treasure Coast.
                        </h2>
                        <p className="p-sm home-about-quote-copy">
                            We care about the drink, the setup, and the feeling the whole experience leaves behind.
                        </p> */}
                        <h2 className="serif">
                            We care about the drink, the setup, and the feeling the whole experience leaves behind.
                        </h2>
                        <br />
                        <p className="p-sm home-about-quote-copy">
                            Buzzworthy Sips is a family-owned dirty soda pop-up serving playful drinks and
                            polished event setups across the Treasure Coast.
                        </p>

                        <ul className="home-about-points">
                            {ABOUT_POINTS.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </article>

                    <div className="home-about-visuals" aria-hidden="true">
                        <div className="home-about-image-card home-about-image-card-main">
                            <span>About image placeholder</span>
                        </div>
                        <div className="home-about-image-card home-about-image-card-accent">
                            <span>Secondary image placeholder</span>
                        </div>

                        <div className="home-about-stat-grid">
                            {ABOUT_STATS.map((stat) => (
                                <article key={stat.label} className="home-about-stat-card">
                                    <p className="home-about-stat-value">{stat.value}</p>
                                    <p className="p-sm home-about-stat-label">{stat.label}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAbout;
