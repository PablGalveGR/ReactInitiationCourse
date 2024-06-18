import React from "react";
import '../css/Task.css'
import {AiOutlineCloseCircle} from "react-icons/ai"
function Task({text, done, id, finishTask, deleteTask}){
  return(
    <div className={done ? 'taskContainer done': 'taskContainer'}>
      <div className="taskText"
      onClick={() => finishTask(id)}>
        {text}
      </div>
      <div className="taskIcon"
      onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="taskIcon"/>
      </div>
    </div>
  );
}
export default Task;