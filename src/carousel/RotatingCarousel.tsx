import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import { grey } from "@material-ui/core/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import { duration } from "@material-ui/core/styles/transitions";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
// @ts-ignore
import Dots from "material-ui-dots";
import classNames from "classnames";
import SwipableCarouselView from "./SwipableCarouselView";
import { modulo } from "./util";
import ButtonTransparent from "../ButtonTransparent";

const styles = {
    root: {
        "& > *:focus": {
            outline: "none",
        },
    },
    content: {
        width: "60%",
        maxWidth: 700,
        height: "calc(100% - 96px)",
        maxHeight: 600,
        margin: "-16px auto 0",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
    },
    contentMobile: {
        width: "100%",
        height: "100%",
        maxWidth: "initial",
        maxHeight: "initial",
        margin: 0,
        top: 0,
        transform: "none",

        "& > $carouselWrapper": {
            borderRadius: 0,
        },
    },
    arrowIcon: {
        color: "#e6e6e6",
    },
    closeIcon: {
        color: grey[700],
    },
    slide: {
        width: "100%",
        height: "100%",
    },
};

function RotatingCarousel({
    mobile,
    startIndexOrClosed,
    onClose,
    children,
    classes,
}: {
    autoplay: boolean;
    mobile: boolean;
    startIndexOrClosed: number | undefined;
    hideArrows: boolean;
    onClose: () => void;
    children: ReactNode | ReactNode[];
    classes: any;
}) {
    const [slideIndex, setSlideIndex] = useState<number>(0);

    useEffect(() => {
        console.log("startIndexOrClosed", startIndexOrClosed);
        if (
            startIndexOrClosed !== undefined &&
            startIndexOrClosed !== slideIndex
        ) {
            setSlideIndex(startIndexOrClosed);
        }
    }, [startIndexOrClosed]);

    const isOpen = startIndexOrClosed !== undefined;

    function handleContentClick(e: any) {
        e.stopPropagation() || e.preventDefault();
    }

    function decreaseIndex() {
        setSlideIndex(slideIndex - 1);
    }

    function increaseIndex() {
        setSlideIndex(slideIndex + 1);
    }

    const transitionDuration = {
        enter: duration.enteringScreen,
        exit: duration.leavingScreen,
    };
    const numberOfChildren = Array.isArray(children) ? children.length : 1;
    const hasMultipleChildren = numberOfChildren > 1;

    const carousel = (
        <SwipableCarouselView
            index={slideIndex}
            onChangeIndex={setSlideIndex}
            slideClassName={classes.slide}
            containerStyle={{ alignItems: "center" }}
        >
            {children}
        </SwipableCarouselView>
    );

    return (
        <Modal
            className={classNames(classes.root)}
            open={isOpen}
            onClose={onClose}
            BackdropComponent={Backdrop}
            BackdropProps={{ transitionDuration }}
        >
            <Fade appear in={isOpen} timeout={transitionDuration}>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                    onClick={onClose}
                >
                    <div
                        onClick={handleContentClick}
                        style={{
                            width: mobile ? "100%" : "60%",
                            maxWidth: 700,
                            position: "relative",
                        }}
                    >
                        {carousel}
                        {renderArrows()}
                    </div>
                    {renderClose()}
                    {renderFooter()}
                </div>
            </Fade>
        </Modal>
    );

    function renderFooter() {
        if (!hasMultipleChildren) {
            return null;
        }
        return (
            <div style={{ margin: "0 auto" }} onClick={handleContentClick}>
                <Dots
                    count={numberOfChildren}
                    index={modulo(slideIndex, numberOfChildren)}
                    onDotClick={setSlideIndex}
                />
            </div>
        );
    }

    function renderClose() {
        const styleClose = mobile
            ? inlineStyles.closeMobile
            : inlineStyles.close;
        return (
            <ButtonTransparent
                style={{
                    ...inlineStyles.button,
                    ...styleClose,
                }}
                onClick={onClose}
            >
                <CloseIcon fontSize={"inherit"} className={classes.arrowIcon} />
            </ButtonTransparent>
        );
    }

    function renderArrows() {
        if (mobile || !hasMultipleChildren) {
            return null;
        }
        return (
            <div>
                <ButtonTransparent
                    style={{
                        ...inlineStyles.button,
                        ...inlineStyles.arrowLeft,
                    }}
                    onClick={decreaseIndex}
                >
                    <ArrowBackIcon
                        fontSize={"inherit"}
                        className={classes.arrowIcon}
                    />
                </ButtonTransparent>
                <ButtonTransparent
                    style={{
                        ...inlineStyles.button,
                        ...inlineStyles.arrowRight,
                    }}
                    onClick={increaseIndex}
                >
                    <ArrowForwardIcon
                        fontSize={"inherit"}
                        className={classes.arrowIcon}
                    />
                </ButtonTransparent>
            </div>
        );
    }
}

const inlineStyles: { [name: string]: CSSProperties } = {
    button: {
        width: "4rem",
        height: "4rem",
        fontSize: "3.5rem",
    },
    arrowLeft: {
        position: "absolute",
        top: "calc((100% - 96px) / 2 + 24px)",
        left: -96,
    },
    arrowRight: {
        position: "absolute",
        top: "calc((100% - 96px) / 2 + 24px)",
        right: -96,
    },
    close: {
        position: "absolute",
        top: 40,
        left: 40,
    },
    closeMobile: {
        position: "absolute",
        top: 10,
        left: 10,
    },
};

// @ts-ignore
export default withStyles(styles)(RotatingCarousel);
