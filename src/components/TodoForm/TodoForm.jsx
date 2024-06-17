import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();
    if (trimmedTaskName) {
      addTask(trimmedTaskName);
      setTaskName('');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 90) {
      setTaskName(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 mb-3">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={taskName}
          onChange={handleInputChange}
          placeholder="Введите задачу"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TodoForm;