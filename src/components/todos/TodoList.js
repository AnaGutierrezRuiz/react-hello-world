import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

function TodoList() {
  const [tasks, setTasks] = useState(["holi"])

  const handleTaskCreated = (task) => {
    setTasks((prev) => {
      return [
        ...prev,
        task
      ]
    })
  }

  const handleDeleteTask = (task) => {
    setTasks((prev) => prev.filter(t => t !== task ))
  }

  return (
    <>
      <TodoForm onTaskCreated={handleTaskCreated}/>
      <ul>
        {tasks.map((task) => (<TodoItem key={task} task={task} onDeleteTask={() => handleDeleteTask(task)} />))}
      </ul>
    </>
  )
}

export default TodoList