import React, { useEffect, useState } from 'react';
import Destinations from './Destinations';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Places from './Places.json';




const InfoPage = () => {

    function handleClick() {
        console.log('The link was clicked. ');
        <Link to= "/"></Link>;
      }




    // Can only return one object, encapsulated in a DIV here
    return (
        <div>

            

            <div class="header">
            <div>
                <Link to="/"> <img class= "logoPicknick"  src="./icons/picknickLogoAndText.png" alt=" logo " /></Link>
            </div>
                

            </div>
           

            <div class="infoContainer">
                <div>
                <Link class="link" name to= "/">Back</Link>
                </div>
                <h1>Siggesta Gård</h1>
                <div>
                <img class="menupicture" src="./images/water.jpg" alt="girl at water"/>
                </div> 

            </div> 
            
            <div class="infoContainer2"> 

            <p class="body_copy">Filtrera med populära taggar:</p> 
                
            </div>

            <div class="infoContainer3">
                <p class = "body_copy"><b>OM UTFLYKTSMÅLET</b>. På Siggesta Gård finns det alltid något kul att göra utomhus.
                Det bästa är att det är öppet året runt.
                <br/>
                <br/> 
                Ta med dig barnen på utomhusaktiviteter
                som ni alla kommer gilla och avsluta med en god lunch i vår restaurang. </p>
                
            </div>
            
            <div class="footer">
                <p>&copy; All rights reserved.</p>
            </div>

        </div>
    );
};

export default InfoPage;

/*
<p class="family">
<img src="./icons/family_friendly_2440px.png" alt="<h2>Familjevänliga utflyktsmål</h2>" />
</p>
*/
