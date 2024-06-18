import logo from './img/freecodecamp-logo.png';
import './App.css';
import Button from './components/Button.jsx'
import Display from './components/Display.jsx'
import ButtonClear from './components/ButtonClear.jsx'
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [input, setInput] = useState('')
  const emptyInput = function(){
    setInput('');
  }
  const addInput = val => {
    setInput(input + val);
  }
  const calculateResult = function(){
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert('Please add some values do be able to calculate the result');
    }
  }
  return (
    <div className="App">
      <div className='logoContainer'>
        <img src={logo} className='logo'/>
      </div>
      <div className='calculatorContainer'>
        <Display input={input}/>
        <div className='row'>
          <Button manageClick = {addInput}>1</Button>
          <Button manageClick = {addInput}>2</Button>
          <Button manageClick = {addInput}>3</Button>
          <Button manageClick = {addInput}>/</Button>
        </div>
        <div className='row'>
          <Button manageClick = {addInput}>4</Button>
          <Button manageClick = {addInput}>5</Button>
          <Button manageClick = {addInput}>6</Button>
          <Button manageClick = {addInput}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick = {addInput}>7</Button>
          <Button manageClick = {addInput}>8</Button>
          <Button manageClick = {addInput}>9</Button>
          <Button manageClick = {addInput}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick = {calculateResult}>=</Button>
          <Button manageClick = {addInput}>0</Button>
          <Button manageClick = {addInput}>.</Button>
          <Button manageClick = {addInput}>+</Button>
        </div>
        <div className='row'>
          <ButtonClear manageClick = {emptyInput}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
