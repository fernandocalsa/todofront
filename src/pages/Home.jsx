import axios from "axios"
import { useEffect, useState } from "react"

export const Home = () => {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const response = await axios.get('http://localhost:8000/tasks')
    setTasks(response.data)
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <div>Estas son las tareas</div>
      {tasks.map(task => {
        return (
          <div key={task._id}>
            {task.name}
          </div>
        )
      })}
    </>
  )
}