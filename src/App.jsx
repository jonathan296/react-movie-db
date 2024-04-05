import { useState } from "react";
import "./App.css";
import SearchMovies from "./components/SearchMovies";
import Navbar from "./components/Navbar";

function App() {
  const [style, setStyle] = useState("searchBar");

  return (
    <div className="flex md:flex-row justify-start h-screen flex-col">
      <Navbar/>

      <div className="bg-green-500 w-vh h-40 m-10 block md:hidden">
        <p>hello</p>
      </div>
      <div className="grow">
        <div className="text-white">
          <SearchMovies/>
        </div>
        <div className="text-white h-screen">
          <p>Hello World!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
