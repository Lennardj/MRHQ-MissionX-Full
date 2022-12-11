import { useEffect, useState } from "react";
import React from "react"
import "../styles/LObjVidTut.css";



export default function VideoTutorial() {

const [results, setResults] = useState()

useEffect(function () {
    // Sending HTTP request using Fetch
    fetch('http://localhost:4000/api/studentdash')
    .then((res) => res.json())
    .then((resultsData) => {
      setResults(resultsData);
    });  
  }, [])

    return(
        <div className="L0bjContent">
           <div className="LObjContent">
            <div>
              <span className="LeftArrow-LObjContent"></span>
            </div>
                 {results && results.map(function(result, id) { console.log(result.video)
                    return (
                    <div key={id}>
                       <iframe width="600" height="400" src={result.video}
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            <div className="RightArrow-LObjContent"></div>
                    </div>
            
                    );
                })} 
            </div>

        </div>
    )
    
}