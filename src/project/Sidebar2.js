import React from 'react'
import Hello from './sayHello'




const Sidebar = () =>{
    return(
        <div class="menu">
            <a class="menu__link" onClick= {Hello} href="">Tyresta Nationalpark</a> 
            <a class="menu__link" href="">Birka, Mörkö</a>
            <a class="menu__link" href="">Grottan på Mörkö</a>        
        </div>
    )
}
//exporteras som en JavaScript komponent
export default Sidebar;