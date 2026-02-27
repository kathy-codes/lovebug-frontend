import "./CareerField.scss";

const CareerField = ({ careerField, setCareerField }) => {
    const careers = [
        "Healthcare",
        "Tech",
        "Marketing",
        "Finance",
        "Entrepreneurship",
        "Science",
        "Engineering",
        "Law",
        "Creative Arts",
        "Education"
    ]
    
    return (
        <div className="career-field-container">
            <h2>What is your career type?</h2>
            <select 
                className="career-field-select"
                value={careerField || ""} 
                onChange={(e) => setCareerField(e.target.value)}
            >
                <option value="" disabled>Select a career</option>
                {careers.map((career) => (
                    <option key={career} value={career}>
                        {career}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CareerField;
