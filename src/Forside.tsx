import React from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "./carousel/util";

export default function Forside() {
    const [width] = useWindowSize();

    const isMobile = width <= 600;
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
                style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "4rem", marginBottom: "-1rem" }}>
                    Anne Grete Hansteen
                </h1>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 200 }}>
                    Sivilarkitekt
                </h2>
                <div style={{ marginTop: "8rem" }}>
                    <Link to="/album">Prosjekter</Link>
                </div>
            </div>
        </div>
    );
}
