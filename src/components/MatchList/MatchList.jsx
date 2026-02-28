import React from 'react';
import Typography from '../Typography/Typography';
import './MatchList.scss';
import MatchCard from '../MatchCard/MatchCard';

const MatchList = ({ matches }) => {
    return (
        <section className="match-list">
            <Typography variant="h3" className="match-list__title">Personality Matches Nearby</Typography>
            <div className="match-list__container">
                {matches.map(match => (
                    <MatchCard key={match.id} match={match} />
                ))}
            </div>
            <div className="match-list__actions">
                <button className="btn btn--primary btn--large match-list__continue-btn">More</button>
            </div>
        </section>
    );
};

export default MatchList;
