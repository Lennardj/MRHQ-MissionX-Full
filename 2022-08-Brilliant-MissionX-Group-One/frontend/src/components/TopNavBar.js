import styles from "../styles/ProgressTopNav.module.css";
import NavPic from "../images/assestsFotNav/BlueLvlUpWorks.png";
import NZFlag from "../images/assestsFotNav/NZFlag.png";
import MFlag from "../images/assestsFotNav/MaoriFlag.png";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <img src={NavPic} className={styles.contain1} />

      <nav>
        <button
          className={styles.navbarBtns}
          style={{ backgroundColor: "#f7b500" }}
        >
          Take Screenshot
        </button>
        <button
          className={styles.navbarBtns}
          style={{ backgroundColor: "#ff006a" }}
        >
          Help Centre
        </button>
        <button
          className={styles.navbarBtns}
          style={{ backgroundColor: "#4abbf0", cursor: "pointer" }}
        >
          More Projects
        </button>

        <img
          className={styles.navImgs}
          src={NZFlag}
          style={{ marginBottom: "10px" }}
        />
        <img
          className={styles.navImgs}
          src={MFlag}
          style={{ marginBottom: "10px" }}
        />
      </nav>
    </div>
  );
}
