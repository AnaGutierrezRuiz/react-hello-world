import React, { useState } from 'react';

function TodoForm({ onTaskCreated }) {
  const [tasks, setTasks] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setTasks(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskCreated(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={task} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
}

TodoForm.defaultProps = {
  onTaskCreated: () => {}
};
export default TodoForm;