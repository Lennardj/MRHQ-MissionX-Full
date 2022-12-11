import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "../styles/HomeModalCondRen.module.css";
import LoginSignUp from "./HomeNavModalCond";

// images
import avatar from "../components/NavAssets/Avatar.png";
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
  background: "none",
  border: "none",
  textDecoration: "none",
  color: "white",
  fontWeight: "700",
  letterSpacing: "2px",

  // transition: "0.3s all",
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={buttonStyle}
        className={styles.navModalBtn}
        onClick={handleOpen}
      >
        <img
          style={{ height: "20px", margin: "4px 7px" }}
          src={avatar}
          alt="avatar"
        ></img>
        Register|Login
      </Button>
      <Modal
        style={{ backdropFilter: "blur(8px)" }}
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div class={styles.modalContainer}>
            <LoginSignUp></LoginSignUp>
            <img
              onClick={handleClose}
              className={styles.escapeIcon}
              src={Escape}
              alt="X"
            ></img>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
