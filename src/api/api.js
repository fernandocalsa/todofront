import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL

const login = async (email, password) => {
  const loginResponse = await fetch(`${BASE_URL}/users/login`, {
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
  return data
}

const register = async (name) => {
  const user = await axios.post(
    `${BASE_URL}/users`,
    {
      name
    }
  )
  return user
}

const createTask = async (name, token) => {
  await axios.post(
    `${BASE_URL}/tasks`,
    {
      name
    },
    {
      headers: {
        Authorization: token
      }
    }
  )
}

export default {
  login,
  register,
  createTask
}