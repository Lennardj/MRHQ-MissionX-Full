import styles from "../styles/HomeFooter.module.css";

export default function HomeFooter() {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <h1 className={styles.footerTitle}>COMPANY</h1>
          <div className={styles.footerSubtitle}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <h1 className={styles.footerTitle}>COURSES</h1>
          <div className={styles.footerSubtitle}>
            <li>Register</li>
            <li>Login</li>
            <li>Projects</li>
            <li>Teachers</li>
            <li>Parents</li>
            <li>Resources</li>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <h1 className={styles.footerTitle}>SUPPORT</h1>
          <div className={styles.footerSubtitle}>
            <li>FAQs</li>
            <li>Helpdesk</li>
            <li>Contact Us</li>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <h1 className={styles.footerTitle}>LEGAL</h1>
          <div className={styles.footerSubtitle}>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <h1 className={styles.footerLevelTitle}>LevelUp Works</h1>
          <div className={styles.footerLevelContent}>
            <li>
              LevelUp Works is an Auckland-Based enterprise dedicated to
              developing game-based learning software to help teachers in
              response to the New Zealand Digital Technologies & Hangarau
              Matihiko.
            </li>
            <li>alan@levelupworks.com</li>
            <li>(021) 668 185</li>
          </div>
        </div>
      </div>
    </>
  );
}
