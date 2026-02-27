import "./Extraversion.scss";

const Extraversion = ({ extraversion, setExtraversion }) => {
    const extraversions = [
        "Introvert (quiet, observant, calm)",
        "Ambivert (depends on the mood)",
        "Extrovert (life of the party)"
    ]
    // We calculate the value. The last one is 1. The first one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (i + 1) / N.
    // Example with 3 items: 1/3, 2/3, 3/3 (1).
    const calculateValue = (index) => {
        return (index + 1) / extraversions.length;
    };
    
    return (
        <div className="extraversion-container">
            <h2>In social settings, your energy is usually…</h2>
            <div className="extraversion-options-list">
                {extraversions.map((extraversionItem, index) => {
                    const value = calculateValue(index);
                    return (
                        <div key={extraversionItem}>
                            <label>
                                <input 
                                    type="radio" 
                                    name="extraversion" 
                                    value={value}
                                    checked={extraversion === value}
                                    onChange={() => setExtraversion(value)}
                                />
                                {extraversionItem}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Extraversion;
