import React from 'react';

function HomeEvents() {
    return (
        <section id="events" className="home-section home-section-events">
            <div className="home-section-inner">
                <div className="home-section-header">
                    <div className="tal">
                        <p className="p-sm home-section-kicker">Events</p>
                        <h1 className="serif">Where to <i>Find Us</i></h1>
                    </div>
                    <div className="df aic g2">
                        <button className="btn-secondary">
                            <p className="p-sm">Need a Private Event?</p>
                        </button>
                        <button className="btn-action">
                            <p className="p-sm">Full Event Calendar</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeEvents;
