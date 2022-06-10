import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './MovieDetails.css';
import EditMovieButton from '../EditMovieForm/EditMovieButton';

// Material-UI
import { Box, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '1px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

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
        // dispatch({ type: 'FETCH_DETAILS', payload: { id: movieId } });
        handleOpen();
    }, [])

    const updateMovie = (detailsId) => {
        console.log('clicked edit!');
        console.log('movie to edit id:', detailsId);

        history.push('/edit-movie');
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 750 }}>
                <div className="details-container">
                    <div className="title-poster">
                        {/* <h3>{details.title}</h3> */}
                        <img
                            src={details.poster}
                            alt={details.title}
                        />
                    </div>
                    <div className="genre-description">
                        {/* TODO: render this on one line and palette matches buttons */}
                        <div className="genre-container">
                            {genres.map((each, i) => (
                                <p key={i} className="genre-item">{each.name}</p>
                            ))}
                        </div>
                        <div>
                            <p>{details.description}</p>
                        </div>
                        {/* <div className="back-btn">
                        <button onClick={() => history.push('/')} style={{ marginRight: 5 }}>Back To List</button>
                    </div> */}
                    </div>
                </div>
                <div className="buttons-container">
                    <Button
                        onClick={() => history.push('/')}
                        style={{ marginRight: 5, marginBottom: 5 }}
                        variant="contained"
                    >
                        Back To List
                    </Button>
                    {/* <button onClick={() => updateMovie(details.id)}>Edit</button> */}
                    <EditMovieButton details={details.id} updateMovie={updateMovie} />
                </div>
            </Box>
        </Modal>
    )
}

export default MovieDetails;