import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = ({movies}) => {
    return (
        <div className='movie-container'>
            {movies.map((movie, key) => 
            <Link to = {`/trailer/${movie.ID}`}  key={key} >
                <div className='movie'>
                    <img src={movie.Poster} alt ='poster' />
                    <div className='movie-info'>
                        <h3>{movie.Title}</h3>
                        <span>{movie.Rating}</span>
                    </div>
                    <div className='movie-description'>
                        <h2>Description:</h2>
                        <p>{movie.Description}</p>
                    </div>
                </div>
            </Link>
            )}
            
        </div>
    )
}

export default MovieCard
