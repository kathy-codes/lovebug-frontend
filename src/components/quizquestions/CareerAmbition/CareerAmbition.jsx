import waveLineIcon from "../../../assets/icons/waveLine.svg";
import alignMiddleIcon from "../../../assets/icons/alignMiddle.svg";
import speedIcon from "../../../assets/icons/speed.svg";
import "./CareerAmbition.scss";

const CareerAmbition = ({ careerAmbition, setCareerAmbition }) => {
    const ambitions = [
        { label: "Balanced", icon: waveLineIcon },
        { label: "Steady", icon: alignMiddleIcon },
        { label: "Full-speed", icon: speedIcon }
    ];
    // We calculate the value. The last one is 1. The first one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (i + 1) / N.
    // Example with 3 items: 1/3, 2/3, 3/3 (1).
    const calculateValue = (index) => {
        return (index + 1) / ambitions.length;
    };
    
    return (
        <div className="career-ambition-container">
            <h2>Your work life is...</h2>
            <div className="career-ambition-options-list">
                {ambitions.map((ambition, index) => {
                    const value = calculateValue(index);
                    return (
                        <button 
                            key={ambition.label}
                            type="button"
                            className={`career-ambition-button ${careerAmbition === value ? 'selected' : ''}`}
                            onClick={() => setCareerAmbition(value)}
                        >
                            <img src={ambition.icon} alt={ambition.label} className="career-ambition-icon" />
                            <span>{ambition.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CareerAmbition;
