import React, { useEffect, useState } from 'react';
import Destinations from './Destinations';
import Places from './Places.json';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import id from './Destinations';




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
                <Link class="link" name to= "/"></Link>
                </div>
<<<<<<< HEAD
                
=======
                {Places.filter((place) => place.id === 1).map(place =>
>>>>>>> fb2ed8853ece70bf2e01320ba91d318cd0a02abf
                <div> 
                <h1>Bergianska trädgården</h1>
                </div>
                
                <div>
                <div class="menupicture" />
                </div> 

            </div> 
            
            <div class="infoContainer2"> 

            <p class="body_copy"></p> 
                
            </div>

            <div class="infoContainer3">
                <p class = "body_copy"><b>OM UTFLYKTSMÅLET</b>. I Bergianska trädgården kan du med barnvagnen promenera och upptäcka växter från hela världen.

                Besök gärna växthuset där exotiska växter som vanligen hittas i regnskogar och öknen.

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
