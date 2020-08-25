import React from "react";
import "./Projects.css";
import Link from "@material-ui/core/Link";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = (props) => {
    return (
        <div className="main">
            <Link href="/"> Home </Link>
            <h1>This is the Projects' Section of my portfolio</h1>
            <ProjectsCarousel />
        </div>
    );
};

export default Projects;
