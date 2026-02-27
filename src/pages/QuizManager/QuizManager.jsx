import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button.jsx";
import Age from "../../components/quizquestions/Age/Age.jsx";
import Education from "../../components/quizquestions/Education/Education.jsx";
import Location from "../../components/quizquestions/Location/Location.jsx";
import CareerField from "../../components/quizquestions/CareerField/CareerField.jsx";
import CareerAmbition from "../../components/quizquestions/CareerAmbition/CareerAmbition.jsx";
import "./QuizManager.scss";

const QuizManager = ({ responses, setResponses }) => {
    // We have 10 steps. Let's use 1-based indexing for the UI.
    const [step, setStep] = useState(1);
    const totalSteps = 10;
    
    const handleNext = () => {
        if (step < totalSteps) {
            setStep((prev) => prev + 1);
            console.log(responses);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    const handleSubmit = () => {
        console.log("Quiz submitted!", responses);
        // Add your submit logic here
    };

    // Render the appropriate component based on the current step
    const renderStepContent = () => {
        switch (step) {
            case 1:
                return <Age 
                    age={responses?.age} 
                    setAge={(newAge) => setResponses({ ...responses, age: newAge })} 
                />
            case 2:
                return <Location
                    location={responses?.location}
                    setLocation={(newLocation) => setResponses({ ...responses, location: newLocation })}
                />
            case 3:
                return <Education
                    education={responses?.education}
                    setEducation={(newEducation) => setResponses({ ...responses, education: newEducation })}
                />
            case 4:
                return <CareerField
                    careerField={responses?.career_field}
                    setCareerField={(newCareerField) => setResponses({ ...responses, career_field: newCareerField })}
                />
            case 5:
                return <CareerAmbition
                    careerAmbition={responses?.career_ambition}
                    setCareerAmbition={(newCareerAmbition) => setResponses({ ...responses, career_ambition: newCareerAmbition })}
                />
            default:
                return <p>Content for step {step} goes here...</p>;
        }
    };

    return (
        <div className="quiz-manager">
            <h2>Question {step} of {totalSteps}</h2>
            
            <div className="quiz-content">
                {renderStepContent()}
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