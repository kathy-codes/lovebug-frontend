import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.scss';

const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <div className="hero-banner__content">
                <h1 className="hero-banner__title">
                    <span className="hero-banner__title-secondary">Find Your Perfect</span><br />
                    <span className="hero-banner__title-primary">Match</span>
                </h1>

                <p className="hero-banner__subtitle">
                    Discover meaningful connections through personality-driven compatibility.
                    LoveBug goes beyond the swipe—we help you find trustworthy matches based on what truly matters.
                </p>

                <div className="hero-banner__actions">
                    <Link to="/quizmanager" className="btn btn--primary btn--large">Get Started Free</Link>
                    <a href="#how-it-works" className="hero-banner__link-action">How it works &gt;</a>
                </div>
            </div>

            <div className="hero-banner__graphic">
                <div className="hero-banner__image-container">
                    <div className="hero-banner__image-badge">🤍</div>
                    <img
                        src="../../assets/images/holdinghands.png"
                        alt="Holding Hands"
                        className="hero-banner__main-image"
                    />

                    <div className="hero-banner__compatibility-pill">
                        <div className="pill-circle">92%</div>
                        <div className="pill-text">
                            <span className="pill-title">Compatibility Match</span>
                            <span className="pill-subtitle">Based on personality alignment</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
