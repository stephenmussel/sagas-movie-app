import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditMovie() {

    const details = useSelector(store => store.details)
    const history = useHistory();
    const dispatch = useDispatch();

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
        dispatch({ type: 'FETCH_DETAILS'}); // GETs updated details after edits saved
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
        history.push(`/details/${details.id}`);
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
                <input
                    type="text"
                    placeholder="Title"
                    style={{ marginBottom: 5 }}
                    value={title}
                    // defaultValue={details.title}
                    onChange={(event) => setTitle(event.target.value)}
                /><br />
                <textarea
                    type="text"
                    placeholder="Description"
                    style={{ marginBottom: 5 }}
                    value={description}
                    // defaultValue={details.description}
                    onChange={(event) => setDescription(event.target.value)}
                /><br />
                <input type="submit" value="Save" style={{ marginRight: 5 }} />
                <button onClick={() => history.push(`/details/${details.id}`)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditMovie;

// REVIEW: using value vs defaultValue?
// TODO: remove genre