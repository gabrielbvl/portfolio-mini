import { experiencesData } from "../dataBase/experience";
import "../styles/components/technologiescontainer.sass";

const experiences = experiencesData;

const Experience = () => {
    return (
        <section className="technologies-container">
            <h2>Experiência com</h2>
            <div className="technologies-grid">
                {experiences.map((toll) => (
                    <div className="technology-card" id={toll.id} key={toll.id}>
                        {toll.icon}
                        <div className="technology-info">
                            <h3>{toll.name}</h3>
                            <p>{toll.level}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
