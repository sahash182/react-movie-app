import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies(){

    const[ query, setQuery ] = useState('');
    const[ movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url =`https://api.themoviedb.org/3/search/movie?api_key=b4085f297d15d1b386990ad316a92819&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        }catch(err){
            console.log(err)
        }

    }

    return(
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie name</label>
                <input 
                    className="input" 
                    name="query" 
                    type="text" 
                    placeholder="e.g: Taken"     
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>

            </form>
            <MovieCard movies={movies} />
            

        </div>
        
    )
}