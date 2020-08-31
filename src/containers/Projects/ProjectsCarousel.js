import React, { useState, useCallback, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
// import ClearIcon from "@material-ui/icons/Clear";

import "./Projects.css";
import carouselSteps from "./carouselSteps";

const useStyles = makeStyles((theme) => ({
    actions: {
        display: "flex",
        justifyContent: "center",
    },
}));

export default function TextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = carouselSteps.length;

    const leftArrFunction = useCallback(
        (event) => {
            if (event.keyCode === 37 && activeStep) {
                handleBack();
            }
        },
        [activeStep]
    );

    useEffect(() => {
        document.addEventListener("keydown", leftArrFunction, false);

        return () => {
            document.removeEventListener("keydown", leftArrFunction, false);
        };
    }, [leftArrFunction]);

    const rightArrFunction = useCallback(
        (event) => {
            if (event.keyCode === 39 && activeStep !== maxSteps - 1) {
                handleNext();
            }
        },
        [activeStep, maxSteps]
    );

    useEffect(() => {
        document.addEventListener("keydown", rightArrFunction, false);

        return () => {
            document.removeEventListener("keydown", rightArrFunction, false);
        };
    }, [rightArrFunction]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="root">
            {/* <ClearIcon className="clear" fontSize="large" onClick={triggerEsc} /> */}
            <CardContent>
                <h2>{carouselSteps[activeStep].label}</h2>
                <img
                    className="screenshot"
                    src={carouselSteps[activeStep].imgPath}
                    alt={carouselSteps[activeStep].label}
                />
                <p className="description">{carouselSteps[activeStep].description}</p>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button size="small" color="primary">
                    <Link href={carouselSteps[activeStep].website} target="_blank" rel="noopener">
                        Website
                    </Link>
                </Button>
                <Button size="small" color="primary">
                    <Link href={carouselSteps[activeStep].github} target="_blank" rel="noopener">
                        Github Code
                    </Link>
                </Button>
            </CardActions>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </div>
    );
}
