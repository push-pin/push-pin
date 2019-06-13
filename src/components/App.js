import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Callback from '../container/auth/Callback';
import { withSession } from '../container/auth/withSession';
import { logOut } from '../services/auth';

export default function App() {
  return (
    <Router>
      <button onClick={logOut}>Log out</button>
      <Switch>
        <Route exact path="/" component={withSession(Home)} />
        <Route path="/callback" component={Callback} />
      </Switch>
    </Router>
  );
}
