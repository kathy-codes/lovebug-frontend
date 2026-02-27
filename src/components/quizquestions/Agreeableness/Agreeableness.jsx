import "./Agreeableness.scss";

const Agreeableness = ({ agreeableness, setAgreeableness }) => {
    const agreeablenesses = [
        "Smooth things over quickly",
        "Talk it through calmly",
        "Stand firm but respectful",
        "Give it space first",
        "Avoid the drama entirely"
    ]
    // We calculate the value. The first one is 1. The last one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (N - i) / N.
    // Example with 5 items: 5/5 (1), 4/5, 3/5, 2/5, 1/5.
    const calculateValue = (index) => {
        return (agreeablenesses.length - index) / agreeablenesses.length;
    };
    
    return (
        <div className="agreeableness-container">
            <h2>In social settings, your energy is usually…</h2>
            <div className="agreeableness-options-list">
                {agreeablenesses.map((item, index) => {
                    const value = calculateValue(index);
                    return (
                        <div key={item}>
                            <label>
                                <input 
                                    type="radio" 
                                    name="agreeableness" 
                                    value={value}
                                    checked={agreeableness === value}
                                    onChange={() => setAgreeableness(value)}
                                />
                                {item}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Agreeableness;
