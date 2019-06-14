import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../../selectors/sessionSelectors';
import Sidebar from '../../components/nav/Sidebar';
import { studentLink, teacherLink } from '../../../assets/link-info/pageLinks';

class NavContainer extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props;
    if(user.userType === 'Teacher') {
      return <Sidebar links={teacherLink} user={user} />;
    } else {
      return <Sidebar links={studentLink} user={user} />;
    }
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(
  mapStateToProps
)(NavContainer);
