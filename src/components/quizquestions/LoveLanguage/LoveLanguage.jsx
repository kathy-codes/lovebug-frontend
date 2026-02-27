import "./LoveLanguage.scss";

const LoveLanguage = ({ loveLanguage, setLoveLanguage }) => {
    const loveLanguages = [
        "Receiving Gifts",
        "Quality Time",
        "Words of Affirmation",
        "Acts of Service",
        "Physical Touch"
    ];
    
    return (
        <div className="love-language-container">
            <h2>What is your love language?</h2>
            <div className="love-language-options-list">
                {loveLanguages.map((language) => (
                    <div key={language} className="love-language-option">
                        <label>
                            <input 
                                type="radio" 
                                name="loveLanguage" 
                                value={language}
                                checked={loveLanguage === language}
                                onChange={() => setLoveLanguage(language)}
                            />
                            {/* Wrap in span for easy swapping to icons later */}
                            <span className="love-language-text">{language}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoveLanguage;

