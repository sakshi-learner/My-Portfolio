import "./Education.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
function Education(){
    return(
        <>
      
        <div className="Education h-screen w-full p-4 flex justify-center">
            <div className="EduCard">
               <h3><i>Bachelor of Technology (CS)</i></h3>
               <h5> &nbsp; From : Shri Ram institute of science and technology Jabalpur</h5> 
               <p> &nbsp;Batch : 2026</p>
               <p>  &nbsp; cgpa : 7.94 till now  </p>
            </div>

            <div className="EduCard">
               <h3><i>higher secondary schooling</i></h3>
               <h5> &nbsp; From : Government higher secondary school Bhita</h5> 
               <p>&nbsp; Batch : 2022</p>
               <p> &nbsp; percentage: 81%</p>
            </div>

             

        </div>
        
            
      
        </>
    );
}

export default Education;