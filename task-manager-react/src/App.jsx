import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'

function App() {
  // State for managing tasks array
  const [tasks, setTasks] = useState([])
  
  // State for managing filter (all, active, completed)
  const [filter, setFilter] = useState('all')

  // Add new task function
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Delete task from list
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Filter tasks based on current filter state
  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed)
    }
    if (filter === 'completed') {
      return tasks.filter(task => task.completed)
    }
    return tasks // 'all'
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div className="app">
      {/* Header Section */}
      <header className="main-header">
        <div className="header-left">
          <img src="/assets/menu_icon.png" alt="Menu icon" className="menu-icon" />
          <img src="/assets/search_icon.png" alt="Search icon" className="search-icon" />
          <input type="text" className="quick-find" placeholder="Quick find" />
        </div>
        <div className="header-right">
          <img src="/assets/check_icon.png" alt="Check icon" className="check-icon" />
          <TaskCounter tasks={tasks} filter={filter} />
        </div>
      </header>

      {/* Container for sidebar and main content */}
      <div className="container">
        {/* Left Navigation Sidebar */}
        <nav className="sidebar">
          <ul className="nav-list">
            <li className="nav-item">
              <img src="/assets/inbox_icon.png" alt="Inbox icon" className="nav-icon" />
              <span className="nav-label">Inbox</span>
              <span className="task-count">{tasks.length}</span>
            </li>
            <li className="nav-item">
              <img src="/assets/calendar_icon.png" alt="Calendar icon" className="nav-icon" />
              <span className="nav-label">Today</span>
              <span className="task-count">{tasks.filter(t => !t.completed).length}</span>
            </li>
            <li className="nav-item">
              <img src="/assets/upcoming_icon.png" alt="Upcoming icon" className="nav-icon" />
              <span className="nav-label">Upcoming</span>
            </li>
          </ul>
        </nav>

        {/* Main Content Section */}
        <main className="main-content">
          <h1>Inbox</h1>
          
          {/* Task Form for adding new tasks */}
          <TaskForm onAddTask={addTask} />

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button 
              className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>

          {/* Task List */}
          <TaskList 
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </main>
      </div>
    </div>
  )
}

export default App
