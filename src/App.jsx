import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import searchIcon from '/magnifying-glass.svg'
import './App.css'

function App() {
  const [style, setStyle] = useState('searchBar')
  
  return (
    <>
      
      <h1>React Movie Search</h1>
      <label htmlFor="query">Movie Name</label>
      <form className={style}>
        <img src={searchIcon}></img>
        <input className='searchBox' placeholder='search here' type='text' onFocus={() => {setStyle('searchBarFocus')}} onBlur={() => {setStyle('searchBar')}} ></input>
        <button className='searchButton'>GO</button>
      </form>
      
      
      
    </>
  )
}

export default App
