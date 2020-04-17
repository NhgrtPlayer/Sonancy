import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import { AppBar, Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import { ROOM_CODE_LENGTH } from './Const';
import { useRouter } from 'next/router';

import { useAuth } from 'use-auth0-hooks';

const RoomCodeInput = () => {
    const [roomId, setRoomId] = React.useState(undefined);
    const [error, setError] = React.useState(false);
    const router = useRouter();

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
        if (value && value.toString().length != ROOM_CODE_LENGTH) {
            return (true);
        }
        return (false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (error) {
            return;
        }
        //Check si la room existe ici
        router.push('/room/' + roomId);
    }

    return (
        <div>
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
        </div>

    );
}

const Header = () => {
    const { pathname, query } = useRouter();
    const { isAuthenticated, isLoading, login, logout } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = () => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const open = Boolean(anchorEl);

    return (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <AppBar position="fixed">
            <Toolbar>
                <div>
                    <div>
                        SONANCY
                    </div>
                    <div>
                        A place to hear music. Together.
                    </div>
                </div>
                <div>
                    <Button variant="outlined" color="default" size="large" onClick={handleOpen}>
                        <div>
                            <div>
                                Join Room
                            </div>
                            {!isAuthenticated &&
                            <div>
                                No signup required !
                            </div>
                            }
                        </div>
                    </Button>
                    {!isLoading && !isAuthenticated &&
                    <div>
                        <Button variant="outlined" color="default" size="large" onClick={() => login({ appState: { returnTo: { pathname, query } } })}>LOGIN</Button>
                        <Button variant="contained" color="primary" size="large" href="/">SIGNUP</Button>
                    </div>
                    }
                    {!isLoading && isAuthenticated &&
                    <div>
                        <Button variant="outlined" color="default" size="large" href="/">PROFILE</Button>
                        <Button variant="contained" color="primary" size="large" onClick={() => logout({ returnTo: 'http://localhost:3000' })}>LOGOUT</Button>
                    </div>
                    }
                </div>
            </Toolbar>
            <Popover
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handleClose}
            >
                {RoomCodeInput()}
            </Popover>
        </AppBar>
    </div>
    );
};

export default Header;