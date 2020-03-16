import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import LanePanel from './components/LanePanel/LanePanel.component';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

const store = configureStore();

const App: React.FC = () => {

  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <LanePanel />
      </div>
    </Provider>
  );
}

export default App;
