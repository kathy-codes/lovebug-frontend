import React from 'react';
import './BonusSections.scss';

const ICE_BREAKERS = [
    "If you had to describe your perfect Saturday using only three words, what would they be?",
    "What's a controversial opinion you hold about a very mundane topic?",
    "Which do you prefer: planning a trip down to the hour, or deciding what to do when you get there?"
];

const DATE_IDEAS = [
    { title: "Art Walk & Coffee", description: "Grab a coffee and browse the local gallery district.", icon: "🎨" },
    { title: "Sunset Picnic", description: "Pack some snacks and enjoy the sunset at the park.", icon: "🧺" },
    { title: "Trivia Night", description: "Test your random knowledge at a local pub or cafe trivia event.", icon: "🧠" }
];

const BonusSections = () => {
    return (
        <section className="bonus-sections">
            <div className="bonus-container">
                <div className="bonus-card ice-breakers">
                    <div className="bonus-header">
                        <span className="bonus-icon">💬</span>
                        <h3 className="bonus-title">Ice Breakers</h3>
                    </div>
                    <p className="bonus-subtitle">Not sure what to say? Try these out!</p>
                    <ul className="bonus-list">
                        {ICE_BREAKERS.map((q, i) => (
                            <li key={i} className="bonus-item">"{q}"</li>
                        ))}
                    </ul>
                </div>

                <div className="bonus-card date-ideas">
                    <div className="bonus-header">
                        <span className="bonus-icon">📍</span>
                        <h3 className="bonus-title">Date Ideas Nearby</h3>
                    </div>
                    <p className="bonus-subtitle">Perfect spots for your archetype.</p>
                    <ul className="bonus-list">
                        {DATE_IDEAS.map((idea, i) => (
                            <li key={i} className="bonus-item idea-item">
                                <span className="idea-icon">{idea.icon}</span>
                                <div className="idea-text">
                                    <span className="idea-title">{idea.title}</span>
                                    <span className="idea-desc">{idea.description}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BonusSections;
