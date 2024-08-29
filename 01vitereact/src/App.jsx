import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai.jsx'

function App() {

  const username = "chai aur code"

  return(
  <>
    <h1>Hello {username}</h1>
    <Chai/>
  </>
  );
}

export default App
