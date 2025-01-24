import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [film, setFilm] = useState([
    { name: 'interstellar', year: 2016 },
    { name: 'bleach', year: 2016 },
    { name: 'goku', year: 2016 }
  ])

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
            <li key={index}><input type="text" value={films.name}/> <button>X</button></li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
