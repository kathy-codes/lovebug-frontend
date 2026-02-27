import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.scss';

const HeroBanner = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">
                    Skip the <span className="highlight-red">Swiping</span>.<br />
                    Find <span className="highlight-green">Meaningful</span> Connections.
                </h1>
                <p className="hero__subtitle">
                    Tired of the endless swiping and shallow matches? Lovebug uses a thoughtful question-based approach to connect you with people who truly align with your values. No burnout, just authentic connections.
                </p>
                <div className="hero__actions">
                    <Link to="/quizmanager" className="btn btn--primary">Discover Lovebug</Link>
                    <a href="#how-it-works" className="btn btn--secondary">See How it Works</a>
                </div>
            </div>
            <div className="hero__graphic">
                {/* abstract shapes to simulate a premium aesthetic */}
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </section>
    );
};

export default HeroBanner;
