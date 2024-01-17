import { useState } from "react"
import api from "../api/api"
import { useNavigate } from "react-router-dom"

export const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const onClickLogin = async (e) => {
    setLoading(true)
    setError(false)
    e.preventDefault()
    try {
      const loginData = await api.login(email, password)
      setToken(loginData.token)
      navigate('/')
    } catch (e) {
      setError(true)
    }
    setLoading(false)
  }

  return (
    <>
      <div>Login</div>
      <form onSubmit={onClickLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />

        <input disabled={loading} type="submit" value="Login" />
      </form>
      {error &&
        <div>
          Credenciales incorrectas. Prueba de nuevo.
        </div>
      }
    </>

  )
}