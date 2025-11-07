import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete }) {
  // Show empty state message when no tasks
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet! Add one to get started.</p>
      </div>
    )
  }

  // Render list of tasks
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList

