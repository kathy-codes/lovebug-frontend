import parkSunriseIcon from "../../../assets/icons/parkSunrise.svg";
import sunOutlineIcon from "../../../assets/icons/sunOutline.svg";
import tablerCloudIcon from "../../../assets/icons/tablerCloud.svg";
import tablerMoonIcon from "../../../assets/icons/tablerMoon.svg";
import "./Chronotype.scss";

const Chronotype = ({ chronotype, setChronotype }) => {
    // Array holds the correct visual order for the 2x2 grid.
    // We map custom values to maintain the logic of the original quiz question.
    const chronotypes = [
        { label: "Sunrise mode", icon: parkSunriseIcon, value: 1, position: "top-left" },
        { label: "Midday mode", icon: sunOutlineIcon, value: 0.75, position: "top-right" },
        { label: "Night owl", icon: tablerMoonIcon, value: 0.25, position: "bottom-left" },
        { label: "Evening vibe", icon: tablerCloudIcon, value: 0.5, position: "bottom-right" }
    ];
    
    return (
        <div className="chronotype-container">
            <h2>You feel most alive and energized...</h2>
            <div className={`chronotype-grid ${chronotype !== undefined && chronotype !== "" ? "has-selection" : ""}`}>
                {chronotypes.map((item) => {
                    const isTop = item.position.includes("top");
                    return (
                        <button 
                            key={item.label}
                            type="button"
                            className={`chronotype-button ${item.position} ${chronotype === item.value ? 'selected' : ''}`}
                            onClick={() => setChronotype(item.value)}
                        >
                            {isTop ? (
                                <>
                                    <img src={item.icon} alt={item.label} className="chronotype-icon" />
                                    <span>{item.label}</span>
                                </>
                            ) : (
                                <>
                                    <span>{item.label}</span>
                                    <img src={item.icon} alt={item.label} className="chronotype-icon" />
                                </>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Chronotype;
