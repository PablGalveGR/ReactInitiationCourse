import React, {useState} from "react";
import TaskForm from "./TaskForm";
import '../css/TaskList.css';
import Task from './Task.jsx';


function TaskList(){
  const [tasks, setTask] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const UpdatedTasks = [task, ...tasks];
      setTask(UpdatedTasks);
    }
  }

  const deleteTask = id => {
    const UpdatedTasks = tasks.filter(task => task.id !== id);
    setTask(UpdatedTasks);
  }

  const finishTask = id => {
    const UpdatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTask(UpdatedTasks);
  }
  return(
    <>
      <TaskForm onSubmit={addTask} />
      <div className="taskListContainer">
        {
          tasks.map((task) => 
          <Task
          key={task.id}
          id={task.id} 
          texto={task.text}
          completada={task.done}
          completarTarea={finishTask}
          eliminarTarea={deleteTask} />
            )
        }
      </div>
    </>
  );
}
export default TaskList;