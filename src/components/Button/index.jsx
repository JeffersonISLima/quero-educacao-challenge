import React from 'react';

const Button = ({type, value, className, onClick, children }) => {
    return(
        <button >{children}</button>
    );
}

export default Button;