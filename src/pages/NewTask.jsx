import axios from "axios"
import { useState } from "react"

export const NewTask = ({ token }) => {
  const [name, setName] = useState('')

  const createTask = async (e) => {
    e.preventDefault()
    const taskResponse = await axios.post(
      'http://localhost:8000/tasks',
      {
        name
      },
      {
        headers: {
          Authorization: token
        }
      }
    )
    console.log(taskResponse)
  }

  return (
    <>
      <div>Crear tarea</div>
      <form onSubmit={createTask}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)} />

        <input type="submit" value="Crear" />
      </form>
    </>
  )
}