import styles from "../styles/Progress.module.css";

import Teacher from "../images/assestsFotNav/Teacher.png";
import greyProgressTracker from "../images/assestsFotNav/greyProgressTracker.png";
import studentProfiles from "../images/assestsFotNav/studentProfiles.png";
import helpRequests from "../images/assestsFotNav/helpRequests.png";
import projectSubmissions from "../images/assestsFotNav/projectSubmissions.png";
import projectLibrary from "../images/assestsFotNav/projectLibrary.png";
import arrow from "../images/assestsFotNav/arrow.png";
import settings from "../images/assestsFotNav/settings.png";
import profile from "../images/assestsFotNav/profile.png";
import logout from "../images/assestsFotNav/logout.png";

export default function ProgressT() {
  return (
    <div className={styles.main}>
      <div className={styles.sideBar}>
        <img
          src={Teacher}
          style={{ borderRadius: "37px", width: "80px", marginTop: "30px" }}
        />
        {/* left sideBar icons */}
        <div className={styles.icons}>
          <img src={greyProgressTracker} />
        </div>
        <img src={studentProfiles} />
        <img src={helpRequests} />
        <img src={projectSubmissions} />
        <img src={projectLibrary} />

        {/* arrow */}
        <div className={styles.arrow2}>
          <img src={arrow} style={{ width: "18px", marginRight: "12px" }} />
        </div>
        {/* botton icons */}
        <div className={styles.lowerIcon}>
          <img src={settings} />
          <img src={profile} />
          <img src={logout} />
        </div>
      </div>
      {/* main sections header */}
      <div className={styles.mainBar1}>
        <div className={styles.mainBar2}>
          <h2>BEGINNER COURSE</h2>
        </div>
      </div>
    </div>
  );
}
