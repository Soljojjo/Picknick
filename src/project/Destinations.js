import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Places from './Places.json';

function Destinations() {

    const [id, setId] = useState(1);


    //Ändra namn på menu och menu__link
    return (
        <div class="menu">
            <div>
                {Places.map(place =>
                    <div>
                        <Link to="/InfoPage"  className="menu__link"> <img src={place.card}/> {place.name} <br></br> {place.smallDescription}</Link>
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