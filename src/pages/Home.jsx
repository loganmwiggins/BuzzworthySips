import React from 'react';

import '../stylesheets/ss-pages/Home.css';
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from '../utils/urls';

function Home() {
    return (
        <div className="home-page-content">
            <section id="home" className="home-section home-section-hero">
                <div className="home-hero-banner">
                    <p className="p-sm home-section-kicker">Buzzworthy Sips</p>
                    <h1 className="serif">Pour the Party. Keep the Buzz.</h1>
                    <p className="home-section-copy">
                        A flashy mobile bar experience with premium cocktails, standout presentation, and smooth service that
                        keeps your guests talking long after the final toast.
                    </p>
                    <button type="button" className="hero-cta-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                        Book Your Event
                    </button>
                </div>
            </section>

            <section id="events" className="home-section home-section-events">
                <div className="home-section-inner">
                    <p className="p-sm home-section-kicker">Events</p>
                    <h2 className="serif">Signature Moments, Curated Sips</h2>
                    <p className="home-section-copy">
                        From weddings and rooftop launch nights to private parties, Buzzworthy Sips brings a polished mobile bar
                        experience that fits the energy of your event.
                    </p>
                </div>
            </section>

            <section id="menu" className="home-section home-section-menu">
                <div className="home-section-inner">
                    <p className="p-sm home-section-kicker">Menu</p>
                    <h2 className="serif">Crafted Cocktail Selections</h2>
                    <p className="home-section-copy">
                        Seasonal ingredients, premium spirits, and non-alcoholic options are all tailored to your crowd. Build
                        a drink lineup that feels custom without the stress.
                    </p>
                </div>
            </section>

            <section id="about-us" className="home-section home-section-about">
                <div className="home-section-inner">
                    <p className="p-sm home-section-kicker">About Us</p>
                    <h2 className="serif">Service-First, Flavor-Forward</h2>
                    <p className="home-section-copy">
                        We combine hospitality, precision, and style so your guests remember the experience as much as the drinks.
                        Every detail is designed to keep your event effortless.
                    </p>
                </div>
            </section>

            <section id="contact" className="home-section home-section-contact">
                <div className="home-section-inner">
                    <p className="p-sm home-section-kicker">Contact</p>
                    <h2 className="serif">Let&apos;s Plan Your Pour</h2>
                    <p className="home-section-copy">
                        Share your event date, location, and guest count, and we&apos;ll build a custom bar package that matches
                        your vision.
                    </p>
                </div>
            </section>

            <footer id="footer" className="home-footer">
                <p className="serif home-footer-brand">Buzzworthy Sips</p>
                <p className="p-sm home-footer-copy">Copyright © {new Date().getFullYear()} Buzzworthy Sips. All rights reserved.</p>

                <div className="home-footer-socials">
                    <a className="home-footer-social-btn" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Visit Buzzworthy Sips on Instagram">
                        <img src="/assets/icons/socials/instagram-bw.svg" alt="Instagram" />
                    </a>
                    <a className="home-footer-social-btn" href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="Visit Buzzworthy Sips on TikTok">
                        <img src="/assets/icons/socials/tiktok-bw.svg" alt="TikTok" />
                    </a>
                    <a className="home-footer-social-btn" href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Visit Buzzworthy Sips on Facebook">
                        <img src="/assets/icons/socials/facebook-bw.svg" alt="Facebook" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Home;