import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieItem.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const showDetails = () => {
        console.log('clicked movie with id:', movie.id);
        console.log('movie details:', movie);

        dispatch({ type: 'FETCH_DETAILS', payload: movie });
        dispatch({ type: 'FETCH_GENRES', payload: movie.id })
        history.push(`/details/${movie.id}`)
    }

    const deleteMovie = (movieId) => {
        console.log('clicked delete');
        console.log('movie to delete:', movieId);

        dispatch({ type: 'DELETE_MOVIE', payload: movieId })
    }

    // return (
    //     <div>
    //         <div>
    //             <h3>{movie.title}</h3>
    //             <img
    //                 src={movie.poster}
    //                 alt={movie.title}
    //                 onClick={showDetails}
    //             />
    //         </div>
    //         <div>
    //             <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    //         </div>
    //     </div>
    // )

    return (
        <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="500"
                    image={movie.poster}
                    alt={movie.title}
                    onClick={showDetails}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    genres could go here?
                </Typography>
            </CardContent>
            <CardActionArea>
                <HighlightOffRoundedIcon onClick={() => deleteMovie(movie.id)}>Delete</HighlightOffRoundedIcon>
            </CardActionArea>
        </Card>
    )
}

export default MovieItem;