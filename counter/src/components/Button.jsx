import React from "react";
import '../css/Button.css';

function Button({ text, isClickButton, clickManager }){
  return(
    <button 
      className={isClickButton ? 'clickButton' : 'rebootButton'}
      onClick = {clickManager}>
      {text}
    </button>
  );
}
export default Button;