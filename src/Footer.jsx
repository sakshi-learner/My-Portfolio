import"./footer.css";
import React from "react";
import Link from "@material-ui/core/Link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import CodeIcon from '@mui/icons-material/Code';
function Footer(){
    const preventDefault = (event) => event.preventDefault();
       
    return(
        <>
        <div className="footer navbar">
            
           <Link 
                href="https://github.com/sakshi-learner"
                onClick={() => {
                    alert("Redirecting to github");
                }}
            >
             <span className="link"><GitHubIcon/></span>
            </Link>
           

            <Link
                href="https://leetcode.com/u/sakshee-singh/"
                onClick={() => {
                    alert("Redirecting to leetcode");
                }}
            >
              <span className="link"><CodeIcon/></span>
            </Link>
           
            <Link
                href="https://www.linkedin.com/in/sakshee-singh-38ba48272"
                onClick={() => {
                    alert("Redirecting to linkedin");
                }}
            >
                <span className="link"><LinkedInIcon/></span>
            </Link>
            
            <Link
                href="https://www.facebook.com/profile.php?id=100071120324353"
                onClick={() => {
                    alert("Redirecting to facebook");
                }}
            >
              <span className="link"><FacebookIcon/></span>
            </Link>

            <Link
                href="https://x.com/Sakshee96679291"
                onClick={() => {
                    alert("Redirecting to twitter");
                }}
            >
              <span className="link"><XIcon /></span>
            </Link>


           
        </div>      

       
       
       
       
        </>
    );
}
export default Footer;