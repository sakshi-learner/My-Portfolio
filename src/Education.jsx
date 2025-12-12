import "./Education.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
function Education(){
    return(
        <>
      
        <div className="Education h-screen w-full p-4">
            <div className="EduCard">
               <h3><i>Bechlor of Technology (CS)</i></h3>
               <h5> &nbsp; From : Shri Ram institute of science and technology Jabalpur</h5> 
               <p>  &nbsp; cgpa : 7.94 great learnings </p>
            </div>

            <div className="EduCard">
               <h3><i>higher secondary schooling</i></h3>
               <h5> &nbsp; From : Government higher secondary school bhita</h5> 
               <p> &nbsp; percentage: 81%</p>
            </div>

        </div>
        
            
      
        </>
    );
}

export default Education;