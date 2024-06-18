import React from 'react';
import '../css/Opinion.css';

////Funcion que definirá la estructura de la opinion
function Opinion(props){
  return(
  <div className = 'opinionContainer'>
    <img src={require(`../img/${props.opinionImage}`)} alt = {props.opinionImage}/>
    <div className = 'opinonTextContainer'>
      <p className = 'opinionTittle'><strong>{props.opinionTittle}</strong></p>
      <p className = 'opinionSubTittle'>{props.opinionSubTittle}</p>
      <p className = 'opinionContent'>"{props.opinionContent}"</p>
    </div>
  </div>);
  /*return(
    <div className = 'opinionContainer'>
      <img className = "opinonImg" src={require('../img/opinion-emma.png')} alt = {opinionImage}/>
      <div className = 'opinonTextContainer'>
        <p className = 'opinionTittle'>Maira Holem Pluvia</p>
        <p className = 'opinionSubTittle'>Superior marketing Latinum Maximus</p>
        <p className = 'opinionContent'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis viverra tortor, nec lacinia magna porttitor a. Morbi vulputate sapien ac orci iaculis, elementum pretium ex lacinia. Proin ut vehicula lorem. Vivamus a urna quis lacus mattis molestie. Duis sed eros consectetur, dapibus augue quis, viverra diam."
        </p>
      </div>
    </div>)*/

}
export default Opinion;