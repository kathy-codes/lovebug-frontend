import { useEffect } from "react";
import "./Extraversion.scss";

const Extraversion = ({ extraversion, setExtraversion }) => {
    const extraversions = [
        "Quiet and observant",
        "Depends on my mood",
        "Life of the party"
    ];

    useEffect(() => {
        // Default to 0.50 if not set, taking care of empty string from uninitialized form state
        if (extraversion === undefined || extraversion === null || extraversion === "") {
            setExtraversion(0.50);
        }
    }, [extraversion, setExtraversion]);

    const currentValue = (extraversion !== undefined && extraversion !== null && extraversion !== "") 
        ? Number(extraversion) 
        : 0.50;

    return (
        <div className="extraversion-container">
            <h2>In social settings, your energy is usually…</h2>
            
            <div className="extraversion-slider-wrapper">
                <div className="slider-labels">
                    <span className="label-left">{extraversions[0]}</span>
                    <span className="label-center">{extraversions[1]}</span>
                    <span className="label-right">{extraversions[2]}</span>
                </div>
                
                <input 
                    type="range" 
                    className="extraversion-slider" 
                    min="0" 
                    max="1" 
                    step="0.01"
                    value={currentValue}
                    onChange={(e) => setExtraversion(Number(e.target.value))}
                    style={{ '--val': `${currentValue * 100}%` }}
                />
            </div>
        </div>
    );
};

export default Extraversion;
