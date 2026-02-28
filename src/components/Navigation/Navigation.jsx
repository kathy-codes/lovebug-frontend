import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/lovebug.svg';
import './Navigation.scss';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="landing-page__header">
            <Link to="/" className="landing-page__logo-link">
                <div className="landing-page__logo">
                    <img src={logo} alt="LoveBug Logo" className="landing-page__logo-img" />LoveBug
                </div>
            </Link>

            <button
                className={`landing-page__hamburger ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`landing-page__nav ${isMenuOpen ? 'open' : ''}`}>
                <a href="#how-it-works" className="landing-page__nav-link" onClick={() => setIsMenuOpen(false)}>How it Works</a>
                <a href="#compatibility" className="landing-page__nav-link" onClick={() => setIsMenuOpen(false)}>Compatibility</a>
                <a href="#about" className="landing-page__nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
                <Link to="/quizmanager" className="btn btn--primary" style={{ padding: '0.5rem 1.5rem', borderRadius: '50px' }} onClick={() => setIsMenuOpen(false)}>Get Started</Link>
            </nav>
        </header>
    );
};

export default Navigation;
