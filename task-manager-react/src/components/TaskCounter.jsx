function TaskCounter({ tasks, filter }) {
  // Calculate statistics
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const activeTasks = totalTasks - completedTasks

  // Display different counts based on filter
  const getDisplayText = () => {
    if (filter === 'active') {
      return `Active: ${activeTasks}/${totalTasks}`
    }
    if (filter === 'completed') {
      return `Completed: ${completedTasks}/${totalTasks}`
    }
    // 'all' filter - show completed/total
    return `${completedTasks}/${totalTasks}`
  }

  return (
    <span className="task-counter">{getDisplayText()}</span>
  )
}

export default TaskCounter

