"use client"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTaskCompletion, resetTasks } from './Store/tasksSlice';

export default function Home() {
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const handleResetTask = () =>{
    dispatch(resetTasks());
  }

  return (
<div style={{ padding: '2rem' }}>
      <h1>Daily Checklist</h1>
      <div><button onClick={handleResetTask}> Reset</button></div>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTaskCompletion(index))}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
