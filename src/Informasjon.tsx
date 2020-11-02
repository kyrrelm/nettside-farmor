import React, {CSSProperties, ReactNode} from "react";

interface Props {
    linjer: string[];
    children?: ReactNode | ReactNode[];
}

export default function Informasjon({ linjer, children }: Props) {
    return (
        <div style={styles.informasjon}>
            {linjer.map((linje) => (
                <p style={styles.p}>{linje}</p>
            ))}
            {children}
        </div>
    );
}


const styles: { [name: string]: CSSProperties } = {
    informasjon: {
        marginTop: '3rem',
        maxWidth: '40rem'
    },
    p: { margin: 0 },
};
