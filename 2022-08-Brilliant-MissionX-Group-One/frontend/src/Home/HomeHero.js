import HomeHeroModal from "./HomeHeroModal";
import styles from "../styles/HomeHero.module.css";

export default function HomeHero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Prepare young minds for a better
          <span className={styles.future}> future.</span>
        </h1>
        <p className={styles.heroBody}>
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme
        </p>
        <div className={styles.heroBtns}>
          <button className={styles.learnMoreBtn}>Learn More</button>
          <HomeHeroModal></HomeHeroModal>
        </div>
      </div>
    </div>
  );
}
