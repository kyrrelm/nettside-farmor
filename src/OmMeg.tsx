import React from "react";
import StandardPageLayout from "./StandardPageLayout";
import { useWindowSize } from "./carousel/util";
import Informasjon from "./Informasjon";

export default function OmMeg() {
    const [width] = useWindowSize();
    const isMobile = width <= 600;
    return (
        <StandardPageLayout isMobile={isMobile} title={"Om meg"}>
            <Informasjon
                linjer={[
                    "AEPOS arkitekter og planleggere AS ble stiftet 1989.",
                    "Arkitektpraksisen har vært konsentrert om boliger og boliganlegg i Oslo,",
                    "Bærum og Asker med spennvidde fra regulering til detaljprosjektnivå.",
                    "Eier og faglig leder/ansatt er sivilarktekt Anne Grete Hansteen.",
                    "Kontoret holder til i Gimleveien 30 på Jar.",
                ]}
            />
        </StandardPageLayout>
    );
}
