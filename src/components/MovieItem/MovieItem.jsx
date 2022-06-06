import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const showDetails = () => {
        console.log('clicked movie with id:', movie.id);
        console.log('movie details:', movie);

        dispatch({ type: 'FETCH_DETAILS', payload: movie });
        dispatch({ type: 'FETCH_GENRES', payload: movie.id })
        history.push(`/details/${movie.id}`)
    }

    const deleteMovie = (movieId) => {
        console.log('clicked delete');
        console.log('movie to delete:', movieId);

        dispatch({ type: 'DELETE_MOVIE', payload: movieId })
    } 

    return (
        <div>
            <div>
                <h3>{movie.title}</h3>
                <img
                    src={movie.poster}
                    alt={movie.title}
                    onClick={showDetails}
                />
            </div>
            <div>
                <button onClick={() => deleteMovie(movie.id)}>Delete</button>
            </div>
        </div>
    )
}

export default MovieItem;