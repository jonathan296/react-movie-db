import { useState } from "react";
import "./App.css";
import SearchMovies from "./components/SearchMovies";
import Navbar from "./components/Navbar";

function App() {
  const [style, setStyle] = useState("searchBar");

  return (
    <div className="flex lg:flex-row justify-start  lg:h-screen flex-col">
        <Navbar/>

      
      <div className=" w-full">
        <SearchMovies/>
      </div>
    </div>
  );
}

export default App;
