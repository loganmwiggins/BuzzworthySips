import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { SOCIALS_ARR } from '../../utils/socials';
import '../../stylesheets/ss-components/home/HomeContact.css';

const ROTATE_INTERVAL_MS = 4000;
const CONTACT_EMAIL = 'buzzworthysips@gmail.com';
const CONTACT_PHONE_DISPLAY = '(772) 333-0007';
const CONTACT_PHONE_RAW = '+17723330007';

function HomeContact() {
    const [socialIndex, setSocialIndex] = useState(0);
    
    useEffect(() => {
        if (SOCIALS_ARR.length <= 1) {
            return undefined;
        }

        const intervalId = setInterval(() => {
            setSocialIndex((prev) => (prev + 1) % SOCIALS_ARR.length);
        }, ROTATE_INTERVAL_MS);

        return () => clearInterval(intervalId);
    }, []);

    const currentSocial = SOCIALS_ARR[socialIndex] ?? SOCIALS_ARR[0];

    if (!currentSocial) {
        return null;
    }

    const contactMethods = [
        {
            label: 'Email',
            value: CONTACT_EMAIL,
            href: `mailto:${CONTACT_EMAIL}`
        },
        {
            label: 'Phone',
            value: CONTACT_PHONE_DISPLAY,
            href: `tel:${CONTACT_PHONE_RAW}`
        }
    ];

    return (
        <section id="contact" className="home-section home-section-contact">
            <div className="home-section-inner home-contact-inner">
                <div className="home-section-header home-contact-header">
                    <div className="home-section-header-title">
                        <p className="p-sm home-section-kicker">Follow Us On</p>
                        <a
                            className="contact-header contact-header-link"
                            href={currentSocial.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`Open ${currentSocial.name}`}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={currentSocial.name}
                                    className="contact-header-item"
                                    initial={{ opacity: 0, y: -18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 18 }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <img
                                        src={currentSocial.icon}
                                        alt={currentSocial.name}
                                        draggable="false"
                                    />
                                    <h1 className="serif">
                                        {currentSocial.handle ?? currentSocial.name}
                                    </h1>
                                </motion.div>
                            </AnimatePresence>
                        </a>
                        <br />
                        <div className="contact-methods-list" aria-label="Contact methods">
                            {contactMethods.map((method) => (
                                <a
                                    key={method.label}
                                    className="contact-method-link"
                                    href={method.href}
                                    aria-label={`${method.label} Buzzworthy Sips`}
                                >
                                    <p className="p-sm contact-method-label">{method.label}</p>
                                    <p className="contact-method-value">{method.value}</p>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-visual-layout" aria-hidden="true">
                        <div className="contact-visual-card card-one">
                            <img src="/assets/events/morning-market.svg" alt="" draggable="false" />
                        </div>
                        <div className="contact-visual-card card-two">
                            <img src="/assets/events/night-market.svg" alt="" draggable="false" />
                        </div>
                        <div className="contact-visual-card card-three">
                            <img src="/assets/events/twilight-series.svg" alt="" draggable="false" />
                        </div>
                        <div className="contact-visual-card card-four">
                            <img src="/assets/events/weekend-popup.svg" alt="" draggable="false" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeContact;
