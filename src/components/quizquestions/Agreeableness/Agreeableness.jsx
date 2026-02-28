import waveLineIcon from "../../../assets/icons/waveLine.svg";
import chatIcon from "../../../assets/icons/chat.svg";
import anchorIcon from "../../../assets/icons/anchorRounded.svg";
import lightAirIcon from "../../../assets/icons/lightAirRounded.svg";
import "./Agreeableness.scss";

const Agreeableness = ({ agreeableness, setAgreeableness }) => {
    const agreeablenesses = [
        { label: "Smooth it over", icon: waveLineIcon },
        { label: "Talk it through", icon: chatIcon },
        { label: "Stand firm", icon: anchorIcon },
        { label: "Give it space", icon: lightAirIcon }
    ];
    // We calculate the value. The first one is 1. The last one is not 0.
    // So with N items, the i-th item (0-indexed) has value = (N - i) / N.
    // Example with 4 items: 4/4 (1), 3/4, 2/4, 1/4.
    const calculateValue = (index) => {
        return (agreeablenesses.length - index) / agreeablenesses.length;
    };
    
    return (
        <div className="agreeableness-container">
            <h2>If tension pops up, you're most likely to...</h2>
            <div className="agreeableness-grid">
                {agreeablenesses.map((item, index) => {
                    const value = calculateValue(index);
                    return (
                        <button 
                            key={item.label}
                            type="button"
                            className={`agreeableness-button ${agreeableness === value ? 'selected' : ''}`}
                            onClick={() => setAgreeableness(value)}
                        >
                            <img src={item.icon} alt={item.label} className="agreeableness-icon" />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Agreeableness;
