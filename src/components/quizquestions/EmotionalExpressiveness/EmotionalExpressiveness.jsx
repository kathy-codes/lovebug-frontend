import "./EmotionalExpressiveness.scss";

const EmotionalExpressiveness = ({ emotionalExpressiveness, setEmotionalExpressiveness }) => {
    // If emotionalExpressiveness is undefined/null, let's default the slider to 50 for the UI
    const displayValue = emotionalExpressiveness !== undefined && emotionalExpressiveness !== null 
        ? Math.round(emotionalExpressiveness * 100) 
        : 50;

    const handleChange = (e) => {
        const val = parseInt(e.target.value, 10);
        setEmotionalExpressiveness(val / 100);
    };

    return (
        <div className="emotional-expressiveness-container">
            <h2>When it comes to feelings, you’re expressiveness level from 0 to 100 (being the most expressive) is…</h2>
            <div className="slider-wrapper">
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={displayValue} 
                    onChange={handleChange}
                    className="expressiveness-slider"
                />
                <div className="slider-value-display">
                    {displayValue}
                </div>
            </div>
        </div>
    );
};

export default EmotionalExpressiveness;
