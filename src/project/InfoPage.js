import React from 'react';
// import React, { useEffect, useState } from 'react';
// import Destinations from './Destinations';
import Places from './Places.json';
import { Route, BrowserRouter as Router, Switch, Link, useParams } from "react-router-dom";

const InfoPage = () => {
    /*
        function handleClick() {
            console.log('The link was clicked. ');
            <Link to="/"></Link>;
        }
    */
    const { id } = useParams();


    // Can only return one object, encapsulated in a DIV here
    return (
        <div className="column_all">

            <div className="header">
                <div>
                    <Link to="/"> <img className="logoPicknick" src="../icons/picknickLogoAndText.png" alt=" logo " /></Link>
                </div>

            </div>

            <div className="infoContainer">
                <div>{/* från json filen filtreras info där id i jsonfilen = id från Url
                map tar all info och lägger i place, namnet hämtas från place.
                samma sak görs för bilden och beskrivning i nästa div */}
                    {Places.filter((place) => place.id == id).map(place =>
                        <li key={place.id.toString()}>
                            <h1>{place.name}</h1>
                        </li>
                    )}
                </div>
                <div>
                    {Places.filter((place) => place.id == id).map(place =>
                        <li key={place.id.toString()}>
                            <img className="infopicture" src={"../places/" + place.img3} alt={place.name} />
                        </li>
                    )}
                </div>

            </div>

            <div className="infoContainer2">
                <p>På platsen:</p>
                <div>
                    {Places.filter((place) => place.id == id).map(place =>
                        <li key={place.id.toString()}>
                            {place.changingDiaper ? (
                                <button className="button_off">Skötbord </button>) :
                                ("")
                            }

                            {place.parking ? (
                                <button className="button_off">Parkering </button>) :
                                ("")
                            }

                            {place.wc ? (
                                <button className="button_off">Wc </button>) :
                                ("")
                            }

                            {place.fourH ? (
                                <button className="button_off">4H </button>) :
                                ("")
                            }

                            {place.pramFriendly ? (
                                <button className="button_off">Barnvagnsvänligt </button>) :
                                ("")
                            }
                            {place.cafe ? (
                                <button className="button_off">Kiosk/cafe </button>) :
                                ("")
                            }
                            {place.fireplace ? (
                                <button className="button_off">Grillplats </button>) :
                                ("")
                            }

                            {place.playground ? (
                                <button className="button_off">Lekplats </button>) :
                                ("")
                            }

                            {place.microwave ? (
                                <button className="button_off">Mikrovågsugn </button>) :
                                ("")
                            }

                            {place.beach ? (
                                <button className="button_off">Badplats </button>) :
                                ("")
                            }

                            {place.trails ? (
                                <button className="button_off">Promenadstigar </button>) :
                                ("")
                            }

                            {place.elevatorRamp ? (
                                <button className="button_off">Hiss/ramp </button>) :
                                ("")
                            }

                            {place.picnicCompatible ? (
                                <button className="button_off">Picknickområde </button>) :
                                ("")
                            }

                            {place.restaurant ? (
                                <button className="button_off">Restaurang </button>) :
                                ("")
                            }
                        </li>
                    )}
                </div>

            </div>

            <div className="infoContainer3">
                <div>
                    {Places.filter((place) => place.id == id).map(place =>
                        <li key={place.id.toString()}>
                            <p>{place.description}</p>
                        </li>
                    )}
                </div>

            </div>

            <div className="footer">
                <p>&copy; All rights reserved.</p>
            </div>

        </div>
    );
};

export default InfoPage;

/*
<p className="family">
<img src="./icons/family_friendly_2440px.png" alt="<h2>Familjevänliga utflyktsmål</h2>" />
</p>
*/
