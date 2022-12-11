import React from "react"
import LookBlocks1 from "../images/Project01-obj1.png"
import LookBlocks2 from "../images/Project01-obj2.png"
import ControlBlocks1 from "../images/Project01-obj3.png"
import ControlBlocks2 from "../images/Project01-obj4.png"
import MotionBlocks1 from "../images/Project01-obj5.png"
import Motionblocks2 from "../images/Project01-obj6.png"
import "../styles/LObjPage.css"

export default function LearningObjectivesPage() {
    return(
        <div className="LObjPage">
            <div className="LObjheader">
           <h1>Explore scractch blocks</h1>
           <p2> Learn the basic function of soe basic scractch blocks such as "say,""wait""go to" and</p2>
           </div>

           <div className="LObjImages">
           <div className="lookBlocks1">
           <p2>Look Blocks</p2>
           <img src={LookBlocks1} alt="lookBlocks1"></img>
           </div>
           
           <div className="lookBlocks2">
            <img src={LookBlocks2}></img>
            
           </div>
           <div className="controlBlocks1">
            <p2>Control Blocks</p2>
            <img src={ControlBlocks1}></img>
           </div>
           <div className="controlBlocks2">
           <img src={ControlBlocks2}></img>
           </div>
           
           <div className="motionBlocks1">
           <p2>Motion Blocks</p2>
           <img src={MotionBlocks1}></img>
           </div>
           <div className="motionBlocks2">
           <img src={Motionblocks2}></img>
           </div>
           </div>
           
           
        




        </div>
    )
    
}