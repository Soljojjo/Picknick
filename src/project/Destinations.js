import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Places from './Places.json';

function Destinations() {

    


    //Ändra namn på menu och menu__link
    // för varje utflyckts mål i json filen skapas en ny länk med bild och info från samma jsonfil
    return (
        <div className="menu">
            <div>
                {Places.map(place =>
                    <div>
                        <Link to={'/InfoPage/'+ place.id} className="menu__link">
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