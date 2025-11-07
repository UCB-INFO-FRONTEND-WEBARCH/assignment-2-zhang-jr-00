import { useState } from 'react'

function TaskForm({ onAddTask }) {
  // Local state for form input (controlled component)
  const [inputValue, setInputValue] = useState('')

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate input - don't add empty tasks
    const trimmedValue = inputValue.trim()
    if (trimmedValue === '') {
      return
    }

    // Call the parent's add task function
    onAddTask(trimmedValue)
    
    // Clear the input after submission
    setInputValue('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="add-task-btn">Add Task</button>
    </form>
  )
}

export default TaskForm

