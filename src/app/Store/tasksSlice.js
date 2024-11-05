import { createSlice } from "@reduxjs/toolkit";

const isClient = typeof window !== "undefined";

const loadTasks = () => {
  if (isClient) {
    const storedTasks = localStorage.getItem("tasks");
    const lastResetDate = localStorage.getItem("lastResetDate");
    const today = new Date().toLocaleDateString();

    if (lastResetDate !== today) {
      localStorage.setItem("tasks", JSON.stringify([]));
      localStorage.setItem("lastResetDate", today);
      return [];
    }

    return storedTasks ? JSON.parse(storedTasks) : [];
  }
  return [];
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: loadTasks(),
  reducers: {
    addTask: (state, action) => {
      const newTask = { text: action.payload, completed: false };
      state.push(newTask);

      if (isClient) {
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    toggleTaskCompletion: (state, action) => {
      const task = state[action.payload];
      if (task) {
        task.completed = !task.completed;

        if (isClient) {
          localStorage.setItem("tasks", JSON.stringify(state));
        }
      }
    },
    resetTasks: (state) => {
      state.forEach((task) => {
        task.completed = false;
      });
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    removeTask: (state, action) =>
  },
});

export const { addTask, toggleTaskCompletion, resetTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
