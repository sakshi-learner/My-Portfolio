import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';



function App() {

  return(
  <>
  <div className="body">
   <Navbar></Navbar>
   <Home/> 
   <Footer></Footer>
  </div>
  <div>
    <marquee width="100%" direction="Left" height="40px" loop ="3">
     "The true measure of success is not just in what you achiveve, but also in how you impact others Positively.."
     </marquee>
  </div>
  
  </>
  )
}

export default App;