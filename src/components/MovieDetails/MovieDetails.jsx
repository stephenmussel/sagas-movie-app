import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function MovieDetails() {

    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const history = useHistory();
    const dispatch = useDispatch();

    // NOTES: like useHistory and useDispatch
    // NOTES: also need to add `:id` to client side <Route>
    const params = useParams();
    const movieId = params.id;

    useEffect(() => {
        console.log('in details useEffect!');

        // fetches details based on movieId passed!
        dispatch({ type: 'FETCH_DETAILS', payload: {id: movieId}});
    }, [])

    const updateMovie = (detailsId) => {
        console.log('clicked edit!');
        console.log('movie to edit id:', detailsId);

        history.push('/edit-movie');
    }

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
            <button onClick={() => history.push('/')} style={{ marginRight: 5 }}>Back To List</button>
            <button onClick={() => updateMovie(details.id)}>Edit</button>
        </div>
    )
}

export default MovieDetails;