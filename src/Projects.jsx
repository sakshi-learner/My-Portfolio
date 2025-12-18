import "./Projects.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

function Projects() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen w-full flex flex-col items-center py-10 px-4">

        <div className="Container">

          {/* Wonderlust */}
          <Card className="Card">
            <CardMedia
              component="img"
              alt="Wonderlust"
              height="140"
              image="https://media.licdn.com/dms/image/v2/D562DAQFut8SO2iWwyQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730283378499?e=1732942800&v=beta&t=Z0aHSxPX1OqsASLf4UfroZLQWQdwcsvQyGNl3rp8evo"
            />
            <CardContent className="CardContent">
              <Typography gutterBottom variant="h5" component="div">
                Wonderlust
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <i><b>Technologies:</b></i> MongoDB, ExpressJS, NodeJS, Bootstrap, JOI and various npm packages<br/>
                <i><b>Description:</b></i> Hotel Listing App with authentication, review, add/delete functionality.<br/>
                <i><b>Feature:</b></i> List hotels, authentication, review, add/delete etc.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open("https://github.com/sakshi-learner/backend", "_blank")}>
                View Project
              </Button>
            </CardActions>
          </Card>

          {/* Loan Eligibility Prediction */}
          <Card className="Card">
            <CardMedia
              component="img"
              alt="Loan Eligibility prediction"
              height="140"
              image="https://images.moneycontrol.com/static-mcnews/2022/11/1de-636x435.jpg?impolicy=website&width=1600&height=900"
            />
            <CardContent className="CardContent">
              <Typography gutterBottom variant="h5" component="div">
                Loan Eligibility Prediction
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <i><b>Technologies:</b></i> React, Material UI, Machine Learning, Python libraries, NodeJS<br/>
                <i><b>Description:</b></i> Web-based ML model predicting loan eligibility.<br/>
                <i><b>Feature:</b></i> Good UI, responsive, simple.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open("https://github.com/sakshi-learner/Loan-Eligibility-", "_blank")}>
                View Project
              </Button>
            </CardActions>
          </Card>

          {/* Weather Widget */}
          <Card className="Card">
            <CardMedia
              component="img"
              alt="Weather Widget"
              height="140"
              image="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a1/87/d1/a187d11c-84b7-02a3-f713-598aa2c74b72/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"
            />
            <CardContent className="CardContent">
              <Typography gutterBottom variant="h5" component="div">
                Weather Widget
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <i><b>Technologies:</b></i> React, Material UI, Weather API<br/>
                <i><b>Description:</b></i> Search weather details by city name.<br/>
                <i><b>Feature:</b></i> Good UI, simple to use.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open("https://github.com/sakshi-learner/Weather-App", "_blank")}>
                View Project
              </Button>
            </CardActions>
          </Card>

          {/* Simon Says */}
          <Card className="Card">
            <CardMedia
              component="img"
              alt="Simon Says"
              height="140"
              image="https://store-images.s-microsoft.com/image/apps.45688.9007199267047077.11dd8159-8d05-41d6-9d89-451d40d903f6.a84d8b33-ba56-4537-8859-3c3b04b95039"
            />
            <CardContent className="CardContent">
              <Typography gutterBottom variant="h5" component="div">
                Simon Says
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <i><b>Technologies:</b></i> HTML, CSS, JavaScript<br/>
                <i><b>Description:</b></i> Play Simon Says with computer, fun and interactive.<br/>
                <i><b>Feature:</b></i> Simple UI, responsive.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open("https://github.com/sakshi-learner/", "_blank")}>
                View Project
              </Button>
            </CardActions>
          </Card>

          {/* Jo Fun */}
          <Card className="Card">
            <CardMedia
              component="img"
              alt="Jo Fun"
              height="140"
              image="https://i.gifer.com/3W4P.gif"
            />
            <CardContent className="CardContent">
              <Typography gutterBottom variant="h5" component="div">
                Jo Fun
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <i><b>Technologies:</b></i> React, Material UI, Joke API<br/>
                <i><b>Description:</b></i> Click button to get jokes.<br/>
                <i><b>Feature:</b></i> Good UI, responsive, simple.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open("https://github.com/sakshi-learner/jokker", "_blank")}>
                View Project
              </Button>
            </CardActions>
          </Card>

          {/* Spotify UI */}
          <Card className="Card">
            <CardMedia
              component="img"
              alt="Spotify UI"
              height="140"
              image="https://martech.org/wp-content/uploads/2017/09/spotify-logo-1920x1080.jpg"
            />
            <CardContent className="CardContent">
              <Typography gutterBottom variant="h5" component="div">
                Spotify UI
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <i><b>Technologies:</b></i> HTML, CSS, Bootstrap<br/>
                <i><b>Description:</b></i> Spotify clone.<br/>
                <i><b>Feature:</b></i> Simple UI.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => window.open("https://github.com/sakshi-learner/", "_blank")}>
                View Project
              </Button>
            </CardActions>
          </Card>

        </div>

        <p className="text-center mt-10 text-gray-500">And many more...</p>
      </div>
    </>
  );
}

export default Projects;
