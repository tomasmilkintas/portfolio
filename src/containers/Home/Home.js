import React from "react";
import "./Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
// import ModalAbout from "../Modals/ModalAbout";
// import ModalProjects from "../Modals/ModalProjects";
import freelancer from "../../freelancer.svg";
import Projects from "../Projects/Projects";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const Home = (props) => {
    return (
        <div className="home">
            <div className="App-header">
                <img src={freelancer} className="App-logo" alt="logo" />
                <h1 className="home__title">Tomas Milkintas' Portfolio Site</h1>
                <div className="links" aria-label="breadcrumb">
                    {/* <ModalProjects />
                    <ModalAbout /> */}
                    <a className="home__button" href="#bottom">
                        <KeyboardArrowDownIcon />
                    </a>
                </div>
                <div>
                    <Link
                        href="https://www.linkedin.com/in/tomas-milkintas/"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                    >
                        <LinkedInIcon className="icons" fontSize="large" />
                    </Link>
                    <Link
                        href="https://github.com/tomasmilkintas"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                    >
                        <GitHubIcon className="icons" fontSize="large" />
                    </Link>
                </div>
            </div>

            <div className="home__projects" id="bottom">
                <h1 className="home__projectsTitle">Projects</h1>
                {/* <p className="home__projectsNote">(scroll sideways)</p> */}
                <div className="home__projectSlider">
                    <Projects />
                </div>
            </div>
        </div>
    );
};

export default Home;
