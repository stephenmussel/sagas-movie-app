import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function EditMovie() {

    const details = useSelector(store => store.details)
    const history = useHistory();
    
    const [movieEdits, setMovieEdits] = useState({
        title: "",
        description: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked save!');
        console.log('movieEdits:', movieEdits);
    }

    return (
        <div>
            <h1>Edit: <em>{details.title}</em></h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    style={{ marginBottom: 5 }}
                    value={movieEdits.title}
                    onChange={(event) => setMovieEdits({...movieEdits, title: event.target.value })}
                /><br />
                <textarea 
                    type="text"
                    placeholder="Description"
                    style={{ marginBottom: 5 }}
                    value={movieEdits.description}
                    onChange={(event) => setMovieEdits({...movieEdits, description: event.target.value })}
                /><br />
                <input type="submit" value="Save" style={{ marginRight: 5 }} />
                <button onClick={() => history.push(`/details/${details.id}`)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditMovie;

// TODO:

/**

Edit page should show:

- an input field (for changing the movie title), for the selected movie.
- a textarea (for changing the movie description)

The edit page should have the buttons:

- `Save` button, which should update the title and description in the database and bring the user to the Details Page
 */