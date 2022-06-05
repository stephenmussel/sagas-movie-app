import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {

    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const history = useHistory();

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