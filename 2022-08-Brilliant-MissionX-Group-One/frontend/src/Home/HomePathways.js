import { useState } from "react";
import PathState from "./HomePathwayState.js";

// styling
import styles from "../styles/HomePathways.module.css";

// images
import Group1 from "../components/MainBodyAssets/Group1.png";
import Group2 from "../components/MainBodyAssets/Group2.png";
import Group3 from "../components/MainBodyAssets/Group3.png";
import Group4 from "../components/MainBodyAssets/Group4.png";
import star from "../components/MainBodyAssets/star.png";

export default function HomePathways() {
  // ------------------ STATE VARIABLE ------------------
  const [contentInfo, setContentInfo] = useState(PathState);

  // ------------------ BTN ONCLICK ACTIVE STATE STYLING------------------
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  // OLD WAY - still works just wanted to try something that I saw from class.

  // const learningPathways = (
  //   <>
  //     <h2 className={styles.pHeader}>Interlinking Pathways</h2>
  //     <p className={styles.pContent}>
  //       This programme gives us 5 important interlinking Learning Pathways
  //     </p>
  //     <ul className={styles.listContent}>
  //       <img className={styles.listIcon} src={star} alt="star"></img>
  //       <li className={styles.listHeader}>Computation Thinking</li>
  //       <p className={styles.listPara}>
  //         in particular the programme focused on problem solving, design
  //         thinking and computational thinking
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Developing Digital Outcomes</li>
  //       <p className={styles.listPara}>
  //         Analysing language, symbols, and texts in order to understand and make
  //         sense of the codes in which knowledge is expressed
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Designing Processed Outcomes</li>
  //       <p className={styles.listPara}>
  //         Projects and challenges are designed to motivate students to explore
  //         and experiment with self-motivation
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>
  //         Develop Visual and Social Communications
  //       </li>
  //       <p className={styles.listPara}>
  //         the programme is designed with unplugged sessions where students
  //         interact in a range of different situations, including things like
  //         being able to listen well, recognise different points of view, and
  //         share ideas
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Strong Techological Practices</li>
  //       <p className={styles.listPara}>
  //         The programme encourages students to be involved in communities, such
  //         as family, whanau, school, and contribute and make connections with
  //         other people
  //       </p>
  //     </ul>
  //   </>
  // );
  // const digiTech = (
  //   <>
  //     <h2 className={styles.pHeader}>Digital technologies</h2>
  //     <p className={styles.pContent}>
  //       The programme enhances capabilities of students in the 5 key
  //       Competencies identified in the New Zealand Curriculum:
  //     </p>
  //     <ul className={styles.listContent}>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Thinking</li>
  //       <p className={styles.listPara}>
  //         in particular the programme focused on problem solving, design
  //         thinking and computational thinking
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Discerning Codes</li>
  //       <p className={styles.listPara}>
  //         Analysing language, symbols, and texts in order to understand and make
  //         sense of the codes in which knowledge is expressed
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Self-Management</li>
  //       <p className={styles.listPara}>
  //         Projects and challenges are designed to motivate students to explore
  //         and experiment with self-motivation
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Relationships with peers</li>
  //       <p className={styles.listPara}>
  //         the programme is designed with unplugged sessions where students
  //         interact in a range of different situations, including things like
  //         being able to listen well, recognise different points of view, and
  //         share ideas
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Participation and collaboration</li>
  //       <p className={styles.listPara}>
  //         The programme encourages students to be involved in communities, such
  //         as family, whanau, school, and contribute and make connections with
  //         other people
  //       </p>
  //     </ul>
  //   </>
  // );
  // const keyComp = (
  //   <>
  //     <h2 className={styles.pHeader}>KEY competencies</h2>
  //     <p className={styles.pContent}>
  //       The programme enhances capabilities of students in the 5 key
  //       Competencies identified in the New Zealand Curriculum:
  //     </p>
  //     <ul className={styles.listContent}>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Thinking</li>
  //       <p className={styles.listPara}>
  //         in particular the programme focused on problem solving, design
  //         thinking and computational thinking
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Discerning Codes</li>
  //       <p className={styles.listPara}>
  //         Analysing language, symbols, and texts in order to understand and make
  //         sense of the codes in which knowledge is expressed
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Self-Management</li>
  //       <p className={styles.listPara}>
  //         Projects and challenges are designed to motivate students to explore
  //         and experiment with self-motivation
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Relationships with peers</li>
  //       <p className={styles.listPara}>
  //         the programme is designed with unplugged sessions where students
  //         interact in a range of different situations, including things like
  //         being able to listen well, recognise different points of view, and
  //         share ideas
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Participation and collaboration</li>
  //       <p className={styles.listPara}>
  //         The programme encourages students to be involved in communities, such
  //         as family, whanau, school, and contribute and make connections with
  //         other people
  //       </p>
  //     </ul>
  //   </>
  // );
  // const showIR = (
  //   <>
  //     <h2 className={styles.pHeader}>IR</h2>
  //     <p className={styles.pContent}>
  //       The programme enhances capabilities of students in the 5 key
  //       Competencies identified in the New Zealand Curriculum:
  //     </p>
  //     <ul className={styles.listContent}>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Thinking</li>
  //       <p className={styles.listPara}>
  //         in particular the programme focused on problem solving, design
  //         thinking and computational thinking
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Discerning Codes</li>
  //       <p className={styles.listPara}>
  //         Analysing language, symbols, and texts in order to understand and make
  //         sense of the codes in which knowledge is expressed
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Self-Management</li>
  //       <p className={styles.listPara}>
  //         Projects and challenges are designed to motivate students to explore
  //         and experiment with self-motivation
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Relationships with peers</li>
  //       <p className={styles.listPara}>
  //         the programme is designed with unplugged sessions where students
  //         interact in a range of different situations, including things like
  //         being able to listen well, recognise different points of view, and
  //         share ideas
  //       </p>
  //       {/* <img className={styles.listHeader} src={Arrow}></img> */}
  //       <li className={styles.listHeader}>Participation and collaboration</li>
  //       <p className={styles.listPara}>
  //         The programme encourages students to be involved in communities, such
  //         as family, whanau, school, and contribute and make connections with
  //         other people
  //       </p>
  //     </ul>
  //   </>
  // );

  // NEW WAY
  const handleShowLearningPathways = () => {
    setContentInfo(list(InterlinkingPathways));
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  };
  const handleShowDigitalTech = () => {
    setContentInfo(list(digitalTechnologies));
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
  };
  const handleShowKeyComp = () => {
    setContentInfo(list(keyCompetencies));
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setIsActive4(false);
  };
  const handleShowIR = () => {
    setContentInfo(list(IR40));
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(true);
  };

  const InterlinkingPathways = {
    title: "Interlinking Pathways",
    subtitle:
      "This programme gives us 5 important interlinking Learning Pathways.",
    listTitle: [
      "COMPUTATIONAL THINKING",
      "DEVELOPING DIGITAL OUTCOMES",
      "DESIGNING PROCESSED OUTCOMES",
      "DEVELOP VISUAL AND SOCIAL COMMUNICATIONS",
      "STRONG TECHNOLOGICAL PRACTICES",
    ],
    listInfo: [
      "Within the programme the students are enabled to express problems and form solutions that will be designed so a computer can be used to create diverse and encapsulating applications.",
      "This programme is designed to strengthen the outcomes of each students personally to form strong applications",
      "Students will be taught the ways of how outcomes are processed, thought about, and produced. ",
      "Students will learn to design visually pleasing applications used to both keep the user aware of what is happening on the screen.",
      "The programme will show students the best practices to think and solve the problems brought on by using technology.",
    ],
  };

  const digitalTechnologies = {
    title: "Expands Digital Knowledge Base",
    subtitle:
      "This programme gives you the major capabilities to be confident in Digital Technologies",
    listTitle: [
      "PROBLEM SOLVING",
      "DECISION-MAKING",
      "CONFIDENCE",
      "HIGHER SELF-EXPECTATIONS",
      "COHERENCE",
    ],
    listInfo: [
      "The programme challenges are designed to think around multiple issues and challenges the way students interact with computers and other related technology.",
      "The programme uses technology to make the lives of many people happier through the decisions made when creating digital applications.",
      "When having the skills to manipulate the applications and learning to use it brings self-confidence into your life. ",
      "This programme develops students to think the best of themselves to bring higher expectations to their learning and lives as young adults.",
      "This programme offers all students a broader education that makes links within and across learning areas.",
    ],
  };

  const keyCompetencies = {
    title: "Enhance key competencies",
    subtitle:
      "The programme enhances capabilities of students in the 5 Key Competencies identified in the New Zealand Curriculum:",
    listTitle: [
      "THINKING",
      "DISCERNING CODES",
      "SELF-MANAGEMENT",
      "RELATIONSHIPS WITH PEERS",
      "PARTICIPATION AND COLLABORATION",
    ],
    listInfo: [
      "In particular the programme focused on problem solving, design thinking and computational thinking",
      "Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.",
      "Projects and challenges are designed to motivate students to explore and experiment with self-motivation.",
      "The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.",
      "The programme encourages students to be involved in communities, such as family, whanau, school, and contribute and make connections with other people.",
    ],
  };

  const IR40 = {
    title: "IR4.0",
    subtitle:
      "Designed with IT industry experts, the programme develops the students to find applicable jobs and careers in the Fourth Industrial Revolution. (IR4.0)",
    listTitle: [
      "LEARNING TO LEARN",
      "COMMUNITY ENGAGEMENT",
      "CULTURAL DIVERSITY",
      "INCLUSION",
      "FUTURE FOCUS",
    ],
    listInfo: [
      "The programme will set challenges at the end of every project to encourage students to explore and learn how to learn.",
      "The programme encourages students to be involved in the communities, such as family, friends, and in school, to contribute and make connections with other people.",
      "This programme is designed in New Zealand and reflects NZ's cultural diversity.",
      "In particular the programme is designed with acknowledgement to the student's identities and talents, allowing them to be creative to their personal ability.",
      "The programme leads students to explore future themes such as artificial intelligence and augmented reality.",
    ],
  };

  function listInfo(props) {
    return (
      <>
        <div className={styles.programmeMainGroup}>
          <li className={styles.programmeList}>
            <img
              src={star}
              style={{ width: "40px", height: "40px" }}
              alt="star"
            ></img>
            <div className={styles.programmeListTitle}>
              {props.listTitle[0]}
              <div className={styles.programmeListInfo}>
                {props.listInfo[0]}
              </div>
            </div>
          </li>
          <li className={styles.programmeList}>
            <img
              src={star}
              style={{ width: "40px", height: "40px" }}
              alt="star"
            ></img>
            <div className={styles.programmeListTitle}>
              {props.listTitle[1]}
              <div className={styles.programmeListInfo}>
                {props.listInfo[1]}
              </div>
            </div>
          </li>
          <li className={styles.programmeList}>
            <img
              src={star}
              style={{ width: "40px", height: "40px" }}
              alt="star"
            ></img>
            <div className={styles.programmeListTitle}>
              {props.listTitle[2]}
              <div className={styles.programmeListInfo}>
                {props.listInfo[2]}
              </div>
            </div>
          </li>
          <li className={styles.programmeList}>
            <img
              src={star}
              style={{ width: "40px", height: "40px" }}
              alt="star"
            ></img>
            <div className={styles.programmeListTitle}>
              {props.listTitle[3]}
              <div className={styles.programmeListInfo}>
                {props.listInfo[3]}
              </div>
            </div>
          </li>
          <li className={styles.programmeList}>
            <img
              src={star}
              style={{ width: "40px", height: "40px" }}
              alt="star"
            ></img>
            <div className={styles.programmeListTitle}>
              {props.listTitle[4]}
              <div className={styles.programmeListInfo}>
                {props.listInfo[4]}
              </div>
            </div>
          </li>
        </div>
      </>
    );
  }

  function list(props) {
    return (
      <div className={styles.listMainGroup}>
        <div className={styles.listMainTitle}>{props.title}</div>
        <div className={styles.listSubTitle}>{props.subtitle}</div>
        <ul>{listInfo(props)}</ul>
      </div>
    );
  }
  return (
    <>
      <div className={styles.homeProgContainer}>
        <h2 className={styles.homeProgTitle}>
          Teaching kids programming and digital skills is MORE than just writing
          code.
        </h2>
        <img
          className={styles.teachingImages}
          src={Group1}
          alt="teachingImgs"
        ></img>
        <img
          className={styles.teachingImages}
          src={Group2}
          alt="teachingImgs"
        ></img>
        <img
          className={styles.teachingImages}
          src={Group3}
          alt="teachingImgs"
        ></img>
        <img
          className={styles.teachingImages}
          src={Group4}
          alt="teachingImgs"
        ></img>
        <div className={styles.pathwaysContainer}>
          <h2 className={styles.pathwaysTitle}>
            How our programme helps teachers and schools
          </h2>
        </div>
        <div className={styles.pathwaysBtns}>
          <button
            // className={styles.btnFocus}
            className={isActive1 ? styles.buttonClicked : styles.btnActive}
            onClick={handleShowLearningPathways}
          >
            learning pathways
          </button>
          <button
            // className={styles.btnFocus}
            className={isActive2 ? styles.buttonClicked : styles.btnActive}
            onClick={handleShowDigitalTech}
          >
            digital technologies
          </button>
          <button
            // className={styles.btnFocus}
            className={isActive3 ? styles.buttonClicked : styles.btnActive}
            onClick={handleShowKeyComp}
          >
            key competencies
          </button>
          <button
            // className={styles.btnFocus}
            className={isActive4 ? styles.buttonClicked : styles.btnActive}
            onClick={handleShowIR}
          >
            IR4.0
          </button>
        </div>
        <div
          className={styles.showContent}
          style={{ backgroundColor: "#8080802c" }}
        >
          {contentInfo}
        </div>
      </div>
    </>
  );
}
