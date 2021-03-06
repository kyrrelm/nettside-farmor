import React, { ReactNode } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import ButtonTransparent from "./ButtonTransparent";

interface Props {
    isMobile: boolean;
    width: number;
    title: string;
    centerTitle?: boolean;
    children: ReactNode | ReactNode[];
}

export default function StandardPageLayout({
    isMobile,
    width,
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
                    marginLeft: "2rem",
                    marginRight: "2rem",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: centerTitle ? "flex-start" : "center",
                        paddingTop: isMobile ? 90 : 140,
                    }}
                >
                    <h1 style={{ justifySelf: "center", fontSize: "3rem" }}>
                        {title}
                    </h1>
                </div>
                {children}
            </div>
            <ButtonTransparent
                onClick={() => history.push("/")}
                style={{
                    cursor: "pointer",
                    position: "absolute",
                    left: width <= 1040 ? "2rem" : "3rem",
                    top: width <= 1040 ? "2rem" : "3rem",
                }}
            >
                <ArrowBackIcon fontSize={"large"} />
            </ButtonTransparent>
        </div>
    );
}
