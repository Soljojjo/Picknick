import React from 'react';
//import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Places from './Places.json';

function Destinations(props) {

    //Ändra namn på menu och menu__link
    // för varje utflyckts mål i json filen skapas en ny länk med bild och info från samma jsonfil
    return (
        <div className="menu">
            <div>
                {Places.filter(place => (
                    (!props.filterSettings.changingDiaper || place.changingDiaper) &&
                    (!props.filterSettings.parking || place.parking) &&
                    (!props.filterSettings.wc || place.wc) &&
                    (!props.filterSettings.fourH || place.fourH) &&
                    (!props.filterSettings.pramFriendly || place.pramFriendly) &&
                    (!props.filterSettings.elevatorRamp || place.elevatorRamp) &&
                    (!props.filterSettings.picnicCompatible || place.picnicCompatible) &&
                    (!props.filterSettings.cafe || place.cafe) &&
                    (!props.filterSettings.fireplace || place.fireplace) &&
                    (!props.filterSettings.playground || place.playground) &&
                    (!props.filterSettings.microwave || place.microwave) &&
                    (!props.filterSettings.beach || place.beach) &&
                    (!props.filterSettings.trails || place.trails)&&
                    (!props.filterSettings.restaurant || place.restaurant))).map(place =>
                        <div>
                            < Link to={'/InfoPage/' + place.id} className="menu__link" >
                                <div className="row">

                                    <div className="column">
                                        <span className="mycard">
                                            <img className="minipicture" alt={place.name} src={"./places/"+place.card} width="70" height="70" />
                                        </span>
                                    </div>
                                    <div className="column">
                                        <span className="align-middle"><strong>{place.name}</strong> <br></br>{place.smallDescription}</span>

                                    </div>

                                </div>
                            </Link >
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default Destinations;

