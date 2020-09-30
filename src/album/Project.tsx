import React, {CSSProperties, useLayoutEffect, useState} from "react";

const COLUMNS = 3;

let STANDARD_SPACING = 40;

interface Props {
    navn: string;
    imageUrls: string[];
}

export default function Project({ navn, imageUrls }: Props) {
    const [width] = useWindowSize();
    console.log("width", width);
    if (width < 800) {
        STANDARD_SPACING = 10;
    } else {
        STANDARD_SPACING = 40;
    }
    return (
        <div>
            {renderHeader(navn)}
            {renderImages(imageUrls)}
        </div>
    );
}

function renderHeader(navn: string) {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: STANDARD_SPACING,
                marginTop: STANDARD_SPACING,
            }}
        >
            <h2>{navn}</h2>
            <div />
        </header>
    );
}

function renderImages(imageUrls: string[]) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            {chunk(imageUrls, COLUMNS).map((rowUrls) => renderRow(rowUrls))}
        </div>
    );
}

function renderRow(localImageUrls: string[]) {
    return (
        <div
            style={{
                display: "flex",
                marginBottom: STANDARD_SPACING,
                marginLeft: -STANDARD_SPACING / 2,
                marginRight: -STANDARD_SPACING / 2,
            }}
        >
            {localImageUrls.map((url) => renderImageContainer(url))}
            {[...new Array(COLUMNS - localImageUrls.length)].map(
                renderImageContainer
            )}
        </div>
    );
}

function renderImageContainer(url?: string) {
    if (url === undefined) {
        return (
            <div
                style={{
                    flexBasis: "0%",
                    flexGrow: 1,
                    marginLeft: STANDARD_SPACING / 2,
                    marginRight: STANDARD_SPACING / 2,
                }}
            ></div>
        );
    }
    return (
        <div
            key={url}
            style={{
                flexBasis: "0%",
                flexGrow: 1,
                marginLeft: STANDARD_SPACING / 2,
                marginRight: STANDARD_SPACING / 2,

            }}
        >
            <a href={"/fixthis"}>
                <div
                    style={
                        {
                            maxHeight: 700,
                            maxWidth: 700,
                            lineHeight: 0,
                            boxShadow:
                                "0 30px 60px -10px rgba(0,0,0,0.2), 0 18px 36px -18px rgba(0,0,0,0.22)",
                        }
                    }
                >
                    {url && <img alt={url} src={url} style={styles.img} />}
                </div>
            </a>
        </div>
    );
}

const styles: { [name: string]: CSSProperties } = {
    img: { height: "100%", width: "100%" },
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


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
