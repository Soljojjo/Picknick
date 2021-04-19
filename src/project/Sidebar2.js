import React from 'react'

function Sidebar2() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked. ');
    }

    return (
        <div>
            <a class="menu__link" href="" onClick={handleClick}>Tyresta Nationalpark<ion-icon class="menu__icon1" name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Birka, Mörkö <ion-icon class="menu__icon2"name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Grottan på Mörkö <ion-icon class="menu__icon3"name="arrow-forward-outline"></ion-icon></a>
        </div>
    )
}

export default Sidebar2;

/*     return (
        <div>
            <a class="menu__link" href="" onClick={handleClick}>Tyresta Nationalpark<ion-icon name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Birka, Mörkö <ion-icon name="arrow-forward-outline"></ion-icon></a>
            <a class="menu__link" href="" onClick={handleClick}>Grottan på Mörkö <ion-icon name="arrow-forward-outline"></ion-icon></a>
        </div>
    )
    */