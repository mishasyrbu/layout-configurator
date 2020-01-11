import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LayoutsList from './containers/LayoutsList';
import LayoutEditor from './containers/LayoutEditor';
import './App.css';

function App() {
  return (
    <>
      <header position="absolute">
        Layout configurator
      </header>
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
