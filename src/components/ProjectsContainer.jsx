import { projectsData } from "../dataBase/projects";
import "../styles/components/projectscontainer.sass";
import "../styles/components/project.sass";

const projects = projectsData;

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Projetos futuros estarão expostos aqui no portfolio para que vocês possam acompanhar
                minha evolução.
            </p>

            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card" id={project.id} key={project.id}>
                        <img src={project.img} alt={project.name} />
                        <div className="project-info">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="project-links">
                            <a className="btn-project" href={project.repository} target="__blank">
                                Repositorio
                            </a>
                            <a className="btn-project" href={project.link} target="__blank">
                                Aplicação
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="button-portfolio">
                <a
                    className="btn-portfolio"
                    href="https://portfolio-gabriel-gilt.vercel.app/"
                    target="__blank"
                >
                    Portfolio Antigo
                </a>
            </div>
        </section>
    );
};

export default ProjectsContainer;
