import RotatingCarousel from "./RotatingCarousel";
import Slide from "./Slide";
import React from "react";

export default function RotatingCarouselModal({
    imageUrls,
    isMobile,
    startIndexOrClosed,
    onClose,
}: {
    imageUrls: string[];
    isMobile: boolean;
    startIndexOrClosed: number | undefined;
    onClose: (isOpen: boolean) => void;
}) {
    return (
        <div>
            <RotatingCarousel
                startIndexOrClosed={startIndexOrClosed}
                onClose={onClose}
                mobile={isMobile}
                style={{ position: "absolute" }}
            >
                {imageUrls.map((imageUrl) => (
                    <Slide key={imageUrl}>
                        <img
                            src={imageUrl}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </Slide>
                ))}
            </RotatingCarousel>
        </div>
    );
}
