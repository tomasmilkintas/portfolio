import React from "react";
import "./App.css";
import Routes from "./Routes";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
    return (
        <div className="App">
            <Routes />
            <CssBaseline />
        </div>
    );
};

export default App;
