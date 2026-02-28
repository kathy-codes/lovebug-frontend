import React from 'react';
import Typography from '../Typography/Typography';
import birchParkImg from '../../assets/images/birchPark.png';
import potteryImg from '../../assets/images/pottery.png';
import cafeImg from '../../assets/images/cafe.png';
import './DateIdeas.scss';

const DATE_IDEAS = [
    { title: "Birch Park", distance: "123 road", description: "A pleasant park perfect for a daytime stroll.", image: birchParkImg },
    { title: "Pottery", distance: "123 road", description: "Try your hand at some pottery together.", image: potteryImg },
    { title: "Cafe", distance: "123 road", description: "Have a croissant and a midday coffee!", image: cafeImg }
];

const DateIdeas = () => {
    return (
        <section className="date-ideas">
            <Typography variant="h3" className="date-ideas__title">Date Ideas</Typography>

            <div className="date-ideas__header">
                <Typography variant="p2" className="date-ideas__subtitle">You feel most alive and energized when you are in</Typography>
                {/* Needs to be updated to pull the data based how the user answered one fo their question */}
                <span className="midday-pill">☼ Midday mode</span>
            </div>

            <Typography variant="p1" className="date-ideas__prompt">Here are date ideas that match this:</Typography>

            <div className="date-ideas__grid">
                {DATE_IDEAS.map((idea, index) => (
                    <div key={index} className="date-card">
                        <img src={idea.image} alt={idea.title} className="date-card__image" />
                        <div className="date-card__content">
                            <Typography variant="h4" className="date-card__title">{idea.title}</Typography>
                            <Typography variant="p2" className="date-card__distance">{idea.distance}</Typography>
                            <Typography variant="p2" className="date-card__description">{idea.description}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DateIdeas;
