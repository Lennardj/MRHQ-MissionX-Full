import React from "react"
import Instruction from "../images/Project01-instructions.png"
import "../styles/LObjInstruction.css"

export default function InstructionsPage() {

    fetch('http://localhost:4000/api/instrcution')
    .then((res) => res.json())
    .then((resultsData) => (
       console.log(resultsData)
    ));  

    return(
        
        <div className="LObjInstruction">
            <div className="LObjContainer">
           <div className="LObjLeftArrowContainer">
            <div className="LObjLeftArrow">
            </div>
            </div>
        </div>
            <div className="InstructionContent">
                <h1>1. JOIN SCRATCH</h1>
                <br/>
                <p2>If you haven't used Scratch before, you will need to join Scratch first.</p2>
                <br/>
                <p2>Go to https://scratch.mit.edu. Click on Join</p2><p2>Join Scratch.</p2>
                <br/>
                <br/>
                <br/>
                <img src={Instruction}></img>
                <br/>
                <br/>
                <br/>
                <p2>Follow the instructions to join. you will need a username and a password
                    that you will remember. If possible,<br/> you should also verify your email address so 
                    that you can Share projects later. Ask your teacher to help with<br/>this step if you 
                    don't have an email address, or if you are not sure what to do. 
                </p2>
            </div>
            <div className="LObjContainer">
            <div className="LObjRightArrowContainer">
            <div className="LObjRightArrow">
            </div>
            </div>
            </div>



        </div>
    )
    
}