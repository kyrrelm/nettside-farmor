import React, {ReactNode} from "react";
import blue from "@material-ui/core/colors/blue";

const styles = {
    style: {
        background: 'blue',
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

export default function Slide({children}: {children: ReactNode | ReactNode[]}) {
    return <div style={styles.style}>{children}</div>;
}

