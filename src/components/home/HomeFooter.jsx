import React from 'react';

import '../../stylesheets/ss-components/home/HomeFooter.css';
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from '../../utils/socials';

function HomeFooter() {
    return (
        <footer id="footer" className="home-footer">
            <div className="home-footer-inner">
                <div className="home-footer-brand-row">
                    <div className="home-footer-logo-wrap">
                        <img src="/assets/logo/Logo.PNG" alt="Buzzworthy Sips logo" className="home-footer-logo" loading="lazy" />
                    </div>

                    <div className="home-footer-brand-copy">
                        <p className="serif home-footer-brand">Buzzworthy Sips</p>
                        <p className="p-sm home-footer-copy">Copyright © {new Date().getFullYear()} Buzzworthy Sips. All rights reserved.</p>
                    </div>
                </div>

                <div className="home-footer-socials" aria-label="Buzzworthy Sips social links">
                    <a className="home-footer-social-btn" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Visit Buzzworthy Sips on Instagram">
                        <img src="/assets/icons/socials/instagram.svg" alt="Instagram" />
                    </a>
                    <a className="home-footer-social-btn" href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="Visit Buzzworthy Sips on TikTok">
                        <img src="/assets/icons/socials/tiktok.svg" alt="TikTok" />
                    </a>
                    <a className="home-footer-social-btn" href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Visit Buzzworthy Sips on Facebook">
                        <img src="/assets/icons/socials/facebook.svg" alt="Facebook" />
                    </a>
                </div>
            </div>

            <div className="home-footer-credit-row">
                <a
                    className="p-sm home-footer-credit-pill"
                    href="https://www.loganwiggins.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Logan Wiggins website"
                >
                    <span className="home-footer-credit-pill-icon" aria-hidden="true" />
                    Website created by Logan Wiggins
                </a>
            </div>
        </footer>
    );
}

export default HomeFooter;
