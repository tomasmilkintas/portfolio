import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";

import carouselSteps from "./carouselSteps";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "70%",
        maxHeight: "70%",
        height: "70%",
        flexGrow: 1,
        margin: "0 auto",
        backgroundColor: "#f3f0f0",
        color: "black",
        overflowY: "scroll",
    },
    img: {
        maxWidth: "90%",
        maxHeight: "70%",
        height: "70%",
        overflow: "hidden",
        display: "block",
        width: "100%",
        margin: "3vh auto",
    },
    actions: {
        display: "flex",
        justifyContent: "center",
    },
    p: {
        overflow: "scroll",
    },
}));

export default function TextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = carouselSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    {carouselSteps[activeStep].label}
                </Typography>
                <img
                    className={classes.img}
                    src={carouselSteps[activeStep].imgPath}
                    alt={carouselSteps[activeStep].label}
                />
                <Typography variant="subtitle1" component="p">
                    {carouselSteps[activeStep].description}
                </Typography>
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
                position="bottom"
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
        </Card>
    );
}
