import logo from './logo.svg';
import logoBanner from './img/freecodecamp-logo.png';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="toDoContainer">
      <div className= "logoContainer">
        <img src={logoBanner} className = "logo" />
      </div>
      <div className = "mainToDoList">
        <h1>My Tasks</h1>
        <TaskList />
        
      </div>
    </div>
  );
}
export default App;
