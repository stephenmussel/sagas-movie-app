import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovieForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    const select = useSelector(store => store.select);

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
        dispatch({ type: 'FETCH_SELECT_OPTIONS' });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked save!');
        console.log('newMovie:', newMovie);

        dispatch({ type: 'CREATE_MOVIE', payload: newMovie});
        history.push('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Movie</h1>
            <input
                type="text"
                placeholder="Title"
                style={{ marginBottom: 5 }}
                value={newMovie.title}
                onChange={(event) => setNewMovie({ ...newMovie, title: event.target.value })}
            /><br />
            <input
                type="text"
                placeholder="URL"
                style={{ marginBottom: 5 }}
                value={newMovie.poster}
                onChange={(event) => setNewMovie({ ...newMovie, poster: event.target.value })}
            /><br />
            <textarea
                type="text"
                placeholder="Description"
                style={{ marginBottom: 5 }}
                value={newMovie.description}
                onChange={(event) => setNewMovie({ ...newMovie, description: event.target.value })}
            /><br />
            <label>
                <select
                    onChange={(event) => setNewMovie({ ...newMovie, genre_id: event.target.value })}
                    style={{ marginBottom: 5 }}
                >
                    <option>Select A Genre</option>
                    {select.map(each => (
                        <option
                            key={each.id}
                            value={each.id}
                        >
                            {each.name}
                        </option>
                    ))}
                </select>
            </label><br />
            <input type="submit" value="Save" style={{ marginRight: 5 }} />
            {/* <button onClick={() => history.push('/')}>Cancel</button> */}
        </form>
    )
}

export default AddMovieForm;