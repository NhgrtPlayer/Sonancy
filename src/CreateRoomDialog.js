import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Utils from './Utils';

export default function CreateRoomDialog({open, onClose, onSubmit}) {
    const [roomData, setRoomData] = React.useState({
        name: '',
        password: '',
        size: 6,
        code: Utils.getRandomNumber(1, 10000).toString().padStart(4, '0'),
    });

    const handleChange = (value, property) => {
        setRoomData({...roomData, [property]: value});
    };

    const handleSliderChange = (event, newValue) => {
      handleChange(newValue, "size");
    };

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create a Room</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Create a Room for other people to join !
                </DialogContentText>
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name of the room"
                    fullWidth
                    value={roomData.name}
                    onChange={(event) => handleChange(event.target.value, "name")}
                />
                <TextField
                    margin="dense"
                    id="pasword"
                    label="Password of the room"
                    helperText="(optional, if set, the room will be private)"
                    fullWidth
                    value={roomData.password}
                    onChange={(event) => handleChange(event.target.value, "password")}
                />
                <Typography gutterBottom>
                Number of people (max. 12)
                </Typography>
                <Slider
                    defaultValue={6}
                    aria-labelledby="discrete-slider-custom"
                    value={roomData.size}
                    step={1}
                    min={2}
                    max={12}
                    valueLabelDisplay="auto"
                    onChange={handleSliderChange}/>
                <TextField
                    required
                    id="code"
                    label="Room code (optional)"
                    size="small"
                    placeholder="####"
                    value={roomData.code}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={() => onSubmit(roomData)} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
  }