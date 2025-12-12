import "./Projects.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

function Projects(){
  return(
      
      <>
        <div className="bg-white h-screen w-full">

       
        <div className="Container ">
         
         <Card sx={{ maxWidth: 345 }}   className="Card" >
        
         <CardMedia
        component="img"
        alt="Woderlust"
        height="140"
        image="https://media.licdn.com/dms/image/v2/D562DAQFut8SO2iWwyQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730283378499?e=1732942800&v=beta&t=Z0aHSxPX1OqsASLf4UfroZLQWQdwcsvQyGNl3rp8evo"
        />
          <CardContent className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
          Wonderlust
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         <i><b> Technologies:</b></i>MongoDB, ExpressJS, NodeJS , Bootstrap, JOI and varios npm pakages
         <i> <b> description:</b></i> A Hotel Listing App..!!" 
         <i> <b>  feture:</b></i>we  can list hotels ,athontication, review, add delete etc.
          </Typography>
          </CardContent>
          <CardActions>
         <Button 
         size="small"
         onClick={() => window.open("https://github.com/sakshi-learner/backend", "_blank")}
         > View Project
         </Button>
          </CardActions>
       </Card>


       

       <Card sx={{ maxWidth: 345 }}   className="Card">
        
         <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.moneycontrol.com/static-mcnews/2022/11/1de-636x435.jpg?impolicy=website&width=1600&height=900"
        />
          <CardContent  className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
          Loan Eligibility prediction
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         <i><b> Technologies:</b></i>"React , material UI ,Machine Learning ,python libraries ,node js...
         <i> <b> description:</b></i>  a web based machine learning model which predict Eligibility for loan
         <i> <b>  feture:</b></i> good UI, responsive and simple. 
          
         
          </Typography>
          </CardContent>
          <CardActions>
          <Button 
         size="small"
         onClick={() => window.open("https://github.com/sakshi-learner/Loan-Eligibility-", "_blank")}
         > View Project
         </Button>
          </CardActions>
       </Card>

       <Card sx={{ maxWidth: 345 }}   className="Card">
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a1/87/d1/a187d11c-84b7-02a3-f713-598aa2c74b72/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"
        />
          <CardContent  className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
           Weather widget
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         <i><b> Technologies:</b></i> React , material UI , Weather API .
         <i> <b> description:</b></i>  Weathe app in which we search weather details by city name. 
         <i> <b>  feture:</b></i> good UI, simple to use..
          </Typography>
          </CardContent>
          <CardActions>
           <Button 
         size="small"
         onClick={() => window.open("https://github.com/sakshi-learner/Weather-App", "_blank")}
         > View Project
         </Button>
          </CardActions>
       </Card> 
       </div>


       <div className="Container ">
         
         <Card sx={{ maxWidth: 345 }}   className="Card" >
        
         <CardMedia
        component="img"
        alt="Woderlust"
        height="140"
        image="https://store-images.s-microsoft.com/image/apps.45688.9007199267047077.11dd8159-8d05-41d6-9d89-451d40d903f6.a84d8b33-ba56-4537-8859-3c3b04b95039"
        />
          <CardContent className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
          Simon says 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         <i><b> Technologies:</b></i>HTML, CSs, JavaScript
         <i> <b> description:</b></i> pay Simon say with computer!!" 
         <i> <b>  feture:</b></i> simple UI intresting for fun  responsive etc.
          </Typography>
          </CardContent>
          <CardActions>
           <Button 
         size="small"
         onClick={() => window.open("https://github.com/sakshi-learner/", "_blank")}
         > View Project
         </Button>
          </CardActions>
       </Card>


       

       <Card sx={{ maxWidth: 345 }}   className="Card">
        
         <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.gifer.com/3W4P.gif"
        />
          <CardContent  className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
          Jo fun 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         <i><b> Technologies:</b></i>"React , material UI  Joke API...
         <i> <b> description:</b></i>  for making you lough click button it you joke 
         <i> <b>  feture:</b></i> good UI , responsive and simple. 
          
         
          </Typography>
          </CardContent>
          <CardActions>
           <Button 
         size="small"
         onClick={() => window.open("https://github.com/sakshi-learner/jokker", "_blank")}
         > View Project
         </Button>
          </CardActions>
       </Card>

       <Card sx={{ maxWidth: 345 }}   className="Card">
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://martech.org/wp-content/uploads/2017/09/spotify-logo-1920x1080.jpg"
        />
          <CardContent  className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
           spotify UI 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         
         <i><b> Technologies:</b></i> HTML, CSS, Bootstrap etc.
         <i> <b> description:</b></i>  Spotify clone. 
         <i> <b>  feture:</b></i> simple UI
          </Typography>
          </CardContent>
          <CardActions>
          <Button 
         size="small"
         onClick={() => window.open("https://github.com/sakshi-learner/", "_blank")}
         > View Project
         </Button>
          </CardActions>
       </Card> 
       </div>

       <p> And many more ...</p>
       </div>
      </>
     

    );
}
export default Projects;
