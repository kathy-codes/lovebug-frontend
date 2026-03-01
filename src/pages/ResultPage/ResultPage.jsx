import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import ArchetypeBanner from '../../components/ArchetypeBanner/ArchetypeBanner';
import MatchList from '../../components/MatchList/MatchList';
import DateIdeas from '../../components/DateIdeas/DateIdeas';
import IceBreakers from '../../components/IceBreakers/IceBreakers';
import Typography from '../../components/Typography/Typography';
import logoIcon from '../../assets/logo/lovebug.svg';
import './ResultPage.scss';

const ARCHETYPE_MAP = {
    "The Adventurer": "Always seeking the next thrill",
    "The Guardian": "Reliable warmth, lasting glow",
    "The Free Spirit": "Goes where the wind takes them",
    "The Charmer": "Lights up every room",
    "The Mastermind": "Strategic and thoughtful",
    "The Caregiver": "Nurturing and kind-hearted",
    "The Idealist": "Dreamy and optimistic",
    "The Pragmatist": "Practical and grounded"
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
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                setLoading(false);
                return;
            }
            try {
                const userRes = await fetch(`http://localhost:8080/api/users/${id}`);
                const matchesRes = await fetch(`http://localhost:8080/api/matches/${id}`);
                const userData = await userRes.json();
                const matchesData = await matchesRes.json();

                setUser(userData);
                setMatches(matchesData.map((m, i) => ({
                    id: m.user_id,
                    name: `${m.name}, ${m.age}`,
                    photo: i === 0
                        ? "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400"
                        : i === 1
                            ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400"
                            : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=400&h=400",
                    archetypeTagline: ARCHETYPE_MAP[m.personality_archetype] || "Curious mind, gentle heart",
                    longevityMonths: `${m.relationship_longevity_months} months`,
                    whyFits: `You both match at ${m.compatibility_score}% compatibility score based on our algorithm.`,
                    sharedSignals: [m.chronotype || "Daytime", m.career_field || "Tech"]
                })));
            } catch (err) {
                console.error("Error fetching results", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return <div style={{ padding: '5rem', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>Finding your perfect matches...</div>;

    const currentArchetype = {
        title: user?.personality_archetype || "The Pragmatist",
        subtitle: ARCHETYPE_MAP[user?.personality_archetype] || "Practical and grounded"
    };

    return (
        <div className="result-page">
            <Navigation />
            <main className="result-page__main">
                <ArchetypeBanner archetype={currentArchetype} traits={MOCK_TRAITS} />
                <MatchList matches={matches.length > 0 ? matches : MOCK_MATCHES} />
                <DateIdeas />
                <IceBreakers />

                <div className="result-page__safety-message">
                    <Typography variant="h2" className="safety-text">Stay safe and don't bug people!</Typography>
                    <img src={logoIcon} alt="Lovebug" className="safety-icon" />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ResultPage;
