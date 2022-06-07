import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import AddMovieButton from '../AddMovieForm/AddMovieButton';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' }); // gets movie list on page load
    }, []);

    return (
        <main>
            <AddMovieButton />
            {/* <h1>MovieList</h1> */}
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}>
                            <MovieItem movie={movie} />
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;