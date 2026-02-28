import React from 'react';
import xIcon from '../../assets/icons/x.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import tiktokIcon from '../../assets/icons/tiktok.svg';
import Typography from '../Typography/Typography';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer" id="about">
            <div className="footer__container">
                <div className="footer__brand">
                    <div className="footer__logo">
                        LoveBug <span role="img" aria-label="bug">🐞</span>
                    </div>
                    <Typography variant="p2" className="footer__tagline">
                        Finding meaningful connections through personality-driven compatibility.
                    </Typography>
                </div>

                <div className="footer__links">
                    <div className="footer__column">
                        <Typography variant="h4" className="footer__column-title">Product</Typography>
                        <ul className="footer__link-list">
                            <li><a href="#how-it-works">How it Works</a></li>
                            <li><a href="#compatibility">Compatibility</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#success">Success Stories</a></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <Typography variant="h4" className="footer__column-title">Company</Typography>
                        <ul className="footer__link-list">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#press">Press</a></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <Typography variant="h4" className="footer__column-title">Support</Typography>
                        <ul className="footer__link-list">
                            <li><a href="#help">Help Center</a></li>
                            <li><a href="#safety">Safety</a></li>
                            <li><a href="#privacy">Privacy</a></li>
                            <li><a href="#terms">Terms</a></li>
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
