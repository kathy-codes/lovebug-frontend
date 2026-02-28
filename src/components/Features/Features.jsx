import React from 'react';
import './Features.scss';

const FEATURES = [
    {
        number: "01",
        title: "Complete Your Profile",
        description: "Share your personality, values, and what you're looking for in a meaningful relationship."
    },
    {
        number: "02",
        title: "Discover Compatibility",
        description: "Our intelligent matching algorithm analyzes deep compatibility factors beyond surface level."
    },
    {
        number: "03",
        title: "Connect Authentically",
        description: "See transparent match scores and start conversations with people who truly align with you."
    }
];

const Features = () => {
    return (
        <section id="how-it-works" className="features">
            <h2 className="features__title">How LoveBug Works</h2>
            <p className="features__subtitle">A thoughtful approach to finding your perfect match</p>

            <div className="features__grid">
                {FEATURES.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-card__number">{feature.number}</div>
                        <h3 className="feature-card__title">{feature.title}</h3>
                        <p className="feature-card__description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
