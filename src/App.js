import React from "react";
import freelancer from "./freelancer.svg";
import "./App.css";
import Routes from "./Routes";
import { Container } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const App = () => {
    return (
        <div className="App">
            <Container maxWidth="xl">
                <header className="App-header">
                    <img src={freelancer} className="App-logo" alt="logo" />
                    <p>Tomas Milkintas' Portfolio Site</p>
                    <div className="icons">
                        <LinkedInIcon className="icons" fontSize="large" />
                        <GitHubIcon className="icons" fontSize="large" />
                        <EmailIcon className="icons" fontSize="large" />
                    </div>
                </header>
                <Routes />
            </Container>
        </div>
    );
};

export default App;
