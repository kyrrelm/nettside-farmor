import AutoRotatingCarousel from "./AutoRotatingCarousel";
import Slide from "./Slide";
import React from "react";

export default function AutoRotatingCarouselModal({
    imageUrls,
    isMobile,
    isOpen,
    setIsOpen,
}: {
    imageUrls: string[];
    isMobile: boolean;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) {
    return (
        <div>
            <AutoRotatingCarousel
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                mobile={isMobile}
                style={{ position: "absolute" }}
            >
                {imageUrls.map((imageUrl) => (
                    <Slide>
                        <img src={imageUrl} />
                    </Slide>
                ))}
            </AutoRotatingCarousel>
        </div>
    );
}
