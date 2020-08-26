import React from "react";
import "./Projects.css";
import Link from "@material-ui/core/Link";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = (props) => {
    return (
        <div className="main">
            <Link href="/"> Home </Link>
            <ProjectsCarousel />
        </div>
    );
};

export default Projects;
