import React, { ReactNode, useState } from "react";
import { grey } from "@material-ui/core/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import { duration } from "@material-ui/core/styles/transitions";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
// @ts-ignore
import Dots from "material-ui-dots";
import classNames from "classnames";
import SwipableCarouselView from "./SwipableCarouselView";
import { modulo } from "./util";

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
    arrow: {
        width: 48,
        height: 48,
        position: "absolute",
        top: "calc((100% - 96px) / 2 + 24px)",
    },
    arrowLeft: {
        left: -96,
    },
    arrowRight: {
        right: -96,
    },
    arrowIcon: {
        color: grey[700],
    },
    dots: {
        paddingTop: 36,
        margin: "0 auto",
    },
    dotsMobile: {
        paddingTop: 0,
    },
    footer: {
        marginTop: -72,
        width: "100%",
        position: "relative",
        textAlign: "center",
    },
    footerMobile: {
        marginTop: -92,
    },
    slide: {
        width: "100%",
        height: "100%",
    },
};

function RotatingCarousel({
    mobile,
    isOpen,
    onClose,
    children,
    classes,
}: {
    autoplay: boolean;
    mobile: boolean;
    isOpen: boolean;
    hideArrows: boolean;
    onClose: () => void;
    children: ReactNode | ReactNode[];
    classes: any;
}) {
    const [slideIndex, setSlideIndex] = useState<number>(0);

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
                    }}
                >
                    <div
                        onClick={handleContentClick}
                        style={{ width: "60%", maxWidth: 700 }}
                    >
                        {carousel}
                        {renderFooter()}
                        {renderArrows()}
                    </div>
                </div>
            </Fade>
        </Modal>
    );

    function renderFooter() {
        return (
            <div
                className={classNames(classes.footer, {
                    [classes.footerMobile]: mobile,
                })}
            >
                {hasMultipleChildren && (
                    <Dots
                        count={numberOfChildren}
                        index={modulo(slideIndex, numberOfChildren)}
                        className={classNames(classes.dots, {
                            [classes.dotsMobile]: mobile,
                        })}
                        onDotClick={modulo(slideIndex, numberOfChildren)}
                    />
                )}
            </div>
        );
    }

    function renderArrows() {
        if (mobile || !hasMultipleChildren) {
            return null;
        }
        return (
            <div>
                <Fab
                    className={classNames(classes.arrow, classes.arrowLeft)}
                    onClick={decreaseIndex}
                >
                    <ArrowBackIcon className={classes.arrowIcon} />
                </Fab>
                <Fab
                    className={classNames(classes.arrow, classes.arrowRight)}
                    onClick={increaseIndex}
                >
                    <ArrowForwardIcon className={classes.arrowIcon} />
                </Fab>
            </div>
        );
    }
}

// @ts-ignore
export default withStyles(styles)(RotatingCarousel);
