import React from "react";
import {Link} from "react-router-dom";

export default function Forside() {
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
            <div
                className={'forside-tittel'}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "4em", marginBottom: "-1rem" }}>
                    Anne Grete Hansteen
                </h1>
                <h2 style={{ fontSize: "1.8em", fontWeight: 200 }}>
                    Sivilarkitekt
                </h2>
                <div style={{ marginTop: "8rem" }}>
                    <Link
                        style={{
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            fontSize: "1.2rem",
                        }}
                        to="/prosjekter"
                    >
                        Prosjekter
                    </Link>
                    <Link
                        style={{
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            fontSize: "1.2rem",
                        }}
                        to="/om-meg"
                    >
                        Om Meg
                    </Link>
                    <Link
                        style={{
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            fontSize: "1.2rem",
                        }}
                        to="/kontakt"
                    >
                        Kontakt
                    </Link>
                </div>
            </div>
        </div>
    );
}
