import React from 'react';

function HomeMenu() {
    return (
        <section id="menu" className="home-section home-section-menu">
            <div className="home-section-inner">
                <div className="home-section-header">
                    <div className="tal">
                        <p className="p-sm home-section-kicker">Menu</p>
                        <h1 className="serif">Our <i>Best Sellers</i></h1>
                    </div>
                    <button className="btn-action">
                        <p className="p-sm">View Full Menu</p>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HomeMenu;
