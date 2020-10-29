import React from "react";
import { useHistory } from "react-router-dom";
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
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>Anne Grete Hansteen</h1>
                <Button onClick={() => history.push("/album")} text={"Album"} />
            </div>
        </div>
    );
}
