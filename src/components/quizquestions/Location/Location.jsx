import { useState, useEffect } from "react";
import mapPinIcon from "../../../assets/icons/mapPin.svg";
import pencilIcon from "../../../assets/icons/pencil.svg";
import shieldIcon from "../../../assets/icons/shield.svg";
import "./Location.scss";

const Location = ({ location, setLocation }) => {
    const locations = [
        { city: "Toronto", value: "Urban", country: "Canada" },
        { city: "Vancouver", value: "Urban", country: "Canada" },
        { city: "San Francisco", value: "Urban", country: "United States" },
        { city: "New York", value: "Urban", country: "United States" }
    ];

    const [selectedCityObj, setSelectedCityObj] = useState(() => {
        // Find if any location matches the currently passed `location` string
        const match = locations.find(loc => loc.value === location);
        return match || locations[2]; // Default to San Francisco
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Initialize the global response with the default value
        if (!location) {
            setLocation(selectedCityObj.value);
        }
    }, []);

    const handleCitySelect = (e) => {
        const cityName = e.target.value;
        const cityObj = locations.find(loc => loc.city === cityName);
        if (cityObj) {
            setSelectedCityObj(cityObj);
            setLocation(cityObj.value);
            setIsEditing(false);
        }
    };

    return (
        <div className="location-container">
            <h2 className="location-title">Where are you?</h2>
            <p className="location-subtitle">We'll personalise your experience based on your location</p>
            
            <div className="location-card">
                <img src={mapPinIcon} alt="Map Pin" className="location-pin-icon" />
                
                {isEditing ? (
                    <div className="location-edit-dropdown">
                        <select 
                            value={selectedCityObj.city} 
                            onChange={handleCitySelect}
                            className="location-select"
                        >
                            <option value="" disabled>Select a city</option>
                            {locations.map((loc) => (
                                <option key={loc.city} value={loc.city}>
                                    {loc.city}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <>
                        <h3 className="location-city">{selectedCityObj.city}</h3>
                        <p className="location-country">{selectedCityObj.country}</p>
                        
                        <div className="location-value-badge">
                            {selectedCityObj.value}
                        </div>
                        
                        <button 
                            type="button"
                            className="location-edit-btn" 
                            onClick={() => setIsEditing(true)}
                        >
                            <img src={pencilIcon} alt="Edit" className="location-pencil-icon" />
                            Edit location
                        </button>
                    </>
                )}
            </div>
            
            <div className="location-footer">
                <img src={shieldIcon} alt="Shield" className="location-shield-icon" />
                <p>Your exact location is never stored or shared.</p>
            </div>
        </div>
    );
};

export default Location;
