import "./Spontaneity.scss";

const Spontaneity = ({ spontaneity, setSpontaneity }) => {
    const spontaneities = [
        "Say less, I’m in",
        "Usually sounds fun",
        "Depends on the day",
        "Prefer a little notice",
        "Please plan ahead"
    ]
    // We calculate the value. The first one is 1. The last one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (N - i) / N.
    // Example with 5 items: 5/5 (1), 4/5, 3/5, 2/5, 1/5.
    const calculateValue = (index) => {
        return (spontaneities.length - index) / spontaneities.length;
    };
    
    return (
        <div className="spontaneity-container">
            <h2>Surprise last-minute plans?</h2>
            <div className="spontaneity-options-list">
                {spontaneities.map((item, index) => {
                    const value = calculateValue(index);
                    return (
                        <div key={item}>
                            <label>
                                <input 
                                    type="radio" 
                                    name="spontaneity" 
                                    value={value}
                                    checked={spontaneity === value}
                                    onChange={() => setSpontaneity(value)}
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

export default Spontaneity;
