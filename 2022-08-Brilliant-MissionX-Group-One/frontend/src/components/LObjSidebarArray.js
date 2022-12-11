import LearningObjectivesPage from "./LearningobjectivesPage";
import VideoTutorial from "./VideoTutorialPage";
import InstructionsPage from "./InstructionsPage";

import lobjIcon from "../images/learningObjectives.png";
import aLobjIcon from "../images/learningObjectivesSelected.png";
import instructionIcon from "../images/instructions.png";
import aInstructionIcon from "../images/instructionsSelected.png";
import vidTutIcon from "../images/video.png";
import aVidTutIcon from "../images/videoSelected.png";
import makeProjectIcon from "../images/makeProject.png";
import aMakeProjectIcon from "../images/makeProjectSelected.png";
import submitProjectIcon from "../images/submitProject.png";
import aSubmitProjectIcon from "../images/submitProjectSelected.png";
import bonusChallengeIcon from "../images/bonusChallenge.png";
import takeTheQuizIcon from "../images/takeTheQuiz.png";



export const SidebarArray = [
   
    {
        title: "LEARNING OBJECTIVES",
        icon: <img id="sidebar-icon" src={lobjIcon}/>,
        aIcon: <img id="sidebar-iconA" src={aLobjIcon}/>,
        Link: "/StudentDashboard/learningobjectives",

    },

    {
        title: "INSTRUCTIONS",
        icon: <img id="sidebar-icon" src={instructionIcon}/>,
        aIcon: <img id="sidebar-iconA" src={aInstructionIcon}/>,
        Link: "/StudentDashboard/instruction",

    },

    {
        title: "VIDEO TUTORIAL",
        icon: <img id="sidebar-icon" src={vidTutIcon}/>,
        aIcon: <img id="sidebar-iconA" src={aVidTutIcon}/>,
        Link: "/StudentDashboard/videotutorial",

    },

    {
        title: "MAKE PROJECT",
        icon: <img id="sidebar-icon" src={makeProjectIcon}/>,
        aIcon: <img id="sidebar-iconA" src={aMakeProjectIcon}/>,
        Link: "/make project",

    },

    {
        title: "SUBMIT PROJECT",
        icon: <img id="sidebar-icon" src={submitProjectIcon}/>,
        aIcon: <img id="sidebar-iconA" src={aSubmitProjectIcon}/>,
        Link: "/submit project",

    },

    {
        title: "BONUS CHALLENGE",
        icon: <img id="sidebar-icon" src={bonusChallengeIcon}/>,
        Link: "/bonus challenge",

    },

    {
        title: "TAKE THE QUIZ",
        icon: <img id="sidebar-icon" src={takeTheQuizIcon}/>,
        Link: "/take the quiz",

    }
]