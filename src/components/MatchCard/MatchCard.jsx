import React, { useState } from 'react';
import './MatchCard.scss';

const MatchCard = ({ match }) => {
    const [messageSent, setMessageSent] = useState(false);
    const [messageText, setMessageText] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (messageText.trim()) {
            setMessageSent(true);
            setMessageText('');
        }
    };

    return (
        <article className="match-card">
            <div className="match-card__header">
                <div className="match-card__profile">
                    <img src={match.photo} alt={match.name} className="profile-photo" />
                    <div className="profile-info">
                        <h3 className="profile-name">{match.name}</h3>
                        <p className="profile-tagline">{match.archetypeTagline}</p>
                    </div>
                </div>
                <div className="match-card__score" title="Compatibility Score">
                    <span className="score-value">{match.compatibilityScore}%</span>
                    <span className="score-label">Match</span>
                </div>
            </div>

            <div className="match-card__body">
                <div className="match-card__section">
                    <h4 className="section-title">Why it fits you</h4>
                    <p className="section-content">{match.whyFits}</p>
                </div>

                <div className="match-card__details">
                    <div className="detail-item">
                        <span className="detail-icon">⏳</span>
                        <div className="detail-text">
                            <span className="detail-label">Expected Longevity</span>
                            <span className="detail-value">{match.longevityMonths} months</span>
                        </div>
                    </div>
                    <div className="detail-item">
                        <span className="detail-icon">📅</span>
                        <div className="detail-text">
                            <span className="detail-label">Best Time to Connect</span>
                            <span className="detail-value">{match.bestTimeToConnect}</span>
                        </div>
                    </div>
                </div>

                <div className="match-card__signals">
                    <h4 className="section-title">Shared Signals</h4>
                    <ul className="signals-list">
                        {match.sharedSignals.map((signal, index) => (
                            <li key={index} className="signal-badge">{signal}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="match-card__footer">
                {!messageSent ? (
                    <form className="message-form" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            placeholder={`Send a text to ${match.name}... (No photos)`}
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            className="message-input"
                        />
                        <button type="submit" className="btn btn--primary message-btn" disabled={!messageText.trim()}>
                            Send
                        </button>
                    </form>
                ) : (
                    <div className="message-success">
                        <span role="img" aria-label="check">✅</span> Message sent! They'll get back to you soon.
                    </div>
                )}
            </div>
        </article>
    );
};

export default MatchCard;
