import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../Typography/Typography';
import './CTA.scss';

const CTA = () => {
    return (
        <section className="cta">
            <div className="cta__content">
                <div className="cta__icon-container">
                    <span className="cta__icon">🤍</span>
                </div>
                <Typography variant="h2" className="cta__title">Ready to Find Your Match?</Typography>
                <Typography variant="p1" className="cta__subtitle">Join thousands of people who've found meaningful, lasting connections through personality-driven compatibility.</Typography>
                <div className="cta__actions">
                    <Link to="/quizmanager" className="btn cta__btn-primary">Get Started Free</Link>
                </div>
                <Typography variant="p3" className="cta__fineprint">No credit card required &bull; Free to start &bull; Cancel anytime</Typography>
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
