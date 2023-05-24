import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import styles from "./Dialog.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: "30px",
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
    "& input": {
      color: "var(--white)",
    },
    "& input::placeholder": {
      color: "white!important",
      // opacity: "0.5",
    },
  },
});

export default function AlertDialogSlide({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        fullWidth={"lg"}
        maxWidth={"lg"}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            background: "rgba(26, 26, 26, 0.8)",
            backdropFilter: "blur(20px)",
            display: "flex",
            justifyContent: "center",
            border: "2px solid var(--white)",
            borderRadius: "20px",
            padding: "50px 0px",
          },
        }}
        // className={styles.dialog}
      >
        <DialogTitle className={styles.dialog_title}>
          {"CONTACT US"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "25px",
              }}
              className={styles.form_wrapper}
            >
              {/* <CssTextField label="Name" id="custom-css-outlined-input" /> */}
              <div className={styles.input_wrapper}>
                <input placeholder="Name" className={styles.input} />
              </div>
              <div className={styles.input_wrapper}>
                <input placeholder="Email" className={styles.input} />
              </div>
              <div className={styles.input_wrapper}>
                <textarea
                  placeholder="Message"
                  className={styles.input}
                  rows="4"
                />
              </div>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <button onClick={handleClose} className={styles.submit_button}>
            Agree
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
