import React from "react";
import Project from "./Project";
import arvoll2 from "../img/BoliganleggArvoll/2boliganleggArvoll.jpeg";
import arvoll3 from "../img/BoliganleggArvoll/3boliganleggArvoll.jpeg";
import arvoll4 from "../img/BoliganleggArvoll/4boliganleggArvoll.jpeg";
import arvoll5 from "../img/BoliganleggArvoll/5boliganleggArvoll.jpeg";
import arvoll6 from "../img/BoliganleggArvoll/6boliganleggArvoll.jpeg";
import arvoll7 from "../img/BoliganleggArvoll/7boliganleggArvoll.jpeg";
import blindern1 from "../img/BarnehageBlindern/1BarnehageBlindern.jpeg";
import blindern2 from "../img/BarnehageBlindern/2BarnehageBlindern.jpeg";
import boliganleggBestum1 from "../img/BoliganleggBestumBakkeveien1/BoliganleggBestum1.jpeg";
import boliganleggBestum2 from "../img/BoliganleggBestumBakkeveien1/BoliganleggBestum2.jpeg";
import boliganleggBestum3 from "../img/BoliganleggBestumBakkeveien1/BoliganleggBestum3.jpeg";
import boliganlegg2Bestum1 from "../img/BoliganleggBestumBakkeveien3-9/1BoliganleggBestum(2).jpeg";
import boliganlegg2Bestum2 from "../img/BoliganleggBestumBakkeveien3-9/2BoliganleggBestum(2).jpeg";
import boliganlegg2Bestum3 from "../img/BoliganleggBestumBakkeveien3-9/3BoliganleggBestum(2).jpeg";
import boliganlegg2Bestum4 from "../img/BoliganleggBestumBakkeveien3-9/4BoliganleggBestum(2).jpeg";
import boliganleggFurulund1 from "../img/BoliganleggFurulund/1BoligFurulund.jpeg";
import boliganleggFurulund2 from "../img/BoliganleggFurulund/2BoligFurulund.jpeg";
import boliganleggFurulund3 from "../img/BoliganleggFurulund/3BoligFurulund.jpeg";
import boliganleggFurulund4 from "../img/BoliganleggFurulund/4Furulund1_etg.jpeg";
import boliganleggLilleaker1 from "../img/BoliganleggLilleaker/1BoligLilleaker.jpeg";
import boliganleggLilleaker2 from "../img/BoliganleggLilleaker/2BoligLilleaker.jpeg";
import boliganleggLilleaker3 from "../img/BoliganleggLilleaker/3BoligLilleaker.jpeg";
import boliganleggLilleaker4 from "../img/BoliganleggLilleaker/4BoligLilleaker.jpeg";
import boliganleggNordstrand1 from "../img/BoliganleggNordstrand/1BoliganleggNordstrand.jpeg";
import boliganleggNordstrand2 from "../img/BoliganleggNordstrand/2BoliganleggNordstrand.jpeg";
import boliganlegg2Nordstrand1 from "../img/BoliganleggNordstrand2/2_1BoliganleggNordstrand.jpeg";
import boliganlegg2Nordstrand2 from "../img/BoliganleggNordstrand2/2_2BoliganleggNordstrand.jpeg";
import boliganleggSandaker1 from "../img/BoliganleggSandakerveien/1boliganleggSandaker.jpeg";
import boliganleggSandaker2 from "../img/BoliganleggSandakerveien/2boliganleggSandaker.jpeg";
import boliganleggSandaker3 from "../img/BoliganleggSandakerveien/3boliganleggSandaker.jpeg";
import boliganleggSandaker4 from "../img/BoliganleggSandakerveien/4boliganleggSandaker.jpeg";
import eneboligBillingstad from "../img/EneboligBillingstad/B13.jpg";
import eneboligGjettum1 from "../img/EneboligGjettum/1eneboligGjettum.jpeg";
import eneboligGjettum2 from "../img/EneboligGjettum/2eneboligGjettum.jpeg";
import eneboligJar1 from "../img/EneboligJar/1EneboligJar.jpeg";
import eneboligJar2 from "../img/EneboligJar/2EneboligJar.jpeg";
import eneboligJar3 from "../img/EneboligJar/3EneboligJar.jpeg";
import eneboligJar4 from "../img/EneboligJar/4EneboligJar.jpeg";
import eneboligJar5 from "../img/EneboligJar/5EneboligJar.jpeg";
import eneboligJar6 from "../img/EneboligJar/6EneboligJar.jpg";
import enebolig2Jar1 from "../img/EneboligJar2/2_1EneboligJar.jpeg";
import enebolig2Jar2 from "../img/EneboligJar2/2_2EneboligJar.jpeg";
import enebolig2Jar3 from "../img/EneboligJar2/2_3EneboligJar.jpeg";
import enebolig3Jar1 from "../img/EneboligJar3/3_1EneboligJar.jpeg";
import enebolig3Jar2 from "../img/EneboligJar3/3_2EneboligJar.jpeg";
import enebolig3Jar3 from "../img/EneboligJar3/3_3EneboligJar.jpeg";
import firemannsboligNordberg1 from "../img/FiremannsboligNordberg/1FiremannsboligNordberg.jpeg";
import firemannsboligNordberg2 from "../img/FiremannsboligNordberg/2FiremannsboligNordberg.jpeg";
import tomannsboligBlommenholm1 from "../img/TomannsboligBlommenholm/1TomannsboligBlommenholm.jpg";
import tomannsboligBlommenholm2 from "../img/TomannsboligBlommenholm/2TomannsboligBlommenholm.jpg";
import tomannsboligSandvika from "../img/TomannsboligSandvika/TomannsboligSandvika.jpg";
import tomannsboligUllern1 from "../img/TomannsboligUllern/1TomannsboligerUllern.jpeg";
import tomannsboligUllern2 from "../img/TomannsboligUllern/2TomannsboligerUllern.jpeg";
import tomannsboligUllern3 from "../img/TomannsboligUllern/3TomannsboligerUllern.jpeg";
import tomannsboligUllern4 from "../img/TomannsboligUllern/4TomannsboligerUllern.jpeg";
import {useHistory} from "react-router-dom";
import {useWindowSize} from "../carousel/util";
import StandardPageLayout from "../StandardPageLayout";

