import React, { ReactNode } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

interface Props {
    isMobile: boolean;
    title: string;
    centerTitle?: boolean;
    children: ReactNode | ReactNode[];
}

export default function StandardPageLayout({
    isMobile,
    title,
    centerTitle,
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
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 935,
                    marginLeft: "4rem",
                    marginRight: "4rem",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: centerTitle ? "flex-start" : "center",
                        paddingTop: isMobile ? 60 : 90,
                    }}
                >
                    <h1 style={{ justifySelf: "center", fontSize: "3rem" }}>
                        {title}
                    </h1>
                </div>
                {children}
            </div>
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
        </div>
    );
}
