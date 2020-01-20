import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LayoutsList from './containers/LayoutsList';
import LayoutEditor from './containers/LayoutEditor';
import store from './createStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              <Link to="/">Home</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <LayoutsList />
          </Route>
          <Route path="/edit/:layoutId">
            <LayoutEditor />
          </Route>
          <Route>
            {() => (<div>Page not found :(</div>)}
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
