import React from 'react';
import Typography from '../Typography/Typography';
import './BeyondTheSwipe.scss';

const FACTORS = [
    { label: "Communication Style", percentage: "94%" },
    { label: "Life Goals", percentage: "88%" },
    { label: "Values Alignment", percentage: "91%" },
    { label: "Personality Match", percentage: "83%" }
];

const BeyondTheSwipe = () => {
    return (
        <section id="compatibility" className="beyond-swipe">
            <div className="beyond-swipe__content">
                <Typography variant="h2" className="beyond-swipe__title">Beyond the Swipe</Typography>
                <Typography variant="p1" className="beyond-swipe__subtitle">
                    Traditional dating apps focus on appearances and quick judgments. LoveBug takes a different approach—we analyze personality traits, values, communication styles, and life goals to find matches that truly resonate.
                </Typography>

                <ul className="beyond-swipe__list">
                    <li className="list-item">
                        <Typography variant="h4" className="list-item__title">Deep Personality Analysis</Typography>
                        <Typography variant="p2" className="list-item__desc">Understanding who you are at your core</Typography>
                    </li>
                    <li className="list-item">
                        <Typography variant="h4" className="list-item__title">Transparent Match Scores</Typography>
                        <Typography variant="p2" className="list-item__desc">Know exactly why you're compatible</Typography>
                    </li>
                    <li className="list-item">
                        <Typography variant="h4" className="list-item__title">Values-Based Alignment</Typography>
                        <Typography variant="p2" className="list-item__desc">Connect on what matters most</Typography>
                    </li>
                </ul>

                <button className="btn btn--large beyond-swipe__btn">Learn More About Our Algorithm</button>
            </div>

            <div className="beyond-swipe__graphic">
                <div className="compatibility-card">
                    <Typography variant="h3" className="compatibility-card__title">Your Compatibility Factors</Typography>

                    <div className="factor-list">
                        {FACTORS.map((factor, index) => (
                            <div key={index} className="factor-item">
                                <div className="factor-item__header">
                                    <span className="factor-item__label">{factor.label}</span>
                                    <span className="factor-item__percentage">{factor.percentage}</span>
                                </div>
                                <div className="factor-item__bar-bg">
                                    <div className="factor-item__bar-fill" style={{ width: factor.percentage }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="compatibility-card__testimonial">
                        <Typography variant="p2" className="testimonial-text">
                            "LoveBug's transparency gave me confidence in my matches. I finally found someone who truly gets me."
                        </Typography>
                        <span className="testimonial-author">— Sarah M.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondTheSwipe;
