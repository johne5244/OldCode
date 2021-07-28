import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CustomizedSlider from "./WebButton";
import WebDev from "./WebButton";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    height: "100%",

    // marginTop: "10px",
    // maxHeight: 500,
    // display: "block",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function WebModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        style={{
          fontFamily: "Poppins",
          fontWeight: "bold",
          textTransform: "uppercase",
          margin: "0 10px",
          // color: "red",
        }}
        type="button"
        onClick={handleOpen}
      >
        Web Developer
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        disableScrollLock={false}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{ marginTop: "500px" }} className={classes.paper}>
            <h2 id="transition-modal-title">Web Developer's Form</h2>
            <p id="transition-modal-description">
              <WebDev />
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
