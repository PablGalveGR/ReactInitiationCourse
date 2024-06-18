import React from "react";
import '../css/Display.css'
function Display({input}){
  return(
    <div className="displayContainer">
      <p>{input}</p>
    </div>
  )
  
}
export default Display;