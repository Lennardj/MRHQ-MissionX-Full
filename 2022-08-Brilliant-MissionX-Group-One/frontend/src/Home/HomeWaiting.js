import styles from "../styles/HomeWaiting.module.css";
import waitingImg from "../components/MainBodyAssets/homeWaiting.png";
import HomeHeroModal from "./HomeHeroModal.js";

export default function HomeWaiting() {
  return (
    <>
      <div className={styles.homeWaitingContainer}>
        {/* section image  */}
        <img
          className={styles.sectionImg}
          src={waitingImg}
          alt="waitingImg"
        ></img>
        {/* content  */}
        <div className={styles.waitingContent}>
          <h2 className={styles.waitingHeader}>What are you waiting for?</h2>
          <h3 className={styles.waitingSubHeader}>
            Start teaching Digital Technologies today.
          </h3>
          <p className={styles.waitingPara}>
            If you need more information, we are happy to answer any questions
            you may have
          </p>
          {/* buttons  */}
          <div className={styles.btnContainer}>
            <button className={styles.enquireBtn}>Enquire Now</button>
            <HomeHeroModal></HomeHeroModal>
          </div>
        </div>
      </div>
    </>
  );
}
