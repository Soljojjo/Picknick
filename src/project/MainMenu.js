import React, { useEffect, useState } from 'react';
import Destinations from './Destinations';




const MainMenu = () => {

    const [changingDiaper, setChangingDiaper] = useState(false); const toggleChangingDiaper = () => {
        setChangingDiaper(value => !value);
        //  alert("toggleChangingDiaper called, value is now: " + changingDiaper + ", CSS class: " + (changingDiaper ? "button_on" : "button_off"))
    }
    const [parking, setParking] = useState(false); /*     */ const toggleParking = () => setParking(value => !value);
    const [wc, setWc] = useState(false); /*               */ const toggleWc = () => setWc(value => !value);
    const [fourH, setFourH] = useState(false); /*         */ const toggleFourH = () => setFourH(value => !value);
    const [pramFriendly, setPramFriendly] = useState(false); const togglePramFriendly = () => setPramFriendly(value => !value);
    const [cafe, setCafe] = useState(false); /*           */ const toggleCafe = () => setCafe(value => !value);
    const [fireplace, setFireplace] = useState(false); /* */ const toggleFireplace = () => setFireplace(value => !value);
    const [playground, setPlayground] = useState(false); /**/const togglePlayground = () => setPlayground(value => !value);
    const [microwave, setMicrowave] = useState(false); /* */ const toggleMicrowave = () => setMicrowave(value => !value);
    const [beach, setBeach] = useState(false); /*         */ const toggleBeach = () => setBeach(value => !value);
    const [trails, setTrails] = useState(false); /*       */ const toggleTrails = () => setTrails(value => !value);

    /* const [filterSetting, setFilterSetting] = useState([false,false,false,false,false,false,false,false,false,false,false); */


    useEffect(() => {

        // alert("Useeffect was called!");

    })

    return (
        <div>
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

                <h2>Utflyktsmål i Stockholm</h2>

                <p className="body_copy_filter">Filtrera med populära taggar:</p>
                <button className={changingDiaper ? "button_on" : "button_off"} onClick={toggleChangingDiaper}> <img src="./icons/family baby change diaper.png" height="20px" />Skötbord</button>
                <button className={parking ? "button_on" : "button_off"} onClick={toggleParking}> <img src="./icons/u_parking-square.png" height="20px" />Parkering</button>
                <button className={wc ? "button_on" : "button_off"} onClick={toggleWc}> <img src="./icons/_fill_icon_empty.png" height="20px" onClick={toggleChangingDiaper} />WC</button>
                <button className={fourH ? "button_on" : "button_off"} onClick={toggleFourH}> <img src="./icons/_fill_icon_empty.png" height="20px" />4H-gård</button>
                <button className={pramFriendly ? "button_on" : "button_off"} onClick={togglePramFriendly}> <img src="./icons/_fill_icon_empty.png" height="20px" />Barnvagnsvänligt</button>
                <button className={cafe ? "button_on" : "button_off"} onClick={toggleCafe}> <img src="./icons/_fill_icon_empty.png" height="20px" />Kiosk/café</button>
                <button className={fireplace ? "button_on" : "button_off"} onClick={toggleFireplace}> <img src="./icons/plate.png" height="20px" />Grillplats</button>
                <button className={playground ? "button_on" : "button_off"} onClick={togglePlayground}> <img src="./icons/family outdoors slide.png" height="20px" />Lekplats</button>
                <button className={microwave ? "button_on" : "button_off"} onClick={toggleMicrowave}> <img src="./icons/_fill_icon_empty.png" height="20px" />Mikrovågsugn</button>
                <button className={beach ? "button_on" : "button_off"} onClick={toggleBeach}> <img src="./icons/_fill_icon_empty.png" height="20px" />Badplats</button>
                <button className={trails ? "button_on" : "button_off"} onClick={toggleTrails}> <img src="./icons/_fill_icon_empty.png" height="20px" />Promenadstigar</button>
            </div>

            <div className="container3">

                <Destinations />

            </div>
            <div className="footer">
                <p>&copy; All rights reserved.</p>
            </div>

        </div>
    );
};

export default MainMenu;








