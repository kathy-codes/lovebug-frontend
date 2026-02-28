import React from 'react';
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
                <h2 className="beyond-swipe__title">Beyond the Swipe</h2>
                <p className="beyond-swipe__subtitle">
                    Traditional dating apps focus on appearances and quick judgments. LoveBug takes a different approach—we analyze personality traits, values, communication styles, and life goals to find matches that truly resonate.
                </p>

                <ul className="beyond-swipe__list">
                    <li className="list-item">
                        <h4 className="list-item__title">Deep Personality Analysis</h4>
                        <p className="list-item__desc">Understanding who you are at your core</p>
                    </li>
                    <li className="list-item">
                        <h4 className="list-item__title">Transparent Match Scores</h4>
                        <p className="list-item__desc">Know exactly why you're compatible</p>
                    </li>
                    <li className="list-item">
                        <h4 className="list-item__title">Values-Based Alignment</h4>
                        <p className="list-item__desc">Connect on what matters most</p>
                    </li>
                </ul>

                <button className="btn btn--large beyond-swipe__btn">Learn More About Our Algorithm</button>
            </div>

            <div className="beyond-swipe__graphic">
                <div className="compatibility-card">
                    <h3 className="compatibility-card__title">Your Compatibility Factors</h3>

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
                        <p className="testimonial-text">
                            "LoveBug's transparency gave me confidence in my matches. I finally found someone who truly gets me."
                        </p>
                        <span className="testimonial-author">— Sarah M.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeyondTheSwipe;
