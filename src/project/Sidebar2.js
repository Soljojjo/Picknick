import React from 'react'



function Sidebar2() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked. ');
    }
    return (
        <div class="menu">
            <a class="menu__link" href="#" onClick={handleClick}>Tyresta Nationalpark</a>
            <a class="menu__link" href="" onClick={handleClick}>Birka, Mörkö</a>
            <a class="menu__link" href=" " onClick={handleClick}>Grottan på Mörkö</a>

        </div>
    )
}
//exporteras som en JavaScript komponent
export default Sidebar2;