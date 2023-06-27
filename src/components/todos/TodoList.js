import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {

  const [tasks, setTasks] = useState([]);

  const handleTaskCreated = (task) => {
    setTasks((prev) => {
      return [
        ...prev,
        task
      ]
    })
  }

  
  return (
    <>
      <TodoForm onTaskcreated = {handleTaskCreated} />
      <ul>
        {tasks.map((task) => <TodoItem task={task} key={task} />)}
      </ul>
    </>
  );
}

export default TodoList;