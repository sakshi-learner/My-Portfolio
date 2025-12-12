import ContactMe from "./ContactMe";
import './About.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
function About(){

    return(
        <>
       <div className="About w-full h-screen p-4">
           
           <div className="content"> 
          
           <div>
           <h4>Sakshi Singh </h4>
           <h6>Hello...</h6>
            <p className="info">  In the field of  software Engineering continuously enhance my skills, With innovative problem-solving, I transform ideas into seamless user experiences.
                Check out My Profile, May your goals meets my skills.
            </p>
            <span>Intern At The ENTREPRENEURSHIP NETWORK </span>
            <i>Thanks for Visiting... < FavoriteIcon /></i> 
           </div>
           </div>
           <ContactMe/>
        </div>

        </>
    );
}
export default About;