import React, { useEffect, useState } from 'react';
import Destinations from './Destinations';

const MainMenu = () => {

    return (
        <div>
            <div class="header">
                <div>
                    <img class="logoPicknick" src="./icons/picknickLogoAndText.png" alt=" logo " />
                </div>
            </div>

            <div class="container">
                {/* <div>
                <img class="menupicture" src="./images/water.jpg" alt="girl at water"/>
                </div> */}
                <h1>Upptäck äventyren <br></br>nära dig</h1>
                <p class="body_copy">Hitta utflyktsmål anpassade för hela <br></br>familjen
                </p>
            </div>

            <div class="container2">

                <h2>Utflyktsmål i Stockholm</h2>

                <p class="body_copy_filter">Filtrera med populära taggar:</p>

                <button class="button"><img src="./icons/family baby change diaper.png"   height="20px" />Skötbord</button>
                <button class="button"><img src="./icons/u_parking-square.png" height="20px" />Parkering</button>
                <button class="button"><img src="./icons/_fill_icon_empty.png" height="20px" />WC</button>
                <button class="button"><img src="./icons/_fill_icon_empty.png"   height="20px" />4h-gård</button>
                <button class="button"><img src="./icons/u_baby-carriage.png"   height="20px" />Barnvagnsvänligt</button>
                <button class="button"><img src="./icons/plate.png"   height="20px" />Kiosk/café</button>
                <button class="button"><img src="./icons/_fill_icon_empty.png"   height="20px" />Grillplats</button>
                <button class="button"><img src="./icons/family outdoors slide.png"   height="20px" />Lekplats</button>
                <button class="button"><img src="./icons/_fill_icon_empty.png"   height="20px" />Mikrovågsugn</button>
                <button class="button"><img src="./icons/_fill_icon_empty.png"   height="20px" />Badplats</button>
                <button class="button"><img src="./icons/sign post.png"   height="20px" />Promenadstigar</button>

            </div>

            <div class="container3">

                <Destinations />

            </div>
            <div class="footer">
                <p>&copy; All rights reserved.</p>
            </div>

        </div>
    );
};

export default MainMenu;








