import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelect } from 'react-redux';

function AddMovieForm() {

    const history = useHistory();
    const [newMovie, setNewMovie] = useState({
        title: "",
        poster: "",
        description: "",
        genre_id: ""
    });

    useEffect(() => {
        console.log('in useEffect');
        fetchGenres();
    }, [])

    const fetchGenres = () => {
        console.log('in fetchGenres');
        dispatchEvent({ type: 'FETCH_GENRES'});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked save!');
    }

    const handleSelect = () => {
        console.log('selected genre');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Add Movie</h1>
            <input 
                type="text" 
                placeholder="Title" 
                style={{ marginBottom: 5 }}
                value={newMovie.title}
            /><br />
            <input 
                type="text" 
                placeholder="URL" 
                style={{ marginBottom: 5 }} 
                value={newMovie.poster}
            /><br />
            <textarea 
                type="text" 
                placeholder="Description" 
                style={{ marginBottom: 5 }} 
                value={newMovie.description}
            /><br />
            <label>
                <select onChange={handleSelect} style={{ marginBottom: 5 }}>
                </select>
            </label><br />
            <input type="submit" value="Save" style={{ marginRight: 5 }}/>
            <button onClick={() => history.push('/')}>Cancel</button>
        </form>
    )
}

export default AddMovieForm;

// TODO:

/*

- `Save` button, which should 
    - save these inputs in the database 
    - and bring the user to the Home/List Page (which now has the new movie)
 */