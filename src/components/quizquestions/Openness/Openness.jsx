import "./Openness.scss";

const Openness = ({ openness, setOpenness }) => {
    const opennesses = [
        "Chase them actively",
        "Usually say yes",
        "Pick and choose",
        "Prefer familiar favorites",
        "Love my routine"
    ]
    // We calculate the value. The first one is 1. The last one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (N - i) / N.
    // Example with 5 items: 5/5 (1), 4/5, 3/5, 2/5, 1/5.
    const calculateValue = (index) => {
        return (opennesses.length - index) / opennesses.length;
    };
    
    return (
        <div className="openness-container">
            <h2>In social settings, your energy is usually…</h2>
            <div className="openness-options-list">
                {opennesses.map((item, index) => {
                    const value = calculateValue(index);
                    return (
                        <div key={item}>
                            <label>
                                <input 
                                    type="radio" 
                                    name="openness" 
                                    value={value}
                                    checked={openness === value}
                                    onChange={() => setOpenness(value)}
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

export default Openness;
