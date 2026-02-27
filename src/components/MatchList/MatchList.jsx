import React from 'react';
import MatchCard from '../MatchCard/MatchCard';
import './MatchList.scss';

const MatchList = ({ matches }) => {
    return (
        <section className="match-list">
            <h2 className="match-list__title">Your Top Matches</h2>
            <div className="match-list__container">
                {matches.map(match => (
                    <MatchCard key={match.id} match={match} />
                ))}
            </div>
            <div className="match-list__actions">
                <button className="btn btn--secondary btn--large">See More Matches</button>
            </div>
        </section>
    );
};

export default MatchList;
