import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <input type="text" placeholder='username'/>
      <input type="text" placeholder='password'/>
      <button>Register</button>
      <button>Login</button>
    </>
  )
}

export default App
