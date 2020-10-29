import React from "react";
import {Link, useHistory} from "react-router-dom";
import Button from "./Button";

export default function Forside() {
    const history = useHistory();
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <h1>Anne Grete Hansteen</h1>
                <h3>Sivilarkitekt</h3>
                <Link to="/album">Prosjekter</Link>
            </div>
        </div>
    );
}
