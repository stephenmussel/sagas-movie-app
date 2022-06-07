import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import  {Box, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useHistory } from 'react-router-dom';
import { Fragment, useState } from 'react';
import AddMovieForm from './AddMovieForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function AddMovieButton() {

    const history = useHistory();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Stack spacing={2}>
            {/* <Button 
                onClick={() => history.push('/add-movie')} 
                sx={{ 
                    borderRadius: 0, 
                    backgroundColor: '#42a5f5',
                    ':hover': {
                        bgcolor:'primary.main',
                    }
                }}
                variant="contained" 
                startIcon={<AddIcon />}
            > */}
            <Button
                onClick={handleOpen}
                sx={{
                    borderRadius: 0,
                    backgroundColor: '#42a5f5',
                    ':hover': {
                        bgcolor: 'primary.main',
                    }
                }}
                variant="contained"
                startIcon={<AddIcon />}
            >
                Add Movie
            </Button>
            <Fragment>
                <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="child-modal-title">Add Movie</h2>
                        <AddMovieForm />
                        <p id="child-modal-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Button onClick={handleClose}>Cancel</Button>
                    </Box>
                </Modal>
            </Fragment>
        </Stack>
    )
}

export default AddMovieButton;
