import React from 'react'


function Destinations() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked. ');
    }
    //Ändra namn på menu och menu__link
    return (
        <div class="menu"> 
            <a class="menu__link" href="" onClick={handleClick}>Bergianska trädgården <ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Ekospåret på Artipelag<ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Ekorrstigen i Huddinge<ion-icon class="menu__icon" name="arrow-forward-outline"></ion-icon></a>
        </div>
    )
}
//exporteras som en JavaScript komponent
export default Destinations;
