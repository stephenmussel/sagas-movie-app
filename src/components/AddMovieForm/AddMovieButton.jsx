import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';

function AddMovieButton() {

    const history = useHistory();

    return (
        <Stack direction="row" spacing={2}>
            <Button 
                onClick={() => history.push('/add-movie')} 
                variant="contained" 
                startIcon={<AddIcon />}
            >
                Add Movie
            </Button>
        </Stack>
    )
}

export default AddMovieButton;