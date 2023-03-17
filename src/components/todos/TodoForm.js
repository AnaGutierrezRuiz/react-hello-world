import React, { useState } from 'react'

function TodoForm({ onTaskCreated }) {
  const [task, setTasks] = useState('')

  const handleChange = (event) => {
    const { value } = event.target;
    setTasks(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskCreated(task);
    setTasks('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input type="text" className="form-control" value={task} onChange={handleChange} />
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className='fa fa-edit'></i></button>
      </div>
    </form>
  )
}

TodoForm.defaultProps = {
  onTaskCreated: () => {}
}

export default TodoForm