import React from "react";
import "./Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import freelancer from "../../freelancer.svg";
import Projects from "../Projects/Projects";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

// Ideas to consider

// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import CopyEmail from "../copy/copyEmail";

const Home = (props) => {
    return (
        <div className="home">
            <div className="App-header" id="top">
                <img src={freelancer} className="App-logo" alt="logo" />
                <h1 className="home__title">Tomas Milkintas' Portfolio Site</h1>
                <div className="links" aria-label="breadcrumb">
                    <a className="home__arrowDown" href="#bottom">
                        <KeyboardArrowDownIcon />
                    </a>
                    {/* <CopyEmail /> */}
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
                <p className="home__projectsNote">(Scroll Sideways)</p>
                <div className="home__projectSlider">
                    <Projects />
                </div>
            </div>
            <div className="home__footer">
                <div className="home__footerText">
                    {" "}
                    <EmailIcon />
                    <p>tomas.milkintas1@gmail.com</p>
                </div>
                <div className="home__footerText">
                    <PhoneIcon />
                    <p>+44(0)7960150864</p>
                </div>
                {/* <a href="#top" className="home__arrowUp">
                    <ExpandLessIcon />
                </a> */}
            </div>
        </div>
    );
};

export default Home;
