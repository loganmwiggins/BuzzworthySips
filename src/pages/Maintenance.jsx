import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLottie } from 'lottie-react';
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from '../utils/urls';

import '../stylesheets/ss-pages/Maintenance.css';

function BeeOverlayAnimation({ animationData, onLoopComplete }) {
    const { View, setSpeed } = useLottie(
        {
            animationData,
            loop: true,
            autoplay: true,
            onLoopComplete,
        },
        {
            width: '100%',
            height: '100%',
        }
    );

    useEffect(() => {
        setSpeed(1);
    }, [setSpeed]);

    return View;
}

function Maintenance() {
    const HIDDEN_DELAY_MS = 5000;
    const ENTER_ANIMATION_MS = 700;
    const EXIT_ANIMATION_MS = 550;
    const LOOPS_PER_APPEARANCE = 2;

    const [beeAnimationData, setBeeAnimationData] = useState(null);
    const [showAnimation, setShowAnimation] = useState(false);
    const [animationPhase, setAnimationPhase] = useState('hidden');
    const [animationEntranceSide, setAnimationEntranceSide] = useState('from-right');
    const [completedLoops, setCompletedLoops] = useState(0);
    const timersRef = useRef([]);

    const openExternal = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const scheduleTimer = useCallback((callback, delay) => {
        const timerId = window.setTimeout(callback, delay);
        timersRef.current.push(timerId);
    }, []);

    const clearAllTimers = useCallback(() => {
        timersRef.current.forEach((timerId) => window.clearTimeout(timerId));
        timersRef.current = [];
    }, []);

    const scheduleNextAppearance = useCallback(() => {
        scheduleTimer(() => {
            setAnimationEntranceSide(Math.random() > 0.5 ? 'from-left' : 'from-right');
            setCompletedLoops(0);
            setAnimationPhase('entering');
            setShowAnimation(true);

            scheduleTimer(() => {
                setAnimationPhase('visible');
            }, ENTER_ANIMATION_MS);
        }, HIDDEN_DELAY_MS);
    }, [ENTER_ANIMATION_MS, HIDDEN_DELAY_MS, scheduleTimer]);

    useEffect(() => {
        let isMounted = true;
        scheduleNextAppearance();

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
            clearAllTimers();
        };
    }, [clearAllTimers, scheduleNextAppearance]);

    useEffect(() => {
        if (!showAnimation || animationPhase === 'exiting' || completedLoops < LOOPS_PER_APPEARANCE) {
            return;
        }

        setAnimationPhase('exiting');
        scheduleTimer(() => {
            setShowAnimation(false);
            setAnimationPhase('hidden');
            scheduleNextAppearance();
        }, EXIT_ANIMATION_MS);
    }, [
        completedLoops,
        showAnimation,
        animationPhase,
        LOOPS_PER_APPEARANCE,
        EXIT_ANIMATION_MS,
        scheduleTimer,
        scheduleNextAppearance,
    ]);

    const handleLoopComplete = useCallback(() => {
        if (animationPhase === 'exiting') {
            return;
        }

        setCompletedLoops((prevLoops) => prevLoops + 1);
    }, [animationPhase]);

    return (
        <>
            <div className="maintenance-overlay" aria-hidden="true">
                {showAnimation && beeAnimationData && (
                    <div className={`maintenance-overlay__animation ${animationEntranceSide} is-${animationPhase}`}>
                        <BeeOverlayAnimation animationData={beeAnimationData} onLoopComplete={handleLoopComplete} />
                    </div>
                )}
            </div>

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