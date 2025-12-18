import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./Skill.css";
function Skill(){
    return(
        <>
        <div className='bg-white h-screen w-full p-4'>
        <div className="Skill ">
            <h4> Java <i class="fa-brands fa-java"></i> </h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black" ,margin:"10px"}}
              size="small"
              disabled defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li>Object-Oriented Programming </li>
                <li>entry of my programming journey</li>
              
            </ul>
        </div>


        <div className="Skill">
            <h4> React JS <i class="fa-brands fa-react"></i> </h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black",margin:"10px"}}
              size="small"
              disabled defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li>I worked on  React projects and learned more about hooks, props, and state</li>
                <li>certified MERN stack devloper this portfolio is live example of my experience</li>
                <li>great learnings</li>
            </ul>
        </div>

        <div className="Skill">
            <h4> MongoDB <i class="fa-solid fa-database"></i> </h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black",margin:"10px"}}
              size="small"
              disabled defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li>i work in  projects of Mongo DB and learn more about MongoDB atlas queries and aggregation </li>
                <li>I am continuously working on it and finding solutions</li>
               
            </ul>
        </div>

        <div className="Skill">
            <h4> Node JS <i class="fab fa-node"></i> </h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black",margin:"10px"}}
              size="small"
              disabled defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li>I worked on  Node.js projects  </li>
                <li>I am comfortable working with Node.js</li>
                <li>great learnings with npm packages</li>
            </ul>
        </div>

        <div className="Skill">
            <h4> express.JS <i><b>ex</b></i> </h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black",margin:"10px"}}
              size="small"
              disabled defaultValue={65}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li>i work in  projects of express js  </li>
                <li>I am  comfortable working with Express.js makeing routes good with it</li>
                <li>great learning with npm package</li>
            </ul>
        </div>

        <div className="Skill">
            <h4> HTML5 <i class="fa-brands fa-html5"></i> </h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black",margin:"10px"}}
              size="small"
              disabled defaultValue={90}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li>i work in many projects of HTML  </li>
                <li>this is my first step toward web developer and making UI</li>
                <li>work in it and enjoy while creating pages</li>
            </ul>
        </div>
 
        <div className="Skill">
            <h4> CSS <i class="fa-brands fa-css3-alt"></i> </h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black",margin:"10px" }}
              size="small"
              disabled defaultValue={90}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li> basic styling of pages i started with css and also comfortable working with Tailwind Css</li>
                <li>this is my first step toward page styling with creativity </li>
                <li>work in it and enjoy while styling pages</li>
            </ul>
        </div>

       <div className="Skill">
            <h4> JavaScript </h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black" ,margin:"10px"}}
              size="small"
              disabled defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li>programming learn for making website dynamic define logic </li>
                <li>strong fundamentals</li>
               
            </ul>
        </div>

        <div className="Skill">
            <h4> MySQL <i class="fa-brands fa-java"></i> </h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black" ,margin:"10px"}}
              size="small"
              disabled defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li>queries and subqueries handle efficiently</li>
                <li>first experience with databases</li>
            </ul>
        </div>

       
        
        <div className="Skill">
            <h4> R programmig </h4> 
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black",margin:"10px" }}
              size="small"
              disabled defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li> i have learned R for data analysis and continuously working on it </li>
                <li> Certified R programmer </li>
            </ul>
        </div>


        

       

        <div className="Skill">
            <h4> Soft Skills</h4>
            <Box sx={{ width: 300 }}>
            <Slider
              style={{color: "black",margin:"10px" }}
              size="small"
              disabled defaultValue={90}
              aria-label="Small"
              valueLabelDisplay="auto"
             
            />
           </Box>
            <ul>
                <li> MS excel  </li>
                <li> MS word </li>
                <li> MS powerpoint </li>
                <li>fast learner</li>
                <li>good at cooperation and teamwork</li>
            </ul>
        </div>
        </div>

        </>
    )
}
export default Skill;