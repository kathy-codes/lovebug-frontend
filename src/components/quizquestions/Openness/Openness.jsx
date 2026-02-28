import rocketIcon from "../../../assets/icons/rocket.svg";
import starsLightIcon from "../../../assets/icons/starsLight.svg";
import lightEyeIcon from "../../../assets/icons/lightEye.svg";
import anchorRoundedIcon from "../../../assets/icons/anchorRounded.svg";
import "./Openness.scss";

const Openness = ({ openness, setOpenness }) => {
    const opennesses = [
        { label: "Chase them", icon: rocketIcon },
        { label: "Usually say yes", icon: starsLightIcon },
        { label: "Pick and choose", icon: lightEyeIcon },
        { label: "Love your routine", icon: anchorRoundedIcon }
    ];
    // We calculate the value. The first one is 1. The last one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (N - i) / N.
    // Example with 4 items: 4/4 (1), 3/4, 2/4, 1/4.
    const calculateValue = (index) => {
        return (opennesses.length - index) / opennesses.length;
    };
    
    return (
        <div className="openness-container">
            <h2>When it comes to new experiences, you...</h2>
            <div className="openness-grid">
                {opennesses.map((item, index) => {
                    const value = calculateValue(index);
                    return (
                        <button 
                            key={item.label}
                            type="button"
                            className={`openness-button ${openness === value ? 'selected' : ''}`}
                            onClick={() => setOpenness(value)}
                        >
                            <img src={item.icon} alt={item.label} className="openness-icon" />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Openness;
