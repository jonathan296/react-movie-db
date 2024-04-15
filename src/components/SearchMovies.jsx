import searchIcon from '/magnifying-glass.svg';
import { useState } from 'react';
import { useEffect } from 'react';


export default function SearchMovies(){
const [movies, setMovies] = useState([])
const [query, setQuery]= useState([])

    async function searchFunction (event){
        event.preventDefault()
        const APIURL = `https://api.themoviedb.org/3/search/multi?api_key=e7b1c4023a2a60d89c3b799a91f17808&query=${query}&include_adult=false&language=en-US&page=1`;
        try{
            const response = await fetch(APIURL);
            const data = await response.json();
            setMovies(data.results)
            console.log(movies)
        }catch(err){
            console.error(err);
        }
    }

    useEffect(() => {
        if (movies.length > 0) {
          
          
          
        }
      }, [movies]);
      
    
    return(
        <div className=''>
            <form className='flex form' onSubmit={searchFunction}>
                <label className='text-xl mb-1 uppercase' htmlFor='query'>Movie Name</label>
                <input className='input text-2xl rounded-[20px] py-2 px-8 mb-4 leading-[2.8rem]' type='text' name='query' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='i.e Jurrasic Park'></input>
                <button className='text-xl border rounded-[20px] border-indigo-950 bg-slate-400 text-white py-4 px-8 hover:bg-slate-500' type='submit'>Search</button>
            </form>
            
            <div className='flex flex-wrap gap-[40px]'>
            
            {movies.filter(movie => movie.backdrop_path).map(movie => (
                    <div className="shrink-0 w-[280px]" key={movie.id}>
                        <img className=" rounded-[8px] "
                            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <h1 className='text-white text-xl'>{movie.title}</h1>
                        <h1 className='text-white text-xl'>{movie.name}</h1>
                    </div>
                ))}
            </div>
        </div>
        
    )
}