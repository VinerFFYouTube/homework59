import React, { useState } from 'react'
import './App.css'

function App() {

  const [mem, setMem] = useState('')

  const ff = async () => {
    const apiss = await fetch('https://api.chucknorris.io/jokes/random')
    const jsons = await apiss.json();
    // setMem(jsons.)
    setMem(jsons.value)
    console.log(jsons.value)
  }
  // ff()

  return (
    <>
      <button onClick={() => ff()}>запросить шутку</button>
      <p>{mem}</p>
    </>
  )
}

export default App
