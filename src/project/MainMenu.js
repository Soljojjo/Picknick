import React, { useEffect, useState } from 'react';
// import { Route, BrowserRouter as Router, Switch, Link, useParams } from "react-router-dom";
import Destinations from './Destinations';


function MainMenu() {

    // States for all filter buttons, 'false' for buttons/filtering that is not pressed/on
    const [changingDiaper, setChangingDiaper] = useState(false);/* */ const toggleChangingDiaper = () => { setChangingDiaper(value => !value); }
    const [parking, setParking] = useState(false); /*              */ const toggleParking = () => setParking(value => !value);
    const [wc, setWc] = useState(false); /*                        */ const toggleWc = () => setWc(value => !value);
    const [fourH, setFourH] = useState(false); /*                  */ const toggleFourH = () => setFourH(value => !value);
    const [pramFriendly, setPramFriendly] = useState(false);/*     */ const togglePramFriendly = () => setPramFriendly(value => !value);
    const [elevatorRamp, setElevatorRamp] = useState(false);/*     */ const toggleElevatorRamp = () => setElevatorRamp(value => !value);
    const [picnicCompatible, setPicnicCompatible] = useState(false); const togglePicnicCompatible = () => setPicnicCompatible(value => !value);
    const [cafe, setCafe] = useState(false); /*                    */ const toggleCafe = () => setCafe(value => !value);
    const [fireplace, setFireplace] = useState(false); /*          */ const toggleFireplace = () => setFireplace(value => !value);
    const [playground, setPlayground] = useState(false); /*        */ const togglePlayground = () => setPlayground(value => !value);
    const [microwave, setMicrowave] = useState(false); /*          */ const toggleMicrowave = () => setMicrowave(value => !value);
    const [beach, setBeach] = useState(false); /*                  */ const toggleBeach = () => setBeach(value => !value);
    const [trails, setTrails] = useState(false); /*                */ const toggleTrails = () => setTrails(value => !value);
    const [restaurant, setRestaurant] = useState(false); /*        */ const toggleRestaurant = () => setRestaurant(value => !value);

    useEffect(() => {
        // alert("Useeffect was called!");
    })
    var filterSettings = {
        'changingDiaper': changingDiaper,
        'parking': parking,
        'wc': wc,
        'fourH': fourH,
        'pramFriendly': pramFriendly,
        'elevatorRamp': elevatorRamp,
        'picnicCompatible': picnicCompatible,
        'cafe': cafe,
        'fireplace': fireplace,
        'playground': playground,
        'microwave': microwave,
        'beach': beach,
        'trails': trails,
        'restaurant': restaurant
    }


    return (
        <div>
            <div className="left">
            </div>
            <div className="column_all">
                <div className="header">
                    <div>
                        <img className="logoPicknick" src="./icons/picknickLogoAndText.png" alt=" logo " />
                    </div>
                </div>

                <div className="container">
                    {/* <div>
                <img className="menupicture" src="./images/water.jpg" alt="girl at water"/>
                </div> */}
                    <h1>Upptäck äventyren <br></br>nära dig</h1>
                    <p className="body_copy">Hitta utflyktsmål anpassade för hela <br></br>familjen
                </p>
                </div>

                <div className="container2">

                    <h2>Utflyktsmål i Stockholm:</h2>

                    <p className="body_copy_filter">Filtrera med populära taggar:</p>
                    <div className="buttons">
                        <button className={changingDiaper ? "button_on" : "button_off"} onClick={toggleChangingDiaper}>  Skötbord </button>
                        <button className={parking ? "button_on" : "button_off"} onClick={toggleParking}> Parkering </button>
                        <button className={wc ? "button_on" : "button_off"} onClick={toggleWc}> WC</button>
                        <button className={fourH ? "button_on" : "button_off"} onClick={toggleFourH}>4H-gård</button>
                        <button className={pramFriendly ? "button_on" : "button_off"} onClick={togglePramFriendly}> Barnvagnsvänligt</button>
                        <button className={elevatorRamp ? "button_on" : "button_off"} onClick={toggleElevatorRamp}> Hiss/ramp</button>
                        <button className={picnicCompatible ? "button_on" : "button_off"} onClick={togglePicnicCompatible}> Picknickområde</button>
                        <button className={cafe ? "button_on" : "button_off"} onClick={toggleCafe}> Kiosk/café</button>
                        <button className={fireplace ? "button_on" : "button_off"} onClick={toggleFireplace}> Grillplats</button>
                        <button className={playground ? "button_on" : "button_off"} onClick={togglePlayground}> Lekplats</button>
                        <button className={microwave ? "button_on" : "button_off"} onClick={toggleMicrowave}> Mikrovågsugn</button>
                        <button className={beach ? "button_on" : "button_off"} onClick={toggleBeach}> Badplats</button>
                        <button className={trails ? "button_on" : "button_off"} onClick={toggleTrails}> Promenadstigar</button>
                        <button className={restaurant ? "button_on" : "button_off"} onClick={toggleRestaurant}> Restaurang</button>
                    </div>
                </div>

                <div className="container3">

                    <Destinations filterSettings={filterSettings} />

                </div>
                <div className="footer">
                    <p>&copy; All rights reserved.</p>
                </div>

            </div>
            <div className="right">
            </div>
        </div>
    );
};

export default MainMenu;








