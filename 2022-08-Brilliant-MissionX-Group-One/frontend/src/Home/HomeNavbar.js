import { useState } from "react";
import styles from "../styles/HomeNavbar.module.css";
import Logo from "../components/NavAssets/LevelUpWhite.png";
import avatar from "../components/NavAssets/Avatar.png";
import Maori from "../components/NavAssets/MaoriFlag.png";
import NZFlag from "../components/NavAssets/NZFlag.png";

// OPEN MODAL PAGE
import OpenModal from "./HomeNavbarModal.js";

const Navbar = () => {
  return (
    <>
      <header>
        <img className={styles.navbarLogo} src={Logo} alt="logo" />
        <nav>
          <ul class={styles.navbarLinks}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Teachers</a>
            </li>
          </ul>
        </nav>
        <div className={styles.navbarRight}>
          <p className={styles.navLang}>LANG</p>
          <img className={styles.Maori} src={Maori} alt="Maoriflag"></img>
          <img className={styles.NZ} src={NZFlag} alt="NZflag"></img>
          <div className="regLoginContainer">
            <OpenModal className="btn-style"></OpenModal>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
