import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { TextField, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function EditMovie({ handleClose }) {

    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres);
    const select = useSelector(store => store.select);
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const movieId = params.id;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // const [movieEdits, setMovieEdits] = useState({
    //     id: details.id,
    //     title: "",
    //     description: ""
    // });

    const showCurrentDetails = () => {
        console.log('in showCurrentDetails');

        details.title && setTitle(details.title); // shows current title in input field
        details.description && setDescription(details.description); // shows current description in input field
    }

    const editedDetails = {
        id: details.id,
        title: title,
        description: description
    }

    useEffect(() => {
        showCurrentDetails();
        // dispatch({ type: 'FETCH_DETAILS'}); // GETs updated details after edits saved
        dispatch({ type: 'FETCH_SELECT_OPTIONS' });
        dispatch({ type: 'FETCH_DETAILS', payload: { id: movieId } });

    }, [])

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('clicked save!');
    //     console.log('movieEdits:', movieEdits);

    //     dispatch({ type: 'UPDATE_MOVIE', payload: movieEdits});
    //     history.push(`/details/${movieEdits.id}`)
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked save!');
        console.log('editedDetails:', editedDetails);

        dispatch({ type: 'UPDATE_MOVIE', payload: editedDetails }); // sends updated details to saga
        // history.push(`/details/${details.id}`);
        handleClose();
    }

    // return (
    //     <div>
    //         <h1>Edit: <em>{details.title}</em></h1>
    //         <p>title: {title}</p>
    //         <form onSubmit={handleSubmit}>
    //             <input 
    //                 type="text"
    //                 placeholder="Title"
    //                 style={{ marginBottom: 5 }}
    //                 // value={movieEdits.title}
    //                 value={title}
    //                 onChange={(event) => setMovieEdits({...movieEdits, title: event.target.value })}
    //             /><br />
    //             <textarea 
    //                 type="text"
    //                 placeholder="Description"
    //                 style={{ marginBottom: 5 }}
    //                 value={movieEdits.description}
    //                 onChange={(event) => setMovieEdits({...movieEdits, description: event.target.value })}
    //             /><br />
    //             <input type="submit" value="Save" style={{ marginRight: 5 }} />
    //             <button onClick={() => history.push(`/details/${details.id}`)}>Cancel</button>
    //         </form>
    //     </div>
    // )

    return (
        <div>
            <h1>Edit: <em>{details.title}</em></h1>
            {/* <p>title: {title}</p> */}
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="outlined"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: 10 }}
                    value={title}
                    // defaultValue={details.title}
                    onChange={(event) => setTitle(event.target.value)}
                /><br />
                <TextField
                    required
                    id="outlined-textarea"
                    label="Description"
                    variant="outlined"
                    multiline
                    fullWidth
                    style={{ marginBottom: 10 }}
                    value={description}
                    // defaultValue={details.description}
                    onChange={(event) => setDescription(event.target.value)}
                /><br />
                {/* TODO: remove genre */}
                {/* <div><b>Genres: </b>
                    {genres.map((each, i) => (
                        <p key={i}>{each.name}</p>
                    ))}
                </div> */}
                {/* {JSON.stringify(select)} */}
                {/* <select style={{ marginBottom: 10 }}>
                    <option>Remove A Genre</option>
                    {genres.map(each => (
                        <option key={each.id}>{each.name}</option>
                    ))}
                </select><br /> */}
                {/* <input type="submit" value="Save" style={{ marginRight: 5 }} /> */}
                <Button type="submit" value="Save" style={{ marginRight: 5 }}>Save</Button>
                {/* <Button onClick={() => history.push(`/details/${details.id}`)}>Cancel</Button> */}
                <Button onClick={handleClose}>Cancel</Button>

            </form>
        </div>
    )
}

export default EditMovie;

// REVIEW: using value vs defaultValue?
// TODO: remove genre