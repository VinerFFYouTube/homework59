import React, { useEffect, useState } from 'react'
import './App.css'
import AddNewFilm from './components/AddNewFilm/AddNewFilm'
import ListFilm from './components/ListFilm/ListFilm'

function App() {
  const [newFilm, setNewFilm] = useState('')

  const [film, setFilm] = useState<{ name: string, id: string }[]>([])

  const renameFilm = (nameFilm: string, index: number) => {
    const rename = [...film];
    rename[index] = { ...rename[index], name: nameFilm }
    setFilm(rename)
  }

  const addFilm = (e: React.FormEvent) => {
    e.preventDefault();
    const generateId = new Date()
    if(newFilm.length > 0) {
      setFilm(prevState => [...prevState, { name: newFilm, id: `${generateId.getFullYear()}${generateId.getMonth()}${generateId.getDay()}${generateId.getHours()}${generateId.getMinutes()}${generateId.getSeconds()}${generateId.getMilliseconds()}` }])
    } else {
      return
    }
    setNewFilm('')
  }

  const deleteFilm = (index: number) => {
    setFilm(prevState => prevState.filter((_, films) => films !== index))
  }

  useEffect(() => {
    console.log("App re-rendered\n");
  });


  return (
    <>
      <div className="main-div">
        <div className="input-window">
          <form onSubmit={addFilm}>
            <AddNewFilm name={newFilm} setNewFilm={setNewFilm} />
          </form>
        </div>
        <h3>To watch list:</h3>
        <ul>
          {film.map((films, index) => (
            <ListFilm key={index} filmName={films.name} deleteFIlmFunction={() => deleteFilm(index)} renameFilmFunction={renameFilm} index={index} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
