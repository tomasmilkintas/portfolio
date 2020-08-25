import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;
