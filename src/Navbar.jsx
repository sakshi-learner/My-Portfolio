import React from "react";
import { useState } from "react";
import NavTitle from "./NavTitle";
import "./Navbar.css";
import Education from "./Education.jsx";
import Skill from "./Skill.jsx";
import Resume from "./Resume.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";

function Navbar(){
 
    const[showEdu , setShowEdu] = useState(false); 
    const[showProjects , setShowProjects] = useState(false); 
    const[showSkill , setShowSkill] = useState(false);  
    const[showResume, setShowResume] = useState(false); 
    let onProjects = ()=>{
       console.log("Project Clicked!");
       if(showProjects == true ){
        setShowProjects(false);
        }else{
        setShowProjects(true);
        }
    };

    let onEdu = ()=>{
        console.log("Education");
        if(showEdu == true){
            setShowEdu(false);
        }else{
            setShowEdu(true);
        }
    };

    let onSkills=()=>{
        console.log("SKILLS");
        if(showSkill == true){
            setShowSkill(false);
        }else{
            setShowSkill(true);
        }
    };

    let onResume=()=>{
        console.log("Resume");
       
        if(showResume == true){
            setShowResume(false);
        }else{
            setShowResume(true);
        }
    };


return(
    
    <>
   <div  className="Navbar , navbar sticky-top">
    <NavTitle  title={<p style={{ cursor: "pointer"}} onClick={onProjects}> Projects </p>}></NavTitle>
    <NavTitle  title={<p style={{ cursor: "pointer"}}  onClick={onEdu}>Education</p>} ></NavTitle> 
    <NavTitle  title={<p style={{ cursor: "pointer"}}  onClick={onSkills} >Skills</p>} ></NavTitle>
    <NavTitle  title={<p style={{ cursor: "pointer"}}  onClick={onResume} >Resume</p>}></NavTitle>
   </div>
    <About/>
  
   {
        showEdu && <Education/>
          
   }
  {
    showProjects && <Projects/>
  }
  {
    showSkill && <Skill/>
  }

  {
    showResume && <Resume/>
  }
</>
);

}
export default Navbar;