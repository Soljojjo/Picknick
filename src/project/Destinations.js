import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";


function Destinations() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked. ');
      <Link to= "/InfoPage">InfoPage</Link>;
    }
    //Ändra namn på menu och menu__link
    return (
        <div class="menu">
            <Link to= "/InfoPage" class = "menu__link aspuddsparken">Aspuddsparken</Link>
            <Link to= "/InfoPage" class = "menu__link bergianska">Bergianska Trädgården</Link>
            <Link to= "/InfoPage" class = "menu__link birka">Birka</Link>
            
        </div>
    )
}
//exporteras som en JavaScript komponent
export default Destinations;



        /*<a class="menu__link" href="" onClick={handleClick}>Bergianska trädgården <ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Ekospåret på Artipelag<ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Ekorrstigen i Huddinge<ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
            */