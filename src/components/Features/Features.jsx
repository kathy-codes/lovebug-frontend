import React from 'react';
import './Features.scss';

const Features = () => {
    return (
        <section id="how-it-works" className="features">
            <h2 className="features__title">Dating, Reimagined</h2>
            <div className="features__grid">
                <div className="feature-card">
                    <div className="feature-card__icon">🧠</div>
                    <h3 className="feature-card__title">Quiz-Based Matching</h3>
                    <p className="feature-card__description">
                        Say goodbye to shallow swiping. Answer a curated series of questions to find matches based on deep compatibility, not just a quick glance.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-card__icon">⏱️</div>
                    <h3 className="feature-card__title">Frictionless Onboarding</h3>
                    <p className="feature-card__description">
                        We respect your time. Get started quickly with an onboarding process that's thoughtful but never tedious or excessively long.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-card__icon">✨</div>
                    <h3 className="feature-card__title">Build Confidence</h3>
                    <p className="feature-card__description">
                        Our approach fosters authentic conversations and highlights your true self, keeping your confidence high throughout your journey.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-card__icon">🔋</div>
                    <h3 className="feature-card__title">Zero Burnout</h3>
                    <p className="feature-card__description">
                        Focus on quality over quantity. Lovebug provides curated, meaningful matches so you don't exhaust yourself navigating endless profiles.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
