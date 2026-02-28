import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import TrustBadges from '../../components/TrustBadges/TrustBadges';
import Features from '../../components/Features/Features';
import BeyondTheSwipe from '../../components/BeyondTheSwipe/BeyondTheSwipe';
import CTA from '../../components/CTA/CTA';
import Footer from '../../components/Footer/Footer';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navigation />
            <main>
                <HeroBanner />
                <TrustBadges />
                <Features />
                <BeyondTheSwipe />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
