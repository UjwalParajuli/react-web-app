import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ujwal",
    age: 24
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='text-3xl text-black-500 bg-green-500 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Ujwal" btnText="Click Me"/>
      <Card username="Ujwal_V2" btnText="Visit Here"/>
    </>
  )
}

export default App
