import React, { useState } from 'react'
import './App.css'

function App() {

  const [mem, setMem] = useState<string[]>([])

  // const ff = async () => {
  // const apiss = await fetch('https://api.chucknorris.io/jokes/random')
  //   const jsons = await apiss.json();
  //   // setMem(jsons.)
  //   setMem(jsons.value)
  //   console.log(jsons.value)
  // }
  // ff()

  const apis = 'https://api.chucknorris.io/jokes/random'
  const zapros = async () => {
    const getMem = await Promise.all([
      fetch(apis),
      fetch(apis),
      fetch(apis),
      fetch(apis),
      fetch(apis)
    ])

    const result = await Promise.all(
      getMem.map((res) => res.json())
    )
    setMem(prevState => [...prevState, ...result.map(results => results.value)])
  }

  return (
    <>
      <button onClick={() => zapros()}>запросить шутку</button>
      {mem.map((mems, index) => (
        <p key={index}>{mems}</p>
      ))}
    </>
  )
}

export default App
