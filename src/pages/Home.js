import React, { useState } from 'react'
import { MoviesList } from '../components/MovieList'
import MovieCard from '../components/MovieCard'
import Filter from '../components/Filter'

const Home = () => {
    const [movies, setMovies] = useState([...MoviesList]);
    const [searchValue, setSearchValue] = useState ('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let result = movies.filter(movie => movie.Title.toLowerCase().includes(searchValue.toLowerCase()))
        setMovies (result)
    };

    const handleOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    const rating = (e) => {
        let movieRating = movies.filter(movie => movie.Rating === Number(e.target.value))
        setMovies (movieRating)
    }

    return (
        <div>
            <Filter handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} rating={rating} searchValue={searchValue}/>
            <MovieCard movies = {movies}/> 
        </div>
    )
}

export default Home
