import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";

export default function ButtonTransparent({
    children,
    onClick,
    style,
    light,
}: {
    children: ReactNode | ReactNode[];
    onClick: MouseEventHandler;
    style?: CSSProperties;
    light?: boolean;
}) {
    const _style = { ...styles.button, ...style };
    const classes = classNames(
        { "button-light": light },
        { "button-dark": !light }
    );
    return (
        <button className={classes} onClick={onClick} style={_style}>
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
