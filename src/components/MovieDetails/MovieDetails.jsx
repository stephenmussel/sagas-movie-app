import { useSelector } from 'react-redux';

function MovieDetails() {

    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);

    return (
        <div>
            <h3>{details.title}</h3>
            {/* {JSON.stringify(details)} */}
            <img
                src={details.poster}
                alt={details.title}
            />
            <p>{details.description}</p>
            <h3>Genre:</h3>
            <ul>
                {genres.map((each, i) => (
                   <li key={i}>{each.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default MovieDetails;