function EditMovieButton({ details, updateMovie }) {
    return (
        <>
            <button onClick={() => updateMovie(details.id)}>Edit</button>
        </>
    )
}

export default EditMovieButton;