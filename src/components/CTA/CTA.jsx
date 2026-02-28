import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.scss';

const CTA = () => {
    return (
        <section className="cta">
            <div className="cta__content">
                <div className="cta__icon-container">
                    <span className="cta__icon">🤍</span>
                </div>
                <h2 className="cta__title">Ready to Find Your Match?</h2>
                <p className="cta__subtitle">Join thousands of people who've found meaningful, lasting connections through personality-driven compatibility.</p>
                <div className="cta__actions">
                    <Link to="/quizmanager" className="btn cta__btn-primary">Get Started Free</Link>
                    <button className="btn cta__btn-secondary">Watch Demo</button>
                </div>
                <p className="cta__fineprint">No credit card required &bull; Free to start &bull; Cancel anytime</p>
            </div>

            {/* Visual flair matching mockup red background with subtle circles */}
            <div className="cta__graphic">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </section>
    );
};

export default CTA;
