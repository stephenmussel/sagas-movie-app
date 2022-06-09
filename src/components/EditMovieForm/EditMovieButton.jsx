import { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import EditMovieForm from './EditMovieForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function EditMovieButton({ details, updateMovie }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                onClick={handleOpen}
                // sx={{
                //     borderRadius: 0,
                //     backgroundColor: 'primary.light',
                //     ':hover': {
                //         bgcolor: 'primary.dark',
                //     }
                // }}
                // variant="contained"
                // startIcon={<AddIcon />}
            >
                Edit
            </Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title">Make Edits</h2>
                    <EditMovieForm handleClose={handleClose} />
                    {/* <Button onClick={handleClose}>Cancel</Button> */}
                </Box>
            </Modal>
            {/* <button onClick={() => updateMovie(details.id)}>Edit</button> */}

        </div>
    )
}

export default EditMovieButton;