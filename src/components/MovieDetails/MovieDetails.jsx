import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './MovieDetails.css';
import EditMovieButton from '../EditMovie/EditMovieButton';

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
        dispatch({ type: 'FETCH_DETAILS', payload: { id: movieId } });
    }, [])

    const updateMovie = (detailsId) => {
        console.log('clicked edit!');
        console.log('movie to edit id:', detailsId);

        history.push('/edit-movie');
    }

    return (
        <div className="details-container">
            <div className="title-poster">
                <h3>{details.title}</h3>
                <img
                    src={details.poster}
                    alt={details.title}
                />
            </div>
            <div className="description">
                <p>{details.description}</p>
            </div>
            <div>
                <p><b>Genre</b></p>
                <>
                    {genres.map((each, i) => (
                        <p key={i}>{each.name}</p>
                    ))}
                </>
            </div>

            <div className="back-btn">
                <button onClick={() => history.push('/')} style={{ marginRight: 5 }}>Back To List</button>
            </div>
            <div className="edit-btn">
                {/* <button onClick={() => updateMovie(details.id)}>Edit</button> */}
                <EditMovieButton details={details.id} updateMovie={updateMovie}/>
            </div>
        </div>
    )
}

export default MovieDetails;