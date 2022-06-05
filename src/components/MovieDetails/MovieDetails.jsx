import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function MovieDetails() {

    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const history = useHistory();
    const dispatch = useDispatch();

    // REVIEW: useParams
    const { id } = useParams();

    // NOTES: more verbose version of line 12
    const allParams = useParams();
    const movieId = allParams.id;

    useEffect(() => {
        console.log('in details useEffect!');
        dispatch({ type: 'FETCH_DETAILS', payload: {id: movieId}});
    }, [])

    return (
        <div>
            <h3>{details.title}</h3>
            {/* {JSON.stringify(details)} */}
            <img
                src={details.poster}
                alt={details.title}
            />
            <p>{details.description}</p>
            <div>
                <p><b>Genre</b></p>
                <div>
                    {genres.map((each, i) => (
                        <p key={i}>{each.name}</p>
                    ))}
                </div>
            </div>
            <button onClick={() => history.push('/')}>Back To List</button>
        </div>
    )
}

export default MovieDetails;