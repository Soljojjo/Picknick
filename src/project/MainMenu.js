import React, { useEffect, useState } from 'react';
import Destinations from './Destinations';



const MainMenu = () => {

    //const url = "https://tv-api-p2x2o.ondigitalocean.app/SVT 1.json"
    const [programs, setPrograms] = useState([]);

    useEffect(async () => {
        if (programs.length === 0) {
            //const response = await fetch(url);
            //const data = await response.json();
           // setPrograms(data);
        }
    })


    // Can only return one object, encapsulated in a DIV here
    return (
        <div>

            

            <div class="header">
            <div>
                <img class= "logoPicknick" src="./images/picknick.jpg" alt=" logo " />
            </div>
                

            </div>
           

            <div class="container">
                {/* <div>
                <img class="menupicture" src="./images/water.jpg" alt="girl at water"/>
                </div> */}
            <h1>Upptäck äventyren <br></br>nära dig</h1>   
                <p class="body_copy">Hitta utflyktsmål anpassade för hela <br></br>familjen         
                </p> 
            </div> 
            
            <div class="container2"> 
            <h2>Utflyktsmål i Stockholm</h2>
                
            </div>

            <div class="container3">   
                
                    <Destinations />
                
            </div>
            <div class="footer">
                <p>&copy; All rights reserved.</p>
            </div>

        </div>
    );
};

export default MainMenu;

/*
<p class="family">
<img src="./icons/family_friendly_2440px.png" alt="<h2>Familjevänliga utflyktsmål</h2>" />
</p>
*/







