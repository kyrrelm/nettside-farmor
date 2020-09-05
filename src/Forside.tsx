import React from 'react';
import {useHistory} from "react-router-dom";
import Button from "./Button";

export default function Forside() {
    const history = useHistory();
    return (
        <div className="App">
            <h1>Forside</h1>
            <Button onClick={() => history.push('/album')} text={'Album'} />
        </div>
    );
}

