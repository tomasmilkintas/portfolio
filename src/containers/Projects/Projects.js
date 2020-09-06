import React from "react";
import carouselSteps from "./carouselSteps";
import Project from "./Project";

function Projects() {
    return (
        <div className="projects">
            {/* <h1 className="projects__title">Projects</h1> */}
            {/* <div className="projects__reel"> */}
            {carouselSteps.map((item) => (
                <Project
                    label={item.label}
                    imgPath={item.imgPath}
                    description={item.description}
                    github={item.github}
                    website={item.website}
                />
            ))}
            {/* </div> */}
        </div>
    );
}

export default Projects;
