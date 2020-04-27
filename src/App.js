import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import RoomList from './rooms/RoomList';
import Button from '@material-ui/core/Button';
import CreateRoomDialog from './CreateRoomDialog';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  body: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 30,
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  actionButton: {
    height: 85,
    width: '60%',
    marginBottom: 40,
  },
});

function getUser() {
  const isAuthenticated = true;
  const user = {
    username: 'NhgrtPlayer',
    avatar: '',
  };
  return ({isAuthenticated, user});
}

function createRoom(roomData) {
  console.log("ROOM TO CREATE: ",roomData);
}

function App() {
  const classes = useStyles();
  let {isAuthenticated, user} = getUser();
  const [createRoomOpen, setCreateRoomOpen] = React.useState(false);

  return (
    <div className="App">
      <Header
      isAuthenticated={isAuthenticated}
      user={user}
      onLogout={() => {isAuthenticated = false;}}/>
      <Typography>
        Sonancy is a website used for people to gather in Rooms and listen to sounds and musics together.
      </Typography>
      <div className={classes.body}>
        <RoomList />
        <div className={classes.actions}>
          <Button
          variant="contained"
          color="primary"
          className={classes.actionButton}
          disabled={!isAuthenticated}
          onClick={() => setCreateRoomOpen(true)}
          >
            CREATE<br/>ROOM
          </Button>
          <CreateRoomDialog
            open={createRoomOpen}
            onClose={() => setCreateRoomOpen(false)}
            onSubmit={(roomData) => {setCreateRoomOpen(false); createRoom(roomData);}}
          />
          <Button
          variant="contained"
          color="primary"
          className={classes.actionButton}
          disabled={!isAuthenticated}
          >
            SOUND<br/>BANK
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
