import React from 'react';

function TaskList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`}
        >
          <Task
            task={task}
            toggleTaskCompletion={() => toggleTaskCompletion(index)}
            deleteTask={() => deleteTask(index)}
            editTask={(newText) => editTask(index, newText)}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, toggleTaskCompletion, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(task.text);

  const handleEditChange = (e) => {
    const value = e.target.value;
    if (value.length <= 90) {
      setEditText(value);
    }
  };

  const handleEditConfirm = () => {
    if (editText.trim()) {
      editTask(editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <>
          <input
            type="text"
            className={`${task.completed ? 'completed-input' : ''} inputEdit`}
            value={editText}
            onChange={handleEditChange}
          />
          <div className="d-flex gap-1">
            <button className="btn btn-success btn-sm ml-2" onClick={toggleTaskCompletion}>
              Completed
            </button>
            <button className="btn btn-primary btn-sm ml-2" onClick={handleEditConfirm}>
              Okay
            </button>
            <button className="btn btn-danger btn-sm ml-2" onClick={deleteTask}>
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <span className={task.completed ? "completed" : ""}>{task.text}</span>
          <div className="d-flex gap-1">
            <button className="btn btn-success btn-sm ml-2" onClick={toggleTaskCompletion}>
              Completed
            </button>
            <button className="btn btn-secondary btn-sm ml-2" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm ml-2" onClick={deleteTask}>
              Delete
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default TaskList;