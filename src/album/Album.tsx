import React, {CSSProperties} from 'react';
import {useHistory} from 'react-router-dom';
import Project from "./Project";
import arvoll2 from '../img/BoliganleggArvoll/2boliganleggArvoll.jpeg';
import arvoll3 from '../img/BoliganleggArvoll/3boliganleggArvoll.jpeg';
import arvoll4 from '../img/BoliganleggArvoll/4boliganleggArvoll.jpeg';
import arvoll5 from '../img/BoliganleggArvoll/5boliganleggArvoll.jpeg';
import arvoll6 from '../img/BoliganleggArvoll/6boliganleggArvoll.jpeg';
import arvoll7 from '../img/BoliganleggArvoll/7boliganleggArvoll.jpeg';
import blindern1 from '../img/BarnehageBlindern/1BarnehageBlindern.jpeg';
import blindern2 from '../img/BarnehageBlindern/2BarnehageBlindern.jpeg';
import blindern2 from '../img/BoliganleggBestumBakkeveien1/2BarnehageBlindern.jpeg';

const COLUMNS = 3;

const STANDARD_SPACING = 40;

export default function Album() {
    const history = useHistory();
    const imagesArvoll = [arvoll2, arvoll3, arvoll4, arvoll5, arvoll6, arvoll7];
    const imagesBlindern = [blindern1, blindern2];

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
            </div>
        </div>
    );
}



