import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';


const TvPrograms = () => {

    const url = "https://tv-api-p2x2o.ondigitalocean.app/SVT 1.json"
    const [programs, setPrograms] = useState([]);

    useEffect(async () => {
        if (programs.length === 0) {
            const response = await fetch(url);
            const data = await response.json();
            setPrograms(data);
        }
    })


// Can only return one object, encapsulated in a DIV here
    return (
        <div>


        
        






<div class="logo">  
    <img src= "./images/picknick.jpg" alt=" logo "/>
    </div>     

    <div class= "header">
        
       <h1>Upptäck äventyren nära dig</h1>
       <p class="txt_1">Hitta ett utflyktsmål där det går att byta blöjor? Värma vällingen? </p> 
       <p class="txt_2">Använd picknick för att hitta utflyktsmål dom passar hela familjen</p>
    </div>
    
    <div class="container">
        <div class="left-column">
            <h2>Left</h2>
            
        </div>
        
        
        <div class="center-column1">
            <h2>Center1</h2>
            <Sidebar />
        </div>
        <div class="center-column2">
            <h2>center2</h2>
            <Sidebar2 />
        </div>
        <div class="right-column">
            <h2>Right</h2>
        </div>
    </div>
        <div class="footer">
            <p>&copy; All rights reserved.</p>
        </div>
 
    

</div>
);
};

export default TvPrograms;









