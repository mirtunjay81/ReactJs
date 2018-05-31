import React, { Component } from 'react';
const Button = ({buttonText, buttonValue, onClick}) => (
   <button
   className="Button"
   onClick={onClick}
   >
   <div className="Button-text" >
       {buttonText}
        </div>
       <div className="Button-click-count">
       {buttonValue}
       </div>
   </button>
);

export default Button;