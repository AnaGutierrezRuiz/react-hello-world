import React, { useState } from 'react'

function TodoForm({ onTaskCreated }) {

  const [task, setTask] = useState('');
  const handleChange = (event) => {
    const { value } = event.target;
    setTasks(value); 
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskcreated(task);
    setTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={task} onChange={handleChange}/>
      <button className='btn btn-outline-secondary' type='submit' id='button addon2'><i className='fa fa-edit'></i></button>
    </form>
  )
}

TodoForm.defaultProps = {
  onTaskCreated:  () => {

  }
}

export default TodoForm