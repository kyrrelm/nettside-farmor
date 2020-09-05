import React from 'react';
import Project from "./Project";
import arvoll2 from '../img/BoliganleggArvoll/2boliganleggArvoll.jpeg';
import arvoll3 from '../img/BoliganleggArvoll/3boliganleggArvoll.jpeg';
import arvoll4 from '../img/BoliganleggArvoll/4boliganleggArvoll.jpeg';
import arvoll5 from '../img/BoliganleggArvoll/5boliganleggArvoll.jpeg';
import arvoll6 from '../img/BoliganleggArvoll/6boliganleggArvoll.jpeg';
import arvoll7 from '../img/BoliganleggArvoll/7boliganleggArvoll.jpeg';
import blindern1 from '../img/BarnehageBlindern/1BarnehageBlindern.jpeg';
import blindern2 from '../img/BarnehageBlindern/2BarnehageBlindern.jpeg';
import boliganleggBestum1 from '../img/BoliganleggBestumBakkeveien1/BoliganleggBestum1.jpeg';
import boliganleggBestum2 from '../img/BoliganleggBestumBakkeveien1/BoliganleggBestum2.jpeg';
import boliganleggBestum3 from '../img/BoliganleggBestumBakkeveien1/BoliganleggBestum3.jpeg';
import boliganlegg2Bestum1 from '../img/BoliganleggBestumBakkeveien3-9/1BoliganleggBestum(2).jpeg';
import boliganlegg2Bestum2 from '../img/BoliganleggBestumBakkeveien3-9/2BoliganleggBestum(2).jpeg';
import boliganlegg2Bestum3 from '../img/BoliganleggBestumBakkeveien3-9/3BoliganleggBestum(2).jpeg';
import boliganlegg2Bestum4 from '../img/BoliganleggBestumBakkeveien3-9/4BoliganleggBestum(2).jpeg';
import boliganleggFurulund1 from '../img/BoliganleggFurulund/1BoligFurulund.jpeg';
import boliganleggFurulund2 from '../img/BoliganleggFurulund/2BoligFurulund.jpeg';
import boliganleggFurulund3 from '../img/BoliganleggFurulund/3BoligFurulund.jpeg';
import boliganleggFurulund4 from '../img/BoliganleggFurulund/4Furulund1_etg.jpeg';
import boliganleggLilleaker1 from '../img/BoliganleggLilleaker/1BoligLilleaker.jpeg';
import boliganleggLilleaker2 from '../img/BoliganleggLilleaker/2BoligLilleaker.jpeg';
import boliganleggLilleaker3 from '../img/BoliganleggLilleaker/3BoligLilleaker.jpeg';
import boliganleggLilleaker4 from '../img/BoliganleggLilleaker/4BoligLilleaker.jpeg';
import boliganleggNordstrand1 from '../img/BoliganleggNordstrand/1BoliganleggNordstrand.jpeg';
import boliganleggNordstrand2 from '../img/BoliganleggNordstrand/2BoliganleggNordstrand.jpeg';
import boliganlegg2Nordstrand1 from '../img/BoliganleggNordstrand2/2_1BoliganleggNordstrand.jpeg';
import boliganlegg2Nordstrand2 from '../img/BoliganleggNordstrand2/2_2BoliganleggNordstrand.jpeg';
import boliganleggSandaker1 from '../img/BoliganleggSandakerveien/1boliganleggSandaker.jpeg';
import boliganleggSandaker2 from '../img/BoliganleggSandakerveien/2boliganleggSandaker.jpeg';
import boliganleggSandaker3 from '../img/BoliganleggSandakerveien/3boliganleggSandaker.jpeg';
import boliganleggSandaker4 from '../img/BoliganleggSandakerveien/4boliganleggSandaker.jpeg';
import eneboligBillingstad from '../img/EneboligBillingstad/B13.jpg';
import eneboligGjettum1 from '../img/EneboligGjettum/1eneboligGjettum.jpeg';
import eneboligGjettum2 from '../img/EneboligGjettum/2eneboligGjettum.jpeg';
import eneboligJar1 from '../img/EneboligJar/1EneboligJar.jpeg';
import eneboligJar2 from '../img/EneboligJar/2EneboligJar.jpeg';
import eneboligJar3 from '../img/EneboligJar/3EneboligJar.jpeg';
import eneboligJar4 from '../img/EneboligJar/4EneboligJar.jpeg';
import eneboligJar5 from '../img/EneboligJar/5EneboligJar.jpeg';
import enebolig2Jar1 from '../img/EneboligJar2/2_1EneboligJar.jpeg';
import enebolig2Jar2 from '../img/EneboligJar2/2_2EneboligJar.jpeg';
import enebolig2Jar3 from '../img/EneboligJar2/2_3EneboligJar.jpeg';
import enebolig3Jar1 from '../img/EneboligJar3/3_1EneboligJar.jpeg';
import enebolig3Jar2 from '../img/EneboligJar3/3_2EneboligJar.jpeg';
import enebolig3Jar3 from '../img/EneboligJar3/3_3EneboligJar.jpeg';

