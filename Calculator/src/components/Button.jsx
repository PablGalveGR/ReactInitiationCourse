import React from "react";
import '../css/Button.css'

function Button( props ){
  const isOperator = value => {
    return isNaN(value) && value !== '.' && value !== '=';
  }
  return(
    <div className={`buttonContainer${isOperator(props.children) ? 'Operator': ''}`}
    onClick ={ () => {props.manageClick(props.children)}}>
      {props.children}
    </div>
    
  );
}
export default Button;