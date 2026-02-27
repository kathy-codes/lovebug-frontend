import "./Chronotype.scss";

const Chronotype = ({ chronotype, setChronotype }) => {
    const chronotypes = [
        "Sunrise mode",
        "Midday mode",
        "Evening vibe",
        "Night owl"
    ]
    // We calculate the value. The first one is 1. The last one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (N - i) / N.
    // Example with 4 items: 4/4 (1), 3/4, 2/4, 1/4.
    const calculateValue = (index) => {
        return (chronotypes.length - index) / chronotypes.length;
    };
    
    return (
        <div className="chronotype-container">
            <h2>You feel most alive and energized…</h2>
            <div className="chronotype-options-list">
                {chronotypes.map((item, index) => {
                    const value = calculateValue(index);
                    return (
                        <div key={item}>
                            <label>
                                <input 
                                    type="radio" 
                                    name="chronotype" 
                                    value={value}
                                    checked={chronotype === value}
                                    onChange={() => setChronotype(value)}
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

export default Chronotype;
