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
    width: 750,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function EditMovieButton() {

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
                variant="contained"
                color="secondary"
            >
                Edit
            </Button>
            <Fragment>
                <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 750 }}>
                        <h2 id="child-modal-title">Edit Movie</h2>
                        <EditMovieForm handleClose={handleClose} />
                        {/* <Button onClick={handleClose}>Cancel</Button> */}
                    </Box>
                </Modal>
                {/* <button onClick={() => updateMovie(details.id)}>Edit</button> */}
            </Fragment>
        </div>
    )
}

export default EditMovieButton;