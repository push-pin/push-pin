import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Callback from '../containers/auth/Callback';
import { withSession } from '../containers/auth/withSession';
import { logOut } from '../services/auth';
import Sidebar from './nav/Sidebar';

export default function App() {
  return (
    <Router>
      <button onClick={logOut}>Log out</button>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={withSession(Home)} />
        <Route path="/callback" component={Callback} />
      </Switch>
    </Router>
  );
}
