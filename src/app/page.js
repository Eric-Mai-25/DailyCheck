"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  toggleTaskCompletion,
  resetTasks,
  removeTask,
} from "./Store/tasksSlice";
import Modal from "./components/Modal";

export default function Home() {
  const [newTask, setNewTask] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isModelOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask));
      setNewTask("");
    }
  };

  const handleResetTask = () => {
    dispatch(resetTasks());
  };

  const handleDeleteTask = (index) => {
    dispatch(removeTask(index));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Daily Checklist</h1>
      <div>
        <button
          onClick={openModal}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
        >
          Open Modal
        </button>

        <Modal
          isOpen={isModelOpen}
          onClosed={closeModal}
          title="My Reusable Modal"
        >
          <p>
            This is the content inside the modal. You can put anything here.
          </p>
        </Modal>
      </div>
      <div>
        <button onClick={handleResetTask}> Reset</button>
      </div>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <h3>Incomplete</h3>
      <ul>
        {tasks.map((task, index) => {
          if (task.completed === false) {
            return (
              <li key={index}>
                <button onClick={() => dispatch(toggleTaskCompletion(index))}>
                  Check
                </button>
                {task.text}
                <button
                  onClick={() => handleDeleteTask(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </li>
            );
          }
        })}
      </ul>
      <h3>Completed</h3>
      <ul>
        {tasks.map((task, index) => {
          if (task.completed === true) {
            return (
              <li key={index}>
                <button onClick={() => dispatch(toggleTaskCompletion(index))}>
                  Uncheck
                </button>
                {task.text}
                <button
                  onClick={() => handleDeleteTask(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
