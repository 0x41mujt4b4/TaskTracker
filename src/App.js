import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect} from 'react'
import React from 'react'


function App() {
  const [task, setTask] = useState(true)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:5000/tasks")
      const data = await response.json()
      console.log(data)
    }
    
  }, [])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // ToggleReminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ?
      {...task, reminder:!task.reminder} : task ))
  }
  // ToggleTask
  const showAdd = () => {
    setTask(!task)
  }
  return (
    <div className="container">
      <Header showAdd={showAdd} task={task} />
      {task ? <AddTask onAdd={addTask}/> : ""}
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : 'No Tasks To Show'}
    </div>
  );
}


export default App;
