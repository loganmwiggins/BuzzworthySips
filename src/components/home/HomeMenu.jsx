import React from 'react';

import EmptyState from '../EmptyState';
import '../../stylesheets/ss-components/home/HomeMenu.css';

function HomeMenu({ menuItems = [] }) {
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
                        <p className="p-sm">See All Menu Items</p>
                    </button>
                </div>

                <div className="home-menu-grid" role="list" aria-label="Featured menu items">
                    {menuItems.map((item, index) => (
                        <article key={item.id} className={`menu-card menu-card-tone-${String.fromCharCode(97 + (index % 3))}`} role="listitem">
                            <div className="menu-card-art">
                                {item.imageSrc ? (
                                    <img className="menu-card-image" src={item.imageSrc} alt={item.imageAlt || item.name} draggable="false" />
                                ) : (
                                    <span>Product image placeholder</span>
                                )}
                            </div>
                            <div className="menu-card-body">
                                <p className="p-sm home-section-kicker">{item.category}</p>
                                <h2 className="serif menu-card-title">{item.name}</h2>
                                <p className="p-sm menu-card-copy">{item.description}</p>
                                {typeof item.price === 'number' && <p className="p-sm menu-card-copy">${item.price.toFixed(2)}</p>}
                            </div>
                        </article>
                    ))}

                    {menuItems.length === 0 && (
                        <EmptyState
                            icon="🍹"
                            headline="New sips are brewing"
                            subline="Check back soon for the next menu update."
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default HomeMenu;