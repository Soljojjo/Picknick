import React from 'react';
//import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Places from './Places.json';

function Destinations(props) {

    var nrOfMatchingPlaces = 0;

    //Ändra namn på menu och menu__link
    // för varje utflyckts mål i json filen skapas en ny länk med bild och info från samma jsonfil

    // Count the number of places that matches the filters
    Places.filter(place => (
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
        (!props.filterSettings.trails || place.trails) &&
        (!props.filterSettings.restaurant || place.restaurant))).map(place => nrOfMatchingPlaces++);

    /* Sort the Places according to the sortSetting */
    if (props.sortSetting.match("A-Ö")) {
        Places.sort(function (placeA, placeB) {
            var lowerCaseA = placeA.name.toLowerCase();
            var lowerCaseB = placeB.name.toLowerCase();
            if (lowerCaseA < lowerCaseB) { return -1; }
            if (lowerCaseA > lowerCaseB) { return 1; }
            return 0;
        });
    }
    else if (props.sortSetting.match("Populära")) {
        Places.sort(function (a, b) { return b.popularity - a.popularity }); // Highest popularity first
    }
    else if (props.sortSetting.match("Senast tillagda")) {
        Places.sort(function (placeA, placeB) { // Newest dateAdded first
            if (placeA.dateAdded > placeB.dateAdded) { return -1; }
            if (placeA.dateAdded < placeB.dateAdded) { return 1; }
            return 0;
        });
    }

    return (
        <div className="menu">

            <div className="container3">
                <p className="sort_and_hits">{nrOfMatchingPlaces} utflyktsmål</p>
                <div>
                    {Places.filter(place => (

                        /* Each filter requirement must be absent, OR the place must meet the requirement, to be included, for all possible requirements (AND) */
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
                        (!props.filterSettings.trails || place.trails) &&
                        (!props.filterSettings.restaurant || place.restaurant))).map(place =>

                            /* The place will be included, when the filter has been passed here. Concatenating a link with id + all filterSettings after "?filter="" */
                            <li key={place.id.toString()}>
                                < Link to={'/InfoPage/' + place.id + "?filter=" +
                                    (props.filterSettings.changingDiaper ? "_changingDiaper" : "") +
                                    (props.filterSettings.parking ? "_parking" : "") +
                                    (props.filterSettings.wc ? "_wc" : "") +
                                    (props.filterSettings.fourH ? "_fourH" : "") +
                                    (props.filterSettings.pramFriendly ? "_pramFriendly" : "") +
                                    (props.filterSettings.elevatorRamp ? "_elevatorRamp" : "") +
                                    (props.filterSettings.picnicCompatible ? "_picnicCompatible" : "") +
                                    (props.filterSettings.cafe ? "_cafe" : "") +
                                    (props.filterSettings.fireplace ? "_fireplace" : "") +
                                    (props.filterSettings.playground ? "_playground" : "") +
                                    (props.filterSettings.microwave ? "_microwave" : "") +
                                    (props.filterSettings.beach ? "_beach" : "") +
                                    (props.filterSettings.trails ? "_trails" : "") +
                                    (props.filterSettings.restaurant ? "_restaurant" : "")
                                } className="menu__link" >

                                    {/* Adding the HTML for the small card picture, name of the place and a short description */}
                                    <div className="row">
                                        <div className="column">
                                            <span className="mycard">
                                                <img className="minipicture" alt={place.name} src={"./places/" + place.card} />
                                            </span>
                                        </div>
                                        <div className="column">
                                            <div className="shortdescription"><strong>{place.name}</strong> <br></br>{place.smallDescription}</div>
                                        </div>
                                    </div>
                                </Link >
                            </li>
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default Destinations;

