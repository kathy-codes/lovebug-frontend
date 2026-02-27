import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button.jsx";
import "./QuizManager.scss";

const QuizManager = () => {
    // We have 10 steps. Let's use 1-based indexing for the UI.
    const [step, setStep] = useState(1);
    const totalSteps = 10;
    
    const handleNext = () => {
        if (step < totalSteps) {
            setStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    const handleSubmit = () => {
        console.log("Quiz submitted!");
        // Add your submit logic here
    };

    return (
        <div className="quiz-manager">
            <h2>Question {step} of {totalSteps}</h2>
            
            <div className="quiz-content">
                {/* Placeholder for the question presentation */}
                <p>Content for step {step} goes here...</p>
            </div>

            <div className="quiz-controls">
                {step > 1 && (
                    <Button onClick={handlePrev}>Back</Button>
                )}
                
                {step < totalSteps ? (
                    <Button onClick={handleNext}>Forward</Button>
                ) : (
                    <Button onClick={handleSubmit}>Submit</Button>
                )}
            </div>
        </div>
    );
};

export default QuizManager;