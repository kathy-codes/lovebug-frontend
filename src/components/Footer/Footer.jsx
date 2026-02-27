import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="landing-page__footer">
            <div className="footer-content">
                <div className="footer-brand">Lovebug &copy; {new Date().getFullYear()}</div>
            </div>
        </footer>
    );
};

export default Footer;
