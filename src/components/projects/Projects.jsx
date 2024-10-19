import React, { useState } from 'react';
import projectsData from './projects.json';
import './Projects.scss';

const Projects = () => {
    const [currentImages, setCurrentImages] = useState(() =>
        projectsData.projects.map(() => 0)
    );

    const handleImageChange = (projectIndex, direction) => {
        setCurrentImages(prevImages => {
            const updatedImages = [...prevImages];
            const totalImages = projectsData.projects[projectIndex].images.length;
            updatedImages[projectIndex] = (prevImages[projectIndex] + direction + totalImages) % totalImages;
            return updatedImages;
        });
    };

    const renderProject = (project, index) => {
        const currentImage = project.images[currentImages[index]];

        return (
            <div className="project-showcase" key={index}>
                <div className="project-card">
                    <div className="image-container">
                        <button
                            className="image-nav prev"
                            onClick={() => handleImageChange(index, -1)}
                        >
                            &larr;
                        </button>
                        <img
                            src={currentImage}
                            alt={`${project.name} Image ${currentImages[index] + 1}`}
                            className="project-image"
                        />
                        <button
                            className="image-nav next"
                            onClick={() => handleImageChange(index, 1)}
                        >
                            &rarr;
                        </button>
                    </div>
                    <div className="project-content">
                        <h3>{project.name}</h3>
                        <p className="project-stack">Stack: {project.technologies}</p>
                        <p className="project-description">{project.desc}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            View Project on GitHub
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="projects">
            <h2>My Projects</h2>
            {projectsData.projects.length > 0 ? (
                projectsData.projects.map((project, index) => renderProject(project, index))
            ) : (
                <p>No projects available at the moment.</p>
            )}
        </section>
    );
};

export default Projects;