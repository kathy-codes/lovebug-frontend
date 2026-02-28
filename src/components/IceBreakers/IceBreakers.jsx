import React from 'react';
import Typography from '../Typography/Typography';
import './IceBreakers.scss';

const ICE_BREAKERS = [
    "What's the most spontaneous thing you've ever done?",
    "What's your ultimate comfort meal?",
    "If you could have dinner with anyone, alive or not - who?",
    "Beach vacation or mountain retreat?",
    "What song is stuck in your head right now?",
    "What's a hobby you've always wanted to try?"
];

const IceBreakers = () => {
    return (
        <section className="ice-breakers">
            <Typography variant="h2" className="ice-breakers__title">Ice Breakers</Typography>

            <div className="ice-breakers__grid">
                {ICE_BREAKERS.map((question, index) => (
                    <div key={index} className="ice-breaker-card">
                        <Typography variant="p2" className="ice-breaker-text">{question}</Typography>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IceBreakers;
