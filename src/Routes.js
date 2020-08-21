import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Vision from "./containers/Vision";
import Projects from "./containers/Projects";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/vision">
                <Vision />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
        </Switch>
    );
};

export default Routes;