export default function Album() {
    const imagesArvoll = [arvoll2, arvoll3, arvoll4, arvoll5, arvoll6, arvoll7];
    const imagesBlindern = [blindern1, blindern2];
    const imagesBestumBakkeveien1 = [boliganleggBestum1, boliganleggBestum2, boliganleggBestum3];
    const imagesBestumBakkeveien3_9 = [boliganlegg2Bestum1, boliganlegg2Bestum2, boliganlegg2Bestum3, boliganlegg2Bestum4];
    const imagesFurulund = [boliganleggFurulund1, boliganleggFurulund2, boliganleggFurulund3, boliganleggFurulund4];
    const imagesLilleaker = [boliganleggLilleaker1, boliganleggLilleaker2, boliganleggLilleaker3, boliganleggLilleaker4];
    const imagesNordstrand = [boliganleggNordstrand1, boliganleggNordstrand2];
    const imagesNordstrand2 = [boliganlegg2Nordstrand1, boliganlegg2Nordstrand2];
    const imagesBoliganleggSandaker = [boliganleggSandaker1, boliganleggSandaker2, boliganleggSandaker3, boliganleggSandaker4];
    const imagesEneboligBillingstad = [eneboligBillingstad];
    const imagesEneboligGjettum = [eneboligGjettum1, eneboligGjettum2];
    const imagesEneboligJar = [eneboligJar1, eneboligJar2, eneboligJar3, eneboligJar4, eneboligJar5];
    const imagesEneboligJar2 = [enebolig2Jar1, enebolig2Jar2, enebolig2Jar3];
    const imagesEneboligJar3 = [enebolig3Jar1, enebolig3Jar2, enebolig3Jar3];

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 935,
                }}
            >
                <Project navn={'Boliganlegg Årvoll'} imageUrls={imagesArvoll} />
                <Project navn={'Barnehage Blindern'} imageUrls={imagesBlindern} />
                <Project navn={'Boliganlegg Bestum, Bakkeveien 1'} imageUrls={imagesBestumBakkeveien1} />
                <Project navn={'Boliganlegg Bestum, Bakkeveien 3-9'} imageUrls={imagesBestumBakkeveien3_9} />
                <Project navn={'Boliganlegg Furulund'} imageUrls={imagesFurulund} />
                <Project navn={'Boliganlegg Lilleaker'} imageUrls={imagesLilleaker} />
                <Project navn={'Boliganlegg Nordstrand'} imageUrls={imagesNordstrand} />
                <Project navn={'Boliganlegg Nordstrand 2'} imageUrls={imagesNordstrand2} />
                <Project navn={'Boliganlegg Sandaker'} imageUrls={imagesBoliganleggSandaker} />
                <Project navn={'Enebolig Billingstad'} imageUrls={imagesEneboligBillingstad} />
                <Project navn={'Enebolig Gjettum'} imageUrls={imagesEneboligGjettum} />
                <Project navn={'Enebolig Jar'} imageUrls={imagesEneboligJar} />
                <Project navn={'Enebolig Jar 2'} imageUrls={imagesEneboligJar2} />
                <Project navn={'Enebolig Jar 3'} imageUrls={imagesEneboligJar3} />
            </div>
        </div>
    );
}



