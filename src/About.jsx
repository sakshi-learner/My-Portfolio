import ContactMe from "./ContactMe";
import './About.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
function About(){

    return(
        <>
       <div>
         
           <div className="content"> 
           <Stack direction="row" spacing={2}>
           <Avatar
           alt="Remy Sharp"
           src="https://media.licdn.com/dms/image/v2/D5603AQGsCOaWRNewjg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729875637423?e=1737590400&v=beta&t=GIGt8TiokqtliD-ALXrOecj9ppKYtsAQJqt4Jz-1riI"
           sx={{ width: 100, height: 100 }}
           />
           </Stack>
           <div>
           <h4>Sakshi Singh </h4>
           <h6>Hello...</h6>
            <p className="info">  In the field of  software Engineering continuously enhance my skills, With innovative problem-solving, I transform ideas into seamless user experiences.
                Chack out My Profile, May your goals meets my skills.
            </p>
            <i>Thanks for Visiting... < FavoriteIcon /></i> 
           </div>
           </div>
           <ContactMe/>
        </div>

        </>
    );
}
export default About;