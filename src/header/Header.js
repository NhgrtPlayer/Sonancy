import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HeaderLoginForm from './HeaderLoginForm';
import HeaderRoomSelector from './HeaderRoomSelector';
import HeaderSignupForm from './HeaderSignupForm';

export default function Header({isAuthenticated, user, onLogout}) {
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
                      {!isAuthenticated &&
                      <div>
                          No signup required !
                      </div>
                      }
                  </div>
              </Button>
              <HeaderRoomSelector
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              handleClose={handleClose}
              />
              {!isAuthenticated &&
              <div>
                <Button variant="contained" color="primary"
                onClick={() => openDrawer(true)}>
                    LOGIN
                </Button>
                <Button variant="contained" color="primary"
                onClick={() => openDrawer(false)}>
                    SIGNUP
                </Button>
              </div>
              }
              {isAuthenticated &&
              <div>
                <Button onClick={handleClick}>
                {user.username}
                <Avatar src={user.avatar} alt={user.username} />
                </Button>
                {/* <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => {
                    handleClose();
                    onLogout();
                  }}>
                    Logout
                  </MenuItem>
                </Menu> */}
              </div>
              }
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