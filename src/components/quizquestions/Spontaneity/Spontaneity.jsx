import clockFastIcon from "../../../assets/icons/clockFast.svg";
import alignMiddleIcon from "../../../assets/icons/alignMiddle.svg";
import calendarIcon from "../../../assets/icons/calendar.svg";
import "./Spontaneity.scss";

const Spontaneity = ({ spontaneity, setSpontaneity }) => {
    const spontaneities = [
        { label: "I’m in", icon: clockFastIcon },
        { label: "Depends", icon: alignMiddleIcon },
        { label: "I'd rather plan ahead", icon: calendarIcon }
    ];
    // We calculate the value. The first one is 1. The last one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (N - i) / N.
    // Example with 3 items: 3/3 (1), 2/3, 1/3.
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
                        <button 
                            key={item.label}
                            type="button"
                            className={`spontaneity-button ${spontaneity === value ? 'selected' : ''}`}
                            onClick={() => setSpontaneity(value)}
                        >
                            <img src={item.icon} alt={item.label} className="spontaneity-icon" />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Spontaneity;
