import NavBar from "../components/LearningObjectivesNavbar"
import Sidebar from "../components/LObjSidebar";
import Footer from "../components/LearningObjectivesFooter";
import Instructions from "../components/InstructionsPage";
import VideoTutorial from "../components/VideoTutorialPage";
import LearningObjectives from "../components/LearningobjectivesPage";
import '../styles/LObjStudentDashboard.css';




export default function StudentDashboard() {
  let component 
  switch (window.location.pathname) {
      case "/StudentDashboard/learningobjectives":
          component = <LearningObjectives />
          break
      case "/StudentDashboard/instruction":
          component = <Instructions />
          break
      case"/StudentDashboard/videotutorial":
          component = <VideoTutorial /> 
          break
  }      
    return (
        <div className="App" >
          <NavBar/>
    
          <div className="LObj">
            <Sidebar/> 
          <div className="lobj-main">
              <div className="lobj-main2">
                {component}
              
              </div>
           </div>
          </div>

        <Footer/>
    
        </div>
      );
}