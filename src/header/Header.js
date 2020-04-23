import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import HeaderRoomSelector from './HeaderRoomSelector';
import HeaderLoginForm from './HeaderLoginForm';
import HeaderSignupForm from './HeaderSignupForm';

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [loginDrawerOpen, setLoginDrawerOpen] = React.useState(false);
    const [signupDrawerOpen, setSignupDrawerOpen] = React.useState(false);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const openDrawer = (isLoginDrawer) => {
      setLoginDrawerOpen(isLoginDrawer);
      setSignupDrawerOpen(!isLoginDrawer);
    }

    const closeDrawer = () => {
      setLoginDrawerOpen(false);
      setSignupDrawerOpen(false);
    }

    return (
        <header>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.title}>
                <div>
                  SONANCY
                  <div>
                    A place to hear music, together.
                  </div>
                </div>
              </Typography>
              <Button
              variant="contained"
              color="primary"
              onClick={handleClick}>
                  <div>
                      JOIN ROOM
                      <div>
                          No signup required !
                      </div>
                  </div>
              </Button>
              <HeaderRoomSelector
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              handleClose={handleClose}
              />
              <Button
              variant="contained"
              color="primary"
              onClick={() => openDrawer(true)}>
                  LOGIN
              </Button>
              <Button
              variant="contained"
              color="primary"
              onClick={() => openDrawer(false)}>
                  SIGNUP
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer anchor={'right'} open={loginDrawerOpen || signupDrawerOpen} onClose={() => closeDrawer()}>
            {loginDrawerOpen &&
            <HeaderLoginForm/>
            }
            {signupDrawerOpen &&
            <HeaderSignupForm/>
            }
          </Drawer>
        </header>
    )
}

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));