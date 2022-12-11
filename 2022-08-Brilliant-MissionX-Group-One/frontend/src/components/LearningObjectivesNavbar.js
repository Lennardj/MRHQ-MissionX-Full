import "../styles/LObjNavbar.css";
import pic from "../images/LevelUpWorks-blue.png"
import flag1 from "../images/MaoriFlag.png"
import flag2 from "../images/NZFlag.png"

export default function NavBar() {
   return <nav className="nav">
    <img className="navobj-levelup" src={pic}/>

    <div className="pIntro-navbar">
        <h3 className="pIntro-head">Project</h3>
        <p className="pIntro-subhead">Introduction</p>
    </div>
    
    <h1 id="pIntro-num">1</h1>
   

    <div className="pIntrodots">

    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    <div className="lobj-dotsNavbar"></div>
    </div>
    

    <ul className="navobj-btn">
        <li>
            <a style={{backgroundColor: "#E5AB2C"}} href="Take Screenshot">Take Screenshot</a>
        </li>    
        <li>
            <a style={{backgroundColor: "#F91C85"}} href="Ask Teacher for help">Ask Teacher for help</a>
        </li>
        <li>    
            <a style={{backgroundColor: "#48C0F4"}} href="More Projects">More Projects</a>
        </li>
    </ul>

    <div className="navobj-flags">

    <img className="obj-tinoflag" src={flag1}/>
    <img className="obj-nzflag" src={flag2}/>

    </div>
    
    

   </nav>
       
       
}