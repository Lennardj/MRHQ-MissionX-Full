import Arrow from '../images/arrowLeft.png';
import logout from "../images/logout.png"
import profile from "../images/profile.png"
import setting from "../images/settings.png"
import { SidebarArray } from "./LObjSidebarArray";
import { useState } from "react";
import "../styles/LObjSidebar.css";

export default function Sidebar() {
    

    const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
    const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);
    
    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem('sidebar-collapsed', true);
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem('sidebar-collapsed');
    }
return (
    <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
         <div className= "sidebar-PicCont" >
            <img className="sidebar-pic"
             src="https://mir-s3-cdn-cf.behance.net/projects/404/13de44151376795.Y3JvcCw4NjIsNjc1LDE2OCww.jpg"></img>
        </div>

        {SidebarArray.map((prop,key) => {
            return <div className="sidebar-items">
                        
                        <li 
                        className="items"
                        id={window.location.pathname == ValidityState.Link ? "active" : ""}
                        key={key} 
                      
                        onClick={() => {
                            window.location.pathname = prop.Link
                        }}>
                        {""}
                        <div className="sidebar-icon">
                            {prop.icon}</div>
                        <div className="sidebar-text">
                            {prop.title}</div>    
                        </li>
                        
                    </div>
                    
            })}
                <div className="sidebar-btn">
                    <img src={Arrow} onClick={handleToggler} id="sidebar-ArrowIcon"/>
                </div>
                <ul className="sidebar-footer">
                    <li>
                        <img src={profile}/>
                        <p>Profile</p>
                    </li>
                    <li>
                        <img src={setting}/>
                        <p>Settings</p>
                    </li>
                    <li>
                        <img className="logout" src={logout} />
                        <p>Logout</p>
                    </li>

                </ul>
    </div>
)}


