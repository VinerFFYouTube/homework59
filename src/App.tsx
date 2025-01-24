import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [newFilm, setNewFilm] = useState('')

  const [film, setFilm] = useState([
    { name: 'interstellar',},
    { name: 'bleach' },
    { name: 'hunter' }
  ])
  const renameFilm = (nameFilm: string, index: number) => {
    const rename = [...film];
    rename[index] = { ...rename[index], name: nameFilm }
    setFilm(rename)
  }

  const addFilm = (e: React.FormEvent) => {
    e.preventDefault();
    setFilm(preventDefault => [...preventDefault, {name: newFilm}])
  }

  return (
    <>
      <div className="main-div">
        <div className="input-window">
          <form onSubmit={addFilm}>
            <input type="text" onChange={e => setNewFilm(e.target.value)}/>
            <button className='m-3' type='submit'>add</button>
          </form>
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
