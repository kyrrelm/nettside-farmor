import React, { CSSProperties, ReactNode } from "react";

interface Props {
    linjer: string[];
    isMobil: boolean;
    lenke?: { tekst: string; path: string };
    children?: ReactNode | ReactNode[];
}

export default function Informasjon({
    linjer,
    isMobil,
    lenke,
    children,
}: Props) {
    return (
        <div
            style={{
                marginTop: isMobil ? "0" : "2rem",
                maxWidth: "40rem",
            }}
        >
            {linjer.map((linje) => (
                <p style={styles.p}>
                    {linje}
                    {lenke && (
                        <a href={lenke.path} style={styles.lenke}>
                            {lenke.tekst}
                        </a>
                    )}
                    {lenke && "."}
                </p>
            ))}
            {children}
        </div>
    );
}

const styles: { [name: string]: CSSProperties } = {
    p: {
        margin: 0,
        fontSize: '1.3rem'
    },
    lenke: {
        textDecoration: "underline",
    },
};
