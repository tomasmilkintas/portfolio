import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import { Container } from "@material-ui/core";

const App = () => {
    return (
        <div className="App">
            <Container maxWidth="lg">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Tomas Milkintas' Portfolio Site</p>
                    <Routes />
                </header>
            </Container>
        </div>
    );
};

export default App;
