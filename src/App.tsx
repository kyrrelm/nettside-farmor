import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Forside from "./Forside";
import Album from "./album/Album";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Forside/>
                </Route>
                <Route path="/album">
                    <Album/>
                </Route>
            </Switch>
        </Router>
    );
}
