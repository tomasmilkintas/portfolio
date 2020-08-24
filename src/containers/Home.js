import React from "react";
import "./Home.css";
import { Container } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import ModalAbout from "./ModalAbout";
import ModalVision from "./ModalVision";
import freelancer from "../freelancer.svg";

const Home = (props) => {
    return (
        <Container maxWidth="xl" disableGutters="true">
            <header className="App-header">
                <img src={freelancer} className="App-logo" alt="logo" />
                <h1>Tomas Milkintas' Portfolio Site</h1>
                <div className="links" aria-label="breadcrumb">
                    <ModalAbout className="modals" />
                    <ModalVision className="modals" />
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
            </header>
        </Container>
    );
};

export default Home;
