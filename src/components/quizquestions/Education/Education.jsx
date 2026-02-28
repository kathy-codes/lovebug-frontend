import "./Education.scss";

const Education = ({ education, setEducation }) => {
    const educationOptions = {
        "Highschool": 1,
        "Associate's": 2,
        "Bachelor's": 3,
        "Master's": 4,
        "Doctorate": 5
    };
    
    return (
        <div className="education-container">
            <h2>What is your highest level of education?</h2>
            <div className="education-options-list">
                {Object.keys(educationOptions).map((key) => (
                    <button 
                        key={key}
                        type="button"
                        className={`education-button ${education === educationOptions[key] ? 'selected' : ''}`}
                        onClick={() => setEducation(educationOptions[key])}
                    >
                        {key}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Education;

