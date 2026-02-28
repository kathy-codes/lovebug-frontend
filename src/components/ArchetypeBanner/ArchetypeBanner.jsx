import React from 'react';
import Typography from '../Typography/Typography';
import flameIcon from '../../assets/icons/flame.svg';
import './ArchetypeBanner.scss';

const ArchetypeBanner = ({ archetype, traits }) => {
    return (
        <section className="archetype-banner">
            <Typography variant="h1" className="archetype-banner__title">Love bug has analyzed your responses!</Typography>
            <Typography variant="h3" className="archetype-banner__subtitle">Your personality archetype is...</Typography>

            <div className="archetype-banner__cards">
                <div className="card-stack">
                    <div className="card-stack__back"></div>
                    <div className="card-stack__front">
                        <img src={flameIcon} alt="Flame" className="archetype-icon" />
                        <Typography variant="h3" className="archetype-name">{archetype?.title}</Typography>
                        <Typography variant="p2" className="archetype-desc">{archetype?.subtitle}</Typography>
                    </div>
                </div>
            </div>

            <div className="archetype-banner__traits">
                <Typography variant="h3" className="traits-title">Top Compatible Traits for You</Typography>
                <div className="traits-grid">
                    {traits?.map((trait, index) => (
                        <div key={index} className="trait-card">
                            <Typography variant="p1" className="trait-card__name">{trait.name}:</Typography>
                            <Typography variant="p2" className="trait-card__desc">{trait.description}</Typography>
                            <div className="trait-card__tags">
                                {trait.tags.map((tag, i) => (
                                    <span key={i} className="trait-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchetypeBanner;
