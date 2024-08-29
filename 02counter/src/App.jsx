import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(0);

  const addValue = () => {
    // console.log("Add Value", value)
    setValue(v => v + 1)
    setValue(v => v + 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {value}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button>Remove Value</button>
    </>
  )
}

export default App
