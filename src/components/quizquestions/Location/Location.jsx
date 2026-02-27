import "./Location.scss";

const Location = ({ location, setLocation }) => {
    const locations = [
        "Urban",
        "Suburban",
        "Rural"
    ]
    
    return (
        <div className="location-container">
            <h2>What is your location?</h2>
            <div className="location-options-list">
                {locations.map((loc) => (
                    <div key={loc}>
                        <label>
                            <input 
                                type="radio" 
                                name="location" 
                                value={loc}
                                checked={location === loc}
                                onChange={() => setLocation(loc)}
                            />
                            {loc}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Location;
