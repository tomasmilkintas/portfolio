import React from "react";
import carouselSteps from "./carouselSteps";
import Project from "./Project";
import "./Projects.css";

function Projects() {
    return (
        <div className="projects">
            {carouselSteps.map((item) => (
                <Project
                    label={item.label}
                    imgPath={item.imgPath}
                    github={item.github}
                    website={item.website}
                    tech={item.tech}
                    bulletPointOne={item.bulletPointOne}
                    bulletPointTwo={item.bulletPointTwo}
                />
            ))}
        </div>
    );
}

export default Projects;
