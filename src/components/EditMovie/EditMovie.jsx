import { useSelector } from 'react-redux'

function EditMovie() {

    const details = useSelector(store => store.details)

    return (
        <div>
            <h1>Edit: <em>{details.title}</em></h1>
            <form>
                <input 
                    type="text"
                    placeholder="Title"
                    style={{ marginBottom: 5 }}
                /><br />
                <textarea 
                    type="text"
                    placeholder="Description"
                /><br />
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