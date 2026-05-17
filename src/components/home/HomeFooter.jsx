import React from 'react';

import '../../stylesheets/ss-components/home/HomeFooter.css';
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from '../../utils/urls';

function HomeFooter() {
    return (
        <footer id="footer" className="home-footer">
            <p className="serif home-footer-brand">Buzzworthy Sips</p>
            <p className="p-sm home-footer-copy">Copyright © {new Date().getFullYear()} Buzzworthy Sips. All rights reserved.</p>

            <div className="home-footer-socials">
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
        </footer>
    );
}

export default HomeFooter;
