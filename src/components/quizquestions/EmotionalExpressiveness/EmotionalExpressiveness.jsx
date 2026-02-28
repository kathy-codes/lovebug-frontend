import { useEffect } from "react";
import "./EmotionalExpressiveness.scss";

const EmotionalExpressiveness = ({ emotionalExpressiveness, setEmotionalExpressiveness }) => {
    
    useEffect(() => {
        // Default to 0.50 if not set, taking care of empty string from uninitialized form state
        if (emotionalExpressiveness === undefined || emotionalExpressiveness === null || emotionalExpressiveness === "") {
            setEmotionalExpressiveness(0.50);
        }
    }, [emotionalExpressiveness, setEmotionalExpressiveness]);

    const currentValue = (emotionalExpressiveness !== undefined && emotionalExpressiveness !== null && emotionalExpressiveness !== "") 
        ? Number(emotionalExpressiveness) 
        : 0.50;

    return (
        <div className="emotional-expressiveness-container">
            <h2>When it comes to feelings, you...</h2>
            
            <div className="expressiveness-slider-wrapper">
                <div className="slider-labels">
                    <span className="label-left">I show it all</span>
                    <span className="label-right">I keep it inside</span>
                </div>
                
                <input 
                    type="range" 
                    className="expressiveness-slider" 
                    min="0" 
                    max="1" 
                    step="0.01"
                    value={currentValue}
                    onChange={(e) => setEmotionalExpressiveness(Number(e.target.value))}
                    style={{ '--val': `${currentValue * 100}%` }}
                />
            </div>
        </div>
    );
};

export default EmotionalExpressiveness;
