import { useState } from 'react'
import searchIcon from '/magnifying-glass.svg'
import './App.css'
import SearchMovies from './components/SearchMovies '

function App() {
  const [style, setStyle] = useState('searchBar')
  
  return (
    <div>
      
      <h1 className='text-center text-7xl pt-10 font-medium'> React Movie Search</h1>
      <SearchMovies/>
      
      
      
    </div>
  )
}

export default App
