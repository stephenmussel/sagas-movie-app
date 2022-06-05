import { useSelector } from 'react-redux';

function MovieDetails() {

    const details = useSelector(store => store.details);

    return (
        <div>
            <h3>{details.title}</h3>
            {/* {JSON.stringify(details)} */}
            <img
                src={details.poster}
                alt={details.title}
            />
            <p>{details.description}</p>
            
        </div>
    )
}

export default MovieDetails;