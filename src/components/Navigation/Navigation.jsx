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
                <Link to="/login" className="landing-page__nav-link">Log In</Link>
                <Link to="/quizmanager" className="landing-page__nav-button">Get Started</Link>
            </nav>
        </header>
    );
};

export default Navigation;
