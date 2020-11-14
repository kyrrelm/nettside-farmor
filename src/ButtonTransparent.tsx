import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";

export default function ButtonTransparent({
    children,
    onClick,
    style,
}: {
    children: ReactNode | ReactNode[];
    onClick: MouseEventHandler;
    style?: CSSProperties;
}) {
    const _style = { ...styles.button, ...style };
    return (
        <button onClick={onClick} style={_style}>
            {children}
        </button>
    );
}

const styles: { [name: string]: CSSProperties } = {
    button: {
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        border: "none",
        cursor: "pointer",
        overflow: "hidden",
        outline: "none",
    },
};
