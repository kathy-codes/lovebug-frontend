import "./Age.scss";

const Age = ({ age, setAge }) => {
    return (
        <div className="age-container">
            <h2>What is your age?</h2>
            <input 
                type="number" 
                className="age-input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="0"
                min="0"
            />
        </div>
    );
};

export default Age;
