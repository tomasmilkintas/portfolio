import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
// import "../Home/Home.css";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        padding: theme.spacing(1.5),
        width: "180px",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="modals">
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.margin}
                onClick={handleOpen}
            >
                About Me
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">About</h2>
                        <p id="transition-modal-description">
                            {" "}
                            Up and Coming Web developer with primary focus on ReactJS. Skills
                            include:
                        </p>
                        <ul>
                            <li>ReactJS</li>
                            <li>Javascript</li>
                            <li>Redux</li>
                            <li>Serverless Framework</li>
                            <li>Firebase</li>
                            <li>Git</li>
                            <li>Storybook</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}