import "./Gender.scss";

const Gender = ({ gender, setGender }) => {
    const genders = ['Nonbinary', 'Male', 'Female', 'Other'];
    
    return (
        <div className="gender-container">
            <h2>What is your gender?</h2>
            <div className="gender-options-list">
                {genders.map((g) => (
                    <button 
                        key={g}
                        type="button"
                        className={`gender-button ${gender === g ? 'selected' : ''}`}
                        onClick={() => setGender(g)}
                    >
                        {g}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Gender;
