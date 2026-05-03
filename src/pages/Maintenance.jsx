import React, { useEffect, useState } from 'react';
import { useLottie } from 'lottie-react';
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from '../utils/urls';

import '../stylesheets/ss-pages/Maintenance.css';

function BeeOverlayAnimation({ animationData }) {
    const { View } = useLottie(
        {
            animationData,
            loop: true,
            autoplay: true,
        },
        {
            width: '100%',
            height: '100%',
        }
    );

    return View;
}

function Maintenance() {
    const [beeAnimationData, setBeeAnimationData] = useState(null);

    const openExternal = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    useEffect(() => {
        let isMounted = true;

        const loadAnimation = async () => {
            try {
                const response = await fetch('/assets/animations/bee.json');
                if (!response.ok) {
                    throw new Error('Failed to load bee animation JSON.');
                }

                const data = await response.json();

                if (isMounted) {
                    setBeeAnimationData(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        loadAnimation();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>
            {/* <div className="maintenance-overlay" aria-hidden="true">
                {beeAnimationData && (
                    <div className="maintenance-overlay__animation">
                        <BeeOverlayAnimation animationData={beeAnimationData} />
                    </div>
                )}
            </div> */}

            <div className="page-content-center maintenance-message">
                <div className="df fdc aic g1 tac">
                    <p className="p-lg sans-serif">Buzzworthy Sips</p>
                    <p className="p-lg">We'll be here soon! Our site is currently under <span className="highlight">maintenance</span>.</p>
                    
                </div>
                <div className="socials-row">
                        <button
                            type="button"
                            className="social-btn"
                            aria-label="Open Instagram"
                            onClick={() => openExternal(INSTAGRAM_URL)}
                        >
                            <img src="/assets/icons/socials/instagram.svg" alt="Instagram" draggable="false" />
                        </button>
                        <button
                            type="button"
                            className="social-btn"
                            aria-label="Open TikTok"
                            onClick={() => openExternal(TIKTOK_URL)}
                        >
                            <img src="/assets/icons/socials/tiktok.svg" alt="TikTok" draggable="false" />
                        </button>
                        <button
                            type="button"
                            className="social-btn"
                            aria-label="Open Facebook"
                            onClick={() => openExternal(FACEBOOK_URL)}
                        >
                            <img src="/assets/icons/socials/facebook.svg" alt="Facebook" draggable="false" />
                        </button>
                    </div>
            </div>
        </>
    );
}

export default Maintenance;