import React, { useEffect, useState } from 'react';
import Destinations from './Destinations';
import Places from './Places.json';
import { Route, BrowserRouter as Router, Switch, Link,useParams } from "react-router-dom";






const InfoPage = () => {

    function handleClick() {
        console.log('The link was clicked. ');
        <Link to="/"></Link>;
    }

    const {id} = useParams();


    // Can only return one object, encapsulated in a DIV here
    return (
        <div>

            

            <div class="header">
                <div>
                    <Link to="/"> <img class="logoPicknick" src="../icons/picknickLogoAndText.png" alt=" logo " /></Link>
                </div>


            </div>


            <div class="infoContainer">
               
                {Places.filter((place) => place.id == id).map(place =>
                    <div>
                        <h1>{place.name}</h1>
                    </div>
                )}
                <div>
                    {/*<div class="menupicture" />*/}
                </div>

            </div>

            <div class="infoContainer2">

                <p class="body_copy"></p>

            </div>

            <div class="infoContainer3">
                <p class="body_copy"><b>OM UTFLYKTSMÅLET</b>. I Bergianska trädgården kan du med barnvagnen promenera och upptäcka växter från hela världen.

                Besök gärna växthuset där exotiska växter som vanligen hittas i regnskogar och öknen.

                <br />
                    <br />
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
