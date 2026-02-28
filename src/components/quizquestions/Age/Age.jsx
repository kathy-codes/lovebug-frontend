import { useRef, useEffect } from "react";
import "./Age.scss";

const Age = ({ age, setAge }) => {
    // Default to 25 if not set, typical for these apps
    const currentAge = age || 25;
    const scrollRef = useRef(null);
    const itemHeight = 40; // Approx height of each list item in px
    
    // Generate an array of ages to choose from (18 to 99, plus some padding empty items)
    const padding = [null, null];
    const ageOptions = Array.from({ length: 82 }, (_, i) => i + 18);
    const displayList = [...padding, ...ageOptions, ...padding];

    useEffect(() => {
        // Scroll to the selected age on mount
        if (scrollRef.current && currentAge) {
            const index = ageOptions.indexOf(Number(currentAge));
            if (index !== -1) {
                scrollRef.current.scrollTop = index * itemHeight;
            }
        }
    }, []);

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        const index = Math.round(scrollTop / itemHeight);
        
        if (ageOptions[index] && ageOptions[index] !== Number(age)) {
            setAge(ageOptions[index]);
        }
    };

    const handleDecrement = () => {
        const newAge = Number(currentAge) - 1;
        if (newAge >= 18) {
            setAge(newAge);
            if (scrollRef.current) {
                scrollRef.current.scrollTop = ageOptions.indexOf(newAge) * itemHeight;
            }
        }
    };

    const handleIncrement = () => {
        const newAge = Number(currentAge) + 1;
        if (newAge <= 99) {
            setAge(newAge);
            if (scrollRef.current) {
                scrollRef.current.scrollTop = ageOptions.indexOf(newAge) * itemHeight;
            }
        }
    };

    return (
        <div className="age-container">
            <h2>What is your age?</h2>
            
            <div className="age-scroller-wrapper">
                <button 
                    className="age-arrow left-arrow" 
                    onClick={handleDecrement}
                    aria-label="Decrease age"
                ></button>
                
                <div className="selection-highlight"></div>
                
                <button 
                    className="age-arrow right-arrow" 
                    onClick={handleIncrement}
                    aria-label="Increase age"
                ></button>

                <div 
                    className="age-scroller" 
                    ref={scrollRef}
                    onScroll={handleScroll}
                >
                    {displayList.map((num, i) => (
                        <div 
                            key={i} 
                            className={`age-item ${Number(currentAge) === num ? 'selected' : ''} ${!num ? 'empty' : ''}`}
                            onClick={() => {
                                if (num) {
                                    setAge(num);
                                    scrollRef.current.scrollTop = ageOptions.indexOf(num) * itemHeight;
                                }
                            }}
                        >
                            {num || ""}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Age;
