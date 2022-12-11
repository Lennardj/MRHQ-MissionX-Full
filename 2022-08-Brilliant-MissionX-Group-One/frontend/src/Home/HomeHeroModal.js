import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "../styles/HomeModalCondRen.module.css";
import LoginSignUp from "./HomeHeroModalCond.js";

// images
import Escape from "../components/ModalAssets/esc.png";

import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 800,
  // bgcolor: "background.paper",
  border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
  color: "black",
  borderRadius: "12px",
  backgroundColor: "white",
  boxShadow: "12px 12px 12px 12px black;",
};

const buttonStyle = {
  marginTop: "30px",
  marginLeft: "40px",
  paddingLeft: "45px",
  paddingRight: "45px",
  height: "30px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  color: "white",
  backgroundColor: "#f91c85",
  // transition: "0.5s",
  textTransform: "uppercase",
  fontSize: "15px",
  // letterSpacing: "1px",
  fontFamily: "Open Sans, sans-serif",
  fontWeight: "700",
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={buttonStyle} onClick={handleOpen}>
        Sign Up
      </Button>
      <div className={styles.subscriptionInfo}>
        *Basic subscription includes the first 15 projects free of
      </div>
      <Modal
        style={{ backdropFilter: "blur(8px)" }}
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          {/* STUDENTS LOGIN */}
          <div class={styles.modalContainer}>
            {/* <div class={styles.modalLeft}>
              <img className={styles.modalStudents} src={Students}></img>
              <h1 className={styles.modalStudentsTitle}>Students</h1> */}
            <LoginSignUp></LoginSignUp>

            {/* CLOSE BTN  */}
            <img
              onClick={handleClose}
              className={styles.escapeIcon}
              src={Escape}
              alt="X"
            ></img>
            {/* TEACHERS LOGIN */}

            {/* <div class={styles.modalRight}>
              <img className={styles.modalTeachers} src={Teachers}></img>
              <h1 className={styles.modalTeachersTitle}>Teachers</h1> */}
            {/* <LoginSignUp></LoginSignUp> */}
            {/* </div>
          </div> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
