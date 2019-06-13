import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../selectors/sessionSelectors';
import Sidebar from '../../components/nav/Sidebar';

class NavContainer extends PureComponent {
  static propTypes = {};


  render() {

  }
}

const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(
  mapStateToProps
)(NavContainer);
