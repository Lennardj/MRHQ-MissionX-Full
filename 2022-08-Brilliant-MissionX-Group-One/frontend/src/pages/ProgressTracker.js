import "../App.css";

import ProgressT from "../components/ProgressT";
import NavBar from "../components/TopNavBar";

function ProgressTracker() {
  return (
    <div className="App">
      <NavBar />
      <ProgressT />
    </div>
  );
}

export default ProgressTracker;