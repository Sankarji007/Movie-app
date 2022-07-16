import { useState,useEffect } from 'react';
import React from 'react';
import './App.css';
import MovieCard from './MovieCard';
import Searchicon from './search.svg';
//3dd0aaf3
const API = 'http://www.omdbapi.com?apikey=3dd0aaf3';
// const movie1 = {
    
//     "Title": "The Batman",
//     "Year": "2022",
//     "imdbID": "tt1877830",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
// };

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('spider man');
    }, []);
    return (
        <div className='app'>
            <h1>Movie app</h1>
            <div className='search'>
                <input
                    placeholder='Enter movie name'
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img
                    src={Searchicon}
                    alt='search icon'
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
            movies?.length >0
            ? (
                <div className='container'>
                    {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
                </div>
                ) : (
                    <div className='empty'>
                          <h1>No movies found</h1>  
                    </div>
                            
                ) }
            
        </div>
    );
}
export default App;
