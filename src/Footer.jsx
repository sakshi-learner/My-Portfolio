import FooterTitle from "./FooterTitle";
import"./footer.css";
import { useState } from "react";
function Footer(){
    const[show, setShow] = useState(false); 

    let onIcon = ()=>{
        
        if(show == true){
            setShow(false);
        }else{
            setShow(true);
        }
    };

    const[show1, setShow1] = useState(false); 

    let onIcon1 = ()=>{
        
        if(show1 == true){
            setShow1(false);
        }else{
            setShow1(true);
        }
    };

    const[show2, setShow2] = useState(false); 

    let onIcon2 = ()=>{
        
        if(show2 == true){
            setShow2(false);
        }else{
            setShow2(true);
        }
    };

    const[show3, setShow3] = useState(false); 

    let onIcon3 = ()=>{
        
        if(show3 == true){
            setShow3(false);
        }else{
            setShow3(true);
        }
    };

    return(
        <>
        <div className="footer navbar">
            <FooterTitle title={<p className="p"  onClick={onIcon}><i class="fa-brands fa-linkedin"></i> Linkedin</p>}></FooterTitle>
            <FooterTitle title={<p className="p"  onClick={onIcon1}><i class="fa-brands fa-square-facebook"></i> Facebook</p>}></FooterTitle>
            <FooterTitle title={<p className="p"  onClick={onIcon2}><i class="fa-brands fa-twitter"></i> Twitter</p>}></FooterTitle>
            <FooterTitle title={<p className="p"  onClick={onIcon3}><i class="fa-brands fa-discord"></i>Discord</p>}></FooterTitle>
           
        </div>      

       
       
       
       
        </>
    );
}
export default Footer;