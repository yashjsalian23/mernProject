import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import NewPlace from './places/pages/newPlace';
import Users from "./users/pages/Users";

function App() {
  return <Router>
    <Switch>
      <Route path="/" exact>
        <h1><Users /></h1>
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Redirect to="/"/>
    </Switch>
  </Router>
}

export default App;
