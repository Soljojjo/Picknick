import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Places from './Places.json';

function OneCard(props) {
    return (
        < div >
            <Link to={'/InfoPage/' + props.place.id} className="menu__link">
                <div className="row">
                    <div className="column">
                        <span className="mycard">
                            <img className="minipicture" src={props.place.card} width="70" height="70" />
                        </span>
                    </div>
                    <div className="column">
                        <span className="align-middle"><strong>{props.place.name}</strong> <br></br>{props.place.smallDescription}</span>

                    </div>
                </div>
            </Link>
        </div >
    )
}
/*                            <OneCard place = {place}/> */

function Destinations(props) {

    //Ändra namn på menu och menu__link
    // för varje utflyckts mål i json filen skapas en ny länk med bild och info från samma jsonfil
    return (
        <div className="menu">
<<<<<<< HEAD
            {(props.filterSettings.changingDiaper ? "Skötbord KRÄVS. " : "Skötbord krävs INTE. ")}
            {(props.filterSettings.parking ? "Parkering KRÄVS. " : "Parkering krävs INTE. ")}
            {(props.filterSettings.wc ? "WC KRÄVS. " : "WC krävs INTE. ")}
=======
>>>>>>> 751667854d2175a9b603394fb32dd0783313b36b
            <div>
                {Places.filter(place =>  (!props.filterSettings.changingDiaper) || place.changingDiaper).map(place =>

                    <div>
                        {/*(props.filterSettings.wc ? "Sant" : "falskt")*/}
                        <Link to={'/InfoPage/' + place.id } className="menu__link">
                            <div className="row">

                                <div className="column">
                                    <span className="mycard">
                                        <img className="minipicture" src={place.card} width="70" height="70" />
                                    </span>
                                </div>
                                <div className="column">
                                    <span className="align-middle"><strong>{place.name}</strong> <br></br>{place.smallDescription}</span>

                                </div>

                            </div>
                        </Link>
                    </div>
                )}
            </div >
        </div >
    )
}
//exporteras som en JavaScript komponent
export default Destinations;

/*                 Hej
                    MyWC: {(props.filterSettings.changingDiaper ? "FASLE" : "TRUE")}v */


/*<a class="menu__link" href="" onClick={handleClick}>Bergianska trädgården <ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
    <a class="menu__link" href="" onClick={handleClick}>Ekospåret på Artipelag<ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
    <a class="menu__link" href="" onClick={handleClick}>Ekorrstigen i Huddinge<ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
    */

/*
</div>
        <Link to="/InfoPage" className="menu__link" > {place.name}</Link>
        <Link to="/InfoPage" class="menu__link">Ekospåret på Artipelag</Link>
        <Link to="/InfoPage" class="menu__link">Ekorrstigen i Huddinge</Link>

    </div >
*/