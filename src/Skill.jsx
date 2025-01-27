import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./Skill.css";
function Skill(){
    return(
        <>
       
        <div className="Skill">
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
                <li>object oriented programming </li>
                <li>enrty of my programming journey</li>
                <li>competable solutions and working on DSA</li>
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
                <li>i work in 3 projects of React and learn more about hooks props and states</li>
                <li>certified MERN stack devloper this portfoilo is live example of my experince </li>
                <li>great learings and competable solutions</li>
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
                <li>i work in 3 projects of Mongo DB and learn more about Mongo atlas queries and agragation </li>
                <li>i am continewusly working on Mongo DB </li>
                <li>great learings and competable solutions</li>
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
                <li>i work in 3 projects of node js  </li>
                <li>i am very comfortable work with Node js and find solutions</li>
                <li>great learings with this npm package</li>
            </ul>
        </div>

        <div className="Skill">
            <h4> express JS <i><b>ex</b></i> </h4>
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
                <li>i work in 3 projects of express js  </li>
                <li>i am very comfortable work with express js and find solutions</li>
                <li>great learings with this npm package</li>
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
                <li>i work in many projects of HTML 5  </li>
                <li>tish is my first step toward web devloper and find solutions</li>
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
                <li> basic styleing of pages i started with css </li>
                <li>this is my first step toward page styling with creativity </li>
                <li>work in it and enjoy while styling pages</li>
            </ul>
        </div>

        </>
    )
}
export default Skill;