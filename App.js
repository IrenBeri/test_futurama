import React, { useState, useEffect } from "react"
import './App.css';
import axios from 'axios'
import OnePerson from "./OnePerson"
import css from "./App.module.css"



const baseUrl = 'https://futuramaapi.herokuapp.com/api/v2/characters'

function App(props) {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios.get(baseUrl).then(({ data }) => data).then(setCharacters)
  }, [])
  return (
    <div className={css.root}>
      <div>
        {characters.map(character => {
          return <OnePerson character={character} key={character.Name} />
        })}
      </div>
    </div>)
}

export default App;
