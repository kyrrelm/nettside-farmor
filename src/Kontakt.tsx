import React, {CSSProperties} from "react";
import StandardPageLayout from "./StandardPageLayout";
import { useWindowSize } from "./carousel/util";
import Informasjon from "./Informasjon";
// @ts-ignore
import Obfuscate from 'react-obfuscate';

export default function Kontakt() {
    const [width] = useWindowSize();
    const isMobile = width < 600;
    return (
        <StandardPageLayout isMobile={isMobile} title={"Kontakt"} centerTitle>
            <Informasjon
                isMobil={isMobile}
                linjer={[
                    "siv.ark Anne Grete Hansteen",
                    "Gimleveien 30, 1358 Jar",
                    "Tlf: +4767531783",
                    "Mobil: +4791532632",
                ]}
            >
                <p style={styles.p}>E-post: <Obfuscate email={'anne.grete.hansteen@gmail.com'}/> </p>
            </Informasjon>
        </StandardPageLayout>
    );
}


const styles: { [name: string]: CSSProperties } = {
    p: { margin: 0 },
};
