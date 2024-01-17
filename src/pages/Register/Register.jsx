import axios from "axios"
import { useState } from "react"

export const Register = () => {
  const [name, setName] = useState('')

  const register = async (e) => {
    e.preventDefault()
    const user = await axios.post(
      'http://localhost:8000/users',
      {
        name
      }
    )
    console.log(user)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input type="submit" value="Register" onClick={register} />
      </form>
    </div>
  )
}