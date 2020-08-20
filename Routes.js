import React from "react";

import { Route, Switch } from "react-router-dom";

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
