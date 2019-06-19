import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Callback from '../containers/auth/Callback';
import { withSession } from '../containers/auth/withSession';
import NavContainer from '../containers/navbar/NavContainer';
import AssignmentDetailContainer from '../containers/student/detail/AssignmentDetailContainer';

// import Styles from './App.css';
import { MasterContainer } from '../../styles/layout/MasterContainer';
import { GlobalStyle } from '../../styles/layout/GlobalStyles';

export default function App() {
  return (
    <MasterContainer>
      <Router>
        <GlobalStyle />
        <NavContainer />
        <Switch>
          <Route exact path="/" component={withSession(Home)} />
          <Route path="/callback" component={Callback} />
          <Route path="/:assignmentId" component={withSession(AssignmentDetailContainer)} />
        </Switch>
      </Router>
    </MasterContainer>
  );
}
