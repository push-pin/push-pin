import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../../selectors/sessionSelectors';
import Sidebar from '../../components/nav/Sidebar';
import { studentLink } from '../../../assets/link-info/pageLinks';

class NavContainer extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props;
    console.log(user);
    if(user === {}) {
      return <h1>Loading</h1>;
    } 
    return <Sidebar links={studentLink} user={user} />;
  }
}


const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(
  mapStateToProps
)(NavContainer);
