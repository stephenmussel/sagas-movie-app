import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelect } from 'react-redux';

function AddMovieForm() {

    const history = useHistory();
    const [newMovie, setNewMovie] = useState({
        title: "",
        poster: "",
        description: "",
        genre_id: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked save!');
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
                <select style={{ marginBottom: 5 }}>
                    <option>Select Genre</option>
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
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