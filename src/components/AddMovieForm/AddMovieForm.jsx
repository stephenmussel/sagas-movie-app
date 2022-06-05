import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovieForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    const [newMovie, setNewMovie] = useState({
        title: "",
        poster: "",
        description: "",
        genre_id: ""
    });

    useEffect(() => {
        console.log('in useEffect');
        fetchSelectOptions();
    }, [])

    const fetchSelectOptions = () => {
        console.log('in fetchSelectOptions');
        dispatch({ type: 'FETCH_SELECT_OPTIONS'});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked save!');
        console.log('newMovie:', newMovie);
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
                onChange={(event) => setNewMovie({...newMovie, title: event.target.value})}
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
                    <option>Select A Genre</option>
                    {genres.map(each => (
                        <option key={each.id}>{each.name}</option>
                    ))}
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