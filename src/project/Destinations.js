import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";


function Destinations() {
    
   const [id, setId] = useState(1);

    
    //Ändra namn på menu och menu__link
    return (
        <div class="menu">
            <div>
                
            </div>
            <Link to="/InfoPage" className="menu__link" > Bergianska trädgården</Link>
            <Link to= "/InfoPage" class = "menu__link">Ekospåret på Artipelag</Link>
            <Link to= "/InfoPage" class = "menu__link">Ekorrstigen i Huddinge</Link>
            
        </div>
    )
}
//exporteras som en JavaScript komponent
export default Destinations;



        /*<a class="menu__link" href="" onClick={handleClick}>Bergianska trädgården <ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Ekospåret på Artipelag<ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Ekorrstigen i Huddinge<ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
            */