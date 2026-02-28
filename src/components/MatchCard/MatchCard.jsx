import React from 'react';
import Typography from '../Typography/Typography';
import './MatchCard.scss';

const MatchCard = ({ match }) => {
    return (
        <article className="match-card">
            <div className="match-card__longevity-badge">
                {match.longevityMonths} months longevity
            </div>

            <Typography variant="h4" className="match-card__name">{match.name}</Typography>
            <Typography variant="p3" className="match-card__tagline">{match.archetypeTagline}</Typography>

            <Typography variant="p3" className="match-card__description">
                {match.whyFits}
            </Typography>

            <div className="match-card__tags">
                {match.sharedSignals.map((signal, index) => (
                    <span key={index} className="match-tag">{signal}</span>
                ))}
            </div>

            <div className="match-card__action">
                <button className="btn btn--secondary btn--message">Message &rarr;</button>
            </div>
        </article>
    );
};

export default MatchCard;
