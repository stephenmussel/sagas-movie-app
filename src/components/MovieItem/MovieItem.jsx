import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {
    
    const dispatch = useDispatch();
    const history = useHistory();

    const showDetails = () => {
        console.log('clicked movie with id:', movie.id);

        const action = { type: 'FETCH_DETAILS', payload: movie };
        dispatch(action);

        history.push(`/details/${movie.id}`)
    }
    
    return (
        <div>
            <h3>{movie.title}</h3>
            <img 
                src={movie.poster} 
                alt={movie.title} 
                onClick={() => showDetails(movie.id)}
            />
        </div>
    )
}

export default MovieItem;