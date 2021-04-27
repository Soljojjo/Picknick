import React, { useEffect, useState } from 'react';
import Destinations from './Destinations';




const MainMenu = () => {

    // States for all filter buttons, 'false' for buttons/filtering that is not pressed/on
    const [changingDiaper, setChangingDiaper] = useState(false); const toggleChangingDiaper = () => { setChangingDiaper(value => !value); }
    const [parking, setParking] = useState(false); /*         */ const toggleParking = () => setParking(value => !value);
    const [wc, setWc] = useState(false); /*                   */ const toggleWc = () => setWc(value => !value);
    const [fourH, setFourH] = useState(false); /*             */ const toggleFourH = () => setFourH(value => !value);
    const [pramFriendly, setPramFriendly] = useState(false);/**/ const togglePramFriendly = () => setPramFriendly(value => !value);
    const [cafe, setCafe] = useState(false); /*               */ const toggleCafe = () => setCafe(value => !value);
    const [fireplace, setFireplace] = useState(false); /*     */ const toggleFireplace = () => setFireplace(value => !value);
    const [playground, setPlayground] = useState(false); /*   */ const togglePlayground = () => setPlayground(value => !value);
    const [microwave, setMicrowave] = useState(false); /*     */ const toggleMicrowave = () => setMicrowave(value => !value);
    const [beach, setBeach] = useState(false); /*             */ const toggleBeach = () => setBeach(value => !value);
    const [trails, setTrails] = useState(false); /*           */ const toggleTrails = () => setTrails(value => !value);

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

                <h2>Utflyktsmål i Stockholm:</h2>

                <p className="body_copy_filter">Filtrera med populära taggar:</p>

                <button className={changingDiaper ? "button_on" : "button_off"} onClick={toggleChangingDiaper}>
                    <span class="filtertext-middle">Skötbord</span> </button>
                <button className={parking ? "button_on" : "button_off"} onClick={toggleParking}>
                    <span class="filtertext-middle">Parkering</span> </button>
                <button className={wc ? "button_on" : "button_off"} onClick={toggleWc}>
                    <span class="filtertext-middle">WC</span> </button>
                <button className={fourH ? "button_on" : "button_off"} onClick={toggleFourH}>
                    <span class="filtertext-middle">4H-gård</span> </button>
                <button className={pramFriendly ? "button_on" : "button_off"} onClick={togglePramFriendly}> 
                    <span class="filtertext-middle">Barnvagnsvänligt</span> </button>
               <button className={cafe ? "button_on" : "button_off"} onClick={toggleCafe}>
                    <span class="filtertext-middle">Kiosk/café</span> </button>
                <button className={fireplace ? "button_on" : "button_off"} onClick={toggleFireplace}>
                    <span class="filtertext-middle">Grillplats</span> </button>
                <button className={playground ? "button_on" : "button_off"} onClick={togglePlayground}>
                    <span class="filtertext-middle">Lekplats</span> </button>
                <button className={microwave ? "button_on" : "button_off"} onClick={toggleMicrowave}>
                    <span class="filtertext-middle">Mikrovågsugn</span> </button>
                <button className={beach ? "button_on" : "button_off"} onClick={toggleBeach}>
                    <span class="filtertext-middle">Badplats</span> </button>
                <button className={trails ? "button_on" : "button_off"} onClick={toggleTrails}>
                    <span class="filtertext-middle">Promenadstigar</span> </button>
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








