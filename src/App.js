import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          {() => (<div>Layouts</div>)}
          </Route>
          <Route path="/edit">
            {() => (<div>Configurator</div>)}
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
