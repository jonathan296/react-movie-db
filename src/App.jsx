import { useState } from "react";
import searchIcon from "/magnifying-glass.svg";
import "./App.css";
import SearchMovies from "./components/SearchMovies ";

function App() {
  const [style, setStyle] = useState("searchBar");

  return (
    <div className="flex md:flex-row justify-start h-screen flex-col">


      <div className="bg-[#161D2F] w-[6rem] h-vh m-[2rem] mr-[2.25rem] md:block hidden rounded-[20px]">
        <p>hello</p>
      </div>
      <div className="bg-green-500 w-vh h-40 m-10 block md:hidden">
        <p>hello</p>
      </div>
      <div className="grow">
        <div className="bg-red-500">
        <SearchMovies/>
        </div>
        <div className="bg-green-500">
          <p>Hello World!</p>
        </div>
      </div>
      


    </div>
  );
}

export default App;
