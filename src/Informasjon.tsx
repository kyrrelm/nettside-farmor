import React, { CSSProperties } from "react";

interface Props {
    linjer: string[];
}

export default function Informasjon({ linjer }: Props) {
    return (
        <div style={styles.informasjon}>
            {linjer.map((linje) => (
                <p style={styles.p}>{linje}</p>
            ))}
        </div>
    );
}


const styles: { [name: string]: CSSProperties } = {
    informasjon: {
        marginTop: '3rem',
    },
    p: { margin: 0 },
};
