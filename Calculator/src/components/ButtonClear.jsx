import React from "react";
import '../css/ButtonClear.css'

function ButtonClear( props ){
  return(
    <div className='buttonClear' onClick={() => props.manageClick()}>
      {props.children}
    </div>
    
  );
}
export default ButtonClear;