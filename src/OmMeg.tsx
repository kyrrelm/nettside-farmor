import React from "react";
import StandardPageLayout from "./StandardPageLayout";
import { useWindowSize } from "./carousel/util";
import Informasjon from "./Informasjon";

export default function OmMeg() {
    const [width] = useWindowSize();
    const isMobile = width < 600;
    return (
        <StandardPageLayout isMobile={isMobile} title={"Om meg"} centerTitle>
            <Informasjon
                isMobil={isMobile}
                linjer={[
                    "Tidligere AEPOS arkitekter og planleggere AS er blitt til Arkitektkontoret Anne Grete Hansteen. " +
                    "Arkitekt-praksisen er fortsatt konsentrert om boliger og boliganlegg i Oslo, " +
                    "Bærum og Asker med spennvidde fra regulering, byggemelding til detaljprosjekt-nivå. " +
                    "Viser til referanser som er tidligere realiserte prosjekter som kan sees ",
                ]}
                lenke={{tekst:'her', path:'/prosjekter'}}
            />
        </StandardPageLayout>
    );
}
