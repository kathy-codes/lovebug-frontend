import React from 'react';
import './TrustBadges.scss';

const BADGES = [
    {
        icon: "⭐",
        title: "Personality-Driven Matching",
        description: "Deep compatibility analysis"
    },
    {
        icon: "🔒",
        title: "Transparent Compatibility",
        description: "Clear match insights"
    },
    {
        icon: "🤝",
        title: "Designed for Intentional Dating",
        description: "Meaningful connections, not swipes"
    }
];

const TrustBadges = () => {
    return (
        <section className="trust-badges">
            <div className="trust-badges__container">
                {BADGES.map((badge, index) => (
                    <div key={index} className="trust-badge">
                        <div className="trust-badge__icon-container">
                            <span className="trust-badge__icon">{badge.icon}</span>
                        </div>
                        <div className="trust-badge__text">
                            <h3 className="trust-badge__title">{badge.title}</h3>
                            <p className="trust-badge__description">{badge.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustBadges;
