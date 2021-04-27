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
                <div>
                {Places.filter((place) => place.id == id).map(place =>
                    <div>
                        <h1>{place.name}</h1>
                    </div>
                )}
                </div>
                <div>
                {Places.filter((place) => place.id == id).map(place =>
                    <div>
                        <img class="infopicture" src= {place.img3} alt = 'picture'/> 
                    </div>       
                )}
                </div>

            </div>

            <div class="infoContainer2">
                <p>också på plattsen:</p>

                <div>
          
                </div>

                <div>
                    
                <button className="infobutton"><span class="filtertext-middle">Skötbord</span> </button>
                </div>

            </div>

            <div class="infoContainer3">
            <div>
                {Places.filter((place) => place.id == id).map(place =>
                    <div>
                        <p>{place.description}</p>
                    </div>
                )}
                </div>

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
