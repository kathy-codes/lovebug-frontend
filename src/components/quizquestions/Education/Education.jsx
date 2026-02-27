import "./Education.scss";

const Education = ({ education, setEducation }) => {
    const educationOptions = {
        "High School": 1,
        "Associate's": 2,
        "Bachelor's": 3,
        "Master's": 4,
        "Doctorate": 5
    };
    
    return (
        <div className="education-container">
            <h2>What is your education?</h2>
            <div className="education-options-list">
                {Object.keys(educationOptions).map((key) => (
                    <div key={key}>
                        <label>
                            <input 
                                type="radio" 
                                name="education" 
                                value={educationOptions[key]}
                                checked={education === educationOptions[key]}
                                onChange={() => setEducation(educationOptions[key])}
                            />
                            {key}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;

