import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import "./Modals.css";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        padding: theme.spacing(1.5),
        width: "180px",
    },
    paper: {
        backgroundColor: "lemonchiffon",
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "90%",
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
                className="modal"
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
                        <h2 id="title">About Me</h2>
                        <p className="description">
                            Fascinated with the way development works on websites and web apps
                            alike. How a few lines of code can become something so extraordinary.
                        </p>

                        <p className="description">
                            Actively looking for a junior developer position within a dynamic,
                            innovative and collaborative team.
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
