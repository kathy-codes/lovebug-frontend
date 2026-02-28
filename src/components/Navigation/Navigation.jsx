import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    return (
        <header className="landing-page__header">
            <Link to="/" className="landing-page__logo-link">
                <div className="landing-page__logo">
                    Lovebug <span role="img" aria-label="bug">🐞</span>
                </div>
            </Link>
            <nav className="landing-page__nav">
                <a href="#how-it-works" className="landing-page__nav-link">How it Works</a>
                <a href="#compatibility" className="landing-page__nav-link">Compatibility</a>
                <a href="#about" className="landing-page__nav-link">About</a>
                <Link to="/quizmanager" className="btn btn--primary" style={{ padding: '0.5rem 1.5rem', borderRadius: '50px' }}>Get Started</Link>
            </nav>
        </header>
    );
};

export default Navigation;
