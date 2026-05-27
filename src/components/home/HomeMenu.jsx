import React from 'react';

import '../../stylesheets/ss-components/home/HomeMenu.css';

const MENU_ITEMS = [
    {
        name: 'The Original',
        category: 'Dr. Pepper Sips',
        note: 'Vanilla, Coconut Creamer, & Fresh Lime',
        tone: 'tone-a',
    },
    {
        name: 'Graham Slam!',
        category: 'Dirty Popcorn',
        note: 'Fresh Popcorn, Chocolate Drizzle, Marshmallows, & Graham Crackers',
        tone: 'tone-b',
    },
    {
        name: 'The Pink Drink',
        category: 'Sprite Sips',
        note: 'Cherry, Strawberry, ',
        tone: 'tone-c',
    },
];

function HomeMenu() {
    return (
        <section id="menu" className="home-section home-section-menu">
            <div className="home-section-inner">
                <div className="home-section-header home-menu-header">
                    <div className="home-section-header-title">
                        <p className="p-sm home-section-kicker">Menu</p>
                        <h1 className="serif">Our <i>Best Sellers</i></h1>
                        {/* <p className="home-section-copy">
                            These cards are placeholders for your product photography. They still read
                            as a finished layout because the structure, spacing, and color treatment are
                            doing the heavy lifting.
                        </p> */}
                    </div>
                    <button className="btn-action" type="button">
                        <p className="p-sm">View Full Menu</p>
                    </button>
                </div>

                <div className="home-menu-grid" role="list" aria-label="Featured menu items">
                    {MENU_ITEMS.map((item) => (
                        <article key={item.name} className={`menu-card menu-card-${item.tone}`} role="listitem">
                            <div className="menu-card-art">
                                <span>Product image placeholder</span>
                            </div>
                            <div className="menu-card-body">
                                <p className="p-sm home-section-kicker">{item.category}</p>
                                <h2 className="serif menu-card-title">{item.name}</h2>
                                <p className="p-sm menu-card-copy">{item.note}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeMenu;
