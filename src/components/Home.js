import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getId, getUser, getSession } from '../selectors/sessionSelectors';
import { connect } from 'react-redux';
import { setUser } from '../actions/userActions';
import Student from './Student';
import Teacher from './Teacher';
import NavContainer from '../containers/navbar/NavContainer';


class Home extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetch(this.props.session.auth0Id);
  }

  render() {
    if(this.props.user.userType === 'Teacher') {
      return (
      <>
      <NavContainer />
      <Teacher />
      </>
      );
    } else {
      return (
        <>
        <NavContainer />
        <Student />
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth0Id: getId(state),
  user: getUser(state),
  session: getSession(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch(auth0Id) {
    dispatch(setUser(auth0Id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
