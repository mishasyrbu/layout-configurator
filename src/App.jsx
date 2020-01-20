import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LayoutsList from './containers/LayoutsList';
import LayoutEditor from './containers/LayoutEditor';
import store from './createStore';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              <Link className="app-header-link" to="/">Home</Link>
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
