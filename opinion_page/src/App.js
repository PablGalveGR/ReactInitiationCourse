import logo from './logo.svg';
import Opinion from './components/Opinion';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "principalContainer">
        <h1 className = "principalTittle">Societas Forum Romanum</h1>
        <Opinion 
        opinionImage = 'opinion-emma.png'
        opinionTittle = 'Maira Pluvia'
        opinionSubTittle = 'Superior vendo Latinum'
        opinionContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis viverra tortor, nec lacinia magna porttitor a. Morbi vulputate sapien ac orci iaculis, elementum pretium ex lacinia. Proin ut vehicula lorem. Vivamus a urna quis lacus mattis molestie. Duis sed eros consectetur, dapibus augue quis, viverra diam.'
         />
         <Opinion 
        opinionImage = 'opinion-sarah.png'
        opinionTittle = 'Sarah Scipio'
        opinionSubTittle = 'Junior vendo Latinum'
        opinionContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis viverra tortor, nec lacinia magna porttitor a. Morbi vulputate sapien ac orci iaculis, elementum pretium ex lacinia. Proin ut vehicula lorem. Vivamus a urna quis lacus mattis molestie. Duis sed eros consectetur, dapibus augue quis, viverra diam.'
         />
         <Opinion 
        opinionImage = 'opinion-shawn.png'
        opinionTittle = 'Shawn Julia'
        opinionSubTittle = 'Pretor vendo Latinum Maximus'
        opinionContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis viverra tortor, nec lacinia magna porttitor a. Morbi vulputate sapien ac orci iaculis, elementum pretium ex lacinia. Proin ut vehicula lorem. Vivamus a urna quis lacus mattis molestie. Duis sed eros consectetur, dapibus augue quis, viverra diam.'
         />
      </div>
    </div>
  );
}

export default App;
