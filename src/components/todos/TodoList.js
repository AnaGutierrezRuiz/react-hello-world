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

  const handleDeleteTask = (task) {
    setTasks((prev) => prev.filter(t => t !== task))
  }
  
  return (
    <>
      <TodoForm onTaskcreated = {handleTaskCreated} />
      <ul>
        {tasks.map((task) => <TodoItem key={task} task={task} onDeleteTask={() => handleDeleteTask(task)} />)}
      </ul>
    </>
  );
}

export default TodoList;