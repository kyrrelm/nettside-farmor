import React from "react";
import StandardPageLayout from "./StandardPageLayout";
import { useWindowSize } from "./carousel/util";
import Informasjon from "./Informasjon";

export default function Kontakt() {
    const [width] = useWindowSize();
    const isMobile = width <= 600;
    return (
        <StandardPageLayout isMobile={isMobile} title={"Kontakt"} centerTitle>
            <Informasjon
                linjer={[
                    "siv.ark Anne Grete Hansteen",
                    "Gimleveien 30",
                    "1358 Jar",
                    "Tlf.: +4767531783",
                    "Mobil: +4791532632",
                    "E-post: ahanstee@online.no",
                ]}
            />
        </StandardPageLayout>
    );
}
