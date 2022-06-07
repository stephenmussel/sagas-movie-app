import { useHistory } from 'react-router-dom';

function AddMovieButton() {

    const history = useHistory();

    return (
        <div>
            <button onClick={() => history.push('/add-movie')}>Add Movie</button>
        </div>
    )
}

export default AddMovieButton;