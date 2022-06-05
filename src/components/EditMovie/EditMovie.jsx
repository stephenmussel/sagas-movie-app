import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

function EditMovie() {

    const details = useSelector(store => store.details)
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked save!');
    }

    return (
        <div>
            <h1>Edit: <em>{details.title}</em></h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    style={{ marginBottom: 5 }}
                /><br />
                <textarea 
                    type="text"
                    placeholder="Description"
                    style={{ marginBottom: 5 }}
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

- `Cancel` button, which should bring the user to the Details Page
- `Save` button, which should update the title and description in the database and bring the user to the Details Page
 */