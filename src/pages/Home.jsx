import React from 'react';

import '../stylesheets/ss-pages/Home.css';

import HomeHero from '../components/home/HomeHero';
import HomeEvents from '../components/home/HomeEvents';
import HomeMenu from '../components/home/HomeMenu';
import HomeAbout from '../components/home/HomeAbout';
import HomeContact from '../components/home/HomeContact';
import HomeFooter from '../components/home/HomeFooter';

function Home() {
    return (
        <div className="home-page-content">
            <HomeHero />
            <HomeEvents />
            <HomeMenu />
            <HomeAbout />
            <HomeContact />
            <HomeFooter />
        </div>
    );
}

export default Home;