export default function Album() {
    const history = useHistory();
    const [width] = useWindowSize();

    const isMobile = width < 600;

    const imagesArvoll = [arvoll2, arvoll3, arvoll4, arvoll5, arvoll6, arvoll7];
    const imagesBlindern = [blindern1, blindern2];
    const imagesBestumBakkeveien1 = [
        boliganleggBestum1,
        boliganleggBestum2,
        boliganleggBestum3,
    ];
    const imagesBestumBakkeveien3_9 = [
        boliganlegg2Bestum1,
        boliganlegg2Bestum2,
        boliganlegg2Bestum3,
        boliganlegg2Bestum4,
    ];
    const imagesFurulund = [
        boliganleggFurulund1,
        boliganleggFurulund2,
        boliganleggFurulund3,
        boliganleggFurulund4,
    ];
    const imagesLilleaker = [
        boliganleggLilleaker1,
        boliganleggLilleaker2,
        boliganleggLilleaker3,
        boliganleggLilleaker4,
    ];
    const imagesNordstrand = [boliganleggNordstrand1, boliganleggNordstrand2];
    const imagesNordstrand2 = [
        boliganlegg2Nordstrand1,
        boliganlegg2Nordstrand2,
    ];
    const imagesBoliganleggSandaker = [
        boliganleggSandaker1,
        boliganleggSandaker2,
        boliganleggSandaker3,
        boliganleggSandaker4,
    ];
    const imagesEneboligBillingstad = [eneboligBillingstad];
    const imagesEneboligGjettum = [eneboligGjettum1, eneboligGjettum2];
    const imagesEneboligJar = [
        eneboligJar1,
        eneboligJar2,
        eneboligJar3,
        eneboligJar4,
        eneboligJar5,
        eneboligJar6,
    ];
    const imagesEneboligJar2 = [enebolig2Jar1, enebolig2Jar2, enebolig2Jar3];
    const imagesEneboligJar3 = [enebolig3Jar1, enebolig3Jar2, enebolig3Jar3];
    const imagesFiremannsboligNordberg = [
        firemannsboligNordberg1,
        firemannsboligNordberg2,
    ];
    const imagesTomannsboligBlommenholm = [
        tomannsboligBlommenholm1,
        tomannsboligBlommenholm2,
    ];
    const imagesTomannsboligSandvika = [tomannsboligSandvika];
    const imagesTomannsboligUllern = [
        tomannsboligUllern1,
        tomannsboligUllern2,
        tomannsboligUllern3,
        tomannsboligUllern4,
    ];

    return (
        <StandardPageLayout isMobile={isMobile} title={"Prosjekter"}>
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Boliganlegg Årvoll"}
                adresse={"Årvollveien 33"}
                imageUrls={imagesArvoll}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Barnehage Blindern"}
                adresse={"Gaustadalléen 13"}
                imageUrls={imagesBlindern}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Boliganlegg Bestum"}
                adresse={"Bakkeveien 1"}
                imageUrls={imagesBestumBakkeveien1}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Boliganlegg Bestum"}
                adresse={"Bakkeveien 3-9"}
                imageUrls={imagesBestumBakkeveien3_9}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Boliganlegg Furulund"}
                adresse={"Furulundveien 13"}
                imageUrls={imagesFurulund}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Boliganlegg Lilleaker"}
                adresse={"Lilleakerveien 37"}
                imageUrls={imagesLilleaker}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Boliganlegg Nordstrand"}
                adresse={"Solveien 138CD"}
                imageUrls={imagesNordstrand}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Boliganlegg Nordstrand"}
                adresse={"Birgitte Hammers vei 1b"}
                imageUrls={imagesNordstrand2}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Boliganlegg Sandaker"}
                adresse={"Sandakerveien 36A-42"}
                imageUrls={imagesBoliganleggSandaker}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Enebolig Billingstad"}
                adresse={"Billingstadveien 13B"}
                imageUrls={imagesEneboligBillingstad}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Enebolig Gjettum"}
                adresse={"Sykehusveien 15-17"}
                imageUrls={imagesEneboligGjettum}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Enebolig Jar"}
                adresse={"Gimleveien 30"}
                imageUrls={imagesEneboligJar}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Enebolig Jar"}
                adresse={"Bjerkelundsveien 51C"}
                imageUrls={imagesEneboligJar3}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Enebolig Jar"}
                adresse={"Voll Terrasse 35B"}
                imageUrls={imagesEneboligJar2}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Firemannsbolig Nordberg"}
                adresse={"Brattelia 7"}
                imageUrls={imagesFiremannsboligNordberg}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Tomannsbolig Blommenholm"}
                adresse={"Stasjonsveien 87-89"}
                imageUrls={imagesTomannsboligBlommenholm}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Tomannsbolig Sandvika"}
                adresse={"Kampebråten 5"}
                imageUrls={imagesTomannsboligSandvika}
            />
            <Project
                width={width}
                isMobile={isMobile}
                navn={"Tomannsbolig Ullern"}
                adresse={"Slalåmveien 10-12"}
                imageUrls={imagesTomannsboligUllern}
            />
        </StandardPageLayout>
    );
}
