import React, { CSSProperties, useLayoutEffect, useState } from "react";
import AutoRotatingCarousel from "../carousel/AutoRotatingCarousel";
import Slide from "../carousel/Slide";
import {blue, green, red} from "@material-ui/core/colors";

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

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(true);
    };
    const matches = width <= 600;

    return (
        <div>
            {renderHeader(navn)}
            {renderImages(imageUrls, handleClick)}
            <AutoRotatingCarouselModal
                isMobile={matches}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
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
                marginBottom: STANDARD_SPACING,
                marginTop: STANDARD_SPACING,
            }}
        >
            <h2>{navn}</h2>
            <div />
        </header>
    );
}

function renderImages(imageUrls: string[], handleClick: () => void) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            {chunk(imageUrls, COLUMNS).map((rowUrls) =>
                renderRow(rowUrls, handleClick)
            )}
        </div>
    );
}

function renderRow(localImageUrls: string[], handleClick: () => void) {
    return (
        <div
            style={{
                display: "flex",
                marginBottom: STANDARD_SPACING,
                marginLeft: -STANDARD_SPACING / 2,
                marginRight: -STANDARD_SPACING / 2,
            }}
        >
            {localImageUrls.map((url) =>
                renderImageContainer(url, handleClick)
            )}
            {[...new Array(COLUMNS - localImageUrls.length)].map(() =>
                renderImageContainer()
            )}
        </div>
    );
}

function renderImageContainer(url?: string, handleClick?: () => void) {
    if (url === undefined || handleClick === undefined) {
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
            <div
                onClick={handleClick}
                style={{
                    maxHeight: 700,
                    maxWidth: 700,
                    lineHeight: 0,
                    boxShadow:
                        "0 30px 60px -10px rgba(0,0,0,0.2), 0 18px 36px -18px rgba(0,0,0,0.22)",
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

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
}

function AutoRotatingCarouselModal({
    isMobile,
    isOpen,
    setIsOpen,
}: {
    isMobile: boolean;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) {
    return (
        <div>
            {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
            <AutoRotatingCarousel
                label="Get started"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onStart={() => setIsOpen(false)}
                autoplay={false}
                mobile={isMobile}
                style={{ position: "absolute" }}
            >
                <Slide
                    media={
                        <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
                    }
                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                    style={{ backgroundColor: red[600] }}
                    title="This is a very cool feature"
                    subtitle="Just using this will blow your mind."
                />
                <Slide
                    media={
                        <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
                    }
                    mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                    style={{ backgroundColor: blue[600] }}
                    title="Ever wanted to be popular?"
                    subtitle="Well just mix two colors and your are good to go!"
                />
                <Slide
                    media={
                        <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
                    }
                    mediaBackgroundStyle={{ backgroundColor: green[400] }}
                    style={{ backgroundColor: green[600] }}
                    title="May the force be with you"
                    subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
                />
            </AutoRotatingCarousel>
        </div>
    );
}
