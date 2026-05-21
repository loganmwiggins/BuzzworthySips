import React from 'react';

import '../../stylesheets/ss-components/home/HomeHero.css';

const HERO_HIGHLIGHTS = [
    'Colorful menu moments',
    'Pop-up ready layouts',
    'Easy image placeholders',
];

const HERO_METRICS = [
    { label: 'Custom flavors', value: '12+' },
    { label: 'Event formats', value: '3' },
    { label: 'Guest favorite', value: 'Dirty soda' },
];

function HomeHero() {
    return (
        <section id="home" className="home-section home-section-hero">
            <div className="home-section-inner home-hero-inner">
                <div className="home-hero-banner">
                    <div className="home-hero-copy">
                        <p className="p-sm home-section-kicker">Buzzworthy Sips</p>
                        <h1 className="serif home-hero-title">
                            Bright drinks, bold layout, and a polished pop-up feel.
                        </h1>
                        <p className="home-section-copy home-hero-copy-text">
                            This homepage is built to feel like an editorial brand site: colorful cards,
                            layered panels, and clear placeholders where you can swap in real product
                            photos, event imagery, and lifestyle shots later.
                        </p>

                        <div className="home-hero-actions">
                            <button
                                type="button"
                                className="hero-cta-btn"
                                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            >
                                Find Us
                            </button>
                            <button
                                type="button"
                                className="hero-secondary-btn"
                                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            >
                                View Menu
                            </button>
                        </div>

                        <div className="home-hero-highlights" aria-label="Hero highlights">
                            {HERO_HIGHLIGHTS.map((highlight) => (
                                <span key={highlight} className="home-hero-pill">
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="home-hero-visual" aria-hidden="true">
                        <div className="home-hero-feature-card">
                            <div className="home-hero-feature-art">
                                <span>Hero image placeholder</span>
                            </div>

                            <div className="home-hero-feature-copy">
                                <p className="p-sm home-section-kicker">Featured drop</p>
                                <h2 className="serif">Turning thirst into a signature moment.</h2>
                                <p className="p-sm">
                                    Swap in a lifestyle photo or can mockup here. The layered card treatment
                                    keeps the page interesting even before final assets are added.
                                </p>
                            </div>
                        </div>

                        <div className="home-hero-stack">
                            <article className="home-hero-mini-card home-hero-mini-card-tone-a">
                                <p className="p-xs home-hero-mini-label">Seasonal mix</p>
                                <h3 className="serif">Bright citrus, berry, and tropical blends.</h3>
                            </article>
                            <article className="home-hero-mini-card home-hero-mini-card-tone-b">
                                <p className="p-xs home-hero-mini-label">Built for events</p>
                                <h3 className="serif">Pop-up ready sections with clear callouts.</h3>
                            </article>
                        </div>
                    </div>
                </div>

                <div className="home-hero-metric-row" aria-label="Quick stats">
                    {HERO_METRICS.map((metric) => (
                        <article key={metric.label} className="home-hero-metric-card">
                            <p className="home-hero-metric-value">{metric.value}</p>
                            <p className="p-sm home-hero-metric-label">{metric.label}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeHero;
