"use client"
import { useState } from "react";

export default function Home() {

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('')

  const addTask = () =>{
    if(newTask.trim()){
      setTask([...task, {text: newTask, completed: false}]);
      setNewTask('');
    }
  }

  const toggleTaskCompletion = (index) =>{
    setTask(
      task.map((task,i)=>{
        i === index ? {...task, completed: !task.completed} : task
      })
    )
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Daily Checklist</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {task.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
