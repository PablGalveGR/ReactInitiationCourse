import React, {useState} from "react";
import '../css/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';
function TaskForm(props){
  const [input, setInput] = useState('');

  const manageChange = e => {
    setInput(e.target.value);
  }

  const manageSend = e => {
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(newTask);
  }
  return(
    <form className="taskForm"
    onSubmit={manageSend}>
      <input className = "taskInput" type="text" placeholder="Write your task" name="text"
      onChange={manageChange}/>
      <button className="taskButton">Add task</button>
    </form>
  );
}
export default TaskForm;