import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import xIcon from '../../assets/icons/x.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import tiktokIcon from '../../assets/icons/tiktok.svg';
import logo from '../../assets/logo/lovebug.svg';
import Typography from '../Typography/Typography';
import './Footer.scss';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (e, hash) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate(`/${hash}`);
        } else {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="footer" id="about">
            <div className="footer__container">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <img src={logo} alt="LoveBug Logo" className="footer__logo-img" />LoveBug
                    </div>
                    <Typography variant="p2" className="footer__tagline">
                        Finding meaningful connections through personality-driven compatibility.
                    </Typography>
                </div>

                <div className="footer__links">
                    <div className="footer__column">
                        <Typography variant="h4" className="footer__column-title">Product</Typography>
                        <ul className="footer__link-list">
                            <li><a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')}>How it Works</a></li>
                            <li><a href="#compatibility" onClick={(e) => handleLinkClick(e, '#compatibility')}>Compatibility</a></li>
                            <li><a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')}>Pricing</a></li>
                            <li><a href="#success" onClick={(e) => handleLinkClick(e, '#success')}>Success Stories</a></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <Typography variant="h4" className="footer__column-title">Company</Typography>
                        <ul className="footer__link-list">
                            <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About Us</a></li>
                            <li><a href="#careers" onClick={(e) => handleLinkClick(e, '#careers')}>Careers</a></li>
                            <li><a href="#blog" onClick={(e) => handleLinkClick(e, '#blog')}>Blog</a></li>
                            <li><a href="#press" onClick={(e) => handleLinkClick(e, '#press')}>Press</a></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <Typography variant="h4" className="footer__column-title">Support</Typography>
                        <ul className="footer__link-list">
                            <li><a href="#help" onClick={(e) => handleLinkClick(e, '#help')}>Help Center</a></li>
                            <li><a href="#safety" onClick={(e) => handleLinkClick(e, '#safety')}>Safety</a></li>
                            <li><a href="#privacy" onClick={(e) => handleLinkClick(e, '#privacy')}>Privacy</a></li>
                            <li><a href="#terms" onClick={(e) => handleLinkClick(e, '#terms')}>Terms</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <Typography variant="p3">&copy; {new Date().getFullYear()} LoveBug. All rights reserved.</Typography>
                <div className="footer__socials">
                    <a href="#twitter" aria-label="Twitter"><img src={xIcon} alt="Twitter" /></a>
                    <a href="#instagram" aria-label="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
                    <a href="#facebook" aria-label="Facebook"><img src={facebookIcon} alt="Facebook" /></a>
                    <a href="#tiktok" aria-label="TikTok"><img src={tiktokIcon} alt="TikTok" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
