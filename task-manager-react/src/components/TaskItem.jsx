function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        className="task-checkbox"
        id={`task-${task.id}`}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label 
        htmlFor={`task-${task.id}`}
        className={task.completed ? 'completed' : ''}
      >
        {task.text}
      </label>
      <button 
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  )
}

export default TaskItem

