import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import RoomList from './rooms/RoomList';
import Button from '@material-ui/core/Button';

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

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <div className={classes.body}>
        <RoomList />
        <div className={classes.actions}>
          <Button
          variant="contained"
          color="primary"
          className={classes.actionButton}
          disabled
          >
            CREATE<br/>ROOM
          </Button>
          <Button
          variant="contained"
          color="primary"
          className={classes.actionButton}
          disabled
          >
            SOUND<br/>BANK
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
