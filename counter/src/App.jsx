import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Counter from './components/Counter';
import Button from './components/Button';
import { useState } from 'react';


function App() {
  const [ numClicks, setNumClicks] = useState(0);
  const clickManager = (counter) =>{
    setNumClicks(numClicks + 1)
  }
  const rebootkManager = () =>{
    setNumClicks(0)
  }


  return (
    <div className="App">
      <div className='CounterLogoContainer'>
        <img className = 'CounterLogo' src={freeCodeCampLogo} alt='PageLogo'/>
      </div>
      <div className='MainContainer'>
        <Counter
          numClicks= {numClicks}
        />
        <Button
          text = 'Click'
          isClickButton={true}
          clickManager = {clickManager}
          />
        <Button
          text = 'Reboot'
          isClickButton={false}
          clickManager = {rebootkManager}
          />
      </div>
    </div>
  );
}

export default App;
