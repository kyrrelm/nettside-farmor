import React, { CSSProperties } from "react";
import StandardPageLayout from "./StandardPageLayout";
import { useWindowSize } from "./carousel/util";

export default function Kontakt() {
    const [width] = useWindowSize();
    const isMobile = width <= 600;
    return (
        <StandardPageLayout isMobile={isMobile} title={"Kontakt"}>
            <p style={styles.p}>siv.ark Anne Grete Hansteen</p>
            <p style={styles.p}>Gimleveien 30</p>
            <p style={styles.p}>1358 Jar</p>
            <p style={styles.p}>Tlf.: +4767531783</p>
            <p style={styles.p}>Mobil: +4791532632</p>
            <p style={styles.p}>E-post: ahanstee@online.no</p>
        </StandardPageLayout>
    );
}

const styles: { [name: string]: CSSProperties } = {
    p: { margin: 0 },
};
