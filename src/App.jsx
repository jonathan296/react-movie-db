import { useState } from "react";
import "./App.css";
import SearchMovies from "./components/SearchMovies";
import Navbar from "./components/Navbar";
import Home
 from "./components/Home";


 
function App() {
  const [style, setStyle] = useState("searchBar");

  return (
    <div className="flex lg:flex-row justify-start lg:h-screen h-screen flex-col">
        <Navbar/>
      <div className="w-full h-full overflow-x-hidden">
        <SearchMovies/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
