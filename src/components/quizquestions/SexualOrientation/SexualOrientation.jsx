import "./SexualOrientation.scss";

const SexualOrientation = ({ sexual_orientation, setSexualOrientation, gender }) => {
    let sexual_orientations = ['Straight', 'Bisexual', 'Lesbian', 'Gay', 'Queer'];

    if (gender === 'Man') {
        sexual_orientations = sexual_orientations.filter(so => so !== 'Lesbian');
    } else if (gender === 'Woman') {
        sexual_orientations = sexual_orientations.filter(so => so !== 'Gay');
    } else if (gender === 'Other' || gender === 'Non-binary') {
        sexual_orientations = sexual_orientations.filter(so => so !== 'Lesbian' && so !== 'Gay');
    }
    return (
        <div className="sexual-orientation-container">
            <h2>What is your sexual orientation?</h2>
            <div className="sexual-orientation-options-list">
                {sexual_orientations.map((s) => (
                    <button
                        key={s}
                        type="button"
                        className={`sexual-orientation-button ${sexual_orientation === s ? 'selected' : ''}`}
                        onClick={() => setSexualOrientation(s)}
                    >
                        {s}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SexualOrientation;
