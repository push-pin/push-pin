import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getId } from '../selectors/sessionSelectors';
import { connect } from 'react-redux';
import { fetchUser } from '../services/user/fetchUser';
import Student from './Student';
import Teacher from './Teacher';


class Home extends PureComponent {
  static propTypes = {
    auth0Id: PropTypes.string.isRequired,
    // auth: PropTypes.object.isRequired
  };

  state = {
    component: ''
  }

  componentDidMount() {
    const user = fetchUser(this.props.auth0Id);
    console.log('user', user);
    this.setState({ component: user.userType });
  }


  render() {
    if(this.state.component === 'Teacher') return <Teacher />;

    return <Student />;
  }
}

const mapStateToProps = state => ({
  auth0Id: getId(state)
});

export default connect(
  mapStateToProps
)(Home);
