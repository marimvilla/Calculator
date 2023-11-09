import React from "react";
import '../stylesheets/Buttons.css'

function Button(props){

    const op= value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    }

    return(
        <button
            className={`button-container ${op(props.children) ? 'operator' : null}`}onClick={() => props.manageClick(props.children)}>
            {props.children}
        </button>
    );
};

export default Button;