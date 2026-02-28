import healthIcon from "../../../assets/icons/health.svg";
import techIcon from "../../../assets/icons/deepfakeTechnology.svg";
import artsIcon from "../../../assets/icons/art.svg";
import scienceIcon from "../../../assets/icons/scienceSpark.svg";
import marketingIcon from "../../../assets/icons/speaker.svg";
import entrepreneurshipIcon from "../../../assets/icons/rocket.svg";
import educationIcon from "../../../assets/icons/education.svg";
import lawIcon from "../../../assets/icons/law.svg";
import engineeringIcon from "../../../assets/icons/gears.svg";
import "./CareerField.scss";

const CareerField = ({ careerField, setCareerField }) => {
    const careers = [
        { label: "Healthcare", icon: healthIcon },
        { label: "Tech", icon: techIcon },
        { label: "Creative Arts", icon: artsIcon },
        { label: "Science", icon: scienceIcon },
        { label: "Marketing", icon: marketingIcon },
        { label: "Entrepreneurship", icon: entrepreneurshipIcon },
        { label: "Education", icon: educationIcon },
        { label: "Law", icon: lawIcon },
        { label: "Engineering", icon: engineeringIcon }
    ];
    
    return (
        <div className="career-field-container">
            <h2>What do you do for work?</h2>
            <div className="career-grid">
                {careers.map((career) => (
                    <button 
                        key={career.label} 
                        className={`career-btn ${careerField === career.label ? 'selected' : ''}`}
                        onClick={() => setCareerField(career.label)}
                        type="button"
                    >
                        <img src={career.icon} alt={career.label} className="career-icon" />
                        <span>{career.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CareerField;
