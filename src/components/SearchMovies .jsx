import searchIcon from '/magnifying-glass.svg'
import { useState } from 'react'

export default function SearchMovies(){


    async function searchFunction (event){
        event.preventDefault()
        const APIURL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=e7b1c4023a2a60d89c3b799a91f17808&language=en-US';
        try{
            const response = await fetch(APIURL);
            const data = await response.json();
            console.log(data)
        }catch(err){
            console.error(err);
        }
    }

    return(
        <div className='p-10'>
            <form className='grid form' onSubmit={searchFunction}>
                <label className='text-xl mb-1 uppercase' htmlFor='query'>Movie Name</label>
                <input className='input text-2xl rounded-[20px] py-2 px-8 mb-4 leading-[2.8rem]' type='text' name='query' placeholder='i.e Jurrasic Park'></input>
                <button className='text-xl border rounded-[20px] border-indigo-950 bg-slate-400 text-white py-4 px-8 hover:bg-slate-500' type='submit'>Search</button>
            </form>
            <div>
                {}
            </div>
        </div>
        
    )
}