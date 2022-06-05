import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {
    
    const dispatch = useDispatch();
    const history = useHistory();

    const showDetails = () => {
        console.log('clicked movie with id:', movie.id);
        console.log('movie details:', movie);

        dispatch({ type: 'FETCH_DETAILS', payload: movie });
        history.push(`/details/${movie.id}`)
    }
    
    return (
        <div>
            <h3>{movie.title}</h3>
            <img 
                src={movie.poster} 
                alt={movie.title} 
                onClick={showDetails}
            />
        </div>
    )
}

export default MovieItem;