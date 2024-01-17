import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NewTask } from './pages/NewTask'
import { useEffect, useState } from 'react'
import { Register } from './pages/Register/Register'

function App() {
  const [token, setToken] = useState('')

  const updateToken = (token) => {
    window.localStorage.setItem('token', token)
    setToken(token)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    setToken(token)
  }, [])

  const logout = () => {
    setToken(null)
    window.localStorage.removeItem('token')
  }

  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          {token && <Link to="/new">New Task</Link>}
          {token && <div onClick={logout}>Cerrar sesión</div>}
          {!token && <Link to="/login">Login</Link>}
          {token ? null : <Link to="/register">Register</Link>}
        </div>
        <h1>Welcome to Nuclio tasks</h1>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setToken={updateToken} />} />
          <Route path='/new' element={<NewTask token={token} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
