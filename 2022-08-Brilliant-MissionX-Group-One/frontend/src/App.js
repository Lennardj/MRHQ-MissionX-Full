import "./App.css";
import Instructions from "./components/InstructionsPage";
import VideoTutorial from "./components/VideoTutorialPage";
import LearningObjectives from "./components/LearningobjectivesPage";
import { Routes, Route, Link } from "react-router-dom";
import ProjectLibrary from "./pages/studentProjectLibrary";
import ProfileViewer from "./pages/StudentProfileViewer";
import ProgressTracker from "./pages/ProgressTracker";
import StudentDashboard from "./pages/StudentDashboard";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectlibrary" element={<ProjectLibrary />} />
        <Route path="/profileviewer" element={<ProfileViewer />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />}>
          <Route
            path="/StudentDashboard/learningobjectives"
            element={<LearningObjectives />}
          />
          <Route
            path="/StudentDashboard/instruction"
            element={<Instructions />}
          />
          <Route
            path="/StudentDashboard/videotutorial"
            element={<VideoTutorial />}
          />
        </Route>

        <Route path="/ProgressTracker" element={<ProgressTracker />} />
      </Routes>
    </div>
  );
}

export default App;
