import styles from "../styles/HomePathways.module.css";
import star from "../components/MainBodyAssets/star.png";

// What I want the useState to initially show when the page loads
export default function PathState() {
  return (
    <>
      <div className={styles.listMainGroup}>
        <h2 className={styles.listMainTitle}>Interlinking Pathways</h2>
        <p className={styles.listSubTitle}>
          This programme gives us 5 important interlinking Learning Pathways
        </p>
        <ul className={styles.programmeList}>
          <div className={styles.imgStar}>
            <img src={star} alt="star"></img>
          </div>
          <li className={styles.programmeListTitle}>
            Computational Thinking
            <p className={styles.programmeListInfo}>
              Within the programme the students are enabled to express problems
              and form solutions that will be designed so a computer can be used
              to create diverse and encapsulating applications.
            </p>
          </li>
        </ul>
        <ul className={styles.programmeList}>
          <div className={styles.imgStar}>
            <img src={star} alt="star"></img>
          </div>
          {/* <img className={styles.programmeListTitle} src={Arrow}></img> */}
          <li className={styles.programmeListTitle}>
            Developing Digital Outcomes
            <p className={styles.programmeListInfo}>
              This programme is designed to strengthen the outcomes of each
              students personally to form strong applications
            </p>
          </li>
        </ul>
        <ul className={styles.programmeList}>
          <div className={styles.imgStar}>
            <img src={star} alt="star"></img>
          </div>
          {/* <img className={styles.programmeListTitle} src={Arrow}></img> */}
          <li className={styles.programmeListTitle}>
            Designing Processed Outcomes
            <p className={styles.programmeListInfo}>
              Students will be taught the ways of how outcomes are processed,
              thought about, and produced.
            </p>
          </li>
        </ul>
        <ul className={styles.programmeList}>
          <div className={styles.imgStar}>
            <img src={star} alt="star"></img>
          </div>
          {/* <img className={styles.programmeListTitle} src={Arrow}></img> */}
          <li className={styles.programmeListTitle}>
            Develop Visual and Social Communications
            <p className={styles.programmeListInfo}>
              Students will learn to design visually pleasing applications used
              to both keep the user aware of what is happening on the screen.
            </p>
          </li>
        </ul>
        <ul className={styles.programmeList}>
          <div className={styles.imgStar}>
            <img src={star} alt="star"></img>
          </div>
          {/* <img className={styles.programmeListTitle} src={Arrow}></img> */}
          <li className={styles.programmeListTitle}>
            Strong Technological Practices
            <p className={styles.programmeListInfo}>
              The programme will show students the best practices to think and
              solve the problems brought on by using technology.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
