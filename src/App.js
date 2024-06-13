import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm/TodoForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    setTasks([...tasks, { text: taskName, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">To-do List</h1>
      <TodoForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
