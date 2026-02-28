import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import ArchetypeBanner from '../../components/ArchetypeBanner/ArchetypeBanner';
import MatchList from '../../components/MatchList/MatchList';
import DateIdeas from '../../components/DateIdeas/DateIdeas';
import IceBreakers from '../../components/IceBreakers/IceBreakers';
import Typography from '../../components/Typography/Typography';
import logoIcon from '../../assets/logo/lovebug.svg';
import './ResultPage.scss';

// Mock data to scaffold the UI before we have real state/API integration
const MOCK_ARCHETYPE = {
    title: "The Steady Flame",
    subtitle: "Reliable warmth, lasting glow",
};

const MOCK_TRAITS = [
    {
        name: "Career Ambition",
        description: "You would be compatible with someone who's work-life balance is...",
        tags: ["Full-speed"]
    },
    {
        name: "Conscientiousness",
        description: "You would be compatible with someone who's approach to plans is...",
        tags: ["Mostly organized", "Go with the flow"]
    },
    {
        name: "Social Energy",
        description: "You would be compatible with someone who is...",
        tags: ["An ambivert", "An extrovert"]
    }
];

const MOCK_MATCHES = [
    {
        id: "m1",
        name: "Taylor, 30",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400",
        archetypeTagline: "Curious mind, gentle heart",
        longevityMonths: "112-142",
        whyFits: "You both value deep connection and share a thoughtful energy.",
        sharedSignals: ["Introvert", "Midday Mode", "Engineer", "Full-speed"]
    },
    {
        id: "m2",
        name: "Jordan, 28",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400",
        archetypeTagline: "Reliable warmth, lasting glow",
        longevityMonths: "80-112",
        whyFits: "Both early risers who appreciate meaningful routine.",
        sharedSignals: ["Introvert", "Midday Mode", "Engineer", "Full-speed"]
    },
    {
        id: "m3",
        name: "Riley, 25",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=400&h=400",
        archetypeTagline: "Imagination meets creativity",
        longevityMonths: "20-42",
        whyFits: "Your flexible nature pairs well with their compensatory approach to life.",
        sharedSignals: ["Introvert", "Midday Mode", "Engineer", "Full-speed"]
    }
];

const ResultPage = () => {
    return (
        <div className="result-page">
            <Navigation />
            <main className="result-page__main">
                <ArchetypeBanner archetype={MOCK_ARCHETYPE} traits={MOCK_TRAITS} />
                <MatchList matches={MOCK_MATCHES} />
                <DateIdeas />
                <IceBreakers />

                <div className="result-page__safety-message">
                    <Typography variant="h1" className="safety-text">Stay safe and don't bug people!</Typography>
                    <img src={logoIcon} alt="Lovebug" className="safety-icon" />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ResultPage;
