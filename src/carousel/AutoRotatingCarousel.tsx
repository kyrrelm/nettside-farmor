import React, { ReactNode, useState } from "react";
import Paper from "@material-ui/core/Paper";
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
import Carousel from "./SwipableCarouselView";
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
    carouselWrapper: {
        overflow: "hidden",
        borderRadius: 14,
        transform: "scale(1.0)",
        background: "transparent",
        height: "100%",
    },
    dots: {
        paddingTop: 36,
        margin: "0 auto",
    },
    dotsMobile: {
        paddingTop: 0,
    },
    dotsMobileLandscape: {
        paddingTop: 20,
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
    footerMobileLandscape: {
        marginTop: -3,
        transform: "translateY(-50vh)",
        display: "inline-block",
        width: "auto",
    },
    slide: {
        width: "100%",
        height: "100%",
    },
    slideMobile: {
        width: "100%",
        height: "100%",
    },
    carousel: {
        height: "100%",
    },
    carouselContainer: {
        height: "100%",
    },
    closed: {},
};

function AutoRotatingCarousel({
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
        setSlideIndex(modulo(slideIndex - 1, numberOfChildren));
    }

    function increaseIndex() {
        setSlideIndex(modulo(slideIndex + 1, numberOfChildren));
    }

    const transitionDuration = {
        enter: duration.enteringScreen,
        exit: duration.leavingScreen,
    };
    const numberOfChildren = Array.isArray(children) ? children.length : 1;
    const hasMultipleChildren = numberOfChildren > 1;

    const carousel = (
        <Carousel
            className={classes.carousel}
            containerStyle={{ height: "100%" }}
            index={slideIndex}
            onChangeIndex={setSlideIndex}
            slideClassName={classes.slide}
        >
            {children}
        </Carousel>
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
                    className={classNames(classes.content, {
                        [classes.contentMobile]: mobile,
                    })}
                    onClick={handleContentClick}
                >
                    <Paper
                        elevation={mobile ? 0 : 1}
                        className={classes.carouselWrapper}
                    >
                        {carousel}
                    </Paper>
                    <div>
                        <div
                            className={classNames(classes.footer, {
                                [classes.footerMobile]: mobile,
                            })}
                        >
                            {hasMultipleChildren && (
                                <Dots
                                    count={numberOfChildren}
                                    index={slideIndex}
                                    className={classNames(classes.dots, {
                                        [classes.dotsMobile]: mobile,
                                    })}
                                    onDotClick={setSlideIndex}
                                />
                            )}
                        </div>
                    </div>
                    {!mobile && hasMultipleChildren && (
                        <div>
                            <Fab
                                className={classNames(
                                    classes.arrow,
                                    classes.arrowLeft
                                )}
                                onClick={decreaseIndex}
                            >
                                <ArrowBackIcon className={classes.arrowIcon} />
                            </Fab>
                            <Fab
                                className={classNames(
                                    classes.arrow,
                                    classes.arrowRight
                                )}
                                onClick={increaseIndex}
                            >
                                <ArrowForwardIcon
                                    className={classes.arrowIcon}
                                />
                            </Fab>
                        </div>
                    )}
                </div>
            </Fade>
        </Modal>
    );
}

// @ts-ignore
export default withStyles(styles)(AutoRotatingCarousel);
