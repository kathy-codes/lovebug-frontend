import "./LoveLanguage.scss";

const LoveLanguage = ({ loveLanguage, setLoveLanguage }) => {
    const loveLanguages = [
        "Quality time",
        "Receiving gifts",
        "Words of affirmation",
        "Acts of service",
        "Physical touch"
    ];
    
    return (
        <div className="love-language-container">
            <h2>What’s your love language?</h2>
            <div className="love-language-options-list">
                {loveLanguages.map((language) => (
                    <button 
                        key={language}
                        type="button"
                        className={`love-language-button ${loveLanguage === language ? 'selected' : ''}`}
                        onClick={() => setLoveLanguage(language)}
                    >
                        {language}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LoveLanguage;

