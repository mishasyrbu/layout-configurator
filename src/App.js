import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LayoutsList from './containers/LayoutsList';
import LayoutEditor from './containers/LayoutEditor';
import './App.css';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Layout Editor
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
        <Switch>
          <Route exact path="/">
            <LayoutsList />
          </Route>
          <Route path="/edit">
            <LayoutEditor />
          </Route>
          <Route>
            {() => (<div>Page not found :(</div>)}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
