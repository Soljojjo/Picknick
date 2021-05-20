import React, { useEffect, useState } from 'react';
// import { Route, BrowserRouter as Router, Switch, Link, useParams } from "react-router-dom";
import Destinations from './Destinations';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function MainMenu({
    changingDiaper, setChangingDiaper,
    parking, setParking,
    wc, setWc,
    fourH, setFourH,
    pramFriendly, setPramFriendly,
    elevatorRamp, setElevatorRamp,
    picnicCompatible, setPicnicCompatible,
    cafe, setCafe,
    fireplace, setFireplace,
    playground, setPlayground,
    microwave, setMicrowave,
    beach, setBeach,
    trails, setTrails,
    restaurant, setRestaurant }) {

    const [showMore, setShowMore] = useState(false);
    const [sortSetting, setSortSetting] = useState('');
    const handleSelect = (e) => {
        console.log(e);
        setSortSetting(e)
    }
    // Toggle functions for the filters
    const toggleChangingDiaper = () => setChangingDiaper(value => !value);
    const toggleParking = () => setParking(value => !value);
    const toggleWc = () => setWc(value => !value);
    const toggleFourH = () => setFourH(value => !value);
    const togglePramFriendly = () => setPramFriendly(value => !value);
    const toggleElevatorRamp = () => setElevatorRamp(value => !value);
    const togglePicnicCompatible = () => setPicnicCompatible(value => !value);
    const toggleCafe = () => setCafe(value => !value);
    const toggleFireplace = () => setFireplace(value => !value);
    const togglePlayground = () => setPlayground(value => !value);
    const toggleMicrowave = () => setMicrowave(value => !value);
    const toggleBeach = () => setBeach(value => !value);
    const toggleTrails = () => setTrails(value => !value);
    const toggleRestaurant = () => setRestaurant(value => !value);

    useEffect(() => {
        //alert("Useeffect was called!");
    })

    // var sortSetting = ""; // alphabetical or popularity or dateAdded

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

                    <p className="filter_heading">Filtrera:</p>
                    <div className="buttons">
                        <button className={changingDiaper ? "button_on" : "button_off"} onClick={toggleChangingDiaper}>  skötbord </button>
                        <button className={parking ? "button_on" : "button_off"} onClick={toggleParking}> parkering </button>
                        <button className={wc ? "button_on" : "button_off"} onClick={toggleWc}> WC</button>
                        <button className={fourH ? "button_on" : "button_off"} onClick={toggleFourH}>4H-gård</button>
                        <button className={pramFriendly ? "button_on" : "button_off"} onClick={togglePramFriendly}> barnvagnsvänligt</button>
                        <button className={elevatorRamp ? "button_on" : "button_off"} onClick={toggleElevatorRamp}> hiss/ramp</button>
                        <button className={picnicCompatible ? "button_on" : "button_off"} onClick={togglePicnicCompatible}> picknickområde</button>

                        {!showMore ? <button className='showMoreButton' onClick={() => setShowMore(true)}>+ visa fler</button> : null}

                        {showMore ?
                            <div>

                                <button className={cafe ? "button_on" : "button_off"} onClick={toggleCafe}> kiosk/café</button>
                                <button className={fireplace ? "button_on" : "button_off"} onClick={toggleFireplace}> grillplats</button>
                                <button className={playground ? "button_on" : "button_off"} onClick={togglePlayground}> lekplats</button>
                                <button className={microwave ? "button_on" : "button_off"} onClick={toggleMicrowave}> mikrovågsugn</button>
                                <button className={beach ? "button_on" : "button_off"} onClick={toggleBeach}> badplats</button>
                                <button className={trails ? "button_on" : "button_off"} onClick={toggleTrails}> promenadstigar</button>
                                <button className={restaurant ? "button_on" : "button_off"} onClick={toggleRestaurant}> restaurang</button>
                                {showMore ? <button className='showMoreButton' onClick={() => setShowMore(false)}>- visa färre</button> : null}
                            </div>
                            : null}
                    </div>


                </div>

                <div className="container3">
                    {/* "sortSetting = " + sortSetting */}
                    <DropdownButton
                        alignRight
                        title="Utflykter sorteras efter"
                        id="dropdown-basic"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="popularity"> Populära</Dropdown.Item>
                        <Dropdown.Item eventKey="dateAdded"> Senast tillagda</Dropdown.Item>
                        <Dropdown.Item eventKey="alphabetical">  A-Ö</Dropdown.Item>
                    </DropdownButton>

                    <Destinations sortSetting={sortSetting} filterSettings={filterSettings} />

                </div>
                <div className="footer">
                    <p>&copy; All rights reserved.</p>
                </div>

            </div>
            <div className="right">
            </div>
        </div >
    );
};

export default MainMenu;

/*
changingDiaper, setChangingDiaper
parking,  setParking
wc, setWc
fourH, setFourH
pramFriendly, setPramFriendly
elevatorRamp, setElevatorRamp
picnicCompatible, setPicnicCompatible
cafe, setCafe
fireplace, setFireplace
playground, setPlayground
microwave, setMicrowave
beach, setBeach
trails, setTrails
restaurant, setRestaurant
*/






