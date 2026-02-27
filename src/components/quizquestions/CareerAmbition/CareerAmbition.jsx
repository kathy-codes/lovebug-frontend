import "./CareerAmbition.scss";

const CareerAmbition = ({ careerAmbition, setCareerAmbition }) => {
    const ambitions = [
        "Balanced with life",
        "Steady builder",
        "Full speed (growth-first)"
    ]
    // We calculate the value. The last one is 1. The first one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (i + 1) / N.
    // Example with 3 items: 1/3, 2/3, 3/3 (1).
    const calculateValue = (index) => {
        return (index + 1) / ambitions.length;
    };
    
    return (
        <div className="career-ambition-container">
            <h2>Right now, your career energy feels…</h2>
            <div className="career-ambition-options-list">
                {ambitions.map((ambition, index) => {
                    const value = calculateValue(index);
                    return (
                        <div key={ambition}>
                            <label>
                                <input 
                                    type="radio" 
                                    name="careerAmbition" 
                                    value={value}
                                    checked={careerAmbition === value}
                                    onChange={() => setCareerAmbition(value)}
                                />
                                {ambition}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CareerAmbition;
