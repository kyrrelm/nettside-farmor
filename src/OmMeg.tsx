import React from "react";
import StandardPageLayout from "./StandardPageLayout";
import { useWindowSize } from "./carousel/util";

export default function OmMeg() {
    const [width] = useWindowSize();
    const isMobile = width <= 600;
    return (
        <StandardPageLayout isMobile={isMobile} title={"Om meg"}>
            <h2>Om meg</h2>
        </StandardPageLayout>
    );
}
