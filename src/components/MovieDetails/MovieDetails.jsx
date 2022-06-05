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
            <div>
                <p><b>Genres</b></p>
                <div>
                    {genres.map((each, i) => (
                        <p key={each.i}>{each.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;