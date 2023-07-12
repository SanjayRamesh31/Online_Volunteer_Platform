import React from "react";
// import './styles/MainPage.css';
// import logo from "./styles/images/logo1.png"
// import logo2 from "./styles/images/logo2.png"
// import { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
function MainPage(){  
  
  return(
    <div>
             <nav className="navigation">
            <div className="title">Volunteer</div>
  
        <div className="navigation-menu">
         <ul>
           <li className="li">
           <Link style={{textDecoration:'none'}} to="/Login"><button>Home</button></Link>
           </li>
           <li className="li">
             <button>VolunteerOpportunities</button>
           </li>
           <li className="li">
             <button>Assignment</button>
           </li>
           <li className="list2"><div class="dropdown">
  <button class="dropbtn">Profile </button>
  <div class="dropdown-content" style={{backgroundColor:"red"}}>
    <button className="drop" style={{text:"red"}}>My Profile</button>
    <button className="drop">Dashboard</button>
  </div>
</div>
           </li>
          
         </ul>
       </div> 
     </nav>
     
           

    </div>
  );
}
export default MainPage