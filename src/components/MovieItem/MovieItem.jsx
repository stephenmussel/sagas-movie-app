function MovieItem({ movie }) {

    const showDetails = () => {
        console.log('clicked movie with id:', movie.id);
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