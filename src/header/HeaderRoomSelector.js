import React from 'react';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';

const ROOM_CODE_LENGTH = 4;

export default function HeaderRoomSelector({open, anchorEl, handleClose}) {
    const [roomId, setRoomId] = React.useState(undefined);
    const [error, setError] = React.useState(false);
    //const router = useRouter();

    const handleChange = (event) => {
        const input = event.target.value;
        const value = input.replace(/\D+/g,'').substring(0, ROOM_CODE_LENGTH); //Remove all non-digits characters
        if (isNaN(parseInt(value))) {
            setRoomId(undefined);
        } else {
            setRoomId(value);
        }
        setError(checkError(value));
    };

    const checkError = (value) => {
        if (value && value.toString().length !== ROOM_CODE_LENGTH) {
            return (true);
        }
        return (false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (error) {
            return;
        }
        handleClose();
        //Check si la room existe ici
        //router.push('/room/' + roomId);
    }

    return (
    <Popover
        id='header-room-selector'
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
    >
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                id="filled-basic"
                variant="outlined"
                placeholder="0000"
                size="small"
                value={roomId}
                onChange={handleChange}
                error={error}
            />
        </form>
    </Popover>
    );
}