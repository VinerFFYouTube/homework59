import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [film, setFilm] = useState([
    { name: 'interstellar' },
    { name: 'bleach' },
    { name: 'hunter' }
  ])
  const renameFilm = (nameFilm: string, index: number) => {
    const rename = [...film];
    rename[index] = { ...rename[index], name: nameFilm }
    setFilm(rename)
  }

  return (
    <>
      <div className="main-div">
        <div className="input-window">
          <input type="text" />
          <button className='m-3'>add</button>
        </div>
        <h3>To watch list:</h3>
        <ul>
          {film.map((films, index) => (
            <li
              key={index}><input
                type="text" value={films.name}
                onChange={(e) => { renameFilm(e.target.value, index) }}
              />
              <button>X</button></li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
