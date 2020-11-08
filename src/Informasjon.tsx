import React, { CSSProperties, ReactNode } from "react";

interface Props {
    linjer: string[];
    lenke?: { tekst: string; path: string };
    children?: ReactNode | ReactNode[];
}

export default function Informasjon({ linjer, lenke, children }: Props) {
    return (
        <div style={styles.informasjon}>
            {linjer.map((linje) => (
                <p style={styles.p}>
                    {linje}
                    {lenke && (
                        <a href={lenke.path} style={styles.lenke}>
                            {lenke.tekst}
                        </a>
                    )}
                    {lenke && '.'}
                </p>
            ))}
            {children}
        </div>
    );
}

const styles: { [name: string]: CSSProperties } = {
    informasjon: {
        marginTop: "3rem",
        maxWidth: "40rem",
    },
    p: { margin: 0 },
    lenke: { textDecoration: "underline" },
};
