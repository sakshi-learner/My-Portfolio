import React, { useState } from "react";
import Card from "./Card.jsx";

function CardTab(){
   
   
    return (
        <>
        <div className="CardContainer">
        <Card
        title ="Wonderlust" 
        Technologies=" MongoDB, ExpressJS, NodeJS , Bootstrap, JOI and varios npm pakages" 
        description=" A Hotel Listing App..!!" 
        feture="  we  can list hotels ,athontication, review, add delete etc."></Card>
       
        
       
        <Card 
        title="Weather widget"  
        Technologies="React , material UI" 
        description=" Weathe app" 
        feture=" good UI, simple...">
        </Card>
       

        <Card 
        title="Krishi Star"  
        Technologies="React , material UI , MongoDB , expressJS, NodeJs, JavaScript , APIs..." 
        description=" A forming tools renting website" 
        feture=" good UI, simple, help formers to rent formming tools with lowest cost prises by other formers"> 
        </Card>
        </div>
        </>
    );
}

export default CardTab;