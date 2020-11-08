import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Forside from "./Forside";
import Album from "./album/Album";
import OmMeg from "./OmMeg";
import Kontakt from "./Kontakt";

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
                <Route path="/om-meg">
                    <OmMeg/>
                </Route>
                <Route path="/kontakt">
                    <Kontakt/>
                </Route>
            </Switch>
        </Router>
    );
}
