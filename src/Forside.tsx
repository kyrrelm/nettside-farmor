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
                <h2 style={{ fontSize: "1.8rem", fontWeight: 200 }}>
                    Sivilarkitekt
                </h2>
                <div style={{ marginTop: "8rem" }}>
                    <Link
                        style={{
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            fontSize: "1.2rem",
                        }}
                        to="/album"
                    >
                        Prosjekter
                    </Link>
                    <Link
                        style={{
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            fontSize: "1.2rem",
                        }}
                        to="/album"
                    >
                        Om Meg
                    </Link>
                    <Link
                        style={{
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            fontSize: "1.2rem",
                        }}
                        to="/album"
                    >
                        Kontak
                    </Link>
                </div>
            </div>
        </div>
    );
}
