import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export default function HeaderLoginForm() {
    const classes = useStyles();
    const [email, setEmail] = React.useState(undefined);
    const [password, setPassword] = React.useState(undefined);

    const handleSubmit = (event) => {
        alert('Yo');
        console.log('====================================');
        console.log("email:",email);
        console.log("password:",password);
        console.log("event:",event);
        console.log('====================================');
        event.preventDefault();
    }

    const checkEmailInput = (text) => {
        return (false);
    }

    return (
        <div>
            LOGIN
            <form autoComplete="off"
            className={classes.form} onSubmit={handleSubmit}>
                <TextField
                id="email-textfield"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={() => checkEmailInput(email)}
                onChange={(text) => setEmail(text)}
                />
                <TextField
                id="password-textfield"
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(text) => setPassword(text)}
                />
                <Button
                variant="contained"
                color="primary"
                type="submit">
                    LOGIN
                </Button>
            </form>
        </div>
    );
}