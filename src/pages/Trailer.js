import React from 'react';
import { useParams } from 'react-router-dom';
import { MoviesList } from '../components/MovieList';

const Trailer = () => {
    const { id } = useParams();
    const trailerInfo = MoviesList.filter((movie) => {
        return movie.ID === Number(id);
    });
    return (
        <div>
            <h1>{trailerInfo[0].Title}</h1>
            <img src={trailerInfo[0].Poster} alt='poster' />
            <p>{trailerInfo[0].Description}</p>
            <iframe
                width="560" height="315" 
                src= {trailerInfo[0].Trailer} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
             </iframe>
        </div>
    )
}

export default Trailer
