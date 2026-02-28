import "./Conscientiousness.scss";

const Conscientiousness = ({ conscientiousness, setConscientiousness }) => {
    const conscientiousnesses = [
        "Calendar color-coded and ready",
        "Mostly organized",
        "Go with the flow",
        "What plans? We improvise"
    ]
    // We calculate the value. The first one is 1. The last one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (N - i) / N.
    // Example with 5 items: 5/5 (1), 4/5, 3/5, 2/5, 1/5.
    const calculateValue = (index) => {
        return (conscientiousnesses.length - index) / conscientiousnesses.length;
    };
    
    return (
        <div className="conscientiousness-container">
            <h2>Your approach to plans is...</h2>
            <div className="conscientiousness-options-list">
                {conscientiousnesses.map((item, index) => {
                    const value = calculateValue(index);
                    return (
                        <button 
                            key={item}
                            type="button"
                            className={`conscientiousness-button ${conscientiousness === value ? 'selected' : ''}`}
                            onClick={() => setConscientiousness(value)}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Conscientiousness;
