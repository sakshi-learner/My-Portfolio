import { useState } from "react";
import "./ContactMe.css";
function ContactMe(){
    const[showBtn , setShowBtn] = useState(false); 

    let onBtn = ()=>{
        console.log("Contact ME");
        if(showBtn == true){
            setShowBtn(false);
        }else{
            setShowBtn(true);
        }
    };


    return(
        <>
           <div className="ContactMe">
           <button className="btn" onClick={onBtn}>Contact Me</button>
           
           </div>
           {
            showBtn &&  <p className="gmail">Mail Me: sakshees846@gmail.com</p>
           }
        </>
    );
}
export default ContactMe;