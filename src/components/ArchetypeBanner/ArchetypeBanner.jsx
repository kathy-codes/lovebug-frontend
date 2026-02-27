import React from 'react';
import './ArchetypeBanner.scss';

const ArchetypeBanner = ({ archetypes, longevityRange }) => {
    return (
        <section className="archetype-banner">
            <div className="archetype-banner__container">
                <div className="archetype-banner__intro">Based on your answers, you are...</div>
                <div className="archetype-banner__list">
                    {archetypes.map((arch, index) => (
                        <div key={index} className="archetype-badge">
                            <span className="archetype-badge__title">{arch.title}</span>
                            <span className="archetype-badge__percentage">{arch.percentage}%</span>
                        </div>
                    ))}
                </div>

                <div className="archetype-banner__longevity">
                    <span className="longevity-label">Expected Match Longevity:</span>
                    <span className="longevity-value">{longevityRange} months</span>
                </div>
            </div>

            {/* Visual flair matching the hero section from landing page */}
            <div className="archetype-banner__graphic">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>
        </section>
    );
};

export default ArchetypeBanner;
