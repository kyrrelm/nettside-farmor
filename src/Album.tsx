import React, {CSSProperties} from 'react';
import Button from "./Button";
import {useHistory} from 'react-router-dom';
import bilde2 from './img/BoliganleggArvoll/2boliganleggArvoll.jpeg';
import bilde3 from './img/BoliganleggArvoll/3boliganleggArvoll.jpeg';
import bilde4 from './img/BoliganleggArvoll/4boliganleggArvoll.jpeg';
import bilde5 from './img/BoliganleggArvoll/5boliganleggArvoll.jpeg';
import bilde6 from './img/BoliganleggArvoll/6boliganleggArvoll.jpeg';
import bilde7 from './img/BoliganleggArvoll/7boliganleggArvoll.jpeg';

const COLUMNS = 3;

const STANDARD_SPACING = 40;

export default function Album() {
    const history = useHistory();
    const images = [bilde2, bilde3, bilde4, bilde5, bilde6, bilde7];

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
                {renderHeader(history)}
                {renderImages(images)}
            </div>
        </div>
    );
}

function renderHeader(history: any) {
    return (
        <header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: STANDARD_SPACING,
                marginTop: STANDARD_SPACING,
            }}
        >
            <Button text={'Forside'} onClick={history.goBack} />
            <h1>Album name</h1>
            <div />
        </header>
    );
}

function renderImages(localImageUrls: string[]) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {chunk(localImageUrls, COLUMNS).map((rowUrls) =>
                renderRow(rowUrls),
            )}
        </div>
    );
}

function renderRow(localImageUrls: string[]) {
    return (
        <div
            style={{
                display: 'flex',
                marginBottom: STANDARD_SPACING,
                marginLeft: -STANDARD_SPACING / 2,
                marginRight: -STANDARD_SPACING / 2,
            }}
        >
            {localImageUrls.map((url) => renderImageContainer(url))}
            {[...new Array(COLUMNS - localImageUrls.length)].map(
                renderImageContainer,
            )}
        </div>
    );
}

function renderImageContainer(url?: string) {
    return (
        <div
            key={url}
            style={{
                flexBasis: '0%',
                flexGrow: 1,
                marginLeft: STANDARD_SPACING / 2,
                marginRight: STANDARD_SPACING / 2,
                boxShadow: '0 30px 60px -10px rgba(0,0,0,0.2), 0 18px 36px -18px rgba(0,0,0,0.22)'
            }}
        >
            <a href={'/fixthis'}>
                <div
                    style={{
                        maxHeight: 700,
                        maxWidth: 700,
                    }}
                >
                    {url && <img alt={url} src={url} style={styles.img} />}
                </div>
            </a>
        </div>
    );
}

const styles: { [name: string]: CSSProperties } = {
    img: { height: '100%', width: '100%' },
};

function chunk<T>(array: T[], size: number): T[][] {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
    }
    return chunked_arr;
}


