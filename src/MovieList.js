import React, {useContext} from 'react'
import Movies from './Movies';
import {Context} from './Context';


function MovieList() {
    const [movies, SetMovies] = useContext(Context);
    return (
        <div>
            {movies.map(movie => (
                <Movies name={movies.name} price={movies.price} key={movies.id} />
            ))}
        </div>
    );
};

export default MovieList;
