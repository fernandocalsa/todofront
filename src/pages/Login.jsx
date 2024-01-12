import { useState } from "react"

export const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async (e) => {
    e.preventDefault()
    const loginResponse = await fetch('http://localhost:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await loginResponse.json()

    setToken(data.token)

  }

  return (
    <>
      <div>Login</div>
      <form onSubmit={login}>
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

        <input type="submit" value="Login" />
      </form>
    </>

  )
}