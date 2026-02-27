import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import ArchetypeBanner from '../../components/ArchetypeBanner/ArchetypeBanner';
import MatchList from '../../components/MatchList/MatchList';
import BonusSections from '../../components/BonusSections/BonusSections';
import './ResultPage.scss';

// Mock data to scaffold the UI before we have real state/API integration
const MOCK_ARCHETYPES = [
    { title: "The Explorer", percentage: 85 },
    { title: "The Creative", percentage: 70 },
];

const MOCK_MATCHES = [
    {
        id: "m1",
        name: "Alex",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400",
        archetypeTagline: "The Explorer & The Thinker",
        longevityMonths: "12-18",
        compatibilityScore: 92,
        whyFits: "You both value adventure and deep intellectual conversations. Alex's spontaneity perfectly balances your need for structured exploration.",
        sharedSignals: ["Loves hiking", "Night owl", "Words of Affirmation"],
        bestTimeToConnect: "Sunday mornings over coffee",
    },
    {
        id: "m2",
        name: "Jordan",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400",
        archetypeTagline: "The Creative & The Empathetic",
        longevityMonths: "8-14",
        compatibilityScore: 85,
        whyFits: "Your shared creativity provides a strong foundation. Jordan appreciates your artistic expression and offers a grounding presence.",
        sharedSignals: ["Art gallery enthusiast", "Introverted", "Quality Time"],
        bestTimeToConnect: "Thursday evenings after work",
    },
    {
        id: "m3",
        name: "Casey",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=400&h=400",
        archetypeTagline: "The Organizer & The Doer",
        longevityMonths: "6-12",
        compatibilityScore: 78,
        whyFits: "Casey's organizational skills complement your big-picture thinking, creating a highly effective and supportive dynamic.",
        sharedSignals: ["Early bird", "Goal-oriented", "Acts of Service"],
        bestTimeToConnect: "Tuesday lunch breaks",
    }
];

const ResultPage = () => {
    return (
        <div className="result-page">
            <Navigation />
            <main className="result-page__main">
                <ArchetypeBanner archetypes={MOCK_ARCHETYPES} longevityRange="18-36" />
                <MatchList matches={MOCK_MATCHES} />
                <BonusSections />
            </main>
            <Footer />
        </div>
    );
};

export default ResultPage;
