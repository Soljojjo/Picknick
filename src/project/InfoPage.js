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
        <div>

            <div class="header">
                <div>
                    <Link to="/"> <img class="logoPicknick" src="../icons/picknickLogoAndText.png" alt=" logo " /></Link>
                </div>

            </div>

            <div class="infoContainer">
                <div>{/* från json filen filtreras info där id i jsonfilen = id från Url
                map tar all info och lägger i place, namnet hämtas från place.
                samma sak görs för bilden och beskrivning i nästa div */}
                    {Places.filter((place) => place.id == id).map(place =>
                        <div>
                            <h1>{place.name}</h1>
                        </div>
                    )}
                </div>
                <div>
                    {Places.filter((place) => place.id == id).map(place =>
                        <div>
                            <img class="infopicture" src={"../places/" + place.img3} alt={place.name} />
                        </div>
                    )}
                </div>

            </div>

            <div class="infoContainer2">
                <p>På platsen:</p>
                <div>
                    {Places.filter((place) => place.id == id).map(place =>
                        <div>
                            {place.changingDiaper ? (
                                <button className="infobutton"><span class="filtertext-middle">Skötbord</span> </button>) :
                                ("")
                            }

                            {place.parking ? (
                                <button className="infobutton"><span class="filtertext-middle">Parkering</span> </button>) :
                                ("")
                            }

                            {place.wc ? (
                                <button className="infobutton"><span class="filtertext-middle">Wc</span> </button>) :
                                ("")
                            }

                            {place.fourH ? (
                                <button className="infobutton"><span class="filtertext-middle">4H</span> </button>) :
                                ("")
                            }

                            {place.pramFriendly ? (
                                <button className="infobutton"><span class="filtertext-middle">Barnvagnsvänligt</span> </button>) :
                                ("")
                            }
                            {place.cafe ? (
                                <button className="infobutton"><span class="filtertext-middle">Kiosk/cafe</span> </button>) :
                                ("")
                            }
                            {place.fireplace ? (
                                <button className="infobutton"><span class="filtertext-middle">Grillplats</span> </button>) :
                                ("")
                            }

                            {place.playground ? (
                                <button className="infobutton"><span class="filtertext-middle">Lekplats</span> </button>) :
                                ("")
                            }

                            {place.microwave ? (
                                <button className="infobutton"><span class="filtertext-middle">Mikrovågsugn</span> </button>) :
                                ("")
                            }

                            {place.beach ? (
                                <button className="infobutton"><span class="filtertext-middle">Badplats</span> </button>) :
                                ("")
                            }

                            {place.trails ? (
                                <button className="infobutton"><span class="filtertext-middle">Promenadstigar</span> </button>) :
                                ("")
                            }

                            {place.elevatorRamp ? (
                                <button className="infobutton"><span class="filtertext-middle">Hiss/ramp</span> </button>) :
                                ("")
                            }

                            {place.picnicCompatible ? (
                                <button className="infobutton"><span class="filtertext-middle">Picknickområde</span> </button>) :
                                ("")
                            }

                            {place.restaurant ? (
                                <button className="infobutton"><span class="filtertext-middle">Restaurang</span> </button>) :
                                ("")
                            }
                        </div>
                    )}
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
