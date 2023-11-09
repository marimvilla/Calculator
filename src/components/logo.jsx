import React from "react";
import '../stylesheets/Logo.css'

function Logo(){
    return(
    <div className='logo-container'>
        <img
            src={require('../assets/freecodecamplogo.png')}
            className='logo'
            alt='logo' />
    </div>
    )

}

export default Logo