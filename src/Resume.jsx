import "./Resume.css";
import Link from "@material-ui/core/Link";
function Resume(){

    return(
        <>
         <div className="resume">
          <Link 
                href="https://docs.google.com/document/d/1Vxu-ZKUMLpSqyyvuptxsXsd3PpCYjVe3/edit?usp=sharing&ouid=111824533363690068765&rtpof=true&sd=true"
                onClick={() => {
                    alert("Redirecting Resume");
                }}
            >
             <span className="link">Click : MY RESUME</span>
            </Link>
         </div>
        </>
    )
}

export default Resume;