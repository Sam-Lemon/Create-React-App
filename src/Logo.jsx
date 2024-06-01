

/*This is the Logo component. I imported the png file from my images folder,
then console logged it to make sure it came through, then I put it in a function
and exported it to be used elsewhere. */

import React from 'react';
import logo from './images/logo-transparent-png.png'; 

console.log(logo); 

function CCLogo() {
    return <img src={logo} className='logo' alt="Cacti Crafted logo" />;
}

export default CCLogo;