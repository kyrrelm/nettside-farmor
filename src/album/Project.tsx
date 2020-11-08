import React, {CSSProperties, useState} from "react";
import RotatingCarouselModal from "../carousel/RotatingCarouselModal";

const COLUMNS = 3;

let STANDARD_SPACING = 40;

interface Props {
    width: number;
    isMobile: boolean;
    navn: string;
    imageUrls: string[];
}

export default function Project({ width, isMobile, navn, imageUrls, }: Props) {
    if (width < 800) {
        STANDARD_SPACING = 10;
    } else {
        STANDARD_SPACING = 40;
    }

    const [startIndexOrClosed, setStartIndexOrClosed] = useState<number | undefined>(undefined);

    const handleClick = (index: number) => {
        setStartIndexOrClosed(index);
    };

    const onClose = () => {
        setStartIndexOrClosed(undefined)
    };

    return (
        <div>
            {renderHeader(navn)}
            {renderImages(imageUrls, handleClick)}
            <RotatingCarouselModal
                imageUrls={imageUrls}
                isMobile={isMobile}
                startIndexOrClosed={startIndexOrClosed}
                onClose={onClose}
            />
        </div>
    );
}

function renderHeader(navn: string) {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: STANDARD_SPACING/8,
                marginTop: STANDARD_SPACING,
            }}
        >
            <h2 style={{ fontSize: "1.8rem", fontWeight: 200 }}>{navn}</h2>
        </header>
    );
}

function renderImages(imageUrls: string[], handleClick: (index: number) => void) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            {chunk(imageUrls, COLUMNS).map((rowUrls, rowIndex) =>
                renderRow(rowUrls, handleClick, rowIndex)
            )}
        </div>
    );
}

function renderRow(localImageUrls: string[], handleClick: (index: number) => void, rowIndex: number) {
    const startIndex = rowIndex * COLUMNS;
    return (
        <div
            key={rowIndex}
            style={{
                display: "flex",
                marginBottom: STANDARD_SPACING,
                marginLeft: -STANDARD_SPACING / 2,
                marginRight: -STANDARD_SPACING / 2,
            }}
        >
            {localImageUrls.map((url, columnIndex) =>
                renderImageContainer(startIndex + columnIndex, url, handleClick)
            )}
            {[...new Array(COLUMNS - localImageUrls.length)].map((e, index) =>
                renderImageContainer(index)
            )}
        </div>
    );
}

function renderImageContainer(index: number, url?: string, handleClick?: (index: number) => void) {
    if (url === undefined || handleClick === undefined) {
        return (
            <div
                key={`filler-${index}`}
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
            <div
                onClick={() => handleClick(index)}
                style={{
                    maxHeight: 700,
                    maxWidth: 700,
                    lineHeight: 0,
                    boxShadow:
                        "0 30px 60px -10px rgba(0,0,0,0.12), 0 18px 36px -18px rgba(0,0,0,0.15)",
                    cursor: "pointer"
                }}
            >
                {url && <img alt={url} src={url} style={styles.img} />}
            </div>
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


