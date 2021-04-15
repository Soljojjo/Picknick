import React from 'react'


function Sidebar() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked. ');
    }
    return (
        <div class="menu">
            <a class="menu__link" href="" onClick={handleClick}>Bergianska trädgården</a>
            <a class="menu__link" href="" onClick={handleClick}>Ekospåret på Artipelag</a>
            <a class="menu__link" href=" " onClick={handleClick}>Ekorrstigen i Hudding</a>
        </div>
    )
}
//exporteras som en JavaScript komponent
export default Sidebar;