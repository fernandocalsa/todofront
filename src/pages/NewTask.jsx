import axios from "axios"
import { useState } from "react"

export const NewTask = ({ token }) => {
  const [name, setName] = useState('')

  const createTask = async (e) => {
    e.preventDefault()
    await api.createTask(name, token)
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