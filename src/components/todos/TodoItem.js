import React from 'react';

function TodoItem({ task, onDeleteTask }) {
  return (
    <li onClick={onDeleteTask}>{task}</li>
  );
}

export default TodoItem;