import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Projects from "./containers/Projects";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
        </Switch>
    );
};

export default Routes;
