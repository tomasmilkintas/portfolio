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

import images from "../../assets/images";

const carouselSteps = [
    {
        label: "To-do List App",
        imgPath: images[2],
        description: `To-do List App created for the purpose of making lists. 
            Created using ReactJS, Redux and Firebase Realtime Database. `,
        website: "https://magical-list.netlify.app/",
        github: "https://github.com/tomasmilkintas/Todo-List-App",
    },
    {
        label: "Picture MasterPiece",
        imgPath: images[1],
        description: "This is the infamous picture masterpiece",
        website: "https://picture-masterpiece.netlify.app/",
        github: "https://github.com/tomasmilkintas/pictureRender",
    },
    {
        label: "Burger Builder",
        imgPath: images[0],
        description: "This is the infamous burger builder app",
        website: "https://react-my-burger-app-660cf.firebaseapp.com/",
        github: "https://github.com/tomasmilkintas/burger-app",
    },
    {
        label: "Serverless Notes Storing App",
        imgPath: images[3],
        description: "This is the infamous serverless",
        website: "https://serverless-stack-app.netlify.app/",
        github: "https://github.com/tomasmilkintas/serverless-stack-client",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "45vw",
        maxHeight: "80vh",
        height: "80vh",
        flexGrow: 1,
        margin: "0 auto",
        border: "1px solid red",
        backgroundColor: "#f3f0f0",
        color: "black",
    },
    img: {
        maxWidth: "25vw",
        maxHeight: "50vh",
        height: "50vh",
        overflow: "hidden",
        display: "block",
        width: "100%",
        margin: "5vh auto 0",
    },
    actions: {
        display: "block",
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
        <div className={classes.root}>
            <img
                className={classes.img}
                src={carouselSteps[activeStep].imgPath}
                alt={carouselSteps[activeStep].label}
            />

            <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    {carouselSteps[activeStep].label}
                </Typography>
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
                position="static"
                variant="text"
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
