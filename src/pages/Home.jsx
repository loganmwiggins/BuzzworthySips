import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../stylesheets/ss-pages/Home.css';

import HomeHero from '../components/home/HomeHero';
import HomeEvents from '../components/home/HomeEvents';
import HomeMenu from '../components/home/HomeMenu';
import HomeAbout from '../components/home/HomeAbout';
import HomeContact from '../components/home/HomeContact';
import HomeFooter from '../components/home/HomeFooter';
import { fetchAvailableMenuItems, fetchHomeEvents } from '../utils/cms';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const sectionId = location.state?.scrollTo;

        if (!sectionId) {
            return;
        }

        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            sectionElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        navigate(location.pathname, { replace: true, state: null });
    }, [location.pathname, location.state, navigate]);

    useEffect(() => {
        let isMounted = true;

        const loadHomeContent = async () => {
            try {
                const [nextEvents, nextMenuItems] = await Promise.all([
                    fetchHomeEvents(),
                    fetchAvailableMenuItems(),
                ]);

                if (!isMounted) {
                    return;
                }

                setEvents(nextEvents);
                setMenuItems(nextMenuItems);
            } catch (error) {
                console.error('Failed to load home content from Sanity:', error);
            }
        };

        loadHomeContent();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="home-page-content">
            <HomeHero />
            <HomeEvents events={events} />
            <HomeMenu menuItems={menuItems} />
            <HomeAbout />
            <HomeContact />
            <HomeFooter />
        </div>
    );
}

export default Home;