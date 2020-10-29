import React, { ReactNode } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

interface Props {
    isMobile: boolean;
    title: string;
    children: ReactNode | ReactNode[];
}

export default function StandardPageLayout({
    isMobile,
    title,
    children,
}: Props) {
    const history = useHistory();
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                onClick={() => history.push("/")}
                style={{
                    cursor: "pointer",
                    position: "absolute",
                    left: "3rem",
                    top: "3rem",
                }}
            >
                <ArrowBackIcon fontSize={"large"} />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 935,
                    marginLeft: "3rem",
                    marginRight: "3rem",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: isMobile ? 30 : 90,
                    }}
                >
                    <h1 style={{ justifySelf: "center", fontSize: "3rem" }}>
                        {title}
                    </h1>
                </div>
                {children}
            </div>
        </div>
    );
}
