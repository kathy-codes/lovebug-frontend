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
        <header className="navigation__header">
            <Link to="/" className="navigation__logo-link">
                <div className="navigation__logo">
                    <img src={logo} alt="LoveBug Logo" className="navigation__logo-img" />LoveBug
                </div>
            </Link>

            <button
                className={`navigation__hamburger ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`navigation__nav ${isMenuOpen ? 'open' : ''}`}>
                <a href="#how-it-works" className="navigation__nav-link" onClick={() => setIsMenuOpen(false)}>How it Works</a>
                <a href="#compatibility" className="navigation__nav-link" onClick={() => setIsMenuOpen(false)}>Compatibility</a>
                <Link to="/quizmanager" className="btn btn--primary" style={{ padding: '0.5rem 1.5rem', borderRadius: '50px' }} onClick={() => setIsMenuOpen(false)}>Get Started</Link>
            </nav>
        </header>
    );
};

export default Navigation;